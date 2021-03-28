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

    document.getElementsByClassName('cta-group')[0].addEventListener('mouseover',function() {
      btnHovered(true);
    });
    document.getElementsByClassName('cta-group')[0].addEventListener('mouseout',function() {
      btnHovered(false);
    });

    function btnHovered(bool) {
      var t2 = new TimelineLite();

      if(!bool){
        t2.to('.cta-hover', 0.1, {autoAlpha: 0})
          .to('.cta', 0.1, {autoAlpha: 1});
      } else {
        t2.to('.cta-hover', 0.1, {autoAlpha: 1})
          .to('.cta', 0.1, {autoAlpha: 0});
      }

    }
  } // end initBanner

  function generateFrame0(tl){
    // var tl = new TimelineLite();
    tl.addLabel("startf0");
    
    tl.add(TweenLite.to(".headline-1", 1, {autoAlpha:1, ease:Strong.easeInOut}), "startf0+=.2");
    tl.add(TweenLite.to(".tandc", 1, {autoAlpha:1, ease:Strong.easeInOut}), "startf0+=.5");
    tl.add(TweenLite.to(".headline-1", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=4.5");
    tl.add(TweenLite.to(".tandc", 1, {autoAlpha:0, ease:Strong.easeInOut}), "startf0+=4.5");
    tl.add(TweenLite.to(".background-2", 1, {autoAlpha:1, ease:Strong.easeInOut}), "startf0+=5");
    tl.add(TweenLite.to(".headline-2", 1, {autoAlpha:1, ease:Strong.easeInOut}), "startf0+=5.5");
    tl.add(TweenLite.to(".cta-group, .cta-group .cta", 1, {opacity:1, ease:Strong.easeInOut, onComplete: addShine}), "startf0+=5.5");

    return tl;
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

  function addShine() {
    $( ".cta-group .cta" ).addClass('shine');
  }

}());
