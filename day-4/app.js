const toggle = document.getElementById('menu-toggle');
const active = document.querySelectorAll('.active-element');


toggle.addEventListener('click', () => {

for (let i = 0; i < active.length; i++) {
  active[i].classList.toggle('active');
}

});
