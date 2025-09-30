document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuClose = document.querySelector("[data-menu-close]");
  const menuLinks = document.querySelectorAll("[data-menu-link]");
  const currentYearEl = document.getElementById("current-year");

  const trapFocusSelector = "a[href], button:not([disabled]), [tabindex='0']";
  let previousActiveElement = null;

  const openMenu = () => {
    if (!mobileMenu) return;
    previousActiveElement = document.activeElement;
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    body.style.overflow = "hidden";
    const firstFocusable = mobileMenu.querySelector(trapFocusSelector);
    if (firstFocusable) {
      firstFocusable.focus();
    }

    const handleFocusTrap = (event) => {
      if (!mobileMenu.classList.contains("open")) {
        mobileMenu.removeEventListener("keydown", handleFocusTrap);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = mobileMenu.querySelectorAll(trapFocusSelector);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    mobileMenu.addEventListener("keydown", handleFocusTrap);
    mobileMenu.dataset.focusTrap = "true";
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    body.style.overflow = "";
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
    delete mobileMenu.dataset.focusTrap;
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        closeMenu();
      }
    });

    mobileMenu.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
});
