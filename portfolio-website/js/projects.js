import { $, $$, createEl } from './utils.js';

let projectsData = [];
let currentLang = 'en';
let observer;
let lightboxEl;
let lightboxImg;

function renderProjects(data, lang = 'en') {
  projectsData = data;
  currentLang = lang;
  const grid = $('#projectGrid');
  if (!grid) return;
  grid.innerHTML = '';
  data.forEach(project => grid.appendChild(buildProjectCard(project, lang)));
  setupLazyImages();
}

function buildProjectCard(project, lang) {
  const card = createEl('div', 'card project-card animate-in');
  const title = project.name[lang] || project.name.en;
  const desc = project.summary[lang] || project.summary.en;
  const cover = project.cover;

  card.innerHTML = `
    ${cover ? `
      <div class="project-card-cover">
        <img data-src="${cover}" alt="${title}" class="lazy-img project-cover-img">
        <div class="project-cover-overlay"></div>
      </div>
    ` : ''}
    <div class="project-card-content">
      <div class="project-card-header">
        <div class="project-header-row">
          <img src="${project.logo}" alt="${title}" class="project-logo-small">
          <div class="project-header-info">
            <h3 class="project-title">${title}</h3>
            <div class="project-badges">
              <span class="badge">${project.year}</span>
              <span class="badge badge-status">${project.status}</span>
              ${project.flags.length ? `<span class="badge badge-flags">${project.flags.join(' ')}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
      <p class="project-description">${desc}</p>
      <div class="project-market">
        <span class="market-label">${lang === 'ar' ? 'السوق:' : 'Market:'}</span>
        <span class="market-value">${project.market.join(', ')}</span>
      </div>
      <div class="project-tags">
        ${project.stack.slice(0, 5).map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-actions">
        <button class="btn secondary" data-action="open-project" data-id="${project.id}">${lang === 'ar' ? 'التفاصيل' : 'View Details'}</button>
        ${project.links.demo ? `<a class="btn secondary" href="${project.links.demo}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? 'عرض الديمو' : 'Demo'}</a>` : ''}
      </div>
    </div>
  `;

  const btn = card.querySelector('[data-action="open-project"]');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProjectModal(project);
    });
  }
  
  card.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a') || e.target.dataset.action === 'open-project') return;
    openProjectModal(project);
  });
  
  return card;
}

function filterProjects(year) {
  if (year === 'all') return projectsData;
  return projectsData.filter(p => String(p.year) === String(year));
}

function setupFilters() {
  const filterButtons = $$('.filter-btn');
  if (!filterButtons.length) return;
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const year = btn.dataset.filter || 'all';
      const filtered = filterProjects(year);
      
      // Add smooth transition
      const grid = $('#projectGrid');
      if (grid) {
        grid.style.opacity = '0.5';
        grid.style.transition = 'opacity 0.2s ease';
        setTimeout(() => {
          renderProjects(filtered, currentLang);
          grid.style.opacity = '1';
        }, 150);
      } else {
        renderProjects(filtered, currentLang);
      }
    });
  });
}

function buildLinks(project, lang) {
  const buttons = [];
  if (project.links.demo) buttons.push(`<a class="btn secondary" href="${project.links.demo}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? '🎬 ديمو' : '🎬 Demo'}</a>`);
  if (project.links.website) buttons.push(`<a class="btn secondary" href="${project.links.website}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? '🌐 الموقع' : '🌐 Website'}</a>`);
  if (project.links.play) buttons.push(`<a class="btn secondary" href="${project.links.play}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? '📱 Google Play' : '📱 Google Play'}</a>`);
  if (project.links.appStore) buttons.push(`<a class="btn secondary" href="${project.links.appStore}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? '🍎 App Store' : '🍎 App Store'}</a>`);
  if (project.links.details) buttons.push(`<a class="btn ghost" href="${project.links.details}" target="_blank" onclick="event.stopPropagation()">${lang === 'ar' ? '📄 README' : '📄 README'}</a>`);
  return buttons.length ? buttons.join('') : '';
}

function openProjectModal(project) {
  const modal = $('#projectModal');
  const content = $('#modalContent');
  if (!modal || !content) return;
  const title = project.name[currentLang] || project.name.en;
  const overview = project.overview?.[currentLang] || project.overview?.en || project.description?.[currentLang] || project.description?.en || project.summary[currentLang] || project.summary.en;
  const highlights = project.highlights || [];
  const technologies = project.technologies || [];
  const screensFeatures = project.screensFeatures || {};
  const architecture = project.architecture || '';
  const statusDetails = project.statusDetails || {};

  content.innerHTML = `
    <div class="modal-header-new">
      <div class="modal-header-top">
        <div class="modal-logo-title">
          <img src="${project.logo}" alt="${title}" class="modal-logo-img">
          <div class="modal-title-group">
            <h2 class="modal-title">${title}</h2>
            <div class="modal-badges-row">
              <span class="badge">${project.year}</span>
              <span class="badge badge-status">${project.status}</span>
              ${project.flags.length ? `<span class="badge badge-flags">${project.flags.join(' ')}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="modal-quick-info">
          <div class="info-item"><strong>${currentLang === 'ar' ? 'السوق:' : 'Market:'}</strong> ${project.market.join(', ')}</div>
          <div class="info-item"><strong>${currentLang === 'ar' ? 'التقنيات:' : 'Stack:'}</strong> ${project.stack.slice(0, 3).join(', ')}</div>
        </div>
      </div>
      <div class="modal-actions-row">
        ${buildLinks(project, currentLang)}
      </div>
    </div>
    <div class="modal-body-new">
      ${buildOverviewSection(overview, statusDetails, currentLang)}
      ${technologies.length ? buildTechnologiesSection(technologies, currentLang) : ''}
      ${Object.keys(screensFeatures).length ? buildScreensFeaturesSection(screensFeatures, currentLang) : ''}
      ${highlights.length ? buildHighlightsSection(highlights, currentLang) : ''}
      ${project.gallery && project.gallery.length ? buildScreenshotsSection(project.gallery, title, currentLang) : ''}
      ${project.gifs && project.gifs.length ? buildGifsSection(project.gifs, currentLang) : ''}
      ${architecture ? buildArchitectureSection(architecture, currentLang) : ''}
    </div>
  `;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  if (project.id) {
    history.replaceState(null, '', `#project=${project.id}`);
  }
  setupLazyImages();
  setupGalleryClicks();
  setupAccordions();
}

