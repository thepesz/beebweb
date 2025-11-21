# Google Analytics & Search Console Setup Guide

## 🎯 Google Analytics 4 Setup

### Step 1: Create Google Analytics Account

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Sign in** with your Google account
3. **Click "Start measuring"** (or "Admin" if you already have an account)
4. **Create Account**:
   - Account name: `Beebsi`
   - Check all data sharing settings (optional but recommended)
   - Click "Next"

### Step 2: Create Property

1. **Property name**: `Beebsi Landing Page`
2. **Reporting time zone**: Select your timezone
3. **Currency**: Select your currency
4. **Click "Next"**

### Step 3: Business Information

1. **Industry category**: Health & Fitness
2. **Business size**: Small (if applicable)
3. **How you plan to use Google Analytics**: Select relevant options
4. **Click "Create"**
5. **Accept Terms of Service**

### Step 4: Set up Data Stream

1. **Choose platform**: Select **Web**
2. **Website URL**: `https://beebsi.com`
3. **Stream name**: `Beebsi Website`
4. **Click "Create stream"**

### Step 5: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. **Copy this ID**

### Step 6: Add Measurement ID to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to your **Vercel project**: https://vercel.com/thepesz/beebweb
2. Click **"Settings"** → **"Environment Variables"**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your Measurement ID (e.g., `G-ABC123XYZ`)
   - **Environment**: Check all (Production, Preview, Development)
4. Click **"Save"**
5. **Redeploy** your site:
   - Go to "Deployments"
   - Click "..." on latest deployment
   - Click "Redeploy"

#### Option B: Via Git (Alternative)

1. Create `.env.local` file in your project:
   ```bash
   cd /Users/bart/Documents/web/beebsi
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE" > .env.local
   ```
2. Replace `G-YOUR-ID-HERE` with your actual Measurement ID
3. This is for local testing only - **still add to Vercel for production**

### Step 7: Verify Installation

1. **Wait 2-3 minutes** after redeployment
2. **Visit your website**: https://beebsi.com
3. **In Google Analytics**, go to **Reports** → **Realtime**
4. You should see **1 active user** (yourself!)

---

## 🔍 Google Search Console Setup

### Step 1: Add Property

1. **Go to Google Search Console**: https://search.google.com/search-console
2. **Sign in** with the same Google account used for Analytics
3. **Click "Add property"**
4. **Choose URL prefix method** (not domain)
5. **Enter**: `https://beebsi.com`
6. **Click "Continue"**

### Step 2: Verify Ownership

You have **4 verification options**. Pick the easiest one:

#### ✅ Recommended: HTML Tag Method

1. Google will show you an HTML meta tag
2. **Copy the meta tag** (looks like: `<meta name="google-site-verification" content="xxxxx">`)
3. **I'll help you add this** - just paste the content value here and I'll update the code
4. **After I add it**, click "Verify" in Search Console
5. **Push changes to GitHub**, wait for Vercel to deploy (~2 minutes)
6. **Click "Verify"** in Google Search Console

#### Alternative: Google Analytics Method

1. If you've already set up Google Analytics (above), choose **"Google Analytics"** verification
2. Use the **same Google account**
3. Click **"Verify"**
4. ✅ Done! (Easiest if GA is already set up)

### Step 3: Submit Sitemap

1. In **Google Search Console**, go to **"Sitemaps"** (left sidebar)
2. **Add new sitemap**:
   - Enter: `sitemap.xml`
   - Click "Submit"
3. Your sitemap URL: `https://beebsi.com/sitemap.xml`
4. **Status** will change to "Success" (might take a few minutes)

### Step 4: Repeat for beebsi.pl

1. **Add another property**: `https://beebsi.pl`
2. **Verify ownership** (same methods as above)
3. **Submit sitemap**: `sitemap.xml`

---

## 📊 What to Monitor

### In Google Analytics:

**After 24-48 hours:**
- **Realtime** → Active users right now
- **Reports** → **Acquisition** → How users find you
- **Reports** → **Engagement** → Pages visited, time on page
- **Reports** → **Tech** → Device types (mobile vs desktop)

**Key Metrics to Watch:**
- **Users**: Total visitors
- **Sessions**: Total visits
- **Bounce rate**: % who leave immediately
- **Email signups**: Track via Events (I can help set this up later)

### In Google Search Console:

**After 3-7 days:**
- **Performance** → Clicks, impressions, average position
- **Pages** → Which pages rank best
- **Queries** → What people search to find you
- **Coverage** → Pages indexed by Google

**Expected Timeline:**
- **Day 1-3**: Google crawls your site
- **Day 3-7**: Pages start appearing in index
- **Week 2-4**: Rankings improve with your SEO keywords

---

## 🚨 Troubleshooting

### Analytics Not Showing Data?

1. **Check Measurement ID** is correct in Vercel environment variables
2. **Verify** you redeployed after adding the variable
3. **Wait 5-10 minutes** for data to appear
4. **Disable ad blockers** when testing
5. **Open incognito window** and visit your site

### Search Console Verification Failed?

1. **If using HTML tag**: Make sure code is deployed to production
2. **If using Google Analytics**: Ensure same Google account for both
3. **Clear browser cache** and try again
4. **Wait 2-3 minutes** after deployment before verifying

### Sitemap Not Found?

1. **Check URL** directly: https://beebsi.com/sitemap.xml
2. **If 404**: Make sure code is pushed to GitHub and deployed
3. **Wait 2-3 minutes** for Vercel deployment
4. **Verify** sitemap.ts file exists in `/app/` directory

---

## ✅ Checklist

### Google Analytics:
- [ ] Create GA4 account and property
- [ ] Get Measurement ID (G-XXXXXXXXX)
- [ ] Add ID to Vercel environment variables
- [ ] Redeploy site
- [ ] Verify tracking works in Realtime reports

### Google Search Console:
- [ ] Add property for beebsi.com
- [ ] Verify ownership (HTML tag or GA method)
- [ ] Submit sitemap.xml
- [ ] Add property for beebsi.pl
- [ ] Verify beebsi.pl ownership
- [ ] Submit beebsi.pl sitemap

---

## 📞 Need Help?

If you get stuck on any step, just share:
1. Which step you're on
2. Any error messages you see
3. Screenshots (if helpful)

I'll guide you through it!
