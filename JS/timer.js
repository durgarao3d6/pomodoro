const el=document.querySelector(".clock")
const bell=document.querySelector("audio")
const mindiv=document.querySelector(".mins")
const secdiv=document.querySelector(".secs")
const startBtn=document.querySelector(".start")

localStorage.setItem('btn','focus');

let initial,totalsecs,perc,paused,mins,seconds;

startBtn.addEventListener('click',()=>{
    let btn=localStorage.getItem('btn');

    if(btn==='focus'){
        min=+localStorage.getItem("focusTime");
    }
    else{
        min=+localStorage.getItem("breakTime");
    }

    seconds=min*60;
    totalsecs=min*60;
    setTimeout(decrementT(),60);
    startBtn.style.transform="scale(1)";
    paused=false;

})

function decrementT(){
    mindiv.textContent=Math.floor(seconds/60);
    secdiv.textContent=seconds%60>9 ?seconds%60 : '0'+seconds%60;

    
    if(seconds>0){
        perc=Math.ceil(((totalsecs-seconds)/totalsecs)*100);
        setProgress(perc);
        seconds--;
        initial=window.setTimeout("decrementT()",1000);
    }
    else{
        mins=0;
        //bell.play();
        let btn=localStorage.getItem('btn');

        if(btn==='focus'){
            startBtn.textContent="start break";
            startBtn.classList.add('break');
            localStorage.setItem('btn','break');
        }
        else{
            startBtn.classList.remove('break');
            startBtn.textContent="start focus";
            localStorage.setItem("btn","focus");
        }
        startBtn.style.transform="scale(1)";
        

    }
}