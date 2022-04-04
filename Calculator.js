let display=document.getElementById('display');
let numbers= Array.from(document.getElementsByClassName('button'));

numbers.map( button=>{
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case'c':
            display.innerText='';
            break;
            case'←':
            display.innerText=display.innerText.slice(0,-1);
            break;

            case'=':
            try{
            
            display.innerText=eval(display.innerText);
            
            }
            catch{
                display.innerText=' Math error'
            }
            break;

            default:
                display.innerText+=e.target.innerText;
        }
    });
});
