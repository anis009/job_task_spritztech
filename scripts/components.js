// Reusable Component Manager
class ComponentManager {
  constructor() {
    this.components = new Map();
  }

  // Register a reusable component
  register(name, component) {
    this.components.set(name, component);
  }

  // Initialize a component
  init(name, element, options = {}) {
    const Component = this.components.get(name);
    if (Component) {
      return new Component(element, options);
    }
    console.warn(`Component "${name}" not found`);
  }

  // Initialize all components with data attributes
  autoInit() {
    document.querySelectorAll("[data-component]").forEach((element) => {
      const componentName = element.dataset.component;
      const options = element.dataset.options
        ? JSON.parse(element.dataset.options)
        : {};
      this.init(componentName, element, options);
    });
  }
}

// Reusable Button Component
class Button {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      ripple: true,
      loadingText: "Loading...",
      ...options,
    };
    this.init();
  }

  init() {
    if (this.options.ripple) {
      this.addRippleEffect();
    }
    this.addClickHandler();
  }

  addRippleEffect() {
    this.element.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      const rect = this.element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.element.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }

  addClickHandler() {
    this.element.addEventListener("click", (e) => {
      if (this.element.dataset.loading === "true") {
        e.preventDefault();
        return;
      }
    });
  }

  setLoading(loading = true) {
    if (loading) {
      this.originalText = this.element.textContent;
      this.element.textContent = this.options.loadingText;
      this.element.dataset.loading = "true";
      this.element.disabled = true;
    } else {
      this.element.textContent = this.originalText;
      this.element.dataset.loading = "false";
      this.element.disabled = false;
    }
  }
}

// Reusable Modal Component
class Modal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      closeOnBackdrop: true,
      closeOnEscape: true,
      ...options,
    };
    this.init();
  }

  init() {
    this.backdrop = this.createBackdrop();
    this.bindEvents();
  }

  createBackdrop() {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    return backdrop;
  }

  bindEvents() {
    // Close button
    const closeBtn = this.element.querySelector("[data-modal-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }

    // Backdrop click
    if (this.options.closeOnBackdrop) {
      this.backdrop.addEventListener("click", () => this.close());
    }

    // Escape key
    if (this.options.closeOnEscape) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen()) {
          this.close();
        }
      });
    }
  }

  open() {
    document.body.appendChild(this.backdrop);
    document.body.appendChild(this.element);
    this.element.classList.add("modal--open");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.element.classList.remove("modal--open");
    this.backdrop.remove();
    this.element.remove();
    document.body.style.overflow = "";
  }

  isOpen() {
    return this.element.classList.contains("modal--open");
  }
}

// Form Validation Component
class FormValidator {
  constructor(element, options = {}) {
    this.form = element;
    this.options = {
      validateOnSubmit: true,
      validateOnBlur: true,
      ...options,
    };
    this.init();
  }

  init() {
    if (this.options.validateOnSubmit) {
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    if (this.options.validateOnBlur) {
      this.form.querySelectorAll("input, textarea, select").forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input));
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.onSubmit();
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll(
      "input[required], textarea[required], select[required]"
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    let isValid = true;
    let message = "";

    if (input.hasAttribute("required") && !value) {
      isValid = false;
      message = "This field is required";
    } else if (type === "email" && value && !this.isValidEmail(value)) {
      isValid = false;
      message = "Please enter a valid email address";
    }

    this.showFieldError(input, isValid ? "" : message);
    return isValid;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  showFieldError(input, message) {
    const errorElement = input.parentNode.querySelector(".form__error");
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = message ? "block" : "none";
    }

    input.classList.toggle("form__input--error", !!message);
  }

  onSubmit() {
    // Override this method in your implementation
    console.log("Form submitted successfully");
  }
}

// Initialize component manager
const componentManager = new ComponentManager();

// Register components
componentManager.register("button", Button);
componentManager.register("modal", Modal);
componentManager.register("form-validator", FormValidator);

// Export for use in main.js
window.ComponentManager = componentManager;
