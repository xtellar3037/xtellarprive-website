// Xtellar Privé — site interactions

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Header background on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', onScroll);
onScroll();

// Reveal-on-scroll animations
const animatedEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
animatedEls.forEach((el) => observer.observe(el));

// Contact form (front-end only — no backend yet)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thank you — your enquiry has been received. We will be in touch within one business day.';
  status.classList.remove('hidden');
  form.reset();
});

// Member login modal
const loginBtn = document.getElementById('login-btn');
const loginBtnMobile = document.getElementById('login-btn-mobile');
const loginModal = document.getElementById('login-modal');
const loginBackdrop = document.getElementById('login-backdrop');
const loginClose = document.getElementById('login-close');
const loginForm = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');
const loginToInquire = document.getElementById('login-to-inquire');

const openLoginModal = () => {
  loginModal?.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
  window.setTimeout(() => document.getElementById('login-email')?.focus(), 200);
};

const closeLoginModal = () => {
  loginModal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
};

[loginBtn, loginBtnMobile].forEach((btn) =>
  btn?.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
    openLoginModal();
  })
);

loginClose?.addEventListener('click', closeLoginModal);
loginBackdrop?.addEventListener('click', closeLoginModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && loginModal?.getAttribute('aria-hidden') === 'false') {
    closeLoginModal();
  }
});

loginToInquire?.addEventListener('click', closeLoginModal);

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  loginStatus.textContent = 'Member sign-in is available exclusively through the Xtellar Privé concierge app. Please request an invitation below.';
  loginStatus.classList.remove('hidden');
  loginForm.reset();
});
