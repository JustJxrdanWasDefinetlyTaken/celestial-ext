javascript:(function(){
  if(window.zkAdSkipper) return;
  window.zkAdSkipper = setInterval(()=>{
    const v = document.querySelector('video');
    const ad = document.querySelector('.ad-showing, .ytp-ad-module-visible');
    const skip = document.querySelector('.ytp-ad-skip-button-modern, .ytp-ad-skip-button');
    if(ad && v) v.currentTime = v.duration;
    if(skip) skip.click();
  }, 500);
})();
