let flag = 1;

document.querySelectorAll(".block").forEach((el, index)=>
{ 
    console.log(index);
    el.addEventListener('click',()=>
    {
       if (flag === 1) {
           el.innerHTML = "X";
           el.style.pointerEvents = "none";
           flag = 0;
           winning(el.innerHTML ,index);
       }
        else{
            el.innerHTML = "O";
            el.style.pointerEvents = "none"; 
            flag = 1;   
        }
    })
});

//winning logic for X
let update = document.querySelector("#update");

function winning(a, b){
    console.log(a)
    console.log(b);
    if(a[b] == "X" && a[b] == "X" && a[b] == "X"){
        console.log(a[b]);
        update.innerHTML = "player X won";
    }
}


