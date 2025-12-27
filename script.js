// Loading Animation
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('.loader-wrapper').classList.add('hidden');
            }, 1500);
        });

        // Typing Effect
        const typingText = document.getElementById('typing-text');
        const text = 'Java Full Stack Developer';
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingText.innerHTML = text.substring(0, index + 1) + '<span class="typing-cursor"></span>';
                index++;
                setTimeout(typeText, 100);
            } else {
                typingText.innerHTML = text + '<span class="typing-cursor"></span>';
            }
        }

        setTimeout(typeText, 2000);

        // 3D Tilt Effect for Cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.setProperty('--rotateX', `${rotateX}deg`);
                card.style.setProperty('--rotateY', `${rotateY}deg`);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--rotateX', '0deg');
                card.style.setProperty('--rotateY', '0deg');
            });
        });

        // Custom Cursor - Removed

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const progress = (scrollPosition / scrollTotal) * 100;
            scrollProgress.style.width = progress + '%';
        });

        // Scroll to Top Button
        const scrollTopBtn = document.querySelector('.scroll-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Floating Particles - DISABLED
        function createParticles() {
            // Particles disabled as requested
        }
        createParticles();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scroll for navigation links
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