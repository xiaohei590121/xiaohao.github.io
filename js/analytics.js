/**
 * Enhanced Analytics Tracking
 * Tracks reading progress, outbound links, downloads, and conversions
 */

(function() {
  'use strict';

  // Check if gtag is available
  if (typeof gtag === 'undefined') {
    console.log('Google Analytics not loaded, skipping enhanced tracking');
    return;
  }

  // Utility: Throttle function
  function throttle(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      if (!timeout) {
        timeout = setTimeout(function() {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    };
  }

  // 1. Reading Progress Tracking
  var readingMilestones = [25, 50, 75, 100];
  var milestonesReached = {};

  function trackReadingProgress() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

    readingMilestones.forEach(function(milestone) {
      if (scrollPercent >= milestone && !milestonesReached[milestone]) {
        milestonesReached[milestone] = true;

        gtag('event', 'scroll', {
          'event_category': 'engagement',
          'event_label': milestone + '%',
          'value': milestone
        });

        console.log('Reading progress: ' + milestone + '%');
      }
    });
  }

  // Attach scroll listener with throttling
  window.addEventListener('scroll', throttle(trackReadingProgress, 1000));

  // 2. Outbound Link Tracking
  function trackOutboundLink(event) {
    var link = event.target.closest('a');
    if (!link) return;

    var url = link.href;
    var hostname = link.hostname;
    var currentHostname = window.location.hostname;

    // Check if it's an outbound link
    if (hostname && hostname !== currentHostname) {
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon'
      });

      console.log('Outbound link clicked: ' + url);
    }
  }

  // Attach click listener to document
  document.addEventListener('click', trackOutboundLink);

  // 3. Download Tracking
  var downloadExtensions = ['.pdf', '.zip', '.docx', '.xlsx', '.pptx', '.csv', '.txt', '.json', '.xml'];

  function trackDownload(event) {
    var link = event.target.closest('a');
    if (!link) return;

    var url = link.href;
    var isDownload = downloadExtensions.some(function(ext) {
      return url.toLowerCase().endsWith(ext);
    });

    if (isDownload) {
      var fileName = url.split('/').pop();

      gtag('event', 'file_download', {
        'event_category': 'downloads',
        'event_label': fileName,
        'value': 1
      });

      console.log('File download tracked: ' + fileName);
    }
  }

  document.addEventListener('click', trackDownload);

  // 4. Social Share Tracking
  function trackSocialShare(platform, url) {
    gtag('event', 'share', {
      'event_category': 'social',
      'event_label': platform,
      'value': url
    });

    console.log('Social share: ' + platform);
  }

  // Expose to global scope for use in share buttons
  window.trackSocialShare = trackSocialShare;

  // 5. Newsletter Signup Tracking
  function trackNewsletterSignup(event) {
    // Look for newsletter forms
    var form = event.target;
    if (form.tagName === 'FORM' && (
        form.id === 'newsletter-form' ||
        form.classList.contains('newsletter-form') ||
        form.querySelector('input[type="email"][name="email"]')
    )) {
      gtag('event', 'sign_up', {
        'event_category': 'conversion',
        'event_label': 'newsletter',
        'value': 1
      });

      console.log('Newsletter signup tracked');
    }
  }

  document.addEventListener('submit', trackNewsletterSignup);

  // 6. Time on Page (send when user leaves)
  var startTime = new Date().getTime();

  function trackTimeOnPage() {
    var endTime = new Date().getTime();
    var timeSpent = Math.round((endTime - startTime) / 1000); // in seconds

    if (timeSpent > 5) { // Only track if more than 5 seconds
      gtag('event', 'timing_complete', {
        'event_category': 'engagement',
        'name': 'time_on_page',
        'value': timeSpent,
        'event_label': document.title
      });

      console.log('Time on page: ' + timeSpent + 's');
    }
  }

  window.addEventListener('beforeunload', trackTimeOnPage);

  // 7. CTA Click Tracking
  function trackCTAClick(event) {
    var element = event.target.closest('a, button');
    if (!element) return;

    var isCTA = element.classList.contains('cta') ||
                element.classList.contains('btn-cta') ||
                element.hasAttribute('data-cta');

    if (isCTA) {
      var ctaLabel = element.textContent.trim() || element.getAttribute('aria-label') || 'Unknown CTA';

      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': ctaLabel,
        'value': 1
      });

      console.log('CTA clicked: ' + ctaLabel);
    }
  }

  document.addEventListener('click', trackCTAClick);

  console.log('Enhanced analytics tracking initialized');

})();
