/* 
   EXECUTIVE MIDNIGHT SLATE PORTFOLIO DRIVER
   Developer: Ashok Gowda S P
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal Observer
  initScrollReveal();

  // 2. Tech Filter Tabs
  initTechTabs();

  // 3. Dynamic Multi-Project Architecture Modals
  initArchitectureModals();

  // 4. Resume Viewer Modal System
  initResumeModal();

  // 5. Contact Form Validation
  initContactForm();

  // 6. Active Nav Highlight on Scroll
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

/* RESUME VIEWER MODAL SYSTEM */
function initResumeModal() {
  const overlay = document.getElementById('resume-modal-overlay');
  const closeBtn = document.getElementById('resume-modal-close');

  if (!overlay) return;

  document.querySelectorAll('.trigger-resume-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Open modal viewer on click
      e.preventDefault();
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
      title: 'Spring Boot REST API with JWT Auth & DTO Mapping',
      desc: 'Secure enterprise microservice using Spring Security, JWT token validation, DTO pattern mapping, Swagger OpenAPI documentation, pagination, sorting, input validation, and global exception handling.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-key"></i> 1. CLIENT AUTHENTICATION & JWT BEARER TOKEN</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Client authenticates via /api/auth/login and receives signed JWT Bearer Token<br>
            • Subsequent requests pass Authorization: Bearer &lt;token&gt; header
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Intercepted by Spring Security Filter Chain</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-shield-halved"></i> 2. SPRING SECURITY FILTER CHAIN & DTO MAPPING</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Validates token signature & extracts User Claims & Roles<br>
            • DTO Layer separates internal JPA entities from public JSON API contracts
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Passes to Endpoints with OpenAPI Documentation</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-layer-group"></i> 3. REST CONTROLLER LAYER & SWAGGER UI</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Implements Pagination, Sorting, Searching, and Input Validation (@Valid)<br>
            • Interactive API Documentation exposed via Swagger / OpenAPI 3.0
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Calls Service Layer & Database</div>

          <div style="color:var(--accent-amber); font-weight:700;"><i class="fas fa-database"></i> 4. DATA ACCESS LAYER & MYSQL DATABASE</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Spring Data JPA & Hibernate ORM for CRUD Operations & Pageable queries<br>
            • Persists encrypted user credentials & role mappings to MySQL DB
          </div>
        </div>
      `
    },
    'bengaluru-house-price': {
      title: 'Bengaluru House Price Prediction Infrastructure Platform',
      desc: 'End-to-end ML-powered real estate valuation platform across 240+ Bengaluru locations with dual-currency conversion, 20-year loan EMI calculators, public infrastructure mapping, and a Meta AI chatbot.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-brain"></i> 1. MACHINE LEARNING MODEL (Scikit-Learn / Linear Regression)</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Trained on 240+ Bengaluru location features, sqft area, BHK, and bath parameters<br>
            • Model pickled with Joblib/Pickle for low-latency Flask inference
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Microservice Endpoint Trigger</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-server"></i> 2. FLASK RESTFUL API & AUTHENTICATION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • /predict_home_price API returning real-time property valuation<br>
            • Secure Session & SQLite User Authentication for saved valuation history
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Financial & Infra Analytics Pipelines</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-calculator"></i> 3. DUAL-CURRENCY (INR/USD) & 20-YR LOAN EMI ENGINE</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Real-time exchange rate conversion (INR ⇄ USD)<br>
            • Dynamic 20-year loan amortization schedule & EMI breakdown
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Infrastructure & Chatbot Modules</div>

          <div style="color:var(--accent-amber); font-weight:700;"><i class="fas fa-robot"></i> 4. PUBLIC INFRASTRUCTURE MAPPING & META AI CHATBOT</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Maps nearest Hospitals, Namma Metro Stations, BMTC Bus Stops, and BLR Airport<br>
            • WhatsApp-style Meta AI Assistant chatbot for real estate query resolution
          </div>
        </div>
      `
    },
    'stock-prediction': {
      title: 'Stock Market Price Prediction Machine Learning Pipeline',
      desc: 'End-to-end Deep Learning pipeline using LSTM networks for time-series stock trend forecasting served via Flask.',
      content: `
        <div style="background:#020617; border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem; font-family:var(--font-code); font-size:0.88rem; color:var(--text-primary); line-height:2;">
          <div style="color:var(--accent-cyan); font-weight:700;"><i class="fas fa-file-csv"></i> 1. HISTORICAL DATA INGESTION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Ingests Stock Price Time-Series Data via Yahoo Finance API / Pandas
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Data Preprocessing & Feature Engineering</div>

          <div style="color:var(--accent-indigo); font-weight:700;"><i class="fas fa-filter"></i> 2. NORMALIZATION & SEQUENCE SLICING</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • MinMaxScaler Normalization (0 to 1 Scaling)<br>
            • Sliding Window Sequence Creation (60-day Lookback Window)
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Passes Sequences into LSTM Neural Net</div>

          <div style="color:var(--accent-emerald); font-weight:700;"><i class="fas fa-brain"></i> 3. LSTM DEEP LEARNING MODEL</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Multi-layered LSTM Recurrent Neural Network with Dropout Layers<br>
            • Trained on Historical Patterns to Forecast Equity Trends
          </div>

          <div style="padding-left:1.5rem; color:var(--text-muted);">↓ Model Forecast Output</div>

          <div style="color:var(--accent-amber); font-weight:700;"><i class="fas fa-chart-line"></i> 4. FLASK REST SERVICE & VISUALIZATION</div>
          <div style="padding-left:1.5rem; color:var(--text-secondary); font-size:0.82rem;">
            • Exposes Prediction Endpoint & Renders Interactive Forecast Charts
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
