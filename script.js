const hour=document.querySelector(".hrs")
const minite=document.querySelector(".min")
const second=document.querySelector(".sec")

setInterval(clockfunction,1000);
function clockfunction(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hour.style.setProperty('--rotation',hrs*360);
  minite.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);
}
clockfunction()