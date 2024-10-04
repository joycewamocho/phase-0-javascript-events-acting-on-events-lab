// Your code here
dodger = document.getElementById("dodger")

function moveDodgerLeft(){
    let left = dodger.style.left.replace("px", "");
    left =parseInt(left,10)
    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }

}

document.addEventListener("keydown",e =>{
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
}
);

function moveDodgerRight(){
    let left = dodger.style.left.replace("px", "");
    left =parseInt(left,10)
    if(left > 0){
        dodger.style.left = `${left +1}px`
    }

}

document.addEventListener("keydown",e =>{
    if(e.key === "ArrowRight"){
        moveDodgerLeft();
    }
}
);