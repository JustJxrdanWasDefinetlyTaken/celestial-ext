javascript:(function(){
  if(document.getElementById('zk-controls-wrap')) return;
  if(!document.getElementById('be-vietnam-pro-font')){
    const l=document.createElement('link');
    l.id='be-vietnam-pro-font';
    l.rel='stylesheet';
    l.href='https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap';
    document.head.appendChild(l);
  }

  const wrap=document.createElement('div');
  wrap.id='zk-controls-wrap';
  Object.assign(wrap.style,{
    position:'fixed', bottom:'150px', left:'20px', zIndex:'9999',
    display:'flex', flexDirection:'column', gap:'10px', transition:'opacity 0.3s ease',
    fontFamily:'"Be Vietnam Pro", sans-serif'
  });

  const btnStyle={cursor:'pointer', fontFamily:'"Be Vietnam Pro", sans-serif', fontWeight:'bold'};

  const skipBtn=document.createElement('button');
  skipBtn.innerText='SKIP AD';
  Object.assign(skipBtn.style,{
    ...btnStyle, padding:'14px 22px', backgroundColor:'#d10303', color:'#fff',
    border:'none', borderRadius:'12px', fontSize:'14px', boxShadow:'2px 4px 12px rgba(0,0,0,0.4)'
  });

  const toggleBtn=document.createElement('button');
  toggleBtn.innerText='HIDE';
  Object.assign(toggleBtn.style,{
    ...btnStyle, padding:'6px 12px', backgroundColor:'#333', color:'#eee',
    border:'none', borderRadius:'8px', fontSize:'11px', width:'fit-content'
  });

  skipBtn.onclick=()=>{
    const ad=document.querySelector('.ad-showing, .ytp-ad-module-visible');
    if(!ad && !confirm("this will skip the current video. continue?")) return;
    const v=document.querySelector('video'); if(v) v.currentTime=v.duration;
    const s=document.querySelector('.ytp-ad-skip-button-modern, .ytp-ad-skip-button'); if(s) s.click();
  };

  let hidden=false;
  toggleBtn.onclick=()=>{
    hidden=!hidden;
    skipBtn.style.display=hidden?'none':'block';
    toggleBtn.innerText=hidden?'SHOW':'HIDE';
    toggleBtn.style.opacity=hidden?'0.5':'1';
  };

  wrap.append(toggleBtn, skipBtn);
  document.body.appendChild(wrap);
})();
