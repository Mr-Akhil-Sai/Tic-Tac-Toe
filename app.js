let flag = 1;
let block = document.querySelectorAll(".block");
let playerTurn = document.querySelector("#playerTurn");
let section = document.querySelector("section");


function disableBlockEvents(section){
    section.style.pointerEvents = "none";
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
           el.innerHTML = "X";
           playerTurn.innerHTML = 'player "O" turn';
           flag = 0;
        }
        else{
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
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[4].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[3].innerHTML == "X" && block[6].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[4].innerHTML == "X" && block[6].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "X" && block[4].innerHTML == "X" && block[5].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "X" && block[7].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "X" && block[4].innerHTML == "X" && block[7].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[5].innerHTML == "X" && block[8].innerHTML == "X"){
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }


    //winning logic for 'O'
    else if(block[0].innerHTML == "O" && block[1].innerHTML == "O" && block[2].innerHTML == "O"){
        update.innerHTML = 'Player "O" won' 
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[4].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[3].innerHTML == "O" && block[6].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[4].innerHTML == "O" && block[6].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "O" && block[4].innerHTML == "O" && block[5].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "O" && block[7].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "O" && block[4].innerHTML == "O" && block[7].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[5].innerHTML == "O" && block[8].innerHTML == "O"){
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        alert("please restart the game");
        disableBlockEvents(section);
    }


    //This is restart statement logic

/*
    else if(block[0].innerHTML == "X" || block[0].innerHTML == "O" && block[1].innerHTML == "X" || 
    block[1].innerHTML == "O" && block[2].innerHTML == "X" || block[2].innerHTML == "O" ||
    block[3].innerHTML == "X" || block[3].innerHTML == "O" && block[4].innerHTML == "X" || 
    block[4].innerHTML == "O" && block[5].innerHTML == "X" || block[5].innerHTML == "O" &&
    block[6].innerHTML == "X" || block[6].innerHTML == "O" && block[7].innerHTML == "X" ||
    block[7].innerHTML == "O" && block[8].innerHTML == "X" && block[8].innerHTML == "O"){
        update.innerHTML = "Please restart the game";
    }
    */
}
