// Affiliate Marketing Website - Main JavaScript
// Comprehensive functionality for all interactive components

class AffiliateMarketingSite {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.blogPosts = this.initializeBlogPosts();
        this.topPicks = this.initializeTopPicks();
        this.testimonials = this.initializeTestimonials();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupForms();
        this.initializeBlogSearch();
        this.setupCookieConsent();
        this.initializeScrollEffects();
        this.setupMobileMenu();
        this.initializeCarousels();
    }

    // Blog Posts Data
    initializeBlogPosts() {
        return [
            {
                id: 1,
                title: "Shopify Affiliate Program: Complete 2024 Guide to $150+ Commissions",
                slug: "shopify-affiliate-guide",
                category: "E-commerce",
                tags: ["shopify", "ecommerce", "high-commission", "beginners"],
                excerpt: "Discover how to earn up to $150 per referral with Shopify's lucrative affiliate program. Complete guide for beginners and pros.",
                author: "Omar Ramadan",
                date: "2024-11-20",
                readTime: "8 min read",
                image: "resources/blog/shopify-guide.jpg",
                content: "Complete Shopify affiliate guide content...",
                popular: true,
                recent: true
            },
            {
                id: 2,
                title: "Elementor Affiliate Program: Earn 50% Commission with WordPress's Best Page Builder",
                slug: "elementor-affiliate-review",
                category: "Web Design",
                tags: ["elementor", "wordpress", "web-design", "50-percent"],
                excerpt: "Maximize your earnings with Elementor's generous 50% commission structure. Perfect for WordPress and web design audiences.",
                author: "Omar Ramadan",
                date: "2024-11-18",
                readTime: "6 min read",
                image: "resources/blog/elementor-review.jpg",
                content: "Elementor affiliate program review...",
                popular: true,
                recent: true
            },
            {
                id: 3,
                title: "Skillshare Affiliate Program: $67 Per Referral with Creative Courses",
                slug: "skillshare-affiliate-earnings",
                category: "Education",
                tags: ["skillshare", "online-courses", "creatives", "education"],
                excerpt: "Tap into the $67 billion e-learning market with Skillshare's affiliate program. Perfect for creative and educational content.",
                author: "Omar Ramadan",
                date: "2024-11-15",
                readTime: "7 min read",
                image: "resources/blog/skillshare-earnings.jpg",
                content: "Skillshare affiliate program analysis...",
                popular: false,
                recent: true
            },
            {
                id: 4,
                title: "ClickFunnels Affiliate Program: 40% Recurring Commission Breakdown",
                slug: "clickfunnels-affiliate-commissions",
                category: "Marketing Tools",
                tags: ["clickfunnels", "sales-funnels", "recurring-commission", "marketing"],
                excerpt: "Learn how ClickFunnels' tiered commission structure can generate substantial recurring income for affiliate marketers.",
                author: "Omar Ramadan",
                date: "2024-11-12",
                readTime: "10 min read",
                image: "resources/blog/clickfunnels-commissions.jpg",
                content: "ClickFunnels affiliate commission structure...",
                popular: true,
                recent: false
            },
            {
                id: 5,
                title: "Semrush Affiliate Program: $200+ Per Sale with SEO Tools",
                slug: "semrush-affiliate-seo",
                category: "SEO Tools",
                tags: ["semrush", "seo", "digital-marketing", "high-ticket"],
                excerpt: "Promote the world's leading SEO toolkit and earn $200+ per sale. Perfect for marketing and SEO-focused audiences.",
                author: "Omar Ramadan",
                date: "2024-11-10",
                readTime: "9 min read",
                image: "resources/blog/semrush-seo.jpg",
                content: "Semrush affiliate program guide...",
                popular: true,
                recent: false
            },
            {
                id: 6,
                title: "ConvertKit Affiliate Program: 30% Recurring Commission for Creators",
                slug: "convertkit-affiliate-creators",
                category: "Email Marketing",
                tags: ["convertkit", "email-marketing", "creators", "recurring"],
                excerpt: "Build passive income with ConvertKit's 30% recurring commission. Ideal for content creators and marketing audiences.",
                author: "Omar Ramadan",
                date: "2024-11-08",
                readTime: "5 min read",
                image: "resources/blog/convertkit-creators.jpg",
                content: "ConvertKit affiliate program review...",
                popular: false,
                recent: true
            },
            {
                id: 7,
                title: "Bluehost Affiliate Program: $65-100 Per Signup with Web Hosting",
                slug: "bluehost-affiliate-hosting",
                category: "Web Hosting",
                tags: ["bluehost", "web-hosting", "wordpress", "beginners"],
                excerpt: "Earn $65-100 per signup with one of the most trusted web hosting affiliate programs. Perfect for bloggers and beginners.",
                author: "Omar Ramadan",
                date: "2024-11-05",
                readTime: "6 min read",
                image: "resources/blog/bluehost-hosting.jpg",
                content: "Bluehost affiliate program analysis...",
                popular: true,
                recent: false
            },
            {
                id: 8,
                title: "Best Affiliate Programs for Freelancers: Complete 2024 Comparison",
                slug: "best-affiliate-programs-freelancers",
                category: "Comparison",
                tags: ["freelancers", "comparison", "2024", "best-programs"],
                excerpt: "Compare the top 15+ affiliate programs perfect for freelancers. Commission rates, cookie durations, and earning potential analyzed.",
                author: "Omar Ramadan",
                date: "2024-11-01",
                readTime: "12 min read",
                image: "resources/blog/freelancers-comparison.jpg",
                content: "Complete comparison of affiliate programs for freelancers...",
                popular: true,
                recent: false
            }
        ];
    }

    // Top Picks Data
    initializeTopPicks() {
        return [
            {
                id: 1,
                name: "Shopify",
                description: "E-commerce platform with up to $150 commission per referral",
                commission: "Up to $150",
                cookie: "30 days",
                rating: 4.8,
                category: "E-commerce",
                affiliateLink: "#shopify-affiliate",
                features: ["High conversions", "Trusted brand", "Global reach", "Easy setup"],
                image: "resources/tools/shopify-logo.jpg"
            },
            {
                id: 2,
                name: "Elementor",
                description: "WordPress page builder with 50% commission rate",
                commission: "50% per sale",
                cookie: "30 days",
                rating: 4.7,
                category: "Web Design",
                affiliateLink: "#elementor-affiliate",
                features: ["High commission", "Popular tool", "WordPress focus", "Great support"],
                image: "resources/tools/elementor-logo.jpg"
            },
            {
                id: 3,
                name: "ClickFunnels",
                description: "Sales funnel builder with 40% recurring commission",
                commission: "40% recurring",
                cookie: "45 days",
                rating: 4.6,
                category: "Marketing",
                affiliateLink: "#clickfunnels-affiliate",
                features: ["Recurring income", "High value", "Marketing focus", "Training included"],
                image: "resources/tools/clickfunnels-logo.jpg"
            },
            {
                id: 4,
                name: "Semrush",
                description: "SEO toolkit with $200+ commission per sale",
                commission: "$200+ per sale",
                cookie: "120 days",
                rating: 4.9,
                category: "SEO Tools",
                affiliateLink: "#semrush-affiliate",
                features: ["High ticket", "Long cookie", "Professional tool", "Great reputation"],
                image: "resources/tools/semrush-logo.jpg"
            },
            {
                id: 5,
                name: "ConvertKit",
                description: "Email marketing with 30% recurring commission",
                commission: "30% recurring",
                cookie: "90 days",
                rating: 4.5,
                category: "Email Marketing",
                affiliateLink: "#convertkit-affiliate",
                features: ["Recurring revenue", "Creator focus", "Easy integration", "Good support"],
                image: "resources/tools/convertkit-logo.jpg"
            },
            {
                id: 6,
                name: "Bluehost",
                description: "Web hosting with $65-100 per signup",
                commission: "$65-100 per signup",
                cookie: "60 days",
                rating: 4.4,
                category: "Web Hosting",
                affiliateLink: "#bluehost-affiliate",
                features: ["Beginner friendly", "Trusted host", "WordPress recommended", "High conversion"],
                image: "resources/tools/bluehost-logo.jpg"
            }
        ];
    }

    // Testimonials Data
    initializeTestimonials() {
        return [
            {
                id: 1,
                name: "Sarah Johnson",
                role: "Freelance Designer",
                company: "Design Studio Pro",
                content: "The affiliate programs recommended here have transformed my income. I'm now earning more from affiliate commissions than client work!",
                rating: 5,
                image: "resources/testimonials/sarah.jpg"
            },
            {
                id: 2,
                name: "Mike Chen",
                role: "Digital Marketer",
                company: "Growth Agency",
                content: "Omar's insights on ClickFunnels and Shopify programs helped me build a sustainable recurring income stream. Highly recommended!",
                rating: 5,
                image: "resources/testimonials/mike.jpg"
            },
            {
                id: 3,
                name: "Emma Rodriguez",
                role: "Content Creator",
                company: "Creator Economy",
                content: "The detailed reviews and comparison guides made it easy to choose the right affiliate programs for my audience. My earnings increased 300%!",
                rating: 5,
                image: "resources/testimonials/emma.jpg"
            },
            {
                id: 4,
                name: "David Thompson",
                role: "E-commerce Owner",
                company: "Online Store Success",
                content: "Following the strategies outlined here, I've built multiple income streams that generate passive revenue while I sleep.",
                rating: 5,
                image: "resources/testimonials/david.jpg"
            }
        ];
    }

    // Event Listeners Setup
    setupEventListeners() {
        // Newsletter signup
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', this.handleNewsletterSignup.bind(this));
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm.bind(this));
        }

        // Blog search
        const blogSearch = document.getElementById('blog-search');
        if (blogSearch) {
            blogSearch.addEventListener('input', this.handleBlogSearch.bind(this));
        }

        // Category filters
        const categoryFilters = document.querySelectorAll('.category-filter');
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', this.handleCategoryFilter.bind(this));
        });

        // Social sharing buttons
        const shareButtons = document.querySelectorAll('.social-share');
        shareButtons.forEach(button => {
            button.addEventListener('click', this.handleSocialShare.bind(this));
        });

        // Affiliate link clicks
        const affiliateLinks = document.querySelectorAll('.affiliate-link');
        affiliateLinks.forEach(link => {
            link.addEventListener('click', this.handleAffiliateClick.bind(this));
        });

        // Cookie consent
        const cookieAccept = document.getElementById('cookie-accept');
        if (cookieAccept) {
            cookieAccept.addEventListener('click', this.acceptCookies.bind(this));
        }

        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            backToTop.addEventListener('click', this.scrollToTop.bind(this));
        }
    }

    // Animation Initialization
    initializeAnimations() {
        // Fade in elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Typewriter effect for hero text
        if (typeof Typed !== 'undefined' && document.getElementById('hero-typed')) {
            new Typed('#hero-typed', {
                strings: [
                    'Discover Profitable Affiliate Programs',
                    'Maximize Your Online Income',
                    'Build Sustainable Revenue Streams'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true
            });
        }
    }

    // Form Handling
    setupForms() {
        // Add real-time validation
        const emailInputs = document.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            input.addEventListener('blur', this.validateEmail.bind(this));
            input.addEventListener('input', this.clearValidationError.bind(this));
        });

        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('blur', this.validatePhone.bind(this));
        });
    }

    // Newsletter Signup Handler
    handleNewsletterSignup(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        const submitButton = form.querySelector('button[type="submit"]');

        if (!this.isValidEmail(email)) {
            this.showFormError(form, 'Please enter a valid email address');
            return;
        }

        // Simulate form submission
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> Subscribing...';

        setTimeout(() => {
            this.showFormSuccess(form, 'Thank you! Check your email for your free checklist.');
            this.resetForm(form);
            submitButton.disabled = false;
            submitButton.textContent = 'Get Free Checklist';
            
            // Track conversion
            this.trackEvent('newsletter_signup', { email: email });
        }, 2000);
    }

    // Contact Form Handler
    handleContactForm(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'This field is required');
                isValid = false;
            }
        });

        if (!isValid) return;

        // Simulate form submission
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> Sending...';

        setTimeout(() => {
            this.showFormSuccess(form, 'Thank you! Your message has been sent successfully.');
            this.resetForm(form);
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            
            // Track conversion
            this.trackEvent('contact_form_submit', { 
                name: formData.get('name'),
                email: formData.get('email')
            });
        }, 2000);
    }

    // Blog Search Handler
    handleBlogSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const blogPosts = document.querySelectorAll('.blog-post-card');
        
        blogPosts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
            const tags = post.querySelector('.post-tags').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)) {
                post.style.display = 'block';
                post.classList.add('search-match');
            } else {
                post.style.display = 'none';
                post.classList.remove('search-match');
            }
        });

        // Show no results message
        const visiblePosts = document.querySelectorAll('.blog-post-card[style="display: block"]');
        const noResults = document.getElementById('no-results');
        if (noResults) {
            noResults.style.display = visiblePosts.length > 0 ? 'none' : 'block';
        }
    }

    // Category Filter Handler
    handleCategoryFilter(e) {
        e.preventDefault();
        const category = e.target.dataset.category;
        const blogPosts = document.querySelectorAll('.blog-post-card');
        
        // Update active filter
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.classList.remove('active');
        });
        e.target.classList.add('active');

        // Filter posts
        blogPosts.forEach(post => {
            const postCategory = post.dataset.category;
            if (category === 'all' || postCategory === category) {
                post.style.display = 'block';
                post.classList.add('filter-match');
            } else {
                post.style.display = 'none';
                post.classList.remove('filter-match');
            }
        });
    }

    // Social Share Handler
    handleSocialShare(e) {
        e.preventDefault();
        const platform = e.target.dataset.platform;
        const url = window.location.href;
        const title = document.title;
        
        let shareUrl = '';
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
            this.trackEvent('social_share', { platform: platform });
        }
    }

    // Affiliate Link Handler
    handleAffiliateClick(e) {
        e.preventDefault();
        const link = e.target.closest('.affiliate-link');
        const program = link.dataset.program;
        
        // Show affiliate disclosure modal
        this.showAffiliateModal(program, link.href);
        
        this.trackEvent('affiliate_click', { program: program });
    }

    // Cookie Consent
    setupCookieConsent() {
        const cookieConsent = localStorage.getItem('cookie-consent');
        if (!cookieConsent) {
            const cookieBanner = document.getElementById('cookie-banner');
            if (cookieBanner) {
                cookieBanner.classList.add('show');
            }
        }
    }

    acceptCookies() {
        localStorage.setItem('cookie-consent', 'accepted');
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }

    // Scroll Effects
    initializeScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for hero
            const hero = document.querySelector('.hero-background');
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
            
            // Show/hide back to top button
            const backToTop = document.getElementById('back-to-top');
            if (backToTop) {
                if (scrolled > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            }
            
            ticking = false;
        };
        
        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestScrollUpdate);
    }

    // Mobile Menu
    setupMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        }
    }

    // Carousel Initialization
    initializeCarousels() {
        // Top Picks Carousel
        if (typeof Splide !== 'undefined' && document.querySelector('.top-picks-carousel')) {
            new Splide('.top-picks-carousel', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '2rem',
                autoplay: true,
                interval: 4000,
                breakpoints: {
                    768: { perPage: 1 },
                    1024: { perPage: 2 }
                }
            }).mount();
        }

        // Testimonials Carousel
        if (typeof Splide !== 'undefined' && document.querySelector('.testimonials-carousel')) {
            new Splide('.testimonials-carousel', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 5000,
                arrows: false,
                pagination: true
            }).mount();
        }
    }

    // Utility Functions
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    showFormError(form, message) {
        const errorDiv = form.querySelector('.form-error') || this.createErrorDiv(form);
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    showFormSuccess(form, message) {
        const successDiv = form.querySelector('.form-success') || this.createSuccessDiv(form);
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }

    showFieldError(field, message) {
        const errorDiv = field.parentNode.querySelector('.field-error') || this.createFieldErrorDiv(field);
        errorDiv.textContent = message;
        field.classList.add('error');
    }

    clearValidationError(e) {
        const field = e.target;
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.textContent = '';
        }
    }

    createErrorDiv(form) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error text-red-600 text-sm mt-2';
        form.appendChild(errorDiv);
        return errorDiv;
    }

    createSuccessDiv(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success text-green-600 text-sm mt-2';
        form.appendChild(successDiv);
        return successDiv;
    }

    createFieldErrorDiv(field) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error text-red-600 text-xs mt-1';
        field.parentNode.appendChild(errorDiv);
        return errorDiv;
    }

    resetForm(form) {
        form.reset();
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    showAffiliateModal(program, link) {
        // Create and show affiliate disclosure modal
        const modal = document.createElement('div');
        modal.className = 'affiliate-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-md mx-4">
                <h3 class="text-lg font-bold mb-4">Affiliate Link Disclosure</h3>
                <p class="text-gray-600 mb-4">This is an affiliate link for ${program}. We may earn a commission if you make a purchase through this link, at no additional cost to you.</p>
                <div class="flex gap-3">
                    <button class="continue-btn bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Continue</button>
                    <button class="cancel-btn bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.continue-btn').addEventListener('click', () => {
            window.open(link, '_blank');
            document.body.removeChild(modal);
        });
        
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    trackEvent(eventName, data = {}) {
        // Mock analytics tracking
        console.log('Analytics Event:', eventName, data);
        
        // In production, integrate with Google Analytics, Mixpanel, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AffiliateMarketingSite();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AffiliateMarketingSite;
}