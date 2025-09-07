// Main JS entry point
// Add interactivity (e.g., smooth scrolling, hover effects) here

document.addEventListener("DOMContentLoaded", function () {
  // Enhanced smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        // Calculate offset for fixed header
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        // Smooth scroll with custom easing
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without triggering scroll
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Mobile menu toggle functionality
  const mobileMenuToggle = () => {
    const toggle = document.querySelector(".header__mobile-toggle");
    const nav = document.querySelector(".header__nav");
    const actions = document.querySelector(".header__actions");
    const overlay = document.querySelector(".header__overlay");

    if (toggle && nav && actions && overlay) {
      // Toggle mobile menu
      toggle.addEventListener("click", () => {
        const isActive = toggle.classList.contains("active");

        if (isActive) {
          // Close menu
          toggle.classList.remove("active");
          nav.classList.remove("active");
          actions.classList.remove("active");
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        } else {
          // Open menu
          toggle.classList.add("active");
          nav.classList.add("active");
          actions.classList.add("active");
          overlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });

      // Close menu when clicking on overlay
      overlay.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
        actions.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      });

      // Close menu when clicking on nav links
      const navLinks = nav.querySelectorAll("a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          toggle.classList.remove("active");
          nav.classList.remove("active");
          actions.classList.remove("active");
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        });
      });

      // Close menu on window resize if desktop
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          toggle.classList.remove("active");
          nav.classList.remove("active");
          actions.classList.remove("active");
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }
  };

  // Form validation and interaction
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#ff4757";
        } else {
          input.style.borderColor = "#444";
        }
      });

      if (isValid) {
        // Show success message (placeholder)
        alert("Thank you for your interest! We will contact you soon.");
        form.reset();
      }
    });
  });

  // Add hover effects for cards
  const cards = document.querySelectorAll(
    ".features__card, .benefits__card, .support__rating"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Pricing toggle functionality
  const pricingOptions = document.querySelectorAll(".pricing__option");
  pricingOptions.forEach((option) => {
    option.addEventListener("click", function () {
      pricingOptions.forEach((opt) =>
        opt.classList.remove("pricing__option--active")
      );
      this.classList.add("pricing__option--active");
    });
  });

  // Newsletter form
  const newsletterForm = document.querySelector(".footer__newsletter");
  if (newsletterForm) {
    const input = newsletterForm.querySelector("input");
    const button = newsletterForm.querySelector("button");

    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (input.value.trim()) {
        alert("Thank you for subscribing to our newsletter!");
        input.value = "";
      }
    });
  }

  // Initialize mobile menu if needed
  mobileMenuToggle();
});
