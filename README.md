# Ifra Shadab Portfolio - Next.js Migration

This is a complete migration of the original React + Vite portfolio to **Next.js 16** with all best practices applied.

## What Has Been Changed

### Stack Migration
- **From**: React 18 + Vite + Wouter Router + TanStack Query
- **To**: Next.js 16 + App Router + Server/Client Components

### Key Improvements
1. **Routing**: Next.js App Router (pages automatically become routes)
2. **Image Optimization**: Uses Next.js `Image` component for automatic optimization
3. **API**: Ready for Server Actions and Route Handlers (`/app/api`)
4. **Performance**: Built-in code splitting, lazy loading, and optimization
5. **Deployment**: Zero-config deployment to Vercel

### File Structure
\`\`\`
app/
├── page.tsx                 # Home page (main portfolio)
├── layout.tsx              # Root layout with metadata
└── globals.css             # Global styles (Tailwind + custom)

components/
├── navbar.tsx              # Navigation bar
├── hero-section.tsx        # Hero section
├── about-section.tsx       # About/Education section
├── skills-section.tsx      # Skills with tabs
├── projects-section.tsx    # Featured projects
├── achievements-section.tsx # Achievements & certifications
├── experience-section.tsx  # Work experience
├── contact-section.tsx     # Contact information
├── footer.tsx              # Footer
└── ui/                     # shadcn/ui components

hooks/
└── use-intersection-observer.ts  # Animation trigger hook

public/
└── profile.jpg             # Profile image

\`\`\`

## Local Development

### Prerequisites
- Node.js 22.x or higher
- npm or pnpm

### Installation & Running

1. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   pnpm install
   \`\`\`

2. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   pnpm dev
   \`\`\`

3. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Changes hot-reload automatically

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment to Vercel

### Option 1: Direct Vercel CLI (Easiest)
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Option 2: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option 3: Manual Upload
1. Run `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Upload the project folder
4. Click "Deploy"

**Vercel automatically detects Next.js and configures everything!**

## Image Management

### Adding Profile Image
1. Replace `/public/profile.jpg` with your image:
   - Place image in `public/` folder
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 400x400px minimum

2. Components using the image:
   - `HeroSection` (profile picture with gradient)
   - Page background image

### Image Optimization
- Next.js automatically:
  - Converts to modern formats (WebP)
  - Creates responsive versions
  - Lazy-loads images
  - Optimizes file sizes

## Environment Variables

Currently no environment variables are required. If you add features that need them:

1. Create `.env.local` locally (not committed)
2. Add variables to Vercel dashboard for production:
   - Go to Project Settings → Environment Variables
   - Add your variables

## Key Differences from React + Vite

| Feature | React + Vite | Next.js |
|---------|-------------|---------|
| Routing | Wouter (client-side) | Next.js App Router (file-based) |
| Data Fetching | React Query | Server Components / fetch() |
| Image Handling | Standard `<img>` | Optimized `<Image>` |
| Deployment | Manual build + hosting | One-click Vercel deploy |
| SSR/SSG | Not built-in | Built-in (automatic) |
| API Routes | Not included | `/app/api/route.ts` |

## Performance Optimizations

- **Server Components**: All non-interactive sections are server-rendered
- **Code Splitting**: Components lazy-load automatically
- **Image Optimization**: 40-80% smaller with Next.js Image
- **Caching**: Built-in static generation for fast loads

## Testing the Migration

All functionality from the original React app is preserved:
- ✓ Smooth scroll navigation
- ✓ Mobile responsive design
- ✓ All section animations
- ✓ Social links
- ✓ Project cards
- ✓ Skill bars
- ✓ Dark/Light mode support (CSS already supports it)

## Troubleshooting

### Port 3000 already in use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Build fails
\`\`\`bash
rm -rf .next
npm run build
\`\`\`

### Images not loading
- Ensure `profile.jpg` exists in `/public/`
- Check image path is correct in components
- Verify file name casing matches

## Next Steps

To add more features:
- **Contact Form**: Create `app/api/contact/route.ts`
- **Blog**: Add `app/blog/[slug]/page.tsx`
- **Database**: Add Supabase/Firebase integration
- **Email**: Connect SendGrid for notifications
- **Analytics**: Vercel Analytics already included

---

**Deployed with Vercel** • **Powered by Next.js 16** • **Built with TypeScript & Tailwind**
