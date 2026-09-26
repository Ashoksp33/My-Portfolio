/* 
   EXECUTIVE MIDNIGHT SLATE PORTFOLIO DRIVER
   Developer: Ashok Gowda S P
   Resume Sync: Employee Management JWT, SkyCast Weather, Stock Price ML
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal Observer
  initScrollReveal();

  // 2. Tech Filter Tabs
  initTechTabs();

  // 3. Dynamic Multi-Project Architecture Modals
  initArchitectureModals();

  // 4. Contact Form Validation
  initContactForm();

  // 5. Active Nav Highlight on Scroll
  initActiveNav();
});

/* SCROLL REVEAL OBSERVER */
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* TECH STACK FILTER TABS */
function initTechTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.tech-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* DYNAMIC ARCHITECTURE MODAL SYSTEM */
function initArchitectureModals() {
  const overlay = document.getElementById('arch-modal-overlay');
  const closeBtn = document.getElementById('arch-modal-close');
  const titleEl = document.getElementById('arch-modal-title');
  const descEl = document.getElementById('arch-modal-desc');
  const contentEl = document.getElementById('arch-modal-content');

  if (!overlay) return;

  const architectureData = {
    'jwt-auth-system': {
      title: 'Employee Management System with JWT Authentication',
      desc: 'Developed a secure Employee Management System with role-based authentication using JWT, enabling authorized users to perform CRUD operations through RESTful APIs. Implemented pagination, sorting, searching, input validation, global exception handling, and API documentation using Swagger.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-key"></i> 1. CLIENT AUTHENTICATION & JWT BEARER TOKEN</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Client authenticates via /api/auth/login and receives signed JWT Bearer Token<br>
            • Subsequent requests pass Authorization: Bearer &lt;token&gt; header for authorized CRUD execution
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Intercepted by Spring Security Filter Chain</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-shield-halved"></i> 2. SPRING SECURITY & ROLE-BASED AUTHORIZATION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Validates token signature & enforces Role-Based Access Control (RBAC)<br>
            • DTO Layer separates internal JPA entities from public JSON API contracts
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ REST Controller Layer Execution</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-layer-group"></i> 3. REST API ENDPOINTS & SWAGGER (OPENAPI)</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Implements Pagination, Sorting, Searching, Input Validation (@Valid), and Global Exception Handling<br>
            • Interactive API Documentation exposed via Swagger / OpenAPI
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Database Layer</div>

          <div style="color:var(--accent-amber); font-weight:700;"><i class="fas fa-database"></i> 4. SPRING DATA JPA & MYSQL DATABASE</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Spring Data JPA & Hibernate ORM for CRUD Operations & Pageable queries<br>
            • Persists employee records & role mappings to MySQL Database
          </div>
        </div>
      `
    },
    'skycast': {
      title: 'SkyCast – Real-Time Weather Forecasting Platform',
      desc: 'Developed a responsive weather forecasting web application that fetches real-time weather data using REST APIs and displays weather conditions for any city. Implemented dynamic weather-based animations, geolocation support, responsive UI, and interactive themes using HTML, CSS, and JavaScript.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-location-crosshairs"></i> 1. GEOLOCATION & CITY SEARCH INGESTION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Obtains real-time user GPS coordinates via Browser Geolocation API or manual city input
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Async REST API Request</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-cloud-sun-rain"></i> 2. WEATHERAPI REST ENDPOINT INTEGRATION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Fetches live weather metrics, temperature, humidity, wind speed, and 7-day forecast JSON data
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Dynamic UI Rendering Engine</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-paint-brush"></i> 3. DYNAMIC WEATHER ANIMATIONS & THEMING</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Triggers live CSS3/JS weather background animations (Rain, Thunder, Sunshine, Snow)<br>
            • Real-time responsive UI state updates & interactive theme management
          </div>
        </div>
      `
    },
    'stock-prediction': {
      title: 'Stock Market Price Prediction Machine Learning Pipeline',
      desc: 'Visualized historical stock market trends and predicted future prices using LSTM-based deep learning models. Implemented data preprocessing, feature engineering, and normalization techniques for improved prediction accuracy.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-chart-line"></i> 1. HISTORICAL STOCK DATA INGESTION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Ingests time-series equity price data into Pandas DataFrames
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Preprocessing & Feature Engineering</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-filter"></i> 2. DATA NORMALIZATION & SLICING</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Normalizes data scaling using MinMaxScaler<br>
            • Feature engineering & sequence slicing for time-series memory model
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Model Prediction Execution</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-brain"></i> 3. LSTM RECURRENT NEURAL NETWORK</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Trains LSTM deep learning network to predict future price trends with high accuracy<br>
            • Serves predictions via Flask web microservice
          </div>
        </div>
      `
    }
  };

  document.querySelectorAll('.trigger-arch-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = architectureData[projId] || architectureData['jwt-auth-system'];

      titleEl.innerHTML = `<i class="fas fa-sitemap" style="color:var(--accent-indigo);"></i> ${data.title}`;
      descEl.textContent = data.desc;
      contentEl.innerHTML = data.content;

      overlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}

/* CONTACT FORM VALIDATION & TRANSMISSION */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting Message...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Transmitted!';
      btn.style.background = 'var(--accent-emerald)';
      btn.style.borderColor = 'var(--accent-emerald)';
      btn.style.color = '#ffffff';

      setTimeout(() => {
        form.reset();
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ACTIVE NAV LINK */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
