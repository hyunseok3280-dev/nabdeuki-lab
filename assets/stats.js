(()=>{const kst=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
const draw=days=>{const W=600,H=220,L=34,R=14,T=16,B=34,max=Math.max(1,...days.map(d=>d.count)),
x=i=>L+i*(W-L-R)/6,y=v=>T+(H-T-B)*(1-v/max),pts=days.map((d,i)=>[x(i),y(d.count)]);
let g='<defs><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b8cff" stop-opacity=".45"/><stop offset="1" stop-color="#6b8cff" stop-opacity="0"/></linearGradient></defs>';
for(let k=0;k<=2;k++){const v=Math.round(max*k/2),yy=y(v);g+=`<line x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}" stroke="#ffffff14"/><text x="${L-8}" y="${yy+4}" fill="#6b7299" font-size="12" text-anchor="end">${v}</text>`}
const line=pts.map(p=>p.join(',')).join(' ');
g+=`<polygon points="${L},${H-B} ${line} ${W-R},${H-B}" fill="url(#vg)"/><polyline points="${line}" fill="none" stroke="#8fb0ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
days.forEach((d,i)=>{g+=`<circle cx="${pts[i][0]}" cy="${pts[i][1]}" r="4.5" fill="#0c1026" stroke="#8fb0ff" stroke-width="2.5"><title>${d.date}: ${d.count}</title></circle><text x="${pts[i][0]}" y="${H-12}" fill="#8b93b8" font-size="12" text-anchor="middle">${d.date.slice(5).replace('-','/')}</text>`});
document.getElementById('vchart').innerHTML=g};
const flag=c=>/^[A-Z]{2}$/.test(c)&&c!=='XX'?String.fromCodePoint(...[...c].map(ch=>127397+ch.charCodeAt(0))):'🌐';
let last=null;const ctry=bc=>{last=bc;const el=document.getElementById('vctry');if(!el||!bc)return;const ko=(document.documentElement.lang||'ko').startsWith('ko');
let dn;try{dn=new Intl.DisplayNames([ko?'ko':'en'],{type:'region'})}catch(e){}
const nm=c=>c==='unknown'?(ko?'기록 전 (11/2 이전)':'Before tracking'):c==='XX'?(ko?'알 수 없음':'Unknown'):((dn&&dn.of(c))||c);
const rows=Object.entries(bc).sort((a,b)=>(a[0]==='unknown')-(b[0]==='unknown')||b[1]-a[1]),max=Math.max(1,...rows.filter(r=>r[0]!=='unknown').map(r=>r[1]));
el.innerHTML=rows.map(([c,v])=>`<li class="${c==='unknown'?'muted':''}"><span>${flag(c)}</span><span class="cn" title="${nm(c)}">${nm(c)}</span><span class="bar"><i style="width:${Math.min(100,v/max*100)}%"></i></span><b>${v.toLocaleString()}</b></li>`).join('')||`<li>${ko?'아직 데이터가 없어요':'No data yet'}</li>`};
new MutationObserver(()=>ctry(last)).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
const load=()=>fetch('/api/stats').then(r=>r.json()).then(s=>{document.getElementById('vtoday').textContent=s.today.toLocaleString();document.getElementById('vtotal').textContent=s.total.toLocaleString();draw(s.days);ctry(s.byCountry)}).catch(()=>{});
const k='nbd_visit',t=kst();
if(localStorage.getItem(k)!==t){fetch('/api/hit',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({lang:(window.nbdLang&&nbdLang())||document.documentElement.lang,nav:(navigator.language||'').slice(0,2)})}).then(r=>{if(r.ok)localStorage.setItem(k,t)}).finally(load)}else load();
})();
