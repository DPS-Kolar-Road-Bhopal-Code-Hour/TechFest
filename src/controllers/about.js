let homeHeaderButton = document.querySelector('.about-header-button')

homeHeaderButton.addEventListener('click', () => {
    window.scrollTo(100, 600)
})

let stats = document.querySelectorAll('.about-donations-container-stats-each-stat');

setInterval(() => {
    let additionThisTime = Math.floor(Math.random() * 20);
    stats.forEach(a => {
        if (a.innerHTML[0] === '$') {
            let money = Number(a.innerHTML.slice(1, a.length)) + additionThisTime;
            a.innerHTML = "$" + money;
            console.log(money);
        }
        else{
            let people = Number(a.innerHTML) + Math.floor(additionThisTime / 3);
            a.innerHTML = people;
        }
    })
}, 500)