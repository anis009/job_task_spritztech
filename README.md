# Biccas - Frontend Developer Task

A pixel-perfect, fully responsive single-page website recreated from Figma design using HTML5, SCSS, and Vanilla JavaScript with a mobile-responsive toggle navigation menu.

## 🌐 Live Demo

**[View Live Website →](http://jobtask-spritztech.vercel.app/)**

Experience the fully functional website deployed on Vercel with all interactive features including the mobile toggle navigation.

## 🚀 Quick Start

Simply open `index.html` in your browser to view the website locally. For development, use VS Code Live Server extension for hot reload.

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher) - Required for Sass compilation
- **Git** - For version control
- **Modern web browser** - Chrome, Firefox, Safari, or Edge
- **VS Code** (recommended) - With Live Server extension

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anis009/job_task_spritztech.git
   cd Frontend_Developer_Task_Spritztech
   ```

2. **Install Sass globally (if not already installed):**

   ```bash
   npm install -g sass
   ```

3. **Compile SCSS to CSS:**

   ```bash
   # One-time compilation
   sass styles/main.scss styles/main.css

   # For development with auto-compilation
   sass styles/main.scss styles/main.css --watch
   ```

4. **Open the website:**
   - **Option A:** Double-click `index.html` to open in your default browser
   - **Option B:** Use VS Code Live Server extension for development
   - **Option C:** Serve via local server (recommended for testing)

### Development Workflow

1. Make changes to SCSS files in the `styles/` directory
2. SCSS will auto-compile to `main.css` if using `--watch` flag
3. Refresh browser to see changes (or use Live Server for auto-refresh)

## 📋 Features Implemented

- ✅ **Mobile-responsive toggle navigation** - Hamburger menu with smooth expand/collapse
- ✅ **Pixel-perfect Figma implementation** - Matches design specifications
- ✅ **Fully responsive design** - Desktop, tablet, and mobile optimized
- ✅ **Semantic HTML5 structure** - Accessible and SEO-friendly
- ✅ **Modular SCSS architecture** - Organized and maintainable stylesheets
- ✅ **Interactive JavaScript components** - Toggle menu functionality
- ✅ **Modern CSS techniques** - Flexbox, Grid, custom properties
- ✅ **Cross-browser compatibility** - Works on all modern browsers

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── REUSABILITY.md         # Code reusability guide
├── assets/                # Images and SVG icons
│   ├── benefits/          # Benefits section assets
│   ├── features/          # Features section assets
│   ├── footer/           # Footer assets
│   └── ...
├── components/            # Reusable HTML components
│   ├── button.html
│   ├── card.html
│   └── form.html
├── scripts/               # JavaScript files
│   ├── main.js           # Main functionality
│   └── components.js     # Component-specific JS
└── styles/               # SCSS stylesheets
    ├── main.scss         # Main SCSS entry point
    ├── main.css          # Compiled CSS (auto-generated)
    ├── components.scss   # Component styles
    ├── layout.scss       # Layout utilities
    ├── variables.scss    # Design tokens
    ├── mixins.scss       # SCSS mixins
    └── sections/         # Section-specific styles
        ├── _header.scss
        ├── _hero.scss
        ├── _features.scss
        └── ...
```

## 🔧 Technical Notes & Assumptions

### Browser Support

- **Modern browsers** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Mobile browsers** on iOS and Android
- **No Internet Explorer support** (uses modern CSS features)

### Design Assumptions

- **Figma design** used as the single source of truth for all measurements and colors
- **Mobile-first approach** with progressive enhancement for larger screens
- **Standard web fonts** fallback to system fonts for better performance
- **Placeholder content** used where specific text wasn't provided in design

### Performance Considerations

- **Optimized images** - SVGs used for icons, optimized PNGs for photos
- **Minimal dependencies** - Pure HTML/CSS/JS, no frameworks
- **Efficient SCSS** - Modular architecture prevents code duplication
- **Modern CSS** - Uses efficient layout methods (Flexbox, Grid)

### Accessibility Features

- **Semantic HTML** - Proper heading hierarchy and landmark elements
- **ARIA labels** - Screen reader friendly navigation
- **Keyboard navigation** - Tab-accessible interactive elements
- **Color contrast** - Meets WCAG guidelines
- **Focus indicators** - Visible focus states for keyboard users

### Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px and above
- **Large Desktop:** 1440px+ (max-width container)

## 🐛 Known Issues & Limitations

- **JavaScript disabled** - Toggle menu requires JavaScript to function
- **Print styles** - Not specifically optimized for printing
- **Right-to-left languages** - Layout optimized for left-to-right text

## 🚀 Future Enhancements

- **Animation library** - Add more sophisticated animations
- **Form validation** - Client-side form validation
- **Progressive Web App** - Add PWA capabilities
- **Performance optimization** - Lazy loading for images

## 📞 Support

For any questions or issues, please refer to the codebase comments or create an issue in the repository.
