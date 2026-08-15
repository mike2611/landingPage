# MP Tech Solutions — Brand Guidelines

**Version 1.1** · **August 2026** · *Internal Use Only*

---

## 01 · Color Palette

### Primary — Coral
`#E76354`

**Usage:** CTAs · Accent · Brand Identity

---

### Dark Palette

#### Background
`#071108`

**Usage:** App Background

#### Surface Low  
`#0d150e`

**Usage:** Sections · Hero Background

#### Surface
`#151e16`

**Usage:** Cards · Panels

#### Surface High
`#121a13`

**Usage:** Hover States

---

### Neutral / Support

#### Tertiary — Ice Blue
`#C7DBE6`

**Usage:** Text · Labels · Borders

#### Secondary Container
`#364652`

**Usage:** Icon Backgrounds · Glass

---

## 02 · Typography

### Display Font
**Mona Sans Variable**

**Usage:** All headings (h1–h6), navigation, buttons, labels, and badges.

**Available Weights:**
- Light 300
- Regular 400  
- SemiBold 600
- Bold 700
- ExtraBold 800

---

### Body Font
**Inter Variable**

**Usage:** Body copy, descriptions, form inputs, and all paragraph-level text.

**Available Weights:**
- Light 300
- Regular 400
- Medium 500
- Bold 700

---

### Type Scale

| Level | Sample | Font | Size | Weight | Letter-spacing |
|-------|--------|------|------|--------|----------------|
| Display | Digital Precision | Mona Sans | 52px | 800 | −0.02em |
| H1 | Tech Solutions | Mona Sans | 40px | 800 | — |
| H2 | Service Portfolio | Mona Sans | 30px | 700 | — |
| H3 | Landing Pages | Mona Sans | 22px | 700 | — |
| Body LG | We build high-performance digital experiences that convert. | Inter | 17px | 300 | — |
| Body | Precision-engineered solutions for modern businesses. | Inter | 14px | 400 | — |
| Label | SERVICES · PORTFOLIO · CONTACT | Mona Sans | 11px | 700 | 0.3em |

---

## 03 · Logo & Brand Mark

### On Dark (Primary)
Preferred usage for dark backgrounds

```
[Network Icon] MP Tech Solutions
```

### Horizontal Lockup
Used for navigation and header

```
[Network Icon] MP Tech Solutions
```

### Mark Only
Used for favicon and social avatars

```
[Network Icon]
```

---

## 04 · UI Components

### Buttons

**Primary**
- Background: `bg-primary`
- Border radius: `rounded-lg`
- Effect: Glow shadow

**Secondary**
- Background: Transparent
- Border: `border-white/20`
- Border radius: `rounded-lg`

**Ghost**
- Background: `bg-white/5`
- Border: `border-tertiary/15`
- Border radius: `rounded-lg`

---

### Badges & Labels
- Padding: `px-4 py-1.5`
- Border radius: `rounded-full`
- Letter-spacing: `tracking-[0.3em]`
- Text transform: `uppercase`
- Border: `border-tertiary/20`

---

### Glass Panel
- Backdrop blur: `backdrop-blur(16px)`
- Background: `bg-rgba(54, 70, 82, 0.1)`
- Border: `border-tertiary/10`
- Border radius: `rounded-2xl`

---

### Architectural Grid Background
- Background color: `#050d06`
- Multiple grid layers with different opacities
- Major ruled lines: 84px grid
- Minor ruled lines: 21px grid
- Radial intersection ticks
- Diagonal hatch pattern for depth
- Applied as fixed background

---

### Gradient Border Button
- Border: Conic gradient (tertiary → primary → tertiary)
- Inner border: `rgba(199, 219, 230, 0.38)`
- Background: Gradient overlay + `surface-high`
- Border radius: `rounded-lg`
- Hover effect: Border color changes to `rgba(231, 99, 84, 0.75)`

---

### Service Cards
- Background: `bg-surface-high`
- Border radius: `rounded-[1.75rem]` (28px)
- Border: `border-tertiary/10`
- Padding: Generous spacing (xl: `px-14 py-14`)
- Hover: Border color change + shadow elevation
- Icon: Circular background with `secondary-container`

---

## 05 · Spacing & Shape

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 6px | Tight elements |
| sm | 12px | Small gaps |
| md | 16px | Medium spacing |
| lg | 24px | Standard spacing |
| xl | 48px | Large sections |
| 2xl | 128px | Section padding |

**Container:** `max-w-7xl px-6 md:px-12`

**Section padding:** `py-32` (128px)

---

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| rounded | 4px | Small elements |
| rounded-lg | 8px | Buttons, inputs |
| rounded-2xl | 16px | Cards, panels |
| rounded-[1.75rem] | 28px | Large panels, service cards |
| rounded-full | 9999px | Icons, badges |

**Application:**
- Cards → `rounded-2xl`
- Buttons → `rounded-lg`
- Icons → `rounded-full`
- Large panels → `rounded-[1.75rem]`

---

### Shadows & Glow Effects

**Card Shadow**
`0 20px 50px -15px rgba(0,0,0,0.45)`

**Primary Glow**
`0 0 30px rgba(231,99,84,0.4)`

**Modal Shadow**
`shadow-2xl · 0 25px 50px -12px rgba(0,0,0,0.6)`

---

## 06 · Design Principles

### 01 · Dark First
All interfaces default to dark mode. The deep green-black palette conveys depth, focus, and technical authority.

### 02 · Purposeful Accent
Coral (#E76354) is used sparingly — only for CTAs, active states, and critical brand moments. Never decorative.

### 03 · Architectural Precision
Subtle grid backgrounds and technical layouts create a blueprint aesthetic that signals precision and systematic thinking.

### 04 · Motion with Intent
Animations are subtle and meaningful. Fade-in on scroll, hover elevation, spring on interaction — never gratuitous.

---

## 07 · Do's & Don'ts

### Do ✓
- Use #E76354 exclusively for primary CTAs and active brand moments
- Maintain dark backgrounds (#071108–#151e16) throughout all surfaces
- Use Mona Sans for all headings, nav, and UI labels
- Apply letter-spacing 0.2em–0.4em on uppercase labels and badges
- Use rounded-lg for most buttons, rounded-2xl for cards
- Apply subtle border white/5–white/10 on cards and panels
- Use Motion (framer-motion) for all transitions — keep duration ≤ 600ms
- Include architectural grid background on main sections

### Don't ✕
- Use light or white backgrounds — the brand is dark-only
- Use coral (#E76354) as a background or large fill area
- Mix multiple accent colors — tertiary is for text, not accents
- Use sharp corners (border-radius: 0) on cards or buttons
- Use font weights lighter than 300 for headings
- Add drop shadows without blur — use only soft, diffuse shadows
- Use animations faster than 200ms or slower than 700ms
- Display the logo on any color other than dark surfaces

---

**MP Tech Solutions · Brand Guidelines v1.1 · August 2026 · Internal Use Only**