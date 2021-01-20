let flag = 1;
let block = document.querySelectorAll(".block");
let playerTurn = document.querySelector("#playerTurn");
let section = document.querySelector("section");


function disableBlockEvents(section){
    section.style.pointerEvents = "none";
}


//function for font size and font weight
function font(el){
    el.style.fontSize = "1.7em";
    el.style.fontWeight = "900";
}


//need to comeplete this function
function restart(){
    location.reload()
}


// This is each player turn
block.forEach((el)=>
{ 
        el.addEventListener('click',()=>
    {
       if (flag === 1) {
           el.style.backgroundColor = "green";
           el.style.color = "whitesmoke";
           font(el);
           el.innerHTML = "X";
           playerTurn.innerHTML = 'player "O" turn';
           flag = 0;
        }
        else{
            el.style.backgroundColor = "goldenrod";
            el.style.color = "whitesmoke";
            font(el);
            el.innerHTML = "O";
            playerTurn.innerHTML = 'player "X" turn';
            flag = 1;   
        }
        disableBlockEvents(el);
        winning();
    })
});


//winning logic for 'X'
let update = document.querySelector("#update");
let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];


function winning(){
    if(block[0].innerHTML == "X" && block[1].innerHTML == "X" && block[2].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[4].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[3].innerHTML == "X" && block[6].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[4].innerHTML == "X" && block[6].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "X" && block[4].innerHTML == "X" && block[5].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "X" && block[7].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "X" && block[4].innerHTML == "X" && block[7].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[5].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }


    //winning logic for 'O'
    else if(block[0].innerHTML == "O" && block[1].innerHTML == "O" && block[2].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won' 
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[4].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[3].innerHTML == "O" && block[6].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[4].innerHTML == "O" && block[6].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "O" && block[4].innerHTML == "O" && block[5].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "O" && block[7].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "O" && block[4].innerHTML == "O" && block[7].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[5].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }


    //This is restart statement logic
    else if(block[0].innerHTML != "" && block[1].innerHTML != "" && block[2].innerHTML != "" &&
    block[3].innerHTML != "" && block[4].innerHTML != "" && block[5].innerHTML != "" && 
    block[6].innerHTML != "" &&  block[7].innerHTML != "" && block[8].innerHTML != ""){
        update.style.color = "red";
        update.innerHTML = "Draw, please restart the game";
        playerTurn.innerHTML = '';
    }
 
}
