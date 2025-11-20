# Beebsi Landing Page - Deployment Guide

## ✅ What You Have
- Next.js landing page with video scrollytelling
- Email signup form (ready to connect to Google Sheets)
- Custom domain name

## 🚀 Step-by-Step Deployment

### Step 1: Deploy to Vercel (FREE)

Vercel is the company that makes Next.js - it's the easiest and fastest way to deploy.

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Push Your Code to GitHub** (if not already)
   ```bash
   cd /Users/bart/Documents/web/beebsi
   git init
   git add .
   git commit -m "Initial commit - Beebsi landing page"

   # Create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/beebsi-landing.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Wait 2-3 minutes ⏳
   - You'll get a URL like: `your-project.vercel.app`

### Step 2: Connect Your Custom Domain

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain name (e.g., `beebsi.com`)

2. **Update DNS Settings** (at your domain registrar)
   - **If using root domain** (beebsi.com):
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

   - **If using subdomain** (www.beebsi.com):
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - Vercel will auto-configure SSL (HTTPS)

### Step 3: Google Sheets Email Collection (FREE)

#### Option A: Simple Google Form (Easiest)

1. **Create Google Form**
   - Go to [forms.google.com](https://forms.google.com)
   - Create new form with one field: "Email"
   - Click "Send" → Get link

2. **Update Your Code**
   - Open `app/api/subscribe/route.ts`
   - Replace the TODO with:
   ```typescript
   // Submit to Google Form
   const formUrl = 'YOUR_GOOGLE_FORM_URL';
   await fetch(formUrl, {
     method: 'POST',
     body: new URLSearchParams({ 'entry.XXXXXX': email })
   });
   ```

#### Option B: Google Sheets API (More Control)

I can help you set this up later if you need more advanced features.

---

## 📋 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain connected
- [ ] DNS configured
- [ ] HTTPS working (auto by Vercel)
- [ ] Google Form/Sheets connected
- [ ] Test email signup
- [ ] Videos loading properly
- [ ] Mobile responsive check

---

## 🎯 Quick Commands

### Local Development
```bash
cd /Users/bart/Documents/web/beebsi
npm run dev
```

### Deploy Updates
```bash
git add .
git commit -m "Update landing page"
git push
```
(Vercel auto-deploys on push!)

---

## 🆘 Common Issues

**Videos not loading?**
- Check file paths in `/public/videos/`
- Ensure videos are committed to Git

**Domain not working?**
- Wait 30 minutes for DNS propagation
- Check DNS settings in Vercel dashboard

**Form not working?**
- Check browser console for errors
- Verify Google Form URL is correct

---

## 💰 Costs

- **Vercel**: FREE (unlimited bandwidth for personal projects)
- **Domain**: $10-15/year (you already have this)
- **Google Sheets**: FREE
- **SSL Certificate**: FREE (included with Vercel)

**Total monthly cost**: $0 🎉

---

## 🚀 Next Steps After Launch

1. **Analytics**: Add Google Analytics or Vercel Analytics
2. **SEO**: Add meta descriptions and Open Graph images
3. **Email Tool**: Migrate to Mailchimp when you have 500+ signups
4. **Performance**: Compress videos if loading is slow

---

Need help with any of these steps? Let me know!
