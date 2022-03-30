const innerContent = `
<input type="checkbox" id="menu" class="navbar-checkbox" />
<label class="navbar-menu" for="menu">
    <img alt="menu" class="navbar-menu-label" src="public/img/menu.svg">
    <div class="navbar-menu-inner">
        <label for="book" class="navbar-menu-each">
            <img alt="Contact" src="public/img/contact.svg">
            <p class="navbar-menu-each-tips">Book a vacation</p>
        </label>
        <span class="navbar-menu-each">
            <a href="info.html"><img alt="About" src="public/img/about.svg"></a>
            <p class="navbar-menu-each-tips">About Us</p>
        </span>
        <span class="navbar-menu-each">
            <a href="index.html"><img alt="Home" src="public/img/home.svg"></a>
            <p class="navbar-menu-each-tips">Home</p>
        </span>
    </div>
</label>


`;

let element = document.querySelector('.navbar');
console.log(element);
element.innerHTML = innerContent;