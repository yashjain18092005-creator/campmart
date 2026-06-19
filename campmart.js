const initialListings = [
  {
    id: 'book-dsa-01',
    title: 'DSA Handwritten Notes Bundle',
    category: 'Notes',
    type: 'Sell',
    price: 499,
    condition: 'Like New',
    seller: 'Ananya Sharma',
    sellerInitials: 'AS',
    branch: 'CSE · 3rd Year',
    rating: 4.9,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Library Gate',
    emoji: '📝',
    description: 'Complete unit-wise handwritten DSA notes with solved PYQs, complexity charts and quick revision sheets.',
    demand: 'Very High',
    range: [450, 650],
    deal: 'Fair Price',
    saves: 18,
    listed: '2 hours ago',
    tags: ['Exam Ready', 'PYQ', 'CSE']
  },
  {
    id: 'macbook-air-m1',
    title: 'MacBook Air M1 8GB/256GB',
    category: 'Gadgets',
    type: 'Sell',
    price: 46000,
    condition: 'Good',
    seller: 'Rohan Mehta',
    sellerInitials: 'RM',
    branch: 'Design · 4th Year',
    rating: 4.7,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'CSE Department',
    emoji: '💻',
    description: 'Battery health 89%, original charger included. Best for coding, design and college projects.',
    demand: 'High',
    range: [45000, 52000],
    deal: 'Great Deal',
    saves: 34,
    listed: 'Today',
    tags: ['Coding', 'Warranty Bill', 'Popular']
  },
  {
    id: 'calc-casio-991',
    title: 'Casio fx-991ES Plus Calculator',
    category: 'Essentials',
    type: 'Rent',
    price: 39,
    condition: 'Good',
    seller: 'Rahul Verma',
    sellerInitials: 'RV',
    branch: 'Mechanical · 2nd Year',
    rating: 4.8,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Main Campus Gate',
    emoji: '🧮',
    description: 'Scientific calculator available for daily rent during exam week. ID verification required.',
    demand: 'High before exams',
    range: [30, 60],
    deal: 'Great Deal',
    saves: 27,
    listed: '1 day ago',
    tags: ['Rent Daily', 'Exam Week', 'Verified']
  },
  {
    id: 'graphics-drafter',
    title: 'Engineering Graphics Mini Drafter',
    category: 'Lab Tools',
    type: 'Sell',
    price: 850,
    condition: 'Like New',
    seller: 'Viraj Vishwakarma',
    sellerInitials: 'VV',
    branch: 'CSE AI & ML · 2nd Year',
    rating: 4.8,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Canteen Area',
    emoji: '📐',
    description: 'Used for one semester only. Clean board, smooth scale movement, ideal for first-year EG.',
    demand: 'Medium',
    range: [700, 1050],
    deal: 'Fair Price',
    saves: 9,
    listed: '3 days ago',
    tags: ['First Year', 'EG', 'Clean']
  },
  {
    id: 'java-book',
    title: 'Core Java Black Book',
    category: 'Books',
    type: 'Exchange',
    price: 0,
    condition: 'Used',
    seller: 'Neha Patel',
    sellerInitials: 'NP',
    branch: 'IT · 3rd Year',
    rating: 4.6,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Library Gate',
    emoji: '📘',
    description: 'Wants to exchange Core Java Black Book for Python/ML book or DBMS reference book.',
    demand: 'Medium',
    range: [350, 550],
    deal: 'Exchange Only',
    saves: 11,
    listed: 'Yesterday',
    tags: ['Exchange', 'Java', 'IT']
  },
  {
    id: 'headphones-sony',
    title: 'Sony WH-CH520 Headphones',
    category: 'Gadgets',
    type: 'Sell',
    price: 2300,
    condition: 'Good',
    seller: 'Aarav Jain',
    sellerInitials: 'AJ',
    branch: 'ECE · 2nd Year',
    rating: 4.5,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Hostel Common Room',
    emoji: '🎧',
    description: 'Bluetooth headphones with good battery backup. Minor scratches, sound quality is strong.',
    demand: 'High',
    range: [2100, 2800],
    deal: 'Fair Price',
    saves: 16,
    listed: '4 hours ago',
    tags: ['Bluetooth', 'Music', 'Calls']
  },
  {
    id: 'hostel-kettle',
    title: 'Electric Kettle + Mug Combo',
    category: 'Essentials',
    type: 'Sell',
    price: 650,
    condition: 'Good',
    seller: 'Sana Khan',
    sellerInitials: 'SK',
    branch: 'Civil · 1st Year',
    rating: 4.4,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Girls Hostel Gate',
    emoji: '☕',
    description: 'Hostel-friendly kettle with steel mug. Perfect for tea, coffee and instant noodles.',
    demand: 'Medium',
    range: [550, 850],
    deal: 'Fair Price',
    saves: 7,
    listed: 'This week',
    tags: ['Hostel', 'Combo', 'Daily Use']
  },
  {
    id: 'microcontroller-kit',
    title: 'Arduino Starter Kit',
    category: 'Lab Tools',
    type: 'Rent',
    price: 99,
    condition: 'Like New',
    seller: 'Kabir Singh',
    sellerInitials: 'KS',
    branch: 'ECE · 4th Year',
    rating: 4.9,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: 'Electronics Lab',
    emoji: '🤖',
    description: 'Arduino UNO, sensors, jumper wires, breadboard and motor driver. Rent for project demos.',
    demand: 'Very High',
    range: [80, 150],
    deal: 'Great Deal',
    saves: 31,
    listed: 'Today',
    tags: ['Project', 'IoT', 'Rent']
  }
];

