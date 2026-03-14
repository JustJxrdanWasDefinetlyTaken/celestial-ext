javascript:(function(){
  if(window.zkWatcher) return;

  window.zkWatcher=new MutationObserver(()=>{
    const ad=document.querySelector('.ad-showing, .ytp-ad-module-visible');
    const v=document.querySelector('video');
    const skip=document.querySelector('.ytp-ad-skip-button-modern, .ytp-ad-skip-button');

    if(location.pathname.startsWith('/shorts/')){
      if(ad) window.scrollBy(0,innerHeight);
      return;
    }

    if(ad&&v) v.currentTime=v.duration;
    if(skip) skip.click();
  });

  window.zkWatcher.observe(document.body,{
    childList:true,
    subtree:true,
    attributes:true
  });
})();
