



const cards= document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on $ {card.querySelector(h2).textContent}');
    });
});

function toggleMenu(){
    const menu= 
    document.querySelector(".menu");
    menu.classList.toggle('show');
}
