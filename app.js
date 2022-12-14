const gallery = document.getElementById("gallery");

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX /window.innerWidth;
    const yDecimal = mouseY /window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetWidth - window.innerHeight;

    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 6000,
        fill: "forwards",
        easing: "ease"
    })
};
//var x = document.getElementById("1");

//function playA(){
//    x.play();
//}

const pics = document.querySelectorAll(".pics");

pics.forEach(function(pic){
    pic.addEventListener("click", function(event){
    const newPic = event.currentTarget;
    const currentDiv = newPic.parentElement;
    const audioFile = currentDiv.querySelector(".audio");
    audioFile.play()
    });
});
