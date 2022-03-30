let innerHTML = `<h3>&copy; Voyages progressifs 2022</h3><div class="footer-links"><img class="footer-links-logo" src="public/img/facebook.svg" alt="Facebook"/><img class="footer-links-logo" src="public/img/twitter.svg" alt="Twitter"/><img class="footer-links-logo" src="public/img/instagram.svg" alt="Instagram"/></div>`

let footer = document.querySelector('.footer');

footer.innerHTML = innerHTML;
// 

let logos = document.querySelectorAll('.footer-links-logo')
logos.forEach((a, index) => {
    let link = '';
    switch (index) {
        case 0:
            link = 'https://www.facebook.com/'
            break;
        case 1:
            link = 'https://www.twitter.com/'
            break;
        case 2:
            link = 'https://www.instagram.com'
    }
    a.addEventListener('click', () => window.open(link))
})
console.log(logos)