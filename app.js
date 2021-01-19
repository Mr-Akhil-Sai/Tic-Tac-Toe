let flag = 1;
let block = document.querySelectorAll(".block");

document.querySelectorAll(".block").forEach((el, index)=>
{ 
        el.addEventListener('click',()=>
    {
       if (flag === 1) {
           el.innerHTML = "X";
           el.style.pointerEvents = "none";
           flag = 0;
        }
        else{
            el.innerHTML = "O";
            el.style.pointerEvents = "none"; 
            flag = 1;   
        }
        winning(block);
    })
});

//winning logic for 'X'
let update = document.querySelector("#update");
let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function winning(){
    if(block[0].innerHTML == "X" && block[1].innerHTML == "X" && block[2].innerHTML == "X"){
        update.innerHTML = "player X won" 
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[0].innerHTML == "X" && block[4].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = "player X won"
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[0].innerHTML == "X" && block[3].innerHTML == "X" && block[6].innerHTML == "X"){
        update.innerHTML = "player X won"
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[2].innerHTML == "X" && block[4].innerHTML == "X" && block[6].innerHTML == "X"){
        update.innerHTML = "player X won"
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[3].innerHTML == "X" && block[4].innerHTML == "X" && block[5].innerHTML == "X"){
        update.innerHTML = "player X won"
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[6].innerHTML == "X" && block[7].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = "player X won"
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[1].innerHTML == "X" && block[4].innerHTML == "X" && block[7].innerHTML == "X"){
        update.innerHTML = "player X won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[2].innerHTML == "X" && block[5].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = "player X won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }


    //winning logic for 'O'
    else if(block[0].innerHTML == "O" && block[1].innerHTML == "O" && block[2].innerHTML == "O"){
        update.innerHTML = "player O won"; 
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[0].innerHTML == "O" && block[4].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = "player O won"; 
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[0].innerHTML == "O" && block[3].innerHTML == "O" && block[6].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[2].innerHTML == "O" && block[4].innerHTML == "O" && block[6].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[3].innerHTML == "O" && block[4].innerHTML == "O" && block[5].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[6].innerHTML == "O" && block[7].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[1].innerHTML == "O" && block[4].innerHTML == "O" && block[7].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
    else if(block[2].innerHTML == "O" && block[5].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = "player O won";
        block[0].style.pointerEvents = "none"; 
        block[1].style.pointerEvents = "none"; 
        block[2].style.pointerEvents = "none"; 
        block[3].style.pointerEvents = "none"; 
        block[4].style.pointerEvents = "none"; 
        block[5].style.pointerEvents = "none"; 
        block[6].style.pointerEvents = "none"; 
        block[7].style.pointerEvents = "none"; 
        block[8].style.pointerEvents = "none";
    }
}


