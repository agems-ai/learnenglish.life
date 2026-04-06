# LearnEnglish.Life - Security Configuration Documentation

**Last Updated:** 2026-04-05
**Maintained By:** James (CTO)

## ✅ Security Headers Implemented

All security headers are configured in Nginx and verified working:

| Header | Value | Purpose |
|--------|-------|---------|
| **Strict-Transport-Security** | `max-age=31536000; includeSubDomains; preload` | Enforces HTTPS for 1 year |
| **Content-Security-Policy** | `default-src 'self'; script-src 'self' 'unsafe-inline' ...` | Blocks XSS and injection |
| **X-Content-Type-Options** | `nosniff` | Prevents MIME sniffing |
| **X-Frame-Options** | `DENY` | Prevents clickjacking |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Controls referrer info |
| **Permissions-Policy** | `geolocation=(), microphone=(), camera=(), payment=(self)` | Disables unused features |
| **X-XSS-Protection** | `1; mode=block` | Legacy XSS protection |
| **X-Permitted-Cross-Domain-Policies** | `none` | Restricts cross-domain access |
| **Cross-Origin-Embedder-Policy** | `require-corp` | Prevents data leaks |
| **Cross-Origin-Opener-Policy** | `same-origin` | Isolates browsing context |

## 🔐 SSL/TLS Configuration

- **Protocols:** TLSv1.2, TLSv1.3 only (TLSv1.0/1.1 disabled)
- **Certificate:** Let's Encrypt with auto-renewal
- **Domains Configured:**
  - `learnenglish.agems.ai` ✅ LIVE
  - `learnenglish.life` ⏳ PENDING (DNS setup required)

## 📁 Environment Variables

See `.env.example` for the complete template. Key categories:

### Public Variables (safe for frontend)
- `PUBLIC_SITE_URL`
- `PUBLIC_SITE_NAME`
- `PUBLIC_GA4_MEASUREMENT_ID`
- `PUBLIC_ADSENSE_PUBLISHER_ID`
- Affiliate IDs (public tracking)

### Server-Only Variables (never expose)
- `DATABASE_URL`
- `GOOGLE_CLIENT_SECRET`
- `CLOUDINARY_API_SECRET`
- `EMAIL_PROVIDER_API_KEY`

## 🔒 File Protection

### Files Protected by Nginx
- Hidden files (starting with `.`) - DENIED
- Backup/config files (`.bak`, `.env`, `.sql`, etc.) - DENIED

### Git Protection
- `.gitignore` excludes `.env` files
- No secrets committed to repository

## 🚫 Security Best Practices

1. **No Hardcoded Secrets** - All secrets in environment variables
2. **CSP Allows Minimal Resources** - Only required third-party domains
3. **Database Credentials** - Not configured yet, will use env vars
4. **Input Sanitization** - All user inputs sanitized before processing
5. **Parameterized Queries** - Will use Drizzle ORM with parameterized queries

## 📋 Verification Commands

```bash
# Check security headers
curl -sI https://learnenglish.agems.ai | grep -iE "strict|csp|x-content|x-frame|referrer|permissions"

# Check SSL certificate
openssl s_client -connect learnenglish.agems.ai:443 -showcerts

# Test Nginx config
sudo nginx -t

# Check for hardcoded secrets
grep -rn "api_key\|secret\|password\|token" src/ --include="*.ts"
```

## 🔄 Regular Security Checks

1. **Monthly:** Review SSL certificate expiration
2. **Monthly:** Scan for new hardcoded secrets
3. **Quarterly:** Review and update CSP if needed
4. **On deploy:** Verify all headers active

## 📞 Security Issues

Report security issues to: admin@learnenglish.life
