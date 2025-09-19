import { logEvent, getAnalytics } from "firebase/analytics";

class AdvancedAnalytics {
  constructor() {
    this.analytics = null;
    this.maxScrollDepth = 0;
    this.startTime = null;
    this.scrollListener = null;
  }

  // Initialize analytics instance (called after Firebase app is initialized)
  initialize() {
    if (!this.analytics) {
      this.analytics = getAnalytics();
    }
  }

  // Helper method to add common timestamp and event data
  _logEvent(eventName, eventParams = {}) {
    if (!this.analytics) {
      console.warn('Analytics not initialized. Call initialize() first.');
      return;
    }
    logEvent(this.analytics, eventName, {
      timestamp: new Date().toISOString(),
      ...eventParams
    });
  }

  // Enhanced page view tracking
  trackPageView(location) {
    const page_path = location.pathname + location.search;
    const page_title = document.title;

    logEvent(this.analytics, "page_view", {
      page_path: page_path,
      page_title: page_title,
      page_location: window.location.href,
      referrer: document.referrer || '(direct)',
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
      page_load_time: Date.now()
    });

    this.trackSpecificPageTypes(page_path, page_title);
    this.startEngagementTracking(page_path);
  }

  // Track specific page types for better insights
  trackSpecificPageTypes(page_path, page_title) {
    if (page_path.includes('/blog/')) {
      const blogSlug = page_path.split('/blog/')[1]?.split('?')[0];
      logEvent(this.analytics, "blog_post_view", {
        blog_slug: blogSlug,
        blog_title: page_title,
        referrer: document.referrer || '(direct)'
      });
    } else if (page_path.includes('/Products')) {
      logEvent(this.analytics, "products_page_view", {
        referrer: document.referrer || '(direct)',
        user_agent: navigator.userAgent
      });
    } else if (page_path.includes('/Contact')) {
      logEvent(this.analytics, "contact_page_view", {
        referrer: document.referrer || '(direct)'
      });
    } else if (page_path === '/' || page_path === '') {
      logEvent(this.analytics, "homepage_view", {
        referrer: document.referrer || '(direct)',
        is_returning_visitor: localStorage.getItem('visited_before') === 'true'
      });
      localStorage.setItem('visited_before', 'true');
    }
  }

  // Start tracking user engagement metrics
  startEngagementTracking(page_path) {
    this.startTime = Date.now();

    return () => {
      const timeOnPage = Date.now() - this.startTime;
      if (timeOnPage > 5000) { // Only track if user stayed more than 5 seconds
        logEvent(this.analytics, "page_engagement", {
          page_path: page_path,
          time_on_page: timeOnPage,
          engaged_session: timeOnPage > 30000 // 30+ seconds = engaged
        });
      }
    };
  }

  // Initialize scroll depth tracking
  initializeScrollTracking(location) {
    this.maxScrollDepth = 0;

    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercentage > this.maxScrollDepth) {
        this.maxScrollDepth = scrollPercentage;

        // Track milestone scroll depths
        if ([25, 50, 75, 90].includes(scrollPercentage)) {
          logEvent(this.analytics, "scroll_depth", {
            page_path: location.pathname + location.search,
            scroll_percentage: scrollPercentage
          });
        }
      }
    };

    // Remove existing listener if any
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }

    this.scrollListener = trackScrollDepth;
    window.addEventListener('scroll', this.scrollListener);

    // Return cleanup function
    return () => {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener);
        this.scrollListener = null;
      }
    };
  }

  // Track button clicks and interactions
  trackButtonClick(buttonName, location, additionalData = {}) {
    this._logEvent("button_click", {
      button_name: buttonName,
      page_location: location,
      ...additionalData
    });
  }

  // Track external link clicks
  trackExternalLinkClick(linkUrl, linkText, location) {
    this._logEvent("external_link_click", {
      link_url: linkUrl,
      link_text: linkText,
      page_location: location,
      outbound: true
    });
  }

  // Track social media link clicks
  trackSocialMediaClick(platform, action, location) {
    this._logEvent("social_media_interaction", {
      platform: platform,
      action: action,
      page_location: location
    });
  }

  // Track app store button clicks
  trackAppStoreClick(store, appName, location) {
    this._logEvent("app_store_click", {
      store: store,
      app_name: appName,
      page_location: location,
      conversion_action: true
    });
  }

  // Track contact form interactions
  trackContactInteraction(action, method = null) {
    this._logEvent("contact_interaction", {
      action: action,
      contact_method: method,
      conversion_potential: true
    });
  }

  // Track search/filter actions
  trackSearchAction(searchTerm, location, resultsCount = null) {
    this._logEvent("search", {
      search_term: searchTerm,
      page_location: location,
      results_count: resultsCount
    });
  }

  // Track mobile vs desktop usage patterns
  trackDeviceInfo() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    this._logEvent("device_info", {
      device_type: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      user_agent: navigator.userAgent,
      platform: navigator.platform
    });
  }

  // Track blog engagement with enhanced functionality
  trackBlogEngagement(action, blogSlug, additionalData = {}) {
    this._logEvent("blog_engagement", {
      action: action,
      blog_slug: blogSlug,
      ...additionalData
    });
  }

  // Track blog post read time (enhanced version for BlogPost component)
  trackBlogPostView(post) {
    if (post?.urlSlug) {
      this.trackBlogEngagement('view', post.urlSlug, {
        title: post.title,
        read_time: post.readTime
      });
    }

    // Return cleanup function for read time tracking
    const startTime = Date.now();
    return () => {
      const readTime = Date.now() - startTime;
      if (readTime > 10000 && post?.urlSlug) {
        this.trackBlogEngagement('read_time', post.urlSlug, {
          read_duration: readTime,
          title: post.title
        });
      }
    };
  }

  // Track portfolio/project interactions
  trackProjectInteraction(projectName, action, location) {
    this._logEvent("project_interaction", {
      project_name: projectName,
      action: action,
      page_location: location
    });
  }

  // Track user journey/funnel
  trackUserJourney(step, location, previousStep = null) {
    this._logEvent("user_journey", {
      current_step: step,
      previous_step: previousStep,
      page_location: location,
      session_id: sessionStorage.getItem('session_id') || 'unknown'
    });
  }

  // Initialize session tracking
  initializeSession() {
    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', Date.now().toString());
      this._logEvent("session_start", {
        session_id: sessionStorage.getItem('session_id'),
        referrer: document.referrer || '(direct)',
        is_new_visitor: !localStorage.getItem('visited_before')
      });
    }
  }

  // Clean up all event listeners
  cleanup() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
      this.scrollListener = null;
    }
  }
}

// Export singleton instance
const advancedAnalyticsInstance = new AdvancedAnalytics();
export default advancedAnalyticsInstance;