const categories  = ['All', 'Books', 'Gadgets', 'Notes', 'Essentials', 'Lab Tools'];
const types       = ['All', 'Sell', 'Rent', 'Exchange'];
const quickReplies = ['Is this available?', 'Can you share more photos?', 'Can we meet at Library Gate?', 'Is the price negotiable?', 'Reserve it for me'];
const meetupPoints = ['Library Gate', 'Canteen Area', 'Main Campus Gate', 'CSE Department', 'Hostel Common Room'];

const state = {
  route: 'home',
  listings: getStoredListings(),
  selectedCategory: 'All',
  selectedType: 'All',
  search: '',
  budget: 80000,
  saved: JSON.parse(localStorage.getItem('campmartSaved') || '[]'),
  user: JSON.parse(localStorage.getItem('campmartUser') || 'null'),
  selectedChat: 'macbook-air-m1',
  selectedMeetup: 'Library Gate',
  uploadedPhotos: [],
  // ── NEW: persisted buyer/renter transaction records ──
  transactions: JSON.parse(localStorage.getItem('campmartTransactions') || '[]')
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// ── Storage helpers ──────────────────────────────────────────────────────────

function getStoredListings() {
  const stored = localStorage.getItem('campmartListings');
  if (!stored) return initialListings;
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : initialListings;
  } catch {
    return initialListings;
  }
}

function persistListings() {
  localStorage.setItem('campmartListings', JSON.stringify(state.listings));
}

function persistUser() {
  localStorage.setItem('campmartUser', JSON.stringify(state.user));
}

// ── NEW ──
function persistTransactions() {
  localStorage.setItem('campmartTransactions', JSON.stringify(state.transactions));
}

// ── UI helpers ───────────────────────────────────────────────────────────────

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2400);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// ── Routing ──────────────────────────────────────────────────────────────────

