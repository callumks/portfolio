// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavigation();
  initBackToTop();
  initScrollAnimations();
  initSkillBars();
  initSmoothScrolling();
  initContactForm();
  initSmoothPageTransitions();

  // Add smooth initial page load
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.classList.add("page-loaded");
  }
});

// Navigation functionality
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Navbar background on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Back to top button functionality
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Add animation classes to elements
  addAnimationClasses();
}

// Add animation classes to elements
function addAnimationClasses() {
  // Hero section elements
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroDescription = document.querySelector(".hero-description");
  const heroButtons = document.querySelector(".hero-buttons");
  const heroImage = document.querySelector(".hero-image");

  if (heroTitle) heroTitle.classList.add("fade-in");
  if (heroSubtitle) heroSubtitle.classList.add("fade-in");
  if (heroDescription) heroDescription.classList.add("fade-in");
  if (heroButtons) heroButtons.classList.add("fade-in");
  if (heroImage) heroImage.classList.add("slide-in-right");

  // About section
  const aboutText = document.querySelector(".about-text");
  const stats = document.querySelectorAll(".stat");

  if (aboutText) aboutText.classList.add("fade-in");
  stats.forEach((stat, index) => {
    stat.classList.add("fade-in");
    stat.style.animationDelay = `${index * 0.1}s`;
  });

  // Timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    item.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
  });

  // Project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.animationDelay = `${index * 0.2}s`;
  });

  // Contact section
  const contactInfo = document.querySelector(".contact-info");
  const contactForm = document.querySelector(".contact-form");

  if (contactInfo) contactInfo.classList.add("slide-in-left");
  if (contactForm) contactForm.classList.add("slide-in-right");
}

// Skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.getAttribute("data-width");
          progressBar.style.setProperty("--progress-width", width + "%");
          progressBar.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => skillObserver.observe(bar));
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelectorAll('input[type="text"]')[1].value;
      const message = this.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Simulate form submission
      showNotification("Message sent successfully!", "success");
      this.reset();
    });
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Parallax effect for hero section
function initParallax() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero && heroContent) {
      const rate = scrolled * -0.5;
      heroContent.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Typing effect for hero title
function initTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing effect after a delay
  setTimeout(typeWriter, 500);
}

// Initialize additional effects
document.addEventListener("DOMContentLoaded", function () {
  initParallax();
  initTypingEffect();
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Simplified loading state for smoother transitions
const style = document.createElement("style");
style.textContent = `
    /* Minimal loading state that doesn't interfere with transitions */
    body:not(.loaded) .main-content {
        opacity: 0;
    }
    
    body.loaded .main-content {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Smooth Page Transitions
function initSmoothPageTransitions() {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-item");
  const mainContent = document.querySelector(".main-content");
  const pageHeader = document.querySelector(".page-header");

  // Handle navigation clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetUrl = this.getAttribute("href");
      const currentUrl = window.location.pathname;

      // Don't transition if we're already on the target page
      if (
        targetUrl === "." ||
        targetUrl === currentUrl ||
        (targetUrl === "index.html" &&
          (currentUrl === "/" || currentUrl.endsWith("index.html")))
      ) {
        return;
      }

      // Start transition
      transitionToPage(targetUrl);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.url) {
      transitionToPage(e.state.url, false);
    }
  });

  // Save initial state
  history.replaceState(
    { url: window.location.pathname },
    document.title,
    window.location.pathname
  );
}

async function transitionToPage(url, pushState = true) {
  const mainContent = document.querySelector(".main-content");
  const resumeContainer = document.querySelector(".resume-container");

  try {
    // Add loading state
    resumeContainer.classList.add("page-loading");

    // Small delay to ensure loading state is applied
    await new Promise((resolve) => setTimeout(resolve, 50));
    resumeContainer.classList.add("active");

    // Start fade out transition
    mainContent.classList.add("page-transitioning");

    // Start fetching content immediately (parallel with transition)
    const fetchPromise = fetch(url).then((response) => {
      if (!response.ok) throw new Error("Failed to load page");
      return response.text();
    });

    // Wait for transition to complete
    await new Promise((resolve) => setTimeout(resolve, 250));

    // Get the fetched content
    const html = await fetchPromise;
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, "text/html");

    // Extract new content
    const newMainContent = newDoc.querySelector(".main-content");
    const newTitle = newDoc.title;
    const newNavTrigger = newDoc.querySelector(".nav-trigger");

    if (newMainContent) {
      // Replace main content
      mainContent.innerHTML = newMainContent.innerHTML;

      // Update page title
      document.title = newTitle;

      // Update navigation active state
      if (newNavTrigger) {
        const currentNavTrigger = document.querySelector(".nav-trigger");
        if (currentNavTrigger) {
          currentNavTrigger.textContent = newNavTrigger.textContent;
        }
      }

      // Update URL if needed
      if (pushState) {
        history.pushState({ url: url }, newTitle, url);
      }

      // Scroll to top instantly
      window.scrollTo({ top: 0, behavior: "auto" });

      // Use requestAnimationFrame to ensure DOM is updated before removing classes
      requestAnimationFrame(() => {
        // Remove transition class to fade in new content
        mainContent.classList.remove("page-transitioning");

        // Add loaded animation class for smooth entrance
        mainContent.classList.add("page-loaded");

        // Re-initialize any necessary scripts for the new content
        initScrollAnimations();
        initSkillBars();

        // Clean up loading states
        setTimeout(() => {
          resumeContainer.classList.remove("active", "page-loading");
          // Clean up animation class after animation completes
          setTimeout(() => {
            mainContent.classList.remove("page-loaded");
          }, 400);
        }, 50);
      });
    }
  } catch (error) {
    console.error("Error loading page:", error);

    // Clean up loading states on error
    resumeContainer.classList.remove("active", "page-loading");
    mainContent.classList.remove("page-transitioning");

    // If fetch fails, fall back to normal navigation
    window.location.href = url;
  }
}
