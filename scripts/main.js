// Main JS entry point
// Add interactivity (e.g., smooth scrolling, hover effects) here

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle Functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  const toggleDiv = document.querySelector("#toggle-content");
  const toggleCloseBtn = document.querySelector(".toggle-close-btn");
  const body = document.body;

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      // Toggle the active class on the hamburger button
      this.classList.toggle("active");

      // Only toggle the toggle content, not the original header nav
      if (toggleDiv) {
        toggleDiv.classList.toggle("toggle-open");
      }

      // Prevent body scroll when menu is open
      body.classList.toggle("menu-open");
    });

    // Close button functionality
    if (toggleCloseBtn) {
      toggleCloseBtn.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        if (toggleDiv) {
          toggleDiv.classList.remove("toggle-open");
        }
        body.classList.remove("menu-open");
      });
    }

    // Close menu when clicking on nav links in toggle content
    const toggleNavLinks = toggleDiv ? toggleDiv.querySelectorAll("a") : [];

    toggleNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        if (toggleDiv) {
          toggleDiv.classList.remove("toggle-open");
        }
        body.classList.remove("menu-open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileMenuToggle.contains(e.target) &&
        (!toggleDiv || !toggleDiv.contains(e.target))
      ) {
        mobileMenuToggle.classList.remove("active");
        if (toggleDiv) {
          toggleDiv.classList.remove("toggle-open");
        }
        body.classList.remove("menu-open");
      }
    });
  }

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
});
