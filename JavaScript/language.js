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
