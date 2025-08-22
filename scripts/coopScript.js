function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        const offset = 120;

        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const taskbar = document.querySelector('.taskbar');
    const titlePage = document.querySelector('.title-page');
    const titlePageHeight = titlePage.offsetHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition <= titlePageHeight) {
            taskbar.style.position = 'absolute';
            taskbar.style.top = titlePageHeight + 'px';
        } else {
            taskbar.style.position = 'fixed';
            taskbar.style.top = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollIcon = document.getElementById('arrow-icon');

    scrollIcon.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

function redirectToLink(link) {
    window.location.href = link;
}