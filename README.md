# CoffeeJoy ☕

CoffeeJoy is a single-page educational website designed to demonstrate mastery
of modern HTML5 and CSS techniques, focusing on responsive design, semantics,
and performance optimization.

## 📱 Project Constraints & Technical Requirements (MVP)

### Basic Tasks

- **Adaptive Layout**: Mobile-first approach using `min-width` media queries.
  - **Mobile**: Fluid layout starting from 320px, adaptive layout starting from
    375px.
  - **Tablet**: Breakpoint at 768px.
  - **Desktop**: Breakpoint at 1440px.
- **Validation**:
  - HTML must be valid according to the
    [W3C HTML Validator](https://validator.w3.org/).
  - CSS must be valid according to the
    [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- **Semantics**: Ensure strict adherence to HTML5 semantic standards.
- **Code Style**:
  - `modern-normalize` included for cross-browser consistency.
  - Code formatted using **Prettier**.
- **Assets & Performance**:
  - **Fonts**: Properly connected and optimized.
  - **Graphics**: Optimized file sizes for both vector and raster graphics.
  - **Retina Support**: All background and content raster images must support x1
    and x2 pixel density screens.
  - **Loading**: Image loading must be optimized.
  - **Icons**: All SVG icons must be connected via an **SVG sprite**.
  - **Favicon**: Page favicon must be displayed.

## 📑 Project Structure

The project consists of the following sections:

- Header
- Hero
- Welcome
- Quality
- Experience
- Subscribe
- Testimonials
- Location
- Footer
- Mobile menu

### Detailed Section Requirements

#### 1. Header

- Contains the **Logo** (must be SVG) and site navigation.
- **Navigation**: Implemented using anchor links navigating to the corresponding
  sections of the site.

#### 2. Hero

- **Headline**: "Savor the Essence of Specialty Coffee".
- Includes a descriptive text section.
- **Background**: Implemented as a CSS background image.
- **CTA**: "Learn More" button links to the **Quality** section.

#### 3. Welcome

- **Headline**: "Our Journey: Passion for Quality Coffee".
- Descriptive text positioned to the right of the headline.
- **CTA**: "Find location" links to the **Location** section (icon must be SVG).
- The image below the link is implemented as a content image.

#### 4. Quality

- **Headline**: "Why CoffeeJoy Stands Out from the Rest".
- Descriptive text below the header.
- **Features List**: A `<ul>` list rendering three articles.
  - Each article consists of a photo, a title, and a description.
- Images are implemented as content images.

#### 5. Experience

- **Headline**: "Coffee Moments".
- Small descriptive section.
- **Gallery**: A list of photos implemented as a `<ul>` and arranged using
  **Flexbox**.
- Images are implemented as content images.

#### 6. Subscribe

- **Headline**: "Join Our Coffee Community".
- Small descriptive section.
- Image implemented as a content image.
- **Form**:
  - Email input with a label.
  - "Subscribe" submit button.
  - Validation: Email field is required (via attribute).

#### 7. Testimonials

- **Headline**: "What our visitors say".
- **List**: `<ul>` list of visitor reviews.
- **Review Card**: Consists of a list of rating icons (SVG), review text, and
  the author's name.

#### 8. Location

- **Headline**: "Location".
- Descriptive section.
- **Contacts**: `<ul>` list containing email, phone, and café address.
  - Contact/address icons must be SVG.
  - Email and phone must be clickable links (`mailto:`, `tel:`).
- **Map**: Google Maps embedded via `iframe` on the right side.
  - Address: _263 Newbury St, Boston, MA 02116, USA_.
- **Link**: "Get Directions" links to the café address on Google Maps.

#### 9. Footer

- Contains Logo, Anchor Navigation, Company Contacts, Social Links, and Consumer
  Rights info.
- **Social Links**: `<ul>` list opening in new tabs:
  - Facebook: `https://www.facebook.com/`
  - Instagram: `https://www.instagram.com/`
  - X: `https://x.com/`
  - Icons must be in SVG format.
- **Navigation**: `<ul>` list of anchor links leading to site sections.

#### 10. Mobile Menu

- Mark-up and styling for all mobile menu elements.
- Menu width matches the mockup; height covers the full viewport.
- Initially hidden; appears when the `is-open` class is added.
