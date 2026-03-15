javascript:(function(){
  if(window.zkAdWatcher) return;

  function isShorts(){
    return location.pathname.startsWith('/shorts/');
  }

  function skipAd(){
    if(isShorts()) return;
    const ad=document.querySelector('.ad-showing, .ytp-ad-module-visible');
    const v=document.querySelector('video');
    const skip=document.querySelector('.ytp-ad-skip-button-modern, .ytp-ad-skip-button');
    if(ad&&v&&v.duration) v.currentTime=v.duration;
    if(skip) skip.click();
  }

  window.zkAdWatcher=new MutationObserver(skipAd);
  window.zkAdWatcher.observe(document.body,{
    childList:true,
    subtree:true,
    attributes:true
  });
})();
