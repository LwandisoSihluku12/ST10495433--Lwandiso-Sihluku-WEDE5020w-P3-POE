Zeus Online Sneaker Store 
Welcome to Zeus Online Sneaker Store — a beginner-friendly web project that showcases a modern, responsive sneaker store website.
This project is built with HTML, CSS, and JavaScript to demonstrate how to create a simple e-commerce style website with navigation, interactivity, and accessibility.

PROJECT FEATURES
Responsive Navigation Bar with a hamburger menu (works on desktop and mobile).
Homepage Hero Section with a background image, title, and "Shop Now" button.
Why Choose Us Section listing store features.
Sneaker Drop Calendar image showcase.
Accessibility Support (keyboard escape to close menu, aria-expanded attributes for screen readers).
Footer Section with copyright.

CODE OVERVIEW
1. HTML (index.html)
Defines the structure of each page (header, navigation, hero section, footer).
Uses semantic tags like <header>, <main>, <section>, and <footer>.

2. CSS (zeus-style.css)
Controls layout, colors, fonts, and responsive design.
.active shows/hides the mobile menu.
.open animates the hamburger button when toggled.

3. JavaScript (main.js)
Handles interactive behavior for the hamburger menu.
Updates accessibility attributes (aria-expanded).
Closes menu on Escape key or when clicking a navigation link.

PROJECT STRUCTURE:
zeus-sneaker-store/
│
├── index.html         # Homepage
├── about.html         # About us page
├── products.html      # Product listings page
├── cart.html          # Shopping cart page
├── contact.html       # Contact form page
│
├── styles/
│   └── zeus-style.css # Main CSS stylesheet
│
├── scripts/
│   └── main.js        # JavaScript for hamburger menu behavior
│
├── Images/
│   ├── Sneaker 1.jpg
│   ├── Sneaker 7.jpg
│   ├── Sneaker Drop Calendar.png
│   └── screenshots/   # Folder to store screenshots for README
│       ├── homepage.png
│       ├── menu.png
│       └── drop-calendar.png
│
└── README.md          # This file

CHANGELOG
Initial release of Zeus Online Sneaker Store.
Created Homepage, Products, About, Cart, and Contact pages.
Implemented responsive navigation with a hamburger menu.
Added hero section with welcome message and "Shop Now" button.
Styled pages with CSS for layout, typography, and responsive design.
Added JavaScript to handle menu toggling and accessibility.
Included product cards, sneaker drop calendar, and contact form iframe.

Changes from Part 2 feedback.
Edited code to allow navigation to adapt to smaller sreens

Changelog updates for PART 3
Created new Page to have an enquiry page as per instruction
Implemented Google Maps iframe embedded showing Johannesburg location
- **Note:** Uses Google Maps embed API (not Leaflet/Mapbox, but meets the requirement for location-based features)
styles.css (multiple locations)
- **Examples:**
  - Navigation links: `transition: color 0.3s` (line 70)
  - Product cards: `transition: transform 0.3s, box-shadow 0.3s` (line 314)
  - Hover effects on product cards: `transform: translateY(-5px)` (line 319)
  - Button hover transitions (lines 207-209, 437-439)
  Tab switching functionality (lines 41-67) - dynamically shows/hides content
  - Cart rendering (lines 152-199) - dynamically creates HTML elements
  - Mobile menu toggle (lines 21-24) - manipulates CSS classes
  - Product accordion toggle (referenced in products.html)
  Cart items are dynamically loaded and rendered from JavaScript array
- **Example:** `renderCart()` function creates HTML for cart items dynamically
Proper use of H1, H2, H3, H4 throughout all pages
- **Example:** H1 for main heading, H2 for sections, H3 for subsections
- index.html: Descriptive title and meta description (lines 21, 26)
  - products.html: Page-specific meta description (line 6)
  - contact.html: Page-specific meta description (line 6)
Create enquiry.html with appropriate form
- Animations and transitions
- Advanced DOM manipulation
- Dynamic content loading
- Most SEO on-page requirements
- Contact form with validation
- Mobile-responsive design
- Header tags structure
- Internal linking
- Interactive maps (Google Maps instead of Leaflet/Mapbox)
- Image optimization (alt text present, but generic file names)
- JavaScript form validation (basic, could be more comprehensive)
- Form submission (demo only, no backend)
- Security (basic for static site)



References 
OpenAI (2025) ChatGPT conversation on creating a robots.txt file. OpenAI. Available at: https://chat.openai.com
 (Accessed: 16 November 2025).

Author
Lwandiso Sihluku
Student project for learning web development basics.
