import fs from 'fs';
import path from 'path';

const BUDGET_FILE = path.join(process.cwd(), '.gemini_budget.json');
const LOCK_FILE = path.join(process.cwd(), '.gemini_budget.lock');
const HOURLY_LIMIT = 0.65; // Hard limit set to $0.65 as per emergency task

interface BudgetData {
  currentHour: string;
  spent: number;
}

function getBudget(): BudgetData {
  const now = new Date();
  const hourKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
  
  if (fs.existsSync(BUDGET_FILE)) {
    try {
      const data: BudgetData = JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf-8'));
      if (data.currentHour === hourKey) {
        return data;
      }
    } catch (e) {
      console.error("Error reading budget file, resetting.");
    }
  }
  
  return { currentHour: hourKey, spent: 0 };
}

function saveBudget(data: BudgetData) {
  fs.writeFileSync(BUDGET_FILE, JSON.stringify(data));
}

export async function checkGeminiBudget(estimatedCost: number = 0.04): Promise<boolean> {
  // Simple lock mechanism to prevent race conditions
  let attempts = 0;
  while (fs.existsSync(LOCK_FILE) && attempts < 10) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }
  
  try {
    fs.writeFileSync(LOCK_FILE, process.pid.toString());
    
    const budget = getBudget();
    
    if (budget.spent + estimatedCost > HOURLY_LIMIT) {
      console.error(`CRITICAL: Gemini budget exceeded. Current: $${budget.spent.toFixed(2)}, Limit: $${HOURLY_LIMIT}`);
      // Log the breach attempt
      fs.appendFileSync('budget_breach.log', `${new Date().toISOString()} - Attempted spend: ${estimatedCost}, Spent: ${budget.spent}\n`);
      return false;
    }
    
    budget.spent += estimatedCost;
    saveBudget(budget);
    return true;
  } finally {
    if (fs.existsSync(LOCK_FILE)) {
      fs.unlinkSync(LOCK_FILE);
    }
  }
}
