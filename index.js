

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

    if (localStorage.getItem("DownsicientLanguage") != null) {
        i18n.changeLanguage(localStorage.getItem("DownsicientLanguage"));
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


var i18n = domI18n({
    selector: '[data-translatable]',
    languages: ['eng', 'zhs', 'zht', 'sxv', 'pox', 'ent'],
    defaultLanguage: "eng",
    separator: ' // ',
});

const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
const currentLangSpan = document.getElementById('currentLang');

langToggle.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
});

langMenu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        i18n.changeLanguage(lang);

        localStorage.setItem("DownsicientLanguage", lang);

        localStorage.setItem('lang', lang);
        langMenu.classList.add('hidden');
        document.querySelectorAll(".is-visible").forEach((el) => { el.classList.remove("is-visible") })
        LoadObserverAnimation();
    });
});
