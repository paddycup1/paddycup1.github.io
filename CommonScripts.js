window.addEventListener("resize", ResizeContainer);

function ResizeContainer(){
    document.getElementById("Container").style.height = window.innerHeight + "px";
    document.getElementById("Container").style.width = window.innerWidth + "px";
}

function InitBossList(){
    var Lists = document.getElementsByClassName('WingBossList');
    for (i=0; i < Lists.length; i++){
        Lists[i].originalHeight = Lists[i].clientHeight;
        Lists[i].style.height = "0px";
    }

    Lists=document.getElementsByClassName('WingHeader');
    for (i=0; i < Lists.length; i++){
        Lists[i].addEventListener("click", SwitchBossList);
    }

    Lists=document.getElementsByClassName('WingContainer');
    for (i=0; i < Lists.length; i++){
        Lists[i].style.visibility = "visible";
    }
}

function SwitchBossList(event){
    var elemnt = event.currentTarget.nextElementSibling;
    if(elemnt.style.height == "0px"){
        elemnt.style.height = elemnt.originalHeight + "px";
    }else{
        elemnt.style.height = "0px";
    }
}
