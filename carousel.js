document.querySelectorAll('.carousel').forEach(track => {
 const originals = [...track.children];
 const copy = slide => {const c=slide.cloneNode(true); c.setAttribute('aria-hidden','true'); return c;};
 originals.forEach(s=>track.append(copy(s)));
 const before=document.createDocumentFragment(); originals.forEach(s=>before.append(copy(s))); track.prepend(before);
 track.tabIndex=0; track.style.scrollSnapType='none'; track.style.scrollBehavior='auto';
 let span=0,pos=0,last=0,held=false,pause=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const measure=()=>{span=originals[0].offsetLeft-track.firstElementChild.offsetLeft;pos=span;track.scrollLeft=pos;};
 new ResizeObserver(measure).observe(track); requestAnimationFrame(measure);
 track.addEventListener('pointerdown',()=>held=true);
 window.addEventListener('pointerup',()=>{if(held){held=false;pause=performance.now()+1800;}});
 window.addEventListener('pointercancel',()=>held=false);
 track.addEventListener('wheel',()=>pause=performance.now()+1800,{passive:true});
 track.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();track.scrollLeft+=(e.key==='ArrowRight'?1:-1)*span/originals.length;pos=track.scrollLeft;pause=performance.now()+1800;});
 function frame(now){
  const dt=Math.min(now-(last||now),50);last=now;
  if(span&&!held&&now>pause&&!document.hidden){
   if(Math.abs(track.scrollLeft-pos)>2)pos=track.scrollLeft;
   if(!reduced.matches)pos+=dt*.025;
   pos=((pos%span)+span)%span+span;track.scrollLeft=pos;
  }
  requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
});
