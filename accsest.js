        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            html.classList.add('dark');
        }
        
        function toggleDarkMode() {
            html.classList.toggle('dark');
            const theme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        }
        
        darkModeToggle?.addEventListener('click', toggleDarkMode);
        darkModeToggleMobile?.addEventListener('click', toggleDarkMode);

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Typing animation
        const texts = ['JavaScript', 'Python', 'React.js', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeText, typeSpeed);
        }
        
        typeText();
        
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => {
            observer.observe(el);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Create space environment
        function createSpaceEnvironment() {
            createStars();
            createShootingStars();
            createNebulas();
            createSectionStars();
        }
        
        function createStars() {
            const starsContainer = document.getElementById('spaceStars');
            const starCount = 200;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                const size = Math.random();
                
                if (size < 0.7) {
                    star.className = 'star small';
                } else if (size < 0.9) {
                    star.className = 'star medium';
                } else {
                    star.className = 'star large';
                }
                
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                starsContainer.appendChild(star);
            }
        }
        
        function createShootingStars() {
            const shootingStarsContainer = document.getElementById('shootingStars');
            
            function addShootingStar() {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.top = Math.random() * 50 + '%';
                shootingStar.style.left = '-100px';
                shootingStar.style.animationDelay = '0s';
                shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                shootingStarsContainer.appendChild(shootingStar);
                
                setTimeout(() => {
                    if (shootingStar.parentNode) {
                        shootingStar.parentNode.removeChild(shootingStar);
                    }
                }, 4000);
            }
            
            // Create shooting stars at random intervals
            setInterval(addShootingStar, Math.random() * 3000 + 2000);
            
            // Create initial shooting star
            setTimeout(addShootingStar, 1000);
        }
        
        function createNebulas() {
            const nebulasContainer = document.getElementById('nebulas');
            const nebulaTypes = ['purple', 'blue', 'pink'];
            
            for (let i = 0; i < 3; i++) {
                const nebula = document.createElement('div');
                nebula.className = `nebula ${nebulaTypes[i]}`;
                nebula.style.width = (Math.random() * 300 + 200) + 'px';
                nebula.style.height = (Math.random() * 300 + 200) + 'px';
                nebula.style.left = Math.random() * 100 + '%';
                nebula.style.top = Math.random() * 100 + '%';
                nebula.style.animationDelay = Math.random() * 20 + 's';
                nebula.style.animationDuration = (Math.random() * 10 + 15) + 's';
                
                nebulasContainer.appendChild(nebula);
            }
        }
        
        function createSectionStars() {
            const sections = ['aboutStars', 'skillsStars', 'projectsStars', 'contactStars', 'footerStars'];
            
            sections.forEach(sectionId => {
                const container = document.getElementById(sectionId);
                if (container) {
                    const starCount = 30;
                    
                    for (let i = 0; i < starCount; i++) {
                        const star = document.createElement('div');
                        const size = Math.random();
                        
                        if (size < 0.8) {
                            star.className = 'star small';
                        } else {
                            star.className = 'star medium';
                        }
                        
                        star.style.left = Math.random() * 100 + '%';
                        star.style.top = Math.random() * 100 + '%';
                        star.style.animationDelay = Math.random() * 3 + 's';
                        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
                        
                        container.appendChild(star);
                    }
                }
            });
        }
        
        createSpaceEnvironment();
        

        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Escape to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('mobileMenu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
        
        // Add accessibility improvements
        document.addEventListener('DOMContentLoaded', function() {
            // Add focus indicators for keyboard navigation
            const focusableElements = document.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
            focusableElements.forEach(el => {
                el.addEventListener('focus', function() {
                    this.style.outline = '2px solid #3b82f6';
                    this.style.outlineOffset = '2px';
                });
                el.addEventListener('blur', function() {
                    this.style.outline = '';
                    this.style.outlineOffset = '';
                });
            });
        });
        
        // Form submission with better UX
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button[type="submit"]');
            const buttonText = button.querySelector('span span');
            const originalText = buttonText.textContent;
            
            // Show loading state
            buttonText.textContent = 'Sending...';
            button.disabled = true;
            button.classList.add('opacity-75');
            
            // Simulate form submission
            setTimeout(() => {
                buttonText.textContent = originalText;
                button.disabled = false;
                button.classList.remove('opacity-75');
                
                // Show success message
                const successDiv = document.createElement('div');
                successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
                successDiv.innerHTML = '✅ Demo: Thank you for your message! In a real scenario, this form would be processed by a backend.';
                document.body.appendChild(successDiv);
                
                // Animate in
                setTimeout(() => successDiv.classList.remove('translate-x-full'), 100);
                
                // Remove after 5 seconds
                setTimeout(() => {
                    successDiv.classList.add('translate-x-full');
                    setTimeout(() => document.body.removeChild(successDiv), 300);
                }, 5000);
                
                // Reset form
                this.reset();
            }, 1500);
        });
        
        // Performance optimization: Lazy load animations
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        });
        
        // Observe animated elements for performance
        document.querySelectorAll('.star, .shooting-star, .nebula').forEach(el => {
            el.style.animationPlayState = 'paused';
            animationObserver.observe(el);
        });