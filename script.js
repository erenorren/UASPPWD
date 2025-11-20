document.addEventListener('DOMContentLoaded', function() {
    var mobileMenuLinks = document.querySelectorAll('#navbarNavDropdown .nav-link');
    var navbarCollapse = document.getElementById('navbarNavDropdown');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    mobileMenuLinks.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});