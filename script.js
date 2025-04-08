<script>
    document.addEventListener'DOMContentLoaded', () =
        const menuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
     
    menuButton.addEventListener('click', () = {
        mobileMenu.classList.toggle('active')
    });
</script>


// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    if (email) {
        // Here you would typically send this to your backend
        console.log('Newsletter signup:', email);
        newsletterForm.reset();
        alert('Thank you for subscribing to our newsletter!');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Add hover effect for article cards
const articleCards = document.querySelectorAll('.article-card');

articleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
// Review filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const reviewCards = document.querySelectorAll('.review-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        reviewCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send this to your backend
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value
        };
        
        console.log('Form submission:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}