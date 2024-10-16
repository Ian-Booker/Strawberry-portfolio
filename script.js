
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.dataset.theme =
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

document.getElementById('menuToggle').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
    