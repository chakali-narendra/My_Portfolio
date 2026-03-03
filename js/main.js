/* ===================================
   Main JavaScript File
   Chakali Narendra - Portfolio
   =================================== */

// ===================================
// DOM CONTENT LOADED
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');

    // Initialize all functions
    initLoader();
    initNavbar();
    initTypingEffect();
    init3DTiltEffect(); // Add 3D Tilt Effect
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initCurrentYear();

    // Render dynamic content
    renderProjects();
    renderExperience();
    renderCertifications();
    renderSkills();
    renderContactInfo();
    renderSocialLinks();
    initScrollReveal();
});

// ===================================
// LOADER
// ===================================
function initLoader() {
    const loader = document.getElementById('loader');
    const codeWindow = document.querySelector('.code-window');

    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');

            // Trigger code window entrance exactly when loader finishes
            if (codeWindow) {
                codeWindow.classList.add('entrance-animation');
            }

            // Remove from DOM after transition
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, ANIMATION_CONFIG.loaderDuration);
    }
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
function initNavbar() {
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Active link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
}

// ===================================
// TYPING EFFECT
// ===================================
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');

    if (!typingElement || !TYPING_TEXTS || TYPING_TEXTS.length === 0) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = TYPING_TEXTS[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Determine typing speed
        let typeSpeed = isDeleting ? ANIMATION_CONFIG.erasingSpeed : ANIMATION_CONFIG.typingSpeed;

        // Check if word is complete
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = ANIMATION_CONFIG.pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % TYPING_TEXTS.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    setTimeout(type, ANIMATION_CONFIG.loaderDuration + 500);
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===================================
// CURRENT YEAR
// ===================================
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===================================
// RENDER PROJECTS
// ===================================
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    if (!projectsGrid || !PROJECTS) return;

    projectsGrid.innerHTML = PROJECTS.map(project => `
        <article class="project-card glass-card">
            <div class="project-image">
                ${project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<div class="project-placeholder"><i class="${project.icon}"></i></div>`
        }
                <div class="project-overlay">
                    ${project.liveLink ? `
                        <a href="${project.liveLink}" target="_blank" class="project-link" aria-label="View Project">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                    ${project.githubLink ? `
                        <a href="${project.githubLink}" target="_blank" class="project-link" aria-label="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// ===================================
// RENDER EXPERIENCE
// ===================================
function renderExperience() {
    const timeline = document.querySelector('.timeline');

    if (!timeline || !EXPERIENCE) return;

    timeline.innerHTML = EXPERIENCE.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content glass-card">
                <div class="timeline-header">
                    <span class="timeline-date">${item.date}</span>
                    <span class="timeline-type ${item.type}">${item.type === 'work' ? 'Work' : 'Education'}</span>
                </div>
                <h3 class="timeline-title">${item.title}</h3>
                <h4 class="timeline-company">${item.organization}</h4>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// ===================================
// RENDER CERTIFICATIONS
// ===================================
function renderCertifications() {
    const certificationsGrid = document.querySelector('.certifications-grid');

    if (!certificationsGrid || !CERTIFICATIONS) return;

    certificationsGrid.innerHTML = CERTIFICATIONS.map(cert => `
        <div class="certification-card glass-card">
            <div class="certification-icon">
                <i class="${cert.icon}"></i>
            </div>
            <div class="certification-content">
                <p class="certification-issuer">${cert.issuer}</p>
                <h3 class="certification-title">${cert.title}</h3>
                <span class="certification-year">${cert.year}</span>
                <p class="certification-description">${cert.description}</p>
            </div>
        </div>
    `).join('');
}

// ===================================
// RENDER SKILLS
// ===================================
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');

    if (!skillsGrid || !SKILLS) return;

    skillsGrid.innerHTML = SKILLS.map(skill => `
        <div class="skill-item glass-card">
            <i class="${skill.icon} skill-icon"></i>
            <span class="skill-name">${skill.name}</span>
        </div>
    `).join('');
}

// ===================================
// RENDER CONTACT INFO
// ===================================
function renderContactInfo() {
    const contactDetails = document.querySelector('.contact-details');

    if (!contactDetails || !PERSONAL_INFO) return;

    contactDetails.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
                <span class="contact-label">Email</span>
                <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a>
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
                <span class="contact-label">Phone</span>
                <a href="tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}">${PERSONAL_INFO.phone}</a>
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <span class="contact-label">Location</span>
                <span>${PERSONAL_INFO.location}</span>
            </div>
        </div>
    `;
}

// ===================================
// RENDER SOCIAL LINKS
// ===================================
function renderSocialLinks() {
    const socialContainers = document.querySelectorAll('.hero-socials, .contact-socials, .footer-socials');

    if (!socialContainers.length || !PERSONAL_INFO) return;

    const socialLinksHTML = `
        ${PERSONAL_INFO.github ? `
            <a href="${PERSONAL_INFO.github}" target="_blank" class="social-link" aria-label="GitHub">
                <i class="fab fa-github"></i>
            </a>
        ` : ''}
        ${PERSONAL_INFO.linkedin ? `
            <a href="${PERSONAL_INFO.linkedin}" target="_blank" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
        ` : ''}
        ${PERSONAL_INFO.instagram ? `
            <a href="${PERSONAL_INFO.instagram}" target="_blank" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
        ` : ''}
        ${PERSONAL_INFO.facebook ? `
            <a href="${PERSONAL_INFO.facebook}" target="_blank" class="social-link" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
        ` : ''}
    `;

    socialContainers.forEach(container => {
        container.innerHTML = socialLinksHTML;
    });
}

// ===================================
// FORM HANDLING (Optional Enhancement)
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you can add form submission logic
        // For now, just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const revealOnScroll = () => {
        // Reveal sections
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });

        // Hide scroll indicator after scrolling
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}

// Initialize scroll reveal
initScrollReveal();

// ===================================
// MAKE SOCIAL LINKS POSITION RELATIVE
// ===================================
document.querySelectorAll('.social-link').forEach(link => {
    link.style.position = 'relative';
});

// ===================================
// PARALLAX EFFECT FOR HERO GLOW
// ===================================
window.addEventListener('scroll', () => {
    const heroGlow = document.querySelector('.hero-glow');
    if (heroGlow) {
        const scrolled = window.scrollY;
        heroGlow.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    }
});

// ===================================
// TILT EFFECT ON PROJECT CARDS (Optional)
// ===================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// 3D TILT EFFECT FOR CODE CARD
// ===================================
function init3DTiltEffect() {
    const card = document.querySelector('.code-window');

    if (!card) return;

    // Start with flat state (matches CSS)
    // card.style.transform = 'rotateX(0) rotateY(0)';

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtler tilt
        const rotateX = (centerY - y) / 25;
        const rotateY = (x - centerX) / 25;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        // Dynamic shadow
        card.style.boxShadow = `0 40px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(168, 85, 247, 0.4)`;
    });

    card.addEventListener('mouseleave', () => {
        // Reset to flat
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)';
    });
}
