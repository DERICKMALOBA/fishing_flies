(function () {
  'use strict';

  const WHATSAPP_NUMBER = '+254728498094';
  const WHATSAPP_MESSAGE = 'Hello! I would like to order fishing flies from your catalog.';

  const products = [
    { name: 'Adams Dry Fly', category: 'dry-flies', url: 'dry-flies.html', keywords: ['fly', 'fily', 'surface', 'trout'] },
    { name: 'Royal Coachman', category: 'dry-flies', url: 'dry-flies.html', keywords: ['fly', 'fily', 'attractor', 'trout'] },
    { name: 'Elk Hair Caddis', category: 'dry-flies', url: 'dry-flies.html', keywords: ['fly', 'fily', 'caddis', 'trout'] },
    { name: 'Blue Wing Olive', category: 'dry-flies', url: 'dry-flies.html', keywords: ['fly', 'fily', 'baetis', 'trout'] },
    { name: 'Adams Parachute', category: 'parachutes', url: 'parachutes.html', keywords: ['fly', 'fily', 'surface', 'trout'] },
    { name: 'Purple Haze Parachute', category: 'parachutes', url: 'parachutes.html', keywords: ['fly', 'fily', 'attractor', 'trout'] },
    { name: 'Parachute BWO', category: 'parachutes', url: 'parachutes.html', keywords: ['fly', 'fily', 'baetis', 'trout'] },
    { name: 'Pheasant Tail Nymph', category: 'nymphs', url: 'nymphs.html', keywords: ['fly', 'fily', 'subsurface', 'trout'] },
    { name: 'Hares Ear Nymph', category: 'nymphs', url: 'nymphs.html', keywords: ['fly', 'fily', 'buggy', 'trout'] },
    { name: 'Prince Nymph', category: 'nymphs', url: 'nymphs.html', keywords: ['fly', 'fily', 'weighted', 'trout'] },
    { name: 'RS2 Emerger', category: 'emergers', url: 'emergers.html', keywords: ['fly', 'fily', 'rising', 'trout'] },
    { name: 'CDC Emerger', category: 'emergers', url: 'emergers.html', keywords: ['fly', 'fily', 'foam', 'trout'] },
    { name: 'Klinkhammer', category: 'emergers', url: 'emergers.html', keywords: ['fly', 'fily', 'parachute', 'trout'] },
    { name: 'Zebra Midge', category: 'midges', url: 'midges.html', keywords: ['fly', 'fily', 'small', 'trout'] },
    { name: 'Brassie', category: 'midges', url: 'midges.html', keywords: ['fly', 'fily', 'copper', 'trout'] },
    { name: 'WD-40 Midge', category: 'midges', url: 'midges.html', keywords: ['fly', 'fily', 'emerger', 'trout'] },
    { name: 'BH Pheasant Tail', category: 'bh-nymphs', url: 'bh-nymphs.html', keywords: ['fly', 'fily', 'bead', 'heavy'] },
    { name: 'BH Hares Ear', category: 'bh-nymphs', url: 'bh-nymphs.html', keywords: ['fly', 'fily', 'bead', 'heavy'] },
    { name: 'BH Prince Nymph', category: 'bh-nymphs', url: 'bh-nymphs.html', keywords: ['fly', 'fily', 'bead', 'heavy'] },
    { name: 'Tungsten Jig Nymph', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html', keywords: ['fly', 'fily', 'competition', 'euro'] },
    { name: 'Tungsten Perdigon', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html', keywords: ['fly', 'fily', 'fast', 'sink'] },
    { name: 'Tungsten Euro Nymph', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html', keywords: ['fly', 'fily', 'jig', 'heavy'] },
    { name: 'Foam Ant', category: 'terrestrials', url: 'terrestrials.html', keywords: ['fly', 'fily', 'land', 'bug'] },
    { name: 'Foam Beetle', category: 'terrestrials', url: 'terrestrials.html', keywords: ['fly', 'fily', 'land', 'bug'] },
    { name: 'Hopper Pattern', category: 'terrestrials', url: 'terrestrials.html', keywords: ['fly', 'fily', 'grasshopper', 'land'] },
    { name: 'Bob Brooks Special', category: 'bob-brooks', url: 'bob-brooks.html', keywords: ['fly', 'fily', 'classic', 'pattern'] },
    { name: 'Shane Stalcup Original', category: 'shane-stalcup', url: 'shane-stalcup.html', keywords: ['fly', 'fily', 'realistic', 'expert'] },
    { name: 'Skip Morris Emerger', category: 'skip-morris', url: 'skip-morris.html', keywords: ['fly', 'fily', 'signature', 'expert'] },
    { name: 'Rene Harrop CDC', category: 'rene-harrop', url: 'rene-harrop.html', keywords: ['fly', 'fily', 'master', 'cdc'] },
    { name: 'Woolly Bugger', category: 'streamers', url: 'streamers.html', keywords: ['fly', 'fily', 'baitfish', 'active'] },
    { name: 'Muddler Minnow', category: 'streamers', url: 'streamers.html', keywords: ['fly', 'fily', 'deerhair', 'head'] },
    { name: 'Clouser Minnow', category: 'streamers', url: 'streamers.html', keywords: ['fly', 'fily', 'sculpin', 'weighted'] },
    { name: 'BH Woolly Bugger', category: 'bh-streamers', url: 'bh-streamers.html', keywords: ['fly', 'fily', 'bead', 'heavy'] },
    { name: 'BH Zonker', category: 'bh-streamers', url: 'bh-streamers.html', keywords: ['fly', 'fily', 'rabbit', 'bead'] },
    { name: 'Czech Nymph Classic', category: 'czech-nymphs', url: 'czech-nymphs.html', keywords: ['fly', 'fily', 'grub', 'weighted'] },
    { name: 'Vladi Worm', category: 'czech-nymphs', url: 'czech-nymphs.html', keywords: ['fly', 'fily', 'worm', 'weighted'] },
    { name: 'Bass Bugger', category: 'warmwater', url: 'warmwater.html', keywords: ['fly', 'fily', 'bass', 'warm'] },
    { name: 'Crayfish Pattern', category: 'warmwater', url: 'warmwater.html', keywords: ['fly', 'fily', 'crawdad', 'warm'] },
    { name: 'Foam Popper', category: 'poppers', url: 'poppers.html', keywords: ['fly', 'fily', 'topwater', 'bass'] },
    { name: 'Bass Popper', category: 'poppers', url: 'poppers.html', keywords: ['fly', 'fily', 'chugger', 'bass'] },
    { name: 'Egg Sucking Leech', category: 'steelhead', url: 'steelhead.html', keywords: ['fly', 'fily', 'salmon', 'steelhead'] },
    { name: 'Intruder', category: 'steelhead', url: 'steelhead.html', keywords: ['fly', 'fily', 'swing', 'steelhead'] },
    { name: 'Crazy Charlie', category: 'saltwater', url: 'saltwater.html', keywords: ['fly', 'fily', 'bonefish', 'salt'] },
    { name: 'Gotcha', category: 'saltwater', url: 'saltwater.html', keywords: ['fly', 'fily', 'bonefish', 'permit'] },
    { name: 'Lefty Deceiver', category: 'saltwater', url: 'saltwater.html', keywords: ['fly', 'fily', 'baitfish', 'tarpon'] }
  ];

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase().trim();

      if (query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
      }

      const matches = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.keywords && product.keywords.some(k => k.toLowerCase().includes(query)))
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No products found</div>';
        searchResults.classList.add('active');
        return;
      }

      const resultsHTML = matches.slice(0, 8).map(product => `
        <a href="${product.url}" class="search-result-item">
          <i class="fas fa-fish"></i>
          <div>
            <strong>${highlightMatch(product.name, query)}</strong>
            <small class="d-block text-muted">${formatCategory(product.category)}</small>
          </div>
        </a>
      `).join('');

      searchResults.innerHTML = resultsHTML;
      searchResults.classList.add('active');
    });

    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function formatCategory(category) {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  function initWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('[data-whatsapp]');

    whatsappLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const customMessage = this.dataset.whatsapp || WHATSAPP_MESSAGE;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
        window.open(url, '_blank');
      });
    });
  }

  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px'
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  function init() {
    initSearch();
    initWhatsAppLinks();
    initLazyLoading();
    initSmoothScroll();
    initNavbarScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
