<div align="center">

# panthr.dev

### High-Craft UI Mechanics, Kinetic Physics & Design Engineering Laboratory

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-CCFF00?style=flat-square&labelColor=0F1015)](LICENSE)

<br />

<!-- Hero Preview GIF -->
<img src=".github/assets/card-01.gif" alt="Fluid Testimonial Card Stack - panthr.dev" width="100%" />

<br />
<br />

**[Live Laboratory](https://panthr.dev/lab)** • **[Studio Portfolio](https://panthr.dev)**

</div>

---

## ✦ Featured Component: `card-01`
### Fluid Testimonial Card Stack

A calm, tactile testimonial stack engineered in React with Framer Motion spring physics.

* **Spring Fan-Out:** Hovering the deck fluidly fans cards out laterally (`targetX = offset * 320px`, `stiffness: 300, damping: 27`) with zero layout occlusion.
* **Signature Corner Portrait:** Author photography sits flush covering the top-left corner with a distinct rounded inner corner (`rounded-br-2xl`).
* **Swiss Typographic Rigor:** Verified partner badge, 5-star micro-ratings, and date timestamps with zero generic pill badges or internal horizontal dividers.
* **High Contrast & Light/Dark Immune:** Explicit color tokens ensuring crisp legibility across both Light and Dark operating systems.

---

### 📋 Drop-In Code

```bash
npm install framer-motion lucide-react
```

```tsx
import { FluidTestimonialCardStack } from "@/components/ui/card-01";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[#F8F9FA] dark:bg-[#090A0E]">
      <FluidTestimonialCardStack theme="light" />
    </main>
  );
}
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/panthrdev/panthr.git
cd panthr

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the laboratory.

---

## 📄 License & Attribution

Crafted by **[panthr.dev](https://panthr.dev)**. Open source under the [MIT License](LICENSE).

```markdown
*Component crafted with [panthr.dev](https://panthr.dev/lab)*
```
