# Component Reusability Guide

## 🎯 Overview

This project is now structured for maximum reusability with modular components, utility classes, and a component management system.

## 📁 File Structure

```
styles/
├── main.scss          # Main entry point
├── variables.scss     # Design tokens
├── mixins.scss        # Reusable SCSS mixins
├── utilities.scss     # Utility classes
├── components.scss    # Reusable components
├── layout.scss        # Layout utilities
└── reset.scss         # CSS reset

components/
├── button.html        # Button component template
├── card.html          # Card component template
└── form.html          # Form component template

scripts/
├── main.js            # Main JavaScript
└── components.js      # Reusable JS components
```

## 🔧 Reusable Components

### 1. Buttons

```html
<!-- Primary Button -->
<a href="#" class="button button--primary">Get Started</a>

<!-- Secondary Button -->
<a href="#" class="button button--secondary">Learn More</a>

<!-- Outline Button -->
<a href="#" class="button button--outline">View Demo</a>

<!-- Ghost Button -->
<a href="#" class="button button--ghost">Cancel</a>

<!-- Size Variants -->
<a href="#" class="button button--primary button--small">Small</a>
<a href="#" class="button button--primary button--large">Large</a>
```

### 2. Cards

```html
<!-- Basic Card -->
<div class="card card--shadow">
  <div class="card__content">
    <h3 class="card__title">Feature Title</h3>
    <p class="card__desc">Feature description</p>
  </div>
</div>

<!-- Card with Icon -->
<div class="card card--hover">
  <div class="card__icon">
    <img src="icon.svg" alt="Icon" />
  </div>
  <div class="card__content">
    <h3 class="card__title">Feature</h3>
    <p class="card__desc">Description</p>
  </div>
</div>
```

### 3. Forms

```html
<!-- Contact Form -->
<form class="form" data-component="form-validator">
  <div class="form__group">
    <label class="form__label">Email</label>
    <input class="form__input" type="email" required />
    <span class="form__error"></span>
  </div>
  <button type="submit" class="button button--primary">Submit</button>
</form>
```

## 🎨 Utility Classes

### Spacing

```html
<div class="mt-4 mb-2 p-3">Content with spacing</div>
```

### Layout

```html
<div class="flex flex-between gap-2">
  <div>Left content</div>
  <div>Right content</div>
</div>

<div class="grid grid-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Typography

```html
<h2 class="text-center font-bold text-primary">Heading</h2>
<p class="text-muted">Subtitle text</p>
```

### Responsive

```html
<div class="hidden-mobile">Desktop only</div>
<div class="show-mobile">Mobile only</div>
```

## 🔨 SCSS Mixins

### Usage Examples

```scss
.my-component {
  @include card-base;
  @include hover-lift(-8px);
  @include section-spacing(3rem, 2rem);

  .title {
    @include heading(1.5rem, 600);
  }

  .description {
    @include body-text(0.95rem, 0.8);
  }

  @include responsive(mobile) {
    padding: 1rem;
  }
}

.my-grid {
  @include grid(4, 1.5rem);
}

.my-container {
  @include container(1200px);
}
```

## ⚡ JavaScript Components

### Auto-initialization

```html
<!-- Automatically initializes components -->
<button class="button" data-component="button" data-options='{"ripple": true}'>
  Click me
</button>

<form data-component="form-validator" data-options='{"validateOnBlur": true}'>
  <!-- form content -->
</form>
```

### Manual initialization

```javascript
// Initialize specific components
const button = ComponentManager.init(
  "button",
  document.querySelector(".my-button")
);
const modal = ComponentManager.init(
  "modal",
  document.querySelector(".my-modal")
);

// Auto-initialize all components
ComponentManager.autoInit();
```

## 🚀 Best Practices

### 1. Use Design Tokens

```scss
// ✅ Good
color: $primary-color;
font-size: $font-size-lg;

// ❌ Avoid
color: #0052cc;
font-size: 18px;
```

### 2. Use Mixins for Repeated Patterns

```scss
// ✅ Good
@include hover-lift(-5px);
@include responsive(mobile) { ... }

// ❌ Avoid
transition: transform 0.3s ease;
&:hover { transform: translateY(-5px); }
```

### 3. Use Utility Classes for Simple Styling

```html
<!-- ✅ Good -->
<div class="flex flex-center gap-2 mt-3">
  <!-- ❌ Avoid creating custom CSS for simple layouts -->
  <div class="custom-centered-layout"></div>
</div>
```

### 4. Component Data Attributes

```html
<!-- ✅ Good - declarative -->
<button data-component="button" data-options='{"loading": true}'>
  <!-- ❌ Avoid - imperative -->
  <button id="special-button"></button>
</button>
```

## 📊 Performance Benefits

1. **Reduced CSS size**: Utility classes prevent duplicate styles
2. **Faster development**: Reusable components speed up implementation
3. **Consistent design**: Design tokens ensure visual consistency
4. **Maintainable code**: Modular structure makes updates easier
5. **Responsive by default**: Built-in responsive utilities

## 🔄 Migration Guide

To convert existing elements to use the new reusable system:

1. Replace custom button styles with `.button` classes
2. Use utility classes instead of custom spacing/layout CSS
3. Convert cards to use `.card` component structure
4. Add `data-component` attributes for JavaScript functionality
5. Use mixins in SCSS instead of writing custom styles

This reusable system will significantly speed up future development and ensure consistency across your projects!
