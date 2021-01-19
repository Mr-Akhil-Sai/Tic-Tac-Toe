let flag = 1;

document.querySelectorAll(".block").forEach((el)=>
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
            el.disabled = true;
            flag = 1;
        }
    })
});