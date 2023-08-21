const timer=document.querySelector('.para');
const btnContainer=document.querySelector('.btn-container');
let seconds=0;
let minutes=0;
let hours=0;
let id;
let timerId;
const displayTime=(hours,minutes,seconds)=>{
    timer.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
}
function handleClickEvent(event){
   const button=event.target.name;
   if(button==='start'){
   timerId= setInterval(()=>{
           seconds++;
           if(seconds>59){
            minutes++;
            seconds=0;
            if(minutes>59){
                minutes=0;
                hours++;
            }
           }
           displayTime(hours,minutes,seconds);
    },0)
   }
    if(button==='stop'){
    clearInterval(timerId);
    clearInterval(id);
    
   }
    if(button==='reset'){
       clearInterval(timerId);
       clearInterval(id);
       seconds=0;
       hours=0;
       minutes=0;
       displayTime(hours,minutes,seconds);
   }
    if(button==='reverse'){
    clearInterval(timerId);
   
   id= setInterval(()=>{
    if(seconds>0||minutes>0||hours>0){
           seconds--;      
        if(seconds==0&&minutes>=1){
            minutes--;
            seconds=60;
            if(minutes==0&&hours>=1){
                hours--;
                minutes=60;

            }
        }
    }
    
        displayTime(hours,minutes,seconds);
    },1)
   }



}
btnContainer.addEventListener('click',handleClickEvent);