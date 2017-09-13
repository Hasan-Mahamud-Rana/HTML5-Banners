
var banner = document.getElementById('banner');

banner.style.width = dhtml.width + 'px';
banner.style.height = dhtml.height + 'px';

var closebutton = document.getElementById('closeButton');

var clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.moensterbilist.dk/'); //dhtml.getVar() gets clickTAG variable from Adform, if it is not defined (e.g. banner is being tested locally) it will fallback to example.com
var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank'); //same as above - landingPageTarget from Adform or falls back to _blank

banner.onclick = function() {
  window.open(clickTAGvalue,landingpagetarget);
}

document.addEventListener('touchstart', function(event) {
 deltax = 0;
 deltay = 0;
 x = event.touches[0].clientX;
 y = event.touches[0].clientY;
 l = event.touches.length;
}, false);

document.addEventListener('touchmove', function(event) {
  event.preventDefault();
  deltax = x - event.touches[0].clientX;
  deltay = y - event.touches[0].clientY;
  parent.window.scrollBy(0,deltay);
}, false);

document.addEventListener("DOMContentLoaded", function(event) {
  animateInfo1(1);
});

function animateInfo1(index){
  resetElement(document.getElementById('info2'), 'info hidden');
  resetElement(document.getElementById('btn'), 'info hidden');
  resetElement(document.getElementById('splash'), 'splash hidden');

  //console.log('animateInfo1')
  obj = document.getElementById('info1');
  next_obj = document.getElementById('info2');
  resetElement(obj, 'info');
  animateAppearInfo(obj,obj);
  setTimeout(function(){ animateDisapearInfo(obj, next_obj); }, 3000);
  setTimeout(function(){ animateInfo2(index) }, 3500);
}

function animateInfo2(index){
  //console.log('animateInfo2')
  obj = document.getElementById('info2');
  next_obj = document.getElementById('info1');
  resetElement(obj, 'info');
  animateAppearInfo(obj,obj);
  setTimeout(function(){ animateSplash(index) }, 800);
}

function animateSplash(index){
  //console.log('animateSplash')
  splash = document.getElementById('splash');
  resetElement(splash, 'splash');

  img = document.getElementById('img_splash');
  img.style.height = '0px'; //'110px';

  animateFadeIn(img, 0, 96, img);
  setTimeout(function(){ animateInfoBtn(index) }, 500);
}

function animateInfoBtn(index){
  //console.log('animateInfoBtn')
  obj = document.getElementById('btn');
  resetElement(obj, 'info');
  animateAppearInfo(obj,obj);
  if (index < 3) {
    index++;
    setTimeout(function(){ animateInfo1(index) }, 3500);
  } else {
    return;
  }

}

function resetElement(obj, htmlClass){
    obj.style.marginTop = '0px'; //'110px';
    obj.className = htmlClass;
    obj.style.visibility = null;
}

function animateAppearInfo(obj, next_obj){
  //console.log('animateAppearInfo', obj, next_obj)
  animateUpSlowDown(obj, 110, 0, next_obj);
}

function animateDisapearInfo(obj, next_obj){
  //console.log('animateDisapearInfo', obj, next_obj)
  animateUpAccelerate(obj, 0, -180, next_obj);
}

function animateFadeIn(obj, from, to, next_obj, trigger){
  if(from > to){
    if (obj !== next_obj){
      obj.style.visibility = 'hidden';
    }
    if (trigger !== undefined ){
      trigger(obj, next_obj);
    }
    return;
  }
  else {
    var box = obj;
    // box.style.marginTop = (to - from) + "px";
    box.style.height = from + "px";
    next_step = from + 8;
  // console.log('animateFadeIn - next step', next_step, from, to, from - to);
    setTimeout(function(){
      animateFadeIn(obj, next_step, to, next_obj, trigger);
    }, 25)
  }
}

function animateUpAccelerate(obj, from, to, next_obj, trigger){
  if(from < to){
    if (obj !== next_obj){
      obj.style.visibility = 'hidden';
    }
    if (trigger !== undefined ){
      trigger(obj, next_obj);
    }
    return;
  }
  else {
    var box = obj;
    box.style.marginTop = from + "px";
    if (from - to >= 160) {
      if (from - to >= 120) {
        next_step = from - 6;
      } else {
        next_step = from - 3;
      }
    }  else
    {
      next_step = from - 20;
    }
    //console.log('UpAccelerate - next step', from, to, from - to, next_step);
    setTimeout(function(){
      animateUpAccelerate(obj, next_step, to, next_obj, trigger);
    }, 25)
  }
}

function animateUpSlowDown(obj, from, to, next_obj, trigger){
  if(from < to){
    if (obj !== next_obj){
      obj.style.visibility = 'hidden';
    }
    if (trigger !== undefined ){
      trigger(obj, next_obj);
    }
    return;
  }
  else {
    var box = obj;
    box.style.marginTop = from + "px";
    if (from - 60 <= to) {
      if (from - 30 <= to) {
        next_step = from - 3;
      } else {
        next_step = from - 6;
      }
    } else
    {
      next_step = from - 10;
    }
    //console.log('UpSlowDown - next step', next_step, from, to, from - to);
    setTimeout(function(){
      animateUpSlowDown(obj, next_step, to, next_obj, trigger);
    }, 25)
  }
}

function animateDownSlowDown(obj, from, to, next_obj, trigger){
  if(from > to){
    if (obj !== next_obj){
      obj.style.visibility = 'hidden';
    }
    if (trigger !== undefined ){
      trigger(obj, next_obj);
    }
    return;
  }
  else {
    var box = obj;
    box.style.marginTop = from + "px";
    if (to - from > 30 ) {
      if (to - from > 60 ) {
        next_step = from + 10;
      } else {
        next_step = from + 6;
      }
    } else
    {
      next_step = from + 3;
    }
    //console.log('DownSlowDown - next step', next_step, from, to, from - to);
    setTimeout(function(){
      animateDownSlowDown(obj, next_step, to, next_obj, trigger);
    }, 25)
  }
}

function toggeleInfo(){
  //console.log('toggeleInfo')
  info1 = document.getElementById('info1')
  info2 = document.getElementById('info2')

  class_1 = info1.className
  info1.className = info2.className
  info2.className = class_1
}
