let t;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
t=new Date();
time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
date = t.toLocaleDateString(undefined, options);
document.getElementById('displaytime').innerText = time + " on " + date; 
}, 1000);