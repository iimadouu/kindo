# 🔒 Security Guide - Kindom

## ⚠️ IMPORTANT: Before Going to Production

### 1. Change Admin Password

**Location:** `admin-script.js` (line ~20)

**Current:**
```javascript
const validPasswordHash = await hashPassword('CHANGE_THIS_PASSWORD_NOW_2024!');
```

**Change to:**
```javascript
const validPasswordHash = await hashPassword('YOUR_STRONG_PASSWORD_HERE');
```

**How to create a strong password:**
- Minimum 16 characters
- Mix of uppercase, lowercase, numbers, symbols
- Example: `K!nd0m_Pr0d_2024#Secure`

**DO NOT** use:
- ❌ admin123
- ❌ password
- ❌ 123456
- ❌ Your name or business name

---

### 2. Change WhatsApp Number

Replace `1234567890` in all files:
- `index.html` (multiple occurrences)
- `script.js`
- `admin.html`

**Format:** Country code + number (no spaces, no +)
**Example:** Algeria +213 555 123 456 → `213555123456`

---

### 3. Update Contact Information

**In `index.html`:**
- Email address
- Physical address
- Phone number
- Social media links

---

### 4. Security Features Already Implemented ✅

#### Admin Panel:
- ✅ **Password Hashing:** SHA-256
- ✅ **Rate Limiting:** 5 failed attempts = 5 min lockout
- ✅ **Session Management:** 30 minute timeout
- ✅ **Input Sanitization:** XSS protection
- ✅ **URL Validation:** Prevent malicious URLs
- ✅ **Authentication Check:** All admin operations require valid session

#### Contact Form:
- ✅ **Rate Limiting:** 3 submissions per 5 minutes
- ✅ **Email Validation:** Regex check
- ✅ **Input Validation:** All fields required

#### Headers (`_headers` file):
- ✅ **CSP:** Content Security Policy
- ✅ **X-Frame-Options:** Prevent clickjacking
- ✅ **X-Content-Type-Options:** Prevent MIME sniffing
- ✅ **XSS Protection:** Browser-level protection
- ✅ **HSTS:** Force HTTPS
- ✅ **Admin hidden:** No indexing by search engines

---

### 5. Additional Security Recommendations

#### A. Use Cloudflare Security Features

1. **Enable WAF (Web Application Firewall)**
   - Dashboard → Security → WAF
   - Set to "High" sensitivity

2. **Enable Bot Fight Mode**
   - Dashboard → Security → Bots
   - Free tier includes basic bot protection

3. **Enable HTTPS/SSL**
   - Should be automatic on Cloudflare Pages
   - Verify: Full (strict) SSL/TLS encryption mode

4. **Enable DDoS Protection**
   - Automatic on Cloudflare (included free)

5. **Rate Limiting Rules** (Optional - requires paid plan)
   - Limit requests to admin.html
   - Limit API requests

#### B. Monitor Access

1. **Check Cloudflare Analytics**
   - Monitor unusual traffic patterns
   - Check for suspicious IP addresses

2. **Review Logs Regularly**
   - Look for repeated failed login attempts
   - Identify potential attack patterns

#### C. Backup Your Data

1. **Export Data Regularly**
   ```javascript
   // In browser console
   console.log(localStorage.getItem('kindom_products'));
   console.log(localStorage.getItem('kindom_gallery'));
   ```

2. **Save to File**
   - Copy the output
   - Save in a secure location

---

### 6. What to DO and NOT DO

#### ✅ DO:
- Change default password immediately
- Use strong, unique passwords
- Keep backup of your data
- Monitor access logs
- Update WhatsApp number
- Test all features before going live
- Use HTTPS only
- Keep admin panel URL private

#### ❌ DON'T:
- Don't share admin credentials
- Don't use public WiFi for admin access
- Don't disable security headers
- Don't ignore login failure notifications
- Don't use weak passwords
- Don't hardcode sensitive data in code (use environment variables later)
- Don't disable rate limiting

---

### 7. Production Checklist

Before deploying:

- [ ] Changed admin password in `admin-script.js`
- [ ] Updated WhatsApp number everywhere
- [ ] Updated contact information
- [ ] Tested admin login
- [ ] Tested contact form
- [ ] Tested product management
- [ ] Verified HTTPS is working
- [ ] Checked security headers are applied
- [ ] Created data backup
- [ ] Tested on mobile devices
- [ ] Tested all languages (FR/AR/EN)
- [ ] Removed any console.log statements
- [ ] Updated social media links
- [ ] Set up Cloudflare WAF
- [ ] Enabled bot protection

---

### 8. Emergency Response

#### If Admin Account is Compromised:

1. **Immediately clear localStorage:**
   ```javascript
   localStorage.clear();
   ```

2. **Change password in code:**
   - Update `admin-script.js`
   - Redeploy site

3. **Check for unauthorized changes:**
   - Review all products
   - Check gallery items
   - Verify settings

#### If Site is Under Attack:

1. **Enable "Under Attack Mode" in Cloudflare:**
   - Dashboard → Security → Settings
   - Toggle "I'm Under Attack Mode"

2. **Block suspicious IPs:**
   - Dashboard → Security → WAF
   - Add IP Access Rules

3. **Contact Cloudflare Support** (if needed)

---

### 9. Future Security Enhancements

For even better security (when you add backend):

1. **JWT Tokens:** Replace session storage with JWT
2. **bcrypt:** Use bcrypt for password hashing (better than SHA-256)
3. **2FA:** Two-factor authentication
4. **API Keys:** Secure API with keys
5. **Database Encryption:** Encrypt sensitive data at rest
6. **Audit Logs:** Log all admin actions
7. **IP Whitelisting:** Only allow admin from specific IPs
8. **reCAPTCHA:** Add to forms to prevent bots

---

### 10. Security Testing

**Before going live, test:**

1. **Try to access admin without login** ✓ Should redirect
2. **Try wrong password 6 times** ✓ Should lock for 5 min
3. **Submit contact form 4 times rapidly** ✓ Should rate limit
4. **Try XSS in product name** `<script>alert('test')</script>` ✓ Should be sanitized
5. **Try invalid image URL** ✓ Should reject
6. **Test session timeout** Wait 30 min ✓ Should logout
7. **Test on different browsers** ✓ All should work
8. **Test HTTPS** ✓ HTTP should redirect

---

## 🛡️ Summary

Your site has **basic but effective security** for a static website:

- ✅ Password protected admin panel
- ✅ Rate limiting on login and forms
- ✅ Input validation and sanitization
- ✅ Session management
- ✅ Security headers
- ✅ HTTPS enforcement

For a **static site**, this is **good protection**. 

For **production e-commerce** with payments, you'll need:
- Backend server
- Database with encryption
- Professional authentication (OAuth, JWT)
- PCI compliance (for payments)

---

**Remember:** Security is an ongoing process, not a one-time setup!

**Questions?** Review this guide before deployment.

**Good luck with your launch! 🚀**
