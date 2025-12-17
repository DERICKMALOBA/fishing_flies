(function() {
  'use strict';

  const WHATSAPP_NUMBER = '1234567890';
  const WHATSAPP_MESSAGE = 'Hello! I would like to order fishing flies from your catalog.';

  const products = [
    { name: 'Adams Dry Fly', category: 'dry-flies', url: 'dry-flies.html' },
    { name: 'Royal Coachman', category: 'dry-flies', url: 'dry-flies.html' },
    { name: 'Elk Hair Caddis', category: 'dry-flies', url: 'dry-flies.html' },
    { name: 'Blue Wing Olive', category: 'dry-flies', url: 'dry-flies.html' },
    { name: 'Adams Parachute', category: 'parachutes', url: 'parachutes.html' },
    { name: 'Purple Haze Parachute', category: 'parachutes', url: 'parachutes.html' },
    { name: 'Parachute BWO', category: 'parachutes', url: 'parachutes.html' },
    { name: 'Pheasant Tail Nymph', category: 'nymphs', url: 'nymphs.html' },
    { name: 'Hares Ear Nymph', category: 'nymphs', url: 'nymphs.html' },
    { name: 'Prince Nymph', category: 'nymphs', url: 'nymphs.html' },
    { name: 'RS2 Emerger', category: 'emergers', url: 'emergers.html' },
    { name: 'CDC Emerger', category: 'emergers', url: 'emergers.html' },
    { name: 'Klinkhammer', category: 'emergers', url: 'emergers.html' },
    { name: 'Zebra Midge', category: 'midges', url: 'midges.html' },
    { name: 'Brassie', category: 'midges', url: 'midges.html' },
    { name: 'WD-40 Midge', category: 'midges', url: 'midges.html' },
    { name: 'BH Pheasant Tail', category: 'bh-nymphs', url: 'bh-nymphs.html' },
    { name: 'BH Hares Ear', category: 'bh-nymphs', url: 'bh-nymphs.html' },
    { name: 'BH Prince Nymph', category: 'bh-nymphs', url: 'bh-nymphs.html' },
    { name: 'Tungsten Jig Nymph', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html' },
    { name: 'Tungsten Perdigon', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html' },
    { name: 'Tungsten Euro Nymph', category: 'tungsten-nymphs', url: 'tungsten-nymphs.html' },
    { name: 'Foam Ant', category: 'terrestrials', url: 'terrestrials.html' },
    { name: 'Foam Beetle', category: 'terrestrials', url: 'terrestrials.html' },
    { name: 'Hopper Pattern', category: 'terrestrials', url: 'terrestrials.html' },
    { name: 'Bob Brooks Special', category: 'bob-brooks', url: 'bob-brooks.html' },
    { name: 'Shane Stalcup Original', category: 'shane-stalcup', url: 'shane-stalcup.html' },
    { name: 'Skip Morris Emerger', category: 'skip-morris', url: 'skip-morris.html' },
    { name: 'Rene Harrop CDC', category: 'rene-harrop', url: 'rene-harrop.html' },
    { name: 'Woolly Bugger', category: 'streamers', url: 'streamers.html' },
    { name: 'Muddler Minnow', category: 'streamers', url: 'streamers.html' },
    { name: 'Clouser Minnow', category: 'streamers', url: 'streamers.html' },
    { name: 'BH Woolly Bugger', category: 'bh-streamers', url: 'bh-streamers.html' },
    { name: 'BH Zonker', category: 'bh-streamers', url: 'bh-streamers.html' },
    { name: 'Czech Nymph Classic', category: 'czech-nymphs', url: 'czech-nymphs.html' },
    { name: 'Vladi Worm', category: 'czech-nymphs', url: 'czech-nymphs.html' },
    { name: 'Bass Bugger', category: 'warmwater', url: 'warmwater.html' },
    { name: 'Crayfish Pattern', category: 'warmwater', url: 'warmwater.html' },
    { name: 'Foam Popper', category: 'poppers', url: 'poppers.html' },
    { name: 'Bass Popper', category: 'poppers', url: 'poppers.html' },
    { name: 'Egg Sucking Leech', category: 'steelhead', url: 'steelhead.html' },
    { name: 'Intruder', category: 'steelhead', url: 'steelhead.html' },
    { name: 'Crazy Charlie', category: 'saltwater', url: 'saltwater.html' },
    { name: 'Gotcha', category: 'saltwater', url: 'saltwater.html' },
    { name: 'Lefty Deceiver', category: 'saltwater', url: 'saltwater.html' }
  ];

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
      }

      const matches = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
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

    document.addEventListener('click', function(e) {
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
      link.addEventListener('click', function(e) {
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
      anchor.addEventListener('click', function(e) {
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

    window.addEventListener('scroll', function() {
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
