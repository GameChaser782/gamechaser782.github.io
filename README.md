# Harshit Upadhyay's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing projects, blogs, and professional information with a sleek, dark-mode supported design.

## 🌐 Live Website

Visit the live portfolio at: [https://gamechaser782.github.io](https://gamechaser782.github.io)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Updating Content](#updating-content)
- [Building & Deployment](#building--deployment)
- [GitHub Pages Workflow](#github-pages-workflow)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This portfolio website includes:

- **Home Page**: Personal introduction, tech stack, and about section
- **Projects Page**: Showcasing completed projects with descriptions and links
- **Blogs Section**: Link to external blog hosted on Bear Blog
- **Socials Section**: Links to professional profiles (LinkedIn, GitHub, etc.)
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI Components**: Built with Radix UI and custom Tailwind CSS styling

## 🛠️ Tech Stack

### Frontend Framework
- **React** 18.2.0 - UI library
- **TypeScript** 5.2.2 - Type-safe JavaScript
- **Vite** 5.0.0 - Next-generation build tool
- **React Router** 6.20.0 - Client-side routing

### Styling & UI
- **Tailwind CSS** 3.3.5 - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Framer Motion** 12.12.1 - Animation library
- **Next Themes** 0.2.1 - Theme management (light/dark mode)

### Additional Libraries
- **React Hook Form** 7.55.0 - Efficient form handling
- **Recharts** 2.15.3 - Charts and graphs
- **Tanstack React Query** 5.0.0 - Server state management
- **Sonner** 2.0.3 - Toast notifications
- **Lucide React** - Icon library

### Development Tools
- **ESLint** 8.53.0 - Code linting
- **TypeScript ESLint** - TypeScript linting
- **PostCSS** 8.4.31 - CSS processing
- **Autoprefixer** 10.4.16 - Browser prefixes
- **gh-pages** 6.1.1 - GitHub Pages deployment

## 📁 Project Structure

```
gamechaser782.github.io/
├── public/                          # Static assets
│   └── lovable-uploads/            # User uploads (photos, images)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx           # Top navigation bar with theme toggle
│   │   ├── ProjectCard.tsx          # Reusable project card component
│   │   ├── SocialLinks.tsx          # Social media links component
│   │   └── ui/                      # Radix UI components (pre-built)
│   ├── pages/
│   │   ├── Index.tsx                # Home page
│   │   ├── Projects.tsx             # Projects showcase page
│   │   ├── Blogs.tsx                # Blogs redirect page
│   │   ├── Socials.tsx              # Social links page
│   │   └── ProjectDemo.tsx          # Individual project details
│   ├── hooks/
│   │   ├── use-mobile.tsx           # Mobile detection hook
│   │   └── use-toast.ts             # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                 # Utility functions
│   ├── types/
│   │   └── react-day-picker.d.ts   # TypeScript type definitions
│   ├── App.tsx                      # Main app component with routing
│   ├── App.css                      # Global app styles
│   ├── main.tsx                     # React DOM entry point
│   ├── index.css                    # Global CSS
│   └── vite-env.d.ts               # Vite environment types
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD workflow
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18+ (or higher)
- **npm** 9+ or **Bun** (uses bun.lockb)
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GameChaser782/gamechaser782.github.io.git
   cd gamechaser782.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if using Bun
   bun install
   ```

3. **Verify installation:**
   ```bash
   npm run lint
   ```

## 💻 Development

### Start Development Server

Run the local development server:

```bash
npm run dev
```

The website will be available at `http://localhost:3000/` by default.

**Features during development:**
- Hot Module Replacement (HMR) - Changes reflect instantly
- ESLint checking - Catches code issues in real-time
- TypeScript checking - Type safety as you code

### Build for Production

Compile TypeScript and bundle with Vite:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Production Build

Preview the built site locally before deployment:

```bash
npm run preview
```

### Lint Code

Check for code quality issues:

```bash
npm run lint
```

Fix auto-fixable issues:

```bash
npm run lint -- --fix
```

## 📝 Updating Content

### 1. **Update Personal Information (Home Page)**

Edit [src/pages/Index.tsx](src/pages/Index.tsx):

- **Name & Title**: Update the `<h1>` and title text
- **Tech Stack**: Modify the `techStack` array
- **About Section**: Update the about me text
- **Resume Link**: Change the Google Drive link in the "View Resume" button
- **Profile Photo**: Replace image in `public/lovable-uploads/` and update the `src` path

```tsx
// Example: Update tech stack
const techStack = [
  "Python", "C++", "Databases", "Cloud", "AI/ML", "Kubernetes", "Docker"
];

// Example: Update resume link
<a 
  href="YOUR_RESUME_LINK_HERE" 
  target="_blank" 
  rel="noopener noreferrer"
>
```

### 2. **Update Navigation Links**

Edit [src/components/Navigation.tsx](src/components/Navigation.tsx):

- **Blog URL**: Change the external blog link
- **Socials URL**: Update the Bento profile link
- **Navigation Items**: Add or remove navigation links

```tsx
<a 
  href="https://yourblogs.com" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-primary transition-colors"
>
  Blogs
</a>
```

### 3. **Update Projects**

Edit [src/pages/Projects.tsx](src/pages/Projects.tsx):

- Add project cards with title, description, and links
- Import and use the `ProjectCard` component

```tsx
<ProjectCard 
  title="Project Name"
  description="Project description"
  tags={["React", "TypeScript"]}
  link="https://github.com/your-repo"
/>
```

### 4. **Update Social Links**

Edit [src/components/SocialLinks.tsx](src/components/SocialLinks.tsx):

- Add or remove social media links
- Update URLs to your profiles

### 5. **Update Profile Photo**

- Replace the image in `public/lovable-uploads/` folder
- Update the image path in [src/pages/Index.tsx](src/pages/Index.tsx)

```tsx
<img
  src="/lovable-uploads/your-image.jpg"
  alt="Your Name"
/>
```

### 6. **Customize Styling**

Edit [tailwind.config.ts](tailwind.config.ts):

- Change primary colors
- Adjust spacing and typography
- Customize theme variables

Edit [src/App.css](src/App.css) and [src/index.css](src/index.css) for custom CSS.

## 🔨 Building & Deployment

### Local Build Process

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. (Optional) Preview the build
npm run preview

# 4. Deploy to GitHub Pages (see next section)
npm run deploy
```

### Manual Deployment to GitHub Pages

If automatic deployment fails, manually deploy:

```bash
# Build the project
npm run build

# Deploy the dist folder
npm run deploy
```

This will push the `dist` folder contents to the `gh-pages` branch.

## 🔄 GitHub Pages Workflow

This project uses **GitHub Actions** for automatic deployment.

### Workflow Details

The `.github/workflows/deploy.yml` workflow:

1. **Triggers on**: Push to `main` branch or manual workflow dispatch
2. **Environment**: Ubuntu latest
3. **Steps**:
   - Checks out the code
   - Sets up Node.js v20
   - Installs dependencies with `npm ci`
   - Runs TypeScript compilation and Vite build
   - Configures GitHub Pages
   - Uploads the build artifacts
   - Deploys to GitHub Pages

### How to Deploy

#### Automatic Deployment (Recommended)

Simply push your changes to the `main` branch:

```bash
# Make changes to your files
git add .
git commit -m "Update portfolio content"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your project
2. Run linting checks
3. Deploy to GitHub Pages

Check the deployment status in the **Actions** tab on GitHub.

#### Manual Workflow Dispatch

Manually trigger the workflow from GitHub:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** button
5. Select the branch (usually `main`)
6. Click **Run workflow**

### Verify Deployment

After deployment:

1. Wait for the GitHub Actions workflow to complete (green checkmark)
2. Visit `https://gamechaser782.github.io` (or your custom domain)
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R) to clear cache

### Troubleshooting Deployment

- **Check GitHub Pages settings**: Go to Settings → Pages and ensure it's set to deploy from the `gh-pages` branch
- **Review workflow logs**: Check the Actions tab for detailed error messages
- **Clear browser cache**: Hard refresh or open in incognito mode
- **Check repository visibility**: Ensure the repository is public for GitHub Pages to work

## 📋 Common Workflows

### Full Content Update & Deploy

```bash
# 1. Create a new branch (optional but recommended)
git checkout -b update-portfolio

# 2. Make your changes to files
# - Edit src/pages/Index.tsx
# - Update projects in src/pages/Projects.tsx
# - Add new images to public/lovable-uploads/

# 3. Test locally
npm run dev
# Visit http://localhost:3000 and verify changes

# 4. Lint and build
npm run lint
npm run build

# 5. Commit and push
git add .
git commit -m "Update portfolio: add new projects and update bio"
git push origin main

# GitHub Actions will automatically deploy!
```

### Add a New Page/Route

```bash
# 1. Create new component in src/pages/NewPage.tsx
# 2. Add the route in src/App.tsx:
#    <Route path="/new-page" element={<NewPage />} />
# 3. Add navigation link in src/components/Navigation.tsx
# 4. Test, commit, and push
```

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update a specific package
npm update package-name

# Update all packages
npm update

# After updating, test and push changes
npm run build
```

## 🎨 Customization Guide

### Change Color Scheme

Edit `tailwind.config.ts` to update the primary color and theme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#YOUR_COLOR',
        foreground: '#FFFFFF'
      },
      // ... other colors
    }
  }
}
```

### Add Custom Fonts

Update `index.css` to import Google Fonts or custom fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');

* {
  font-family: 'YourFont', sans-serif;
}
```

### Modify Page Layout

Each page component in `src/pages/` can be customized independently. Refer to Tailwind CSS documentation for styling.

## 🐛 Troubleshooting

### Issue: Dependencies not installing

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Issue: ESLint errors on build

**Solution:**
```bash
# Fix auto-fixable errors
npm run lint -- --fix

# If errors persist, check eslint.config.js rules
```

### Issue: Vite dev server not starting

**Solution:**
```bash
# Check if port 3000 is in use
# Change port in vite.config.ts:
server: {
  port: 3001, // or another available port
}
```

### Issue: Styles not applying

**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure Tailwind CSS is configured correctly in `tailwind.config.ts`
- Verify CSS files are imported in `src/main.tsx` and `src/index.css`
- Rebuild: `npm run build && npm run preview`

### Issue: Build size too large

**Solution:**
```bash
# Analyze bundle size
npm run build

# Review vite.config.ts optimization settings
# Remove unused dependencies
npm prune
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you have suggestions for improvements, feel free to open an issue or pull request.

---

**Last Updated**: February 2, 2026

For questions or support, reach out through the social links on the portfolio website.
