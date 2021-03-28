// Setup namespace for ad.

(function (){
  window.onload = function() {
    initBanner();
  }

  function initBanner() {
    var $banner = document.getElementById('banner'),
      $template = document.getElementById('template'),
      tl = new TimelineLite({onComplete:function() {
        //  this.restart();
      }
      });

    $banner.innerHTML = $template.innerHTML;

    TweenLite.defaultEase = Cubic.easeInOut;

    showFrames(tl);
  } // end initBanner

  function generateFrame0(tl){
    // var tl = new TimelineLite();
    tl.addLabel("startf0");
    
    tl.add(TweenLite.from(".headline-1", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=.2");
    tl.add(TweenLite.from(".tandc", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=.6");
    tl.add(TweenLite.to(".background", 1, {width: 320, ease:Strong.easeInOut}), "startf0+=4");
    tl.add(TweenLite.to("#maskerOrange", 1, {duration: 1, attr: { cx: 32.0 }, ease: Strong.easeInOut, onUpdate:slideFillIn}), "startf0+=5.5");
    tl.add(TweenLite.to("#startColor line", 1, {autoAlpha:1, ease:Strong.easeInOut}), "startf0+=5.5");
    tl.add(TweenLite.to("#maskerWhite", 1, {  yoyo: true, repeat: 1, repeatDelay: .3, duration: 1, attr: { cx: 32.0 }, ease: Strong.easeInOut, onUpdate:slideFillIn}), "startf0+=6.5");


    return tl;
  }
  
  function slideFillIn() {
    newPercent = (this.progress() * 100).toFixed();
  }

  function showFrames(tl) {
    var addedtime = 0.3; // custom additional time, original value is 1; shorten time for testing
    var frameInterval = 1.5 + addedtime; //original value is 1.5 + addedtime; shorten time for testing
    var aniSpeed = 1.5, //original value is 1.5; shorten time for testing
        aniSpeedSlow = aniSpeed + 0.5,
        aniSpeedFast = aniSpeed - .5;
    var loopInterval = 2;

    tl.add("FrameStart0");
    tl.add(generateFrame0(tl));

    document.getElementsByClassName('scene0')[0].style.display = 'block';
  }
}());
