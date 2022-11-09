// Clock JS Start
let minutes = 30;
function step() {
  let t = new Date(new Date().getTime() + minutes*60000);
  clock.innerHTML = t.getHours()+ ":" + t.getMinutes() + ":" + t.getSeconds();
  window.requestAnimationFrame(step);
    
}
window.requestAnimationFrame(step);
// Clock JS Finish

document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if(!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));