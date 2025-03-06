// DOM Elements
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const progressRing = document.querySelector('.progress-ring__circle');
const timerCount = document.querySelector('.timer-count');
const authCode = document.querySelector('.auth-code');
const digits = document.querySelectorAll('.digit');

// Toggle mobile navigation
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        navToggle.querySelectorAll('span').forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) {
                    span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                } else if (index === 1) {
                    span.style.opacity = '0';
                } else {
                    span.style.transform = 'rotate(-45deg) translate(7px, -8px)';
                }
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation for the progress ring timer
if (progressRing) {
    const circumference = 2 * Math.PI * 52; // 52 is the radius of the circle
    const countdown = 30; // 30 seconds countdown
    let timer;

    // Set up the initial dasharray and dashoffset
    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = 0;

    // Function to animate the countdown
    function animateCountdown() {
        let timeLeft = countdown;
        timerCount.textContent = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            
            if (timeLeft < 0) {
                timeLeft = countdown;
                // Animate code change
                animateCodeChange();
            }

            // Update timer text
            timerCount.textContent = timeLeft;
            
            // Update progress ring
            const offset = (1 - timeLeft / countdown) * circumference;
            progressRing.style.strokeDashoffset = offset;
        }, 1000);
    }

    // Function to animate code change
    function animateCodeChange() {
        // Generate random 6-digit code
        const newCode = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
        
        // Animate digits changing
        digits.forEach((digit, index) => {
            // Add animation class
            digit.classList.add('changing');
            
            // After animation, update the digit and remove class
            setTimeout(() => {
                digit.textContent = newCode[index];
                digit.classList.remove('changing');
            }, 300);
        });
    }

    // Start the countdown
    animateCountdown();
}

// Animation for elements when they enter the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .about-feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Run animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate auth code on load
    if (document.querySelector('.auth-code')) {
        const initialCode = [2, 3, 9, 8, 1, 7]; // Initial code shown in HTML
        
        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.textContent = initialCode[index];
                digit.style.opacity = 1;
            }, index * 100);
        });
    }
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add animation class to phone mockup after a delay
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        setTimeout(() => {
            phoneMockup.style.opacity = 1;
        }, 500);
    }
});

// Add CSS for animations that are controlled by JS
document.head.insertAdjacentHTML('beforeend', `
<style>
    .feature-card, .step, .about-feature {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animated, .step.animated, .about-feature.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .digit.changing {
        animation: changeDigit 0.3s ease;
    }
    
    @keyframes changeDigit {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-10px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    
    .phone-mockup {
        opacity: 0;
        transition: opacity 1s ease, transform 0.6s ease;
    }
</style>
`);