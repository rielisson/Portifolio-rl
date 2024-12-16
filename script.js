document.addEventListener("DOMContentLoaded", function() {
    const skillsScection = document.querySelector('.skills-tecnologias');
    const skillsItems = skillsScection.querySelectorAll('li');


    const options = {
        root: null,
        threshold: 0.2
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if ( entry.isIntersecting) {
                skillsItems.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.classList.add('fade-in');
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(skillsScection);
})