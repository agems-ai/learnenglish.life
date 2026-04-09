#!/bin/bash
cd /var/www/learnenglish.life
git add -A
git -c user.name="James (AGEMS)" -c user.email="james@agems.ai" commit -m "Fix internal links: add Read Full Review CTAs on italki-vs-preply, add See Guru/Busuu/Duolingo review cards on /compare hub"
git push origin main