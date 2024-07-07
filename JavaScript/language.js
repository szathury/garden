function switchLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        }
    });

    var footerTexts = document.querySelectorAll('footer p[data-lang]');
    footerTexts.forEach(function(text) {
        if (text.getAttribute('data-lang') === lang) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });

    var btns = document.querySelectorAll('.btn[data-lang]');
    btns.forEach(function(btn) {
        if (btn.getAttribute('data-lang') === lang) {
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });
}

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.classList.add('btn-hover');
    });
    btn.addEventListener('mouseleave', function() {
        this.classList.remove('btn-hover');
    });
});

// Parallax effect
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    document.querySelectorAll('.bg').forEach(bg => {
        const speed = bg.getAttribute('data-bg-speed');
        bg.style.transform = `translateY(${scrollTop * speed}px)`;
    });
});
