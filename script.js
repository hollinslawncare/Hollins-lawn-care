// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const phone = form.querySelector('input[placeholder="Your Phone"]').value;
    const message = form.querySelector('textarea').value;
    
    // Create mailto link with form data
    const subject = `New Inquiry from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@hollinslawncare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show confirmation message
    alert('Thank you for your inquiry! Our team will contact you soon.');
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    form.reset();
}

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('Hollins Lawn Care & More - Website loaded successfully!');