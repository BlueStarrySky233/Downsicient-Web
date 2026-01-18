

function LoadObserverAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
}

// Reveal on Scroll
document.addEventListener('DOMContentLoaded', () => {
    LoadObserverAnimation();
    scrollNavBackground();
    if (navigator.language == "zh-CN") {
        document.body.classList.replace('lang-en', 'lang-zh');
    }
    else {
        document.body.classList.replace('lang-zh', 'lang-en');
    }
});

function scrollNavBackground() {
    if (window.scrollY == 0) {
        document.querySelector("nav").classList.remove("with-back")
    }
    else {
        document.querySelector("nav").classList.add("with-back")
    }
}

document.addEventListener("scroll", scrollNavBackground)

// Language Toggle
function toggleLang() {
    const body = document.body;
    document.querySelectorAll(".is-visible").forEach((el) => { el.classList.remove("is-visible") })
    LoadObserverAnimation();

    if (body.classList.contains('lang-en')) {
        body.classList.replace('lang-en', 'lang-zh');
    } else {
        body.classList.replace('lang-zh', 'lang-en');
    }

}
