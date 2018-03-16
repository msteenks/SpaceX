// tijd

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // verandering achtergrond op tijd + welkom bericht

    //08-19 day
    if (h > 7 && h < 20){
      document.getElementsByTagName('body')[0].style.backgroundImage = "url('styles/images/day.jpg')";
      document.getElementById('hello').innerHTML = 'Good Day, ITS';
    }

    //20-07 night
    else if (h > 19 || h < 8){
      document.getElementsByTagName('body')[0].style.backgroundImage = "url('styles/images/night.jpg')";
      document.getElementById('hello').innerHTML = 'Good Night, ITS';
    }

    document.getElementById('hours').innerHTML = checkTime(h);
    document.getElementById('minutes').innerHTML = checkTime(m);
    document.getElementById('secondes').innerHTML = checkTime(s);


    // tijd animatie

    var tl1 = new TimelineMax();
    tl1.from('#secondes', 0.7, { top: -50, ease: Bounce.easeOut})

    if (s == 0) {
      var tl2 = new TimelineMax();
      tl2.from('#minutes', 0.7, { top: -50, ease: Bounce.easeOut})
    }

    if (m == 0) {
      var tl3 = new TimelineMax();
      tl3.from('#hours', 0.7, { top: -50, ease: Bounce.easeOut})
    }

    var t = setTimeout(startTime, 1000);
}


// voegt een 0 toe voor de nummers onder de 10

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


// datum / maand / jaar

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //Januari is 1!
var yyyy = today.getFullYear();

if (dd<10){
    dd='0'+dd;
}
if (mm<10){
    mm='0'+mm;
}

var today = dd+' '+'/'+' '+mm+' '+'/'+' '+yyyy;
document.getElementById('date').innerHTML = today;
