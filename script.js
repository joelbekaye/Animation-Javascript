let change = document.getElementById("zone");

window.addEventListener('click', click);
window.addEventListener('dbClick', doubleClick);
document.addEventListener('mouseover', hover);
document.addEventListener('contextMenu', rightClick)

function click () {
    gsap.to(change, {
        scale: 1.2,
        duration: 2, 
        backgroundColor: "orange"});
}

function doubleClick () {
    gsap.to(change, {
        rotation: 27, 
        x: 100, 
        duration: 0.03});
}

function hover () {
    gsap.to(change, { 
        rotation: 360,
        duration: 3,
    });
}

function rightClick () {
    gsap.to(change, { 
        duration: 2,
        x: 200,
        rotation: 360,
      });
}
