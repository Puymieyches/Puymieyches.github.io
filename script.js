const icons = document.querySelectorAll('.skill-icon');
const iconText = document.getElementById('skill-icon-text');
const dividers = document.querySelectorAll('.divider');
const faqBars = document.querySelectorAll('.faq-ele');
const headerBar = document.getElementById('header-container');

icons.forEach(icon => {
    icon.addEventListener('mouseover', (event) => {
        iconText.textContent = event.target.getAttribute('alt');
    });

    icon.addEventListener('mouseout', () => {
        iconText.textContent = "Technologies I've experimented with:";
    });
});

const scrollChanges = () => {
    const viewportHeight = window.innerHeight;

    dividers.forEach(divider => {
        const dividerTop = divider.getBoundingClientRect().top;
        let positionPercentage = (viewportHeight - dividerTop) / viewportHeight * 100;
        positionPercentage = Math.min(100, Math.max(0, positionPercentage));
        divider.style.width = positionPercentage + '%';
    });

    if (window.scrollY > 0) {
        headerBar.style.backgroundColor = 'var(--window-color2)';
    } else {
        headerBar.style.backgroundColor = '';
    }
};

const expandFaq = (event) => {
    const faqArrow = event.currentTarget.querySelector('.faq-button-icon');
    const faqAns = event.currentTarget.nextElementSibling;
    faqAns.hidden = !faqAns.hidden;
       
    event.currentTarget.style.borderBottom = faqAns.hidden ? '' : 'none';
    faqAns.style.borderTop = faqAns.hidden ? '' : 'none';
    faqAns.style.borderBottom = faqAns.hidden ? '' : '1px solid white';
    faqAns.style.display = faqAns.hidden ? '' : 'flex';
    faqArrow.style.transform = faqAns.hidden ? 'rotate(0deg)' : 'rotate(90deg)';
};

faqBars.forEach(bar => {
    bar.addEventListener('click', expandFaq)
});
window.addEventListener('scroll', scrollChanges);
scrollChanges();
