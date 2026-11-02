(()=>{const st=document.getElementById('stage');if(!st)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches){st.classList.add('still');return}
const q=new URLSearchParams(location.search);if(q.has('mx')){st.style.setProperty('--mx',q.get('mx'));st.style.setProperty('--my',q.get('my')||0)}
let tx=0,ty=0,x=0,y=0,raf=0;
const set=(a,b)=>{tx=a;ty=b;if(!raf)raf=requestAnimationFrame(tick)};
function tick(){x+=(tx-x)*.08;y+=(ty-y)*.08;st.style.setProperty('--mx',x.toFixed(3));st.style.setProperty('--my',y.toFixed(3));raf=(Math.abs(tx-x)+Math.abs(ty-y)>.002)?requestAnimationFrame(tick):0}
st.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=st.getBoundingClientRect();set((e.clientX-r.left)/r.width*2-1,(e.clientY-r.top)/r.height*2-1)});
st.addEventListener('pointerleave',()=>set(0,0));
st.querySelectorAll('.bub').forEach(b=>b.addEventListener('pointerdown',()=>{b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}));
addEventListener('deviceorientation',e=>{if(e.gamma==null)return;set(Math.max(-1,Math.min(1,e.gamma/25)),Math.max(-1,Math.min(1,(e.beta-45)/25)))});
})();
