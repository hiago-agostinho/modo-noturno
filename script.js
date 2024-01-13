const themeSwitch = document.getElementById('themeSwitch');
    const checkbox = themeSwitch.querySelector('.theme-switch__checkbox');
    const title = document.querySelector('.title');

    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', checkbox.checked);
        title.style.color = checkbox.checked ? '#f4fffe' : '#050535';
});