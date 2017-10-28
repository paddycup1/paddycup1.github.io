window.addEventListener("resize", ResizeContainer);

function ResizeContainer(){
    console.log(document.getElementById("Container").style.height.toString());
    console.log(window.innerHeight);
    document.getElementById("Container").style.height = window.innerHeight + "px";
    document.getElementById("Container").style.width = window.innerWidth + "px";
}