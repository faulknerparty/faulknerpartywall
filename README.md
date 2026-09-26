# Faulkner Party Wall Surveyors — Homepage

Responsive one-page homepage for **Faulkner Party Wall Surveyors** built with React, TypeScript, Tailwind CSS, and Vite. Configured for direct deployment on **Netlify** via **GitHub**.

---

## GitHub + Netlify Deployment Steps

### Step 1: Push Project to GitHub
Run these commands in your project terminal:

```bash
git init
git add .
git commit -m "Configure Faulkner Party Wall Surveyors homepage for Netlify"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com/) and log in with your **GitHub** account.
2. Click **"Add new site"** → **"Import an existing project"** → **"GitHub"**.
3. Select your GitHub repository.
4. Netlify will automatically read the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
5. Click **"Deploy site"** (no Environment Variables are required).

---

## Local Development

```bash
npm install
npm run dev
```

Build for production locally:

```bash
npm run build
npm run preview
```
