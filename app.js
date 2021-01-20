let flag = 1;
let block = document.querySelectorAll(".block");
let playerTurn = document.querySelector("#playerTurn");
let section = document.querySelector("section");


function disableBlockEvents(section){
    section.style.pointerEvents = "none";
}

//function for adding bgcolor to the winning blocks of x
function bgcolor(a,b,c){
    block[a].style.backgroundColor = "red";
    block[b].style.backgroundColor = "red";
    block[c].style.backgroundColor = "red";
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
        update.style.color = "green";
        bgcolor(0,1,2);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[4].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(0,4,8);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "X" && block[3].innerHTML == "X" && block[6].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(0,3,6);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[4].innerHTML == "X" && block[6].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(2,4,6);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "X" && block[4].innerHTML == "X" && block[5].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(3,4,5);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "X" && block[7].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(6,7,8);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "X" && block[4].innerHTML == "X" && block[7].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(1,4,7);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "X" && block[5].innerHTML == "X" && block[8].innerHTML == "X"){
        update.style.color = "green";
        bgcolor(2,5,8);
        update.innerHTML = 'Player "X" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }


    //winning logic for 'O'
    else if(block[0].innerHTML == "O" && block[1].innerHTML == "O" && block[2].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(0,1,2);
        update.innerHTML = 'Player "O" won' 
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[4].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(0,4,8);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[0].innerHTML == "O" && block[3].innerHTML == "O" && block[6].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(0,3,6);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[4].innerHTML == "O" && block[6].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(2,4,6);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[3].innerHTML == "O" && block[4].innerHTML == "O" && block[5].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(3,4,5);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[6].innerHTML == "O" && block[7].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(6,7,8);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[1].innerHTML == "O" && block[4].innerHTML == "O" && block[7].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(1,4,7);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }
    else if(block[2].innerHTML == "O" && block[5].innerHTML == "O" && block[8].innerHTML == "O"){
        update.style.color = "goldenrod";
        bgcolor(2,4,8);
        update.innerHTML = 'Player "O" won'
        playerTurn.innerHTML = '';
        disableBlockEvents(section);
    }


    //This is restart statement logic

 
}
