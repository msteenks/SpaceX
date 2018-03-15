// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     h = checkTime(h);
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
//
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }

// time

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML =  m;
    document.getElementById('secondes').innerHTML = s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// background change

h = 9;

//08-19 day
if (h > 7 && h < 20){
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('styles/images/day.jpg')";
  console.log('day');
}

//20-07 night
else if (h > 19 || h < 8){
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('styles/images/night.jpg')";
  console.log('night');
}

// time animations

var tl1 = new TimelineMax({repeat: -1});

tl1.to('#dots', 1, {color: '#FFFFFF'}, '+1')
   .to('#dots', 1, {color: '#000000'}, '+1');


var tl2 = new TimelineMax({repeat : -1});

tl2.call(startTime)
  .from('#secondes', 0.7, { top: -50, ease: Bounce.easeOut})
  .to('#secondes', 0.3, { opacity: 0});

if (s == 0) {
  var tl3 = new TimelineMax({repeat : -1});

  tl3.call(startTime)
    .from('#minutes', 0.7, { top: -50, ease: Bounce.easeOut}, '+60')
    .to('#minutes', 0.3, { opacity: 0});
}