function setRoute(route, detailId) {
  state.route = route;
  $$('.view').forEach(view => view.classList.remove('active'));
  const view = document.getElementById(`${route}View`);
  if (view) view.classList.add('active');
  $$('.desktop-nav a, .mobile-menu a').forEach(link => {
    link.classList.toggle('active', link.dataset.route === route);
  });
  $('#mobileMenu').classList.remove('open');
  if (route === 'marketplace')    renderMarketplace();
  if (route === 'details')        renderDetails(detailId || location.hash.replace('#details/', '') || state.listings[0].id);
  if (route === 'recommendations') renderRecommendations();
  if (route === 'sell')           renderLivePreview();
  if (route === 'chat')           renderChat();
  if (route === 'dashboard')      renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function routeFromHash() {
  const hash = location.hash.replace('#', '');
  if (hash.startsWith('details/')) return setRoute('details', hash.split('/')[1]);
  const route = hash || 'home';
  const validRoutes = ['home', 'marketplace', 'recommendations', 'sell', 'chat', 'dashboard'];
  setRoute(validRoutes.includes(route) ? route : 'home');
}

// ── Marketplace ───────────────────────────────────────────────────────────────

function renderFilterChips() {
  const categoryWrap = $('#categoryFilters');
  const typeWrap = $('#typeFilters');
  categoryWrap.innerHTML = categories.map(cat =>
    `<button class="chip ${state.selectedCategory === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>`
  ).join('');
  typeWrap.innerHTML = types.map(type =>
    `<button class="chip ${state.selectedType === type ? 'active' : ''}" data-type="${type}">${type}</button>`
  ).join('');
}

function filteredListings() {
  return state.listings.filter(item => {
    const matchesCategory = state.selectedCategory === 'All' || item.category === state.selectedCategory;
    const matchesType     = state.selectedType === 'All' || item.type === state.selectedType;
    const text = `${item.title} ${item.category} ${item.type} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
    const matchesSearch   = !state.search || text.includes(state.search.toLowerCase());
    const matchesBudget   = item.type === 'Exchange' || item.price <= state.budget;
    return matchesCategory && matchesType && matchesSearch && matchesBudget;
  });
}

function formatPrice(item) {
  if (item.type === 'Exchange') return 'Exchange';
  return item.type === 'Rent' ? `₹${item.price}/day` : `₹${item.price.toLocaleString('en-IN')}`;
}

function dealClass(item) {
  if (item.deal === 'Great Deal') return 'good-pill';
  if (item.deal === 'Fair Price') return 'warning-pill';
  return 'neutral-pill';
}

function listingCard(item) {
  const saved = state.saved.includes(item.id);
  const media = (item.photos && item.photos.length)
    ? `<img src="${item.photos[0]}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover">`
    : `<div class="listing-emoji">${item.emoji}</div>`;
  return `
    <article class="listing-card" data-id="${item.id}">
      <div class="listing-image">
        ${media}
        <span class="listing-tag">${item.condition}</span>
        <button class="listing-save ${saved ? 'saved' : ''}" data-save="${item.id}" title="Save item">${saved ? '♥' : '♡'}</button>
      </div>
      <div class="listing-body">
        <div class="listing-title-row">
          <h3>${item.title}</h3>
          <span class="listing-price">${formatPrice(item)}</span>
        </div>
        <div class="listing-meta">
          <span class="meta-pill">${item.type}</span>
          <span class="meta-pill">${item.category}</span>
          <span class="meta-pill">✅ Verified</span>
          <span class="${dealClass(item)}">${item.deal}</span>
        </div>
        <p>${item.description}</p>
        <div class="card-actions">
          <button class="secondary-button" data-details="${item.id}">Details</button>
          <button class="primary-button" data-message="${item.id}">Message</button>
        </div>
      </div>
    </article>`;
}

function renderMarketplace() {
  renderFilterChips();
  const grid = $('#listingGrid');
  const list = filteredListings();
  $('#budgetLabel').textContent = `₹${Number(state.budget).toLocaleString('en-IN')}`;
  $('#searchInput').value = state.search;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><span>🔍</span><h3>No matching resources found</h3><p>Try resetting filters or changing your search keyword.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(listingCard).join('');
}

// ── Details ───────────────────────────────────────────────────────────────────

function renderDetails(id) {
  const item = state.listings.find(entry => entry.id === id) || state.listings[0];

  let gallery;
  if (item.photos && item.photos.length) {
    gallery = `
      <div style="display:flex;flex-direction:column;gap:10px;padding:8px">
        <img src="${item.photos[0]}" alt="${item.title}" style="width:100%;border-radius:14px;object-fit:cover;max-height:280px">
        ${item.photos.length > 1
          ? `<div style="display:flex;gap:8px;flex-wrap:wrap">${item.photos.slice(1).map(p =>
              `<img src="${p}" alt="" style="width:70px;height:70px;object-fit:cover;border-radius:10px;border:2px solid var(--border)">`
            ).join('')}</div>`
          : ''}
      </div>`;
  } else {
    gallery = item.emoji;
  }

  // ── NEW: Buy Now / Rent Now button (hidden for Exchange) ──
  const buyBtnHTML = item.type !== 'Exchange'
    ? `<button class="primary-button full buy-now-btn" data-buy="${item.id}" style="background:linear-gradient(135deg,#10b981,#059669);font-size:0.95rem;padding:13px">
        ${item.type === 'Rent' ? '🔑 Rent Now' : '🛒 Buy Now'}
       </button>`
    : '';

  const shell = $('#detailsShell');
  shell.innerHTML = `
    <button class="ghost-button" data-route="marketplace">← Back to marketplace</button>
    <div class="details-grid" style="margin-top:18px">
      <div class="details-gallery reveal">${gallery}</div>
      <aside class="details-card panel reveal delay-1">
        <div class="details-title">
          <div>
            <span class="eyebrow">${item.type} · ${item.category}</span>
            <h2>${item.title}</h2>
            <div class="listing-meta">
              <span class="meta-pill">${item.condition}</span>
              <span class="meta-pill">${item.listed}</span>
              <span class="meta-pill">${item.saves} saves</span>
            </div>
          </div>
          <button class="listing-save ${state.saved.includes(item.id) ? 'saved' : ''}" data-save="${item.id}">${state.saved.includes(item.id) ? '♥' : '♡'}</button>
        </div>
        <div class="price-row">
          <strong>${formatPrice(item)}</strong>
          <span class="${dealClass(item)}">${item.deal}</span>
        </div>
        <p>${item.description}</p>
        <div class="seller-card">
          <div class="avatar">${item.sellerInitials}</div>
          <div>
            <strong>${item.seller}</strong>
            <span>✅ Verified · ${item.branch} · ⭐ ${item.rating}</span>
            <span>${item.campus}</span>
          </div>
        </div>
        <div class="price-analysis">
          <div class="analysis-row"><span>AI fair range</span><strong>₹${item.range[0].toLocaleString('en-IN')} – ₹${item.range[1].toLocaleString('en-IN')}</strong></div>
          <div class="analysis-row"><span>Campus demand</span><strong>${item.demand}</strong></div>
          <div class="analysis-row"><span>Suggested meetup</span><strong>${item.meetup}</strong></div>
        </div>
        <div class="details-actions">
          ${buyBtnHTML}
          <button class="primary-button full" data-message="${item.id}">Message verified seller</button>
          <button class="secondary-button full" data-meetup="${item.id}">Plan safe meetup</button>
          <button class="ghost-button full" data-reserve="${item.id}">Reserve this item</button>
        </div>
      </aside>
    </div>
    <div class="spec-grid reveal delay-2">
      <div><span>Safety Status</span><strong>Verified campus seller</strong></div>
      <div><span>Payment Mode</span><strong>Cash / UPI at meetup</strong></div>
      <div><span>AI Pricing Basis</span><strong>Condition + demand + similar listings</strong></div>
      <div><span>Tags</span><strong>${item.tags.join(' · ')}</strong></div>
    </div>`;
}

// ── Save / Wishlist ──────────────────────────────────────────────────────────

function toggleSave(id) {
  if (state.saved.includes(id)) state.saved = state.saved.filter(itemId => itemId !== id);
  else state.saved.push(id);
  localStorage.setItem('campmartSaved', JSON.stringify(state.saved));
  showToast(state.saved.includes(id) ? 'Saved to your wishlist' : 'Removed from wishlist');
  if (state.route === 'marketplace')    renderMarketplace();
  if (state.route === 'details')        renderDetails(id);
  if (state.route === 'recommendations') renderRecommendations();
}

// ── Recommendations ───────────────────────────────────────────────────────────

function renderRecommendations() {
  const picks = state.listings
    .filter(item => ['Notes', 'Essentials', 'Lab Tools', 'Gadgets'].includes(item.category))
    .slice(0, 5);
  $('#recommendationList').innerHTML = picks.map(item => `
    <article class="rec-card">
      <span class="item-icon">${item.emoji}</span>
      <div>
        <h3>${item.title}</h3>
        <p><strong>${item.deal}</strong> · ${item.demand} demand · Recommended because it matches your branch, exam needs and budget.</p>
        <div class="rec-actions">
          <button class="secondary-button" data-details="${item.id}">View</button>
          <button class="ghost-button" data-save="${item.id}">${state.saved.includes(item.id) ? 'Saved ♥' : 'Save ♡'}</button>
        </div>
      </div>
    </article>`).join('');
}

// ── Sell / Post form ──────────────────────────────────────────────────────────

function currentFormValues() {
  const form = $('#postForm');
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
}

function emojiForCategory(category) {
  return { Books: '📚', Gadgets: '💻', Notes: '📝', Essentials: '🎒', 'Lab Tools': '📐' }[category] || '🛍️';
}

function predictedRange(price, condition) {
  const base = Number(price) || 500;
  const conditionFactor = condition === 'Like New' ? 1.18 : condition === 'Good' ? 1 : condition === 'Used' ? .82 : .62;
  const low  = Math.max(0, Math.round(base * 0.82 * conditionFactor / 10) * 10);
  const high = Math.round(base * 1.25 * conditionFactor / 10) * 10;
  return [low, high];
}

function renderLivePreview() {
  const values = currentFormValues();
  const price = Number(values.price || 850);
  const [low, high] = predictedRange(price, values.condition || 'Like New');
  $('#predictedRange').textContent = `₹${low.toLocaleString('en-IN')} – ₹${high.toLocaleString('en-IN')}`;
  $('#dealSignal').textContent = price >= low && price <= high ? 'Fair Price' : price < low ? 'Great Deal' : 'High Price';

  const previewMedia = state.uploadedPhotos.length
    ? `<img src="${state.uploadedPhotos[0]}" alt="Preview" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0">`
    : `<div class="preview-art">${emojiForCategory(values.category)}</div>`;

  $('#livePreview').innerHTML = `
    <div class="preview-card">
      ${previewMedia}
      <div class="preview-body">
        <span class="${price >= low && price <= high ? 'warning-pill' : price < low ? 'good-pill' : 'neutral-pill'}">${$('#dealSignal').textContent}</span>
        <h3>${values.title || 'Your item title'}</h3>
        <p>${values.description || 'Item description will appear here.'}</p>
        <div class="price-row">
          <strong>${values.type === 'Exchange' ? 'Exchange' : values.type === 'Rent' ? `₹${price}/day` : `₹${price.toLocaleString('en-IN')}`}</strong>
          <span class="meta-pill">${values.condition}</span>
        </div>
        <div class="listing-meta">
          <span class="meta-pill">${values.category}</span>
          <span class="meta-pill">${values.meetup || 'Library Gate'}</span>
        </div>
      </div>
    </div>`;
}

function publishListing(event) {
  event.preventDefault();
  const values = currentFormValues();
  const price = Number(values.price || 0);
  const range = predictedRange(price, values.condition);
  const listing = {
    id: `campmart-${Date.now()}`,
    title: values.title || 'Untitled Campus Item',
    category: values.category || 'Essentials',
    type: values.type || 'Sell',
    price,
    condition: values.condition || 'Good',
    seller: state.user?.name || 'Viraj Vishwakarma',
    sellerInitials: initials(state.user?.name || 'Viraj Vishwakarma'),
    branch: state.user?.branch || 'CSE AI & ML · 2nd Year',
    rating: 4.8,
    verified: true,
    campus: 'Baderia Global Institute',
    meetup: values.meetup || 'Library Gate',
    emoji: emojiForCategory(values.category),
    description: values.description || 'Campus resource listed by a verified student.',
    demand: 'Medium',
    range,
    deal: price < range[0] ? 'Great Deal' : price > range[1] ? 'High Price' : 'Fair Price',
    saves: 0,
    listed: 'Just now',
    tags: ['New Listing', values.category, values.type],
    photos: [...state.uploadedPhotos]
  };
  state.listings.unshift(listing);
  persistListings();
  state.uploadedPhotos = [];
  resetUploadUI();
  showToast('Listing published successfully');
  location.hash = `details/${listing.id}`;
  setStep(1);
  event.target.reset();
  event.target.elements.title.value = 'Engineering Graphics Mini Drafter';
  event.target.elements.description.value = 'Used for only one semester. Smooth scale movement, clean board, perfect for first-year engineering drawing.';
  event.target.elements.price.value = 850;
  renderLivePreview();
}

function setStep(step) {
  $$('.form-step').forEach(block => block.classList.toggle('active', Number(block.dataset.step) === step));
}

function initials(name) {
  return name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase();
}

// ── Chat ──────────────────────────────────────────────────────────────────────

function renderChat() {
  const conversations = state.listings.slice(0, 6);
  $('#conversationList').innerHTML = conversations.map(item => `
    <div class="conversation-item ${state.selectedChat === item.id ? 'active' : ''}" data-chat="${item.id}">
      <span class="item-icon">${item.emoji}</span>
      <div>
        <strong>${item.seller}</strong>
        <span>${item.title}</span>
      </div>
    </div>`).join('');

  const item = state.listings.find(listing => listing.id === state.selectedChat) || state.listings[0];
  $('#chatContext').innerHTML = `
    <div><strong>${item.title}</strong><span>Chat with ${item.seller} · ${formatPrice(item)}</span></div>
    <button class="secondary-button" data-meetup="${item.id}">Meetup</button>`;
  $('#messages').innerHTML = `
    <div class="message them">Hi! This ${item.category.toLowerCase()} is still available. I can meet near ${item.meetup}.</div>
    <div class="message me">Great. Is the condition exactly as mentioned?</div>
    <div class="message them">Yes, and I can show it before final exchange. CampMart verified meetup works for me.</div>`;
  $('#quickReplies').innerHTML = quickReplies.map(reply =>
    `<button data-quick-reply="${reply}">${reply}</button>`
  ).join('');
}

function appendMessage(text, own = true) {
  if (!text.trim()) return;
  const bubble = document.createElement('div');
  bubble.className = `message ${own ? 'me' : 'them'}`;
  bubble.textContent = text.trim();
  $('#messages').appendChild(bubble);
  $('#messages').scrollTop = $('#messages').scrollHeight;
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function renderDashboard() {
  $('#statListings').textContent = state.listings.length;

  // My listings
  const mine = state.listings.filter(item =>
    item.sellerInitials === 'VV' || item.seller === state.user?.name
  ).slice(0, 6);

  $('#myListings').innerHTML = mine.map(item => `
    <div class="my-listing-row">
      <span class="item-icon">${item.emoji}</span>
      <div>
        <strong>${item.title}</strong>
        <span>${item.type} · ${item.condition} · ${item.saves} saves</span>
      </div>
      <span class="row-price">${formatPrice(item)}</span>
    </div>`).join('')
    || `<div class="empty-state"><span>🛍️</span><h3>No personal listings yet</h3><p>Post your first item to fill your dashboard.</p></div>`;

  // ── NEW: Render buyer/renter transaction records ──
  const txnSection = document.getElementById('transactionSection');
  if (!txnSection) return;

  const txns = state.transactions.slice().reverse().slice(0, 20);

  if (!txns.length) {
    txnSection.innerHTML = `<div class="empty-state"><span>📋</span><h3>No transactions yet</h3><p>When a student buys or rents an item, their details appear here.</p></div>`;
    return;
  }

  txnSection.innerHTML = txns.map(t => `
    <div class="my-listing-row" style="flex-wrap:wrap;gap:6px;align-items:flex-start;padding:14px 0">
      <span class="item-icon">${t.itemEmoji}</span>
      <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:4px">
        <strong style="font-size:0.9rem">${t.itemTitle}</strong>
        <span style="font-size:0.78rem;color:var(--muted)">
          ${t.itemType === 'Rent' ? `🔑 Rented · ${t.rentDays} day(s)` : '🛒 Purchased'} ·
          ${t.itemPrice} · 🕐 ${t.timestamp}
        </span>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;margin-top:4px;font-size:0.82rem;display:flex;flex-direction:column;gap:3px">
          <span>👤 <strong>${t.buyerName}</strong></span>
          <span>📞 ${t.buyerPhone} &nbsp;·&nbsp; ✉️ ${t.buyerEmail}</span>
          <span>🎓 ${t.buyerBranch}</span>
          ${t.rentDays ? `<span>📅 ${t.rentDays} day(s) rental</span>` : ''}
          ${t.note ? `<span>💬 "${t.note}"</span>` : ''}
        </div>
      </div>
      <span class="meta-pill" style="align-self:flex-start;margin-top:2px;background:${t.status === 'Pending' ? '#fef3c7' : '#d1fae5'};color:${t.status === 'Pending' ? '#92400e' : '#065f46'}">${t.status}</span>
    </div>`).join('');
}

// ── User UI ───────────────────────────────────────────────────────────────────

function updateUserUI() {
  const name = state.user?.name || 'Guest Student';
  const verified = state.user?.verified;
  $('#loginBtn').textContent = verified ? initials(name) : 'Mock Login';
  $('#sidebarName').textContent = name;
  $('#sidebarStatus').textContent = verified ? '✅ Verified campus student' : 'Not verified';
  $('#verifyBtn').textContent = verified ? 'Verified ✓' : 'Verify Student';
}

function renderMeetupOptions() {
  $('#meetupOptions').innerHTML = meetupPoints.map(point => `
    <div class="meetup-option ${state.selectedMeetup === point ? 'active' : ''}" data-point="${point}">
      <div>
        <strong>${point}</strong>
        <p style="margin:4px 0 0;color:var(--muted)">Public campus spot with safer exchange visibility.</p>
      </div>
      <span>${state.selectedMeetup === point ? '✓' : '○'}</span>
    </div>`).join('');
}

// ── NEW: Open Buy / Rent modal ────────────────────────────────────────────────

function openBuyModal(itemId) {
  const item = state.listings.find(l => l.id === itemId);
  if (!item) return;

  // Set modal title & subtitle
  $('#buyItemId').value = itemId;
  $('#buyModalTitle').textContent = item.type === 'Rent' ? '🔑 Rent This Item' : '🛒 Buy This Item';
  $('#buyModalSubtitle').innerHTML = `
    <span style="font-size:1.4rem">${item.emoji}</span>
    <div>
      <strong>${item.title}</strong><br>
      <span style="color:var(--muted);font-size:0.8rem">${formatPrice(item)} · Seller: ${item.seller} · 📍 ${item.meetup}</span>
    </div>`;

  // Change submit button label
  $('#buySubmitBtn').textContent = item.type === 'Rent' ? '✅ Confirm Rental' : '✅ Confirm Purchase';

  // Show rent-days field only for rentals
  $('#rentDaysField').style.display = item.type === 'Rent' ? 'block' : 'none';

  // Pre-fill from logged-in user if available
  if (state.user) {
    $('#buyerName').value   = state.user.name   || '';
    $('#buyerEmail').value  = state.user.email  || '';
    $('#buyerBranch').value = state.user.branch || '';
  } else {
    $('#buyerName').value = $('#buyerEmail').value = $('#buyerBranch').value = '';
  }
  $('#buyerPhone').value = '';
  $('#buyerNote').value  = '';
  $('#rentDays').value   = 1;

  openModal('buyModal');
}

// ── Photo upload helpers ──────────────────────────────────────────────────────

function resetUploadUI() {
  const zone = $('#mockUpload');
  const grid = $('#photoPreviewGrid');
  if (grid) grid.innerHTML = '';
  if (zone) {
    zone.classList.remove('added');
    zone.querySelector('span').textContent   = '📷';
    zone.querySelector('strong').textContent = 'Upload Photos';
    zone.querySelector('p').textContent      = 'Click to select images (JPG, PNG, WebP)';
  }
}

function updateUploadLabel() {
  const zone  = $('#mockUpload');
  const count = state.uploadedPhotos.length;
  if (count === 0) {
    zone.classList.remove('added');
    zone.querySelector('span').textContent   = '📷';
    zone.querySelector('strong').textContent = 'Upload Photos';
    zone.querySelector('p').textContent      = 'Click to select images (JPG, PNG, WebP)';
  } else {
    zone.classList.add('added');
    zone.querySelector('span').textContent   = '✅';
    zone.querySelector('strong').textContent = `${count} photo${count > 1 ? 's' : ''} added`;
    zone.querySelector('p').textContent      = count < 5 ? 'Click to add more' : 'Maximum reached (5/5)';
  }
}

// ── Event wiring ──────────────────────────────────────────────────────────────

function setupEvents() {

  document.addEventListener('click', event => {

    const routeButton = event.target.closest('[data-route]');
    if (routeButton) { event.preventDefault(); location.hash = routeButton.dataset.route; return; }

    const detailsButton = event.target.closest('[data-details]');
    if (detailsButton) { location.hash = `details/${detailsButton.dataset.details}`; return; }

    const saveButton = event.target.closest('[data-save]');
    if (saveButton) { event.stopPropagation(); toggleSave(saveButton.dataset.save); return; }

    // ── NEW: Buy / Rent Now ──
    const buyButton = event.target.closest('[data-buy]');
    if (buyButton) { openBuyModal(buyButton.dataset.buy); return; }

    const messageButton = event.target.closest('[data-message]');
    if (messageButton) {
      state.selectedChat = messageButton.dataset.message;
      location.hash = 'chat';
      setTimeout(() => showToast('Opened secure verified chat'), 180);
      return;
    }

    const meetupButton = event.target.closest('[data-meetup]');
    if (meetupButton) {
      const item = state.listings.find(listing => listing.id === meetupButton.dataset.meetup);
      state.selectedMeetup = item?.meetup || state.selectedMeetup;
      renderMeetupOptions();
      openModal('meetupModal');
      return;
    }

    const reserveButton = event.target.closest('[data-reserve]');
    if (reserveButton) {
      const item = state.listings.find(listing => listing.id === reserveButton.dataset.reserve);
      showToast(`${item?.title || 'Item'} reserved in mock prototype`);
      return;
    }

    const categoryButton = event.target.closest('[data-category]');
    if (categoryButton) { state.selectedCategory = categoryButton.dataset.category; renderMarketplace(); return; }

    const typeButton = event.target.closest('[data-type]');
    if (typeButton) { state.selectedType = typeButton.dataset.type; renderMarketplace(); return; }

    const quickFill = event.target.closest('[data-fill]');
    if (quickFill) {
      const value = quickFill.dataset.fill;
      if (types.includes(value)) state.selectedType = value;
      else state.selectedCategory = value;
      renderMarketplace();
      showToast(`Filtered ${value} resources`);
      return;
    }

    const chatItem = event.target.closest('[data-chat]');
    if (chatItem) { state.selectedChat = chatItem.dataset.chat; renderChat(); return; }

    const quickReply = event.target.closest('[data-quick-reply]');
    if (quickReply) { appendMessage(quickReply.dataset.quickReply); return; }

    const closeBtn = event.target.closest('[data-close]');
    if (closeBtn) closeModal(closeBtn.dataset.close);

    const point = event.target.closest('[data-point]');
    if (point) { state.selectedMeetup = point.dataset.point; renderMeetupOptions(); }
  });

  $('#mobileMenuBtn').addEventListener('click', () => $('#mobileMenu').classList.toggle('open'));

  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('campmartTheme', next);
    $('#themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
  });

  $('#loginBtn').addEventListener('click', () => openModal('loginModal'));
  $('#verifyBtn').addEventListener('click', () => openModal('verifyModal'));

  $('#completeVerify').addEventListener('click', () => {
    state.user = state.user || { name: 'Yash Jain', email: 'yash@campus.edu', branch: 'CSE - AI & ML, 2nd Year' };
    state.user.verified = true;
    persistUser(); updateUserUI(); closeModal('verifyModal');
    showToast('Student verification completed');
  });

  $('#loginForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    state.user = { ...data, verified: true };
    persistUser(); updateUserUI(); closeModal('loginModal');
    showToast(`Welcome ${data.name.split(' ')[0]}, you are verified`);
  });

  $('#confirmMeetup').addEventListener('click', () => {
    closeModal('meetupModal');
    showToast(`Meetup confirmed at ${state.selectedMeetup}`);
  });

  $$('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', event => {
      if (event.target === backdrop) backdrop.classList.remove('open');
    });
  });

  $('#searchInput').addEventListener('input', event => {
    state.search = event.target.value;
    renderMarketplace();
  });

  $('#budgetRange').addEventListener('input', event => {
    state.budget = Number(event.target.value);
    renderMarketplace();
  });

  $('#resetFilters').addEventListener('click', () => {
    state.selectedCategory = 'All';
    state.selectedType     = 'All';
    state.search           = '';
    state.budget           = 80000;
    $('#budgetRange').value = 80000;
    renderMarketplace();
    showToast('Filters reset');
  });

  $('#postForm').addEventListener('input',  renderLivePreview);
  $('#postForm').addEventListener('change', renderLivePreview);
  $('#postForm').addEventListener('submit', publishListing);

  $$('.next-step').forEach(button => button.addEventListener('click', () => {
    const current = Number($('.form-step.active').dataset.step);
    setStep(Math.min(3, current + 1));
    renderLivePreview();
  }));
  $$('.prev-step').forEach(button => button.addEventListener('click', () => {
    const current = Number($('.form-step.active').dataset.step);
    setStep(Math.max(1, current - 1));
    renderLivePreview();
  }));

  // Photo upload
  $('#mockUpload').addEventListener('click', (event) => {
    if (event.target.id === 'photoInput') return;
    if (event.target.closest('button')) return;
    $('#photoInput').click();
  });

  $('#photoInput').addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    const slotsLeft = 5 - state.uploadedPhotos.length;
    const toProcess = files.slice(0, slotsLeft);
    if (!toProcess.length) { showToast('Maximum 5 photos allowed'); return; }
    const grid = $('#photoPreviewGrid');
    toProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        state.uploadedPhotos.push(base64);
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:relative;width:80px;height:80px;border-radius:10px;overflow:hidden;border:2px solid var(--border)';
        const img = document.createElement('img');
        img.src = base64;
        img.style.cssText = 'width:100%;height:100%;object-fit:cover';
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✕';
        removeBtn.style.cssText = 'position:absolute;top:2px;right:2px;background:rgba(0,0,0,0.6);color:#fff;border:none;border-radius:50%;width:18px;height:18px;font-size:10px;cursor:pointer;line-height:18px;padding:0;text-align:center';
        removeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const idx = state.uploadedPhotos.indexOf(base64);
          if (idx !== -1) state.uploadedPhotos.splice(idx, 1);
          wrapper.remove();
          updateUploadLabel();
          renderLivePreview();
        });
        wrapper.appendChild(img);
        wrapper.appendChild(removeBtn);
        grid.appendChild(wrapper);
        updateUploadLabel();
        renderLivePreview();
      };
      reader.readAsDataURL(file);
    });
    showToast(`${Math.min(files.length, slotsLeft)} photo${files.length > 1 ? 's' : ''} uploaded`);
    event.target.value = '';
  });

  // ── NEW: Buyer / Renter form submission ──────────────────────────────────
  $('#buyerForm').addEventListener('submit', event => {
    event.preventDefault();

    const itemId = $('#buyItemId').value;
    const item   = state.listings.find(l => l.id === itemId);
    const rentDays = (item?.type === 'Rent') ? (Number($('#rentDays').value) || 1) : null;

    const transaction = {
      id:           `txn-${Date.now()}`,
      itemId,
      itemTitle:    item?.title    || 'Unknown Item',
      itemEmoji:    item?.emoji    || '🛍️',
      itemType:     item?.type     || 'Sell',
      itemPrice:    item ? formatPrice(item) : '—',
      itemPriceNum: item?.price    || 0,
      sellerName:   item?.seller   || '—',
      buyerName:    $('#buyerName').value.trim(),
      buyerPhone:   $('#buyerPhone').value.trim(),
      buyerEmail:   $('#buyerEmail').value.trim(),
      buyerBranch:  $('#buyerBranch').value.trim(),
      rentDays,
      note:         $('#buyerNote').value.trim(),
      status:       'Pending',
      timestamp:    new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    };

    state.transactions.push(transaction);
    persistTransactions();
    closeModal('buyModal');
    event.target.reset();

    showToast(`✅ Request sent to ${item?.seller || 'seller'}! Details saved.`);

    // Live-refresh dashboard if it is currently open
    if (state.route === 'dashboard') renderDashboard();
  });
  // ────────────────────────────────────────────────────────────────────────────

  $('#messageForm').addEventListener('submit', event => {
    event.preventDefault();
    appendMessage($('#messageInput').value);
    $('#messageInput').value = '';
    setTimeout(() => appendMessage('Thanks! I will confirm the meetup details on CampMart.', false), 800);
  });

  $('#applySmartBundle').addEventListener('click', () => {
    ['book-dsa-01', 'calc-casio-991', 'macbook-air-m1'].forEach(id => {
      if (!state.saved.includes(id)) state.saved.push(id);
    });
    localStorage.setItem('campmartSaved', JSON.stringify(state.saved));
    renderRecommendations();
    showToast('Smart bundle saved to wishlist');
  });

  window.addEventListener('hashchange', routeFromHash);
}

// ── Boot ──────────────────────────────────────────────────────────────────────

function boot() {
  const savedTheme = localStorage.getItem('campmartTheme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  $('#themeToggle').textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
  renderMarketplace();
  renderRecommendations();
  renderLivePreview();
  renderChat();
  renderDashboard();
  updateUserUI();
  setupEvents();
  routeFromHash();
}


document.addEventListener('DOMContentLoaded', boot);
