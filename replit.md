# Luxe Beauty Salon Website

## Overview

This is a premium salon and beauty service website built with modern web technologies. The application provides a comprehensive online presence for a luxury beauty salon, featuring service showcases, online booking, gallery, pricing information, and contact functionality. The website emphasizes visual appeal with animations, parallax effects, and a sophisticated design system inspired by high-end salon aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Custom CSS animations** including parallax effects, scroll reveals, and floating actions
- **Framer Motion** integration prepared for advanced animations
- Typography: Playfair Display (headings) and Poppins (body text) from Google Fonts

**Design System**
- Custom color palette defined in CSS variables (primary: #A6377F, secondary: #510273, gold accent: #D4AF37)
- Consistent spacing and border radius using Tailwind configuration
- Dark mode support through CSS variable theming
- Responsive breakpoints for mobile-first design

### Backend Architecture

**Server Framework**
- **Express.js** for HTTP server and API routing
- **TypeScript** throughout the stack for type safety
- Custom middleware for JSON parsing, request logging, and error handling
- Session-based architecture prepared with connect-pg-simple

**Development Setup**
- **tsx** for running TypeScript in development
- **esbuild** for production builds with ESM format
- Hot module replacement in development via Vite middleware
- Separate build outputs for client (dist/public) and server (dist/)

**API Design**
- RESTful API structure with `/api` prefix
- Storage abstraction layer (IStorage interface) for database operations
- In-memory storage implementation for development
- Prepared for PostgreSQL integration with Drizzle ORM

### Data Layer

**Database Schema (PostgreSQL via Drizzle ORM)**
- **users** table: Authentication with username/password
- **bookings** table: Service appointments with status tracking
- **contacts** table: Contact form submissions
- **newsletters** table: Email subscription management
- UUID primary keys with automatic generation
- Timestamp tracking for created records

**ORM Configuration**
- Drizzle Kit for schema migrations (./migrations output)
- Neon Database serverless driver for PostgreSQL connections
- Zod schema validation integrated with Drizzle schemas
- Type-safe query builder with full TypeScript inference

### Page Structure & Routes

**Main Pages**
- `/` - Home page with hero, services overview, testimonials
- `/about` - Company history, team, values
- `/services` - Main services directory
- `/services/hair` - Hair services detail
- `/services/skin` - Skin treatments detail
- `/services/nails` - Nail care detail
- `/services/makeup` - Makeup services detail
- `/services/spa` - Spa services detail
- `/services/bridal` - Bridal packages detail
- `/gallery` - Image gallery with filtering
- `/pricing` - Pricing plans and packages
- `/booking` - Multi-step booking form
- `/contact` - Contact form and information

**Shared Components**
- Navbar with dropdown menus and scroll effects
- Footer with site links and social media
- FloatingActions for quick access (WhatsApp, Call, Book)
- Preloader with brand animation
- ScrollReveal for entrance animations
- CounterSection for animated statistics

### Key Features

**Booking System**
- Multi-step booking flow (service selection → date/time → details → confirmation)
- Service categorization and filtering
- Time slot availability display
- Form validation with React Hook Form and Zod

**Gallery System**
- Category-based filtering (bridal, hair, skin, nails, makeup, spa)
- Lightbox image viewer
- Lazy loading and image optimization via Unsplash CDN
- Search functionality for images

**Testimonials**
- Auto-rotating carousel with 5-second intervals
- 5-star rating display
- Client photos and service categories

**Animations & Effects**
- Scroll-triggered reveal animations
- Parallax background effects on hero sections
- Image zoom on hover
- Gold border hover effects
- Floating action buttons with staggered animations
- Progress bar showing scroll position

## External Dependencies

**Core Framework Dependencies**
- @tanstack/react-query: Server state management
- wouter: Lightweight routing
- react, react-dom: UI library
- express: Node.js web framework

**Database & ORM**
- drizzle-orm: TypeScript ORM
- drizzle-zod: Schema validation
- @neondatabase/serverless: PostgreSQL driver
- connect-pg-simple: PostgreSQL session store

**UI Component Libraries**
- @radix-ui/*: Accessible component primitives (40+ components)
- tailwindcss: Utility-first CSS framework
- class-variance-authority: Component variant system
- cmdk: Command palette component
- embla-carousel-react: Carousel functionality

**Form Handling**
- react-hook-form: Form state management
- @hookform/resolvers: Validation resolvers
- zod: Schema validation

**Development Tools**
- vite: Build tool and dev server
- @vitejs/plugin-react: React support for Vite
- typescript: Type system
- tsx: TypeScript execution
- esbuild: Production bundler
- @replit/vite-plugin-*: Replit-specific development plugins

**Utilities**
- date-fns: Date manipulation
- clsx, tailwind-merge: Class name utilities
- lucide-react: Icon library
- nanoid: Unique ID generation

**Fonts & Assets**
- Google Fonts: Playfair Display, Poppins
- Unsplash: Image CDN for gallery and service images