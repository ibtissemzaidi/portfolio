const skills = document.querySelectorAll('#skills li img');
skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.toggle('active');
    });
});