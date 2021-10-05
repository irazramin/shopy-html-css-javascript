const navLink = document.querySelectorAll('ul li a');
const currentLocation = location.href;
const length = navLink.length;

for (let i = 0; i < length; i++) {
    if(navLink[i].href === currentLocation){
        navLink[i].classList.add('active');
    }
    
}