function buildOverviewSection(overview, statusDetails, lang) {
  const hasStatus = statusDetails.completed || statusDetails.inProgress || statusDetails.planned;
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'نظرة عامة' : 'Overview'}</h3>
      <p class="section-text">${overview}</p>
      ${hasStatus ? `
        <div class="status-details">
          ${statusDetails.completed && statusDetails.completed.length ? `
            <div class="status-group">
              <h4 class="status-title completed">${lang === 'ar' ? '✅ مكتمل' : '✅ Completed'}</h4>
              <ul class="status-list">
                ${statusDetails.completed.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          ${statusDetails.inProgress && statusDetails.inProgress.length ? `
            <div class="status-group">
              <h4 class="status-title in-progress">${lang === 'ar' ? '🚧 قيد التنفيذ' : '🚧 In Progress'}</h4>
              <ul class="status-list">
                ${statusDetails.inProgress.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          ${statusDetails.planned && statusDetails.planned.length ? `
            <div class="status-group">
              <h4 class="status-title planned">${lang === 'ar' ? '🔜 مخطط' : '🔜 Planned'}</h4>
              <ul class="status-list">
                ${statusDetails.planned.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      ` : ''}
    </section>
  `;
}

function buildTechnologiesSection(technologies, lang) {
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'التقنيات' : 'Technologies'}</h3>
      <div class="tech-table-wrapper">
        <table class="tech-table">
          <thead>
            <tr>
              <th>${lang === 'ar' ? 'الطبقة' : 'Layer'}</th>
              <th>${lang === 'ar' ? 'التقنية' : 'Stack'}</th>
            </tr>
          </thead>
          <tbody>
            ${technologies.map(tech => `
              <tr>
                <td class="tech-layer">${tech.layer}</td>
                <td class="tech-stack">${tech.stack}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function buildScreensFeaturesSection(screensFeatures, lang) {
  const modules = Object.keys(screensFeatures);
  if (!modules.length) return '';
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'الشاشات والميزات' : 'Screens & Features'}</h3>
      <div class="accordion-container">
        ${modules.map((module, idx) => `
          <div class="accordion-item">
            <button class="accordion-header" data-accordion="${idx}">
              <span>${module}</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content" data-content="${idx}">
              <ul class="feature-list">
                ${screensFeatures[module].map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function buildHighlightsSection(highlights, lang) {
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'أبرز الميزات' : 'Highlights'}</h3>
      <div class="highlights-grid">
        ${highlights.map(highlight => `
          <div class="highlight-card">
            <div class="highlight-content">${highlight}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function buildScreenshotsSection(gallery, title, lang) {
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'لقطات الشاشة' : 'Screenshots'}</h3>
      <div class="screenshots-gallery">
        ${gallery.map(src => `
          <div class="screenshot-item">
            <img data-src="${src}" alt="${title}" class="lazy-img screenshot-img">
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function buildGifsSection(gifs, lang) {
  if (!gifs.length) return '';
  const gifItems = gifs.map(g => typeof g === 'string' ? { src: g, title: { en: 'Demo', ar: 'عرض' } } : g);
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'عروض توضيحية' : 'Demos'}</h3>
      <div class="gifs-gallery">
        ${gifItems.map(gif => {
          const title = gif.title?.[currentLang] || gif.title?.en || 'Demo';
          return `
            <div class="gif-item">
              <div class="gif-label">${title}</div>
              <img data-src="${gif.src}" alt="${title}" class="lazy-img gif-img">
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function buildArchitectureSection(architecture, lang) {
  return `
    <section class="modal-section">
      <h3 class="section-title">${lang === 'ar' ? 'الهندسة المعمارية' : 'Architecture'}</h3>
      <div class="architecture-block">
        <pre class="architecture-code">${architecture}</pre>
      </div>
    </section>
  `;
}

function setupAccordions() {
  $$('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const idx = header.dataset.accordion;
      const content = $(`.accordion-content[data-content="${idx}"]`);
      const icon = header.querySelector('.accordion-icon');
      if (!content) return;
      
      const isOpen = content.classList.contains('open');
      $$('.accordion-content').forEach(c => c.classList.remove('open'));
      $$('.accordion-icon').forEach(i => i.textContent = '▼');
      
      if (!isOpen) {
        content.classList.add('open');
        icon.textContent = '▲';
      }
    });
  });
}

function closeModal() {
  const modal = $('#projectModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  if (location.hash.startsWith('#project=')) {
    history.replaceState(null, '', '#');
  }
}

function bindModalClose() {
  const modal = $('#projectModal');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function setupLazyImages() {
  const imgs = $$('.lazy-img');
  if (!imgs.length) return;
  observer?.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });
  imgs.forEach(img => observer.observe(img));
}

function setupGalleryClicks() {
  const screenshotImgs = $$('.screenshot-img');
  const gifImgs = $$('.gif-img');
  const allImgs = [...screenshotImgs, ...gifImgs];
  if (!allImgs.length) return;
  ensureLightbox();
  allImgs.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.dataset.src || img.src));
  });
}

function ensureLightbox() {
  lightboxEl = lightboxEl || $('#lightbox');
  lightboxImg = lightboxImg || $('#lightboxImg');
  if (!lightboxEl || !lightboxImg) return;
  lightboxEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxEl.classList.contains('show')) closeLightbox();
  });
}

function openLightbox(src) {
  if (!lightboxEl || !lightboxImg) ensureLightbox();
  if (!lightboxEl || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxEl.classList.add('show');
  lightboxEl.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('show');
  lightboxEl.setAttribute('aria-hidden', 'true');
}

function handleHashDeepLink() {
  const hash = window.location.hash;
  if (!hash.startsWith('#project=')) return;
  const id = hash.replace('#project=', '');
  const found = projectsData.find(p => p.id === id);
  if (found) openProjectModal(found);
}

function setupHashListener() {
  window.addEventListener('hashchange', () => {
    if (location.hash.startsWith('#project=')) {
      handleHashDeepLink();
    } else {
      closeModal();
    }
  });
}

export {
  renderProjects,
  setupFilters,
  openProjectModal,
  bindModalClose,
  handleHashDeepLink,
  setupHashListener,
  setupLazyImages
};

