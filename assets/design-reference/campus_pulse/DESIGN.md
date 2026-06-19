---
name: Campus Pulse
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#434653'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bd'
  primary: '#00327d'
  on-primary: '#ffffff'
  primary-container: '#0047ab'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b1c5ff'
  secondary: '#006d3d'
  on-secondary: '#ffffff'
  secondary-container: '#97f3b5'
  on-secondary-container: '#047240'
  tertiary: '#333737'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a4e4e'
  on-tertiary-container: '#bcbfbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#00419e'
  secondary-fixed: '#9af6b8'
  secondary-fixed-dim: '#7ed99e'
  on-secondary-fixed: '#00210f'
  on-secondary-fixed-variant: '#00522d'
  tertiary-fixed: '#e0e3e2'
  tertiary-fixed-dim: '#c4c7c6'
  on-tertiary-fixed: '#181c1c'
  on-tertiary-fixed-variant: '#434847'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built for a vibrant, high-trust campus marketplace. It balances academic reliability with the energetic pace of student life. The visual language is **Corporate/Modern** but infused with **High-Contrast** accents to maintain a youthful, tech-forward energy. 

The strategy prioritizes clarity and peer-to-peer safety. The interface evokes a sense of "digital common grounds"—professional enough to handle financial transactions but approachable enough for casual student interactions. High-quality whitespace, crisp structural alignment, and purposeful use of color-coding for status and verification form the backbone of the aesthetic.

## Colors

The palette is anchored by **Varsity Blue** (#0047AB), used for primary actions, navigation, and brand-critical elements to establish authority and trust. **Scholar Green** (#2E8B57) serves as the growth and validation accent, used for "Verified Student" badges, price prediction indicators, and success states.

The background uses a subtle, off-white **Tertiary** (#F4F7F6) to reduce eye strain during long browsing sessions, while the **Neutral** (#1A1C1E) is a deep slate used for high-contrast typography and iconography. Semantic colors for errors or warnings should use a muted coral to avoid clashing with the primary blue.

## Typography

This design system utilizes a tiered typography strategy to balance personality and utility. **Hanken Grotesk** is used for headlines to provide a sharp, modern, and confident editorial feel. Its tight tracking in larger sizes gives the marketplace a "tech-news" urgency.

**Inter** is the workhorse for body copy and listings, chosen for its exceptional legibility in dense data environments. For technical and metadata elements—such as price predictions, timestamps, and condition tags—**Geist** is employed. Its monospaced-influenced proportions lend a "verified" and precise character to the marketplace data.

## Layout & Spacing

The layout follows a **Fluid Grid** system based on an 8px rhythm. On desktop, a 12-column grid is used with a maximum container width of 1280px. On mobile devices, the system collapses to a single column with 16px side margins to maximize real estate for product imagery.

Spacing is used to create clear logical groupings. Related information (like a seller's name and their verified badge) uses `stack-sm`, while distinct sections of a product page use `stack-lg`. All product cards should maintain a consistent aspect ratio (4:3 or 1:1) to ensure the grid remains rhythmic and easy to scan.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Low-contrast Outlines**. Rather than heavy shadows, surfaces are defined by subtle shifts in background color and 1px borders (#E2E8F0). 

Depth is reserved for interactive elements:
- **Level 0 (Base):** The main application background.
- **Level 1 (Cards):** Pure white surfaces with a thin neutral border.
- **Level 2 (Modals/Popovers):** White surfaces with a soft, ambient shadow (10% opacity Varsity Blue) to indicate they are temporary overlays.

Hover states on product cards should not lift the card, but rather deepen the border color to the primary Varsity Blue, creating a "focus" effect rather than a "float" effect.

## Shapes

The shape language is consistently **Rounded** (0.5rem base radius). This choice softens the "Corporate" feel of the blue palette and makes the UI feel more accessible to students. 

- **Primary Buttons & Inputs:** Use the base 0.5rem (8px) radius.
- **Product Cards:** Use `rounded-lg` (16px) for a modern, containerized look.
- **Badges/Tags:** Use `rounded-full` (pill-shaped) to distinguish them from interactive buttons.

## Components

### Product Cards
Cards feature a top-aligned image with a `rounded-lg` clip. Below the image, a `label-sm` condition tag (e.g., "Like New") is nested in the top-left corner as an overlay. The card footer displays the price in bold `headline-md` and the verified student badge in the top-right.

### Verified Student Badge
A compact component consisting of the Scholar Green color and a checkmark icon. It must always be accompanied by the school name or "Verified Campus Seller" text in `label-sm` when space permits.

### Price Prediction Badge
A specialized data component using a light Scholar Green tint background with dark green text. It uses a "Trending" icon and Geist typography to signal algorithmic insight (e.g., "Fair Price" or "Great Deal").

### Buttons
- **Primary:** Solid Varsity Blue with white text. High-contrast, bold weight.
- **Secondary:** Outlined Varsity Blue or Scholar Green for "Message Seller" actions.
- **Ghost:** Used for utility actions like "Save for Later."

### Real-Time Chat Interface
A clean, "Inter"-driven interface. Student messages are Varsity Blue bubbles (right-aligned); seller messages are light grey bubbles (left-aligned). It includes a "Quick Reply" chip bar for common phrases like "Is this available?" or "Where can we meet?"

### Input Fields
Large, accessible tap targets with 16px internal padding. Focus states are indicated by a 2px Varsity Blue ring.