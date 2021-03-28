// Setup namespace for ad.

(function (){
  window.onload = function() {
    if (Enabler.isInitialized()) {
      initBanner();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, initBanner);
    }
  }

  function initBanner() {
    var $banner = document.getElementById('banner'),
      $template = document.getElementById('template'),
      tl = new TimelineLite({onComplete:function() {
        //  this.restart();
      }
      });

    $banner.innerHTML = $template.innerHTML;
    insertVideoSource();
    document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
    document.getElementsByClassName('cta-group')[0].addEventListener('click', bgExitHandler, false);

    function bgExitHandler(e) {
      Enabler.exit('Background Exit');
    }

    TweenLite.defaultEase = Cubic.easeInOut;

    showFrames(tl);
  } // end initBanner

  function insertVideoSource() {
    var mp4 = Enabler.getUrl('video.mp4');
    var webm = Enabler.getUrl('video.webm');
    var ogg = Enabler.getUrl('video.ogg');

    var sourceMp4 = document.getElementById("mp4");
    setAttributes(sourceMp4, {"src":mp4});
    var sourceWebm = document.getElementById("webm");
    setAttributes(sourceWebm, {"src":webm});
    var sourceOgg = document.getElementById("ogg");
    setAttributes(sourceOgg, {"src":ogg});
  }

  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  function generateFrame0(tl){
    // var tl = new TimelineLite();
    tl.addLabel("startf0");
    
    tl.add(TweenLite.from(".headline-1", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=.2");
    tl.add(TweenLite.from(".tandc", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=.6");
    tl.add(TweenLite.to(".background", 1, {width: 728, ease:Strong.easeInOut}), "startf0+=4");
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
