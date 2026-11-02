(()=>{const el=document.getElementById('metrics');if(!el)return;const f=n=>Number(n).toLocaleString('ko-KR');
fetch('assets/metrics.json?v='+Date.now().toString().slice(0,-5),{cache:'no-cache'}).then(r=>r.json()).then(M=>{
const F=M.followers,H=M.history||[],md=d=>d.slice(5).replace('-','/'),T=M.top_posts||[];
const tops=T.map((p,i)=>`<a class="tp" href="${p.url}" target="_blank" rel="noopener"><span class="r">${i+1}</span><div><p>${p.text}</p><div class="m">${md(p.date_kst.slice(0,10))} · <span data-l="ko">노출</span><span data-l="en">Views</span> ${f(p.impressions)} · ♥ ${f(p.likes)} · 💬 ${f(p.replies)} · 🔁 ${f(p.reposts)} · 🔖 ${f(p.bookmarks)}</div></div></a>`).join('');
el.innerHTML=`<div class="sh"><h2><span data-l="ko">성과 지표 </span><span class="en">Metrics</span></h2></div><p class="sub"><span data-l="ko">사부작 숫자, 부풀리지 않고 그대로</span><span data-l="en">Real 𝕏 numbers, no inflating</span></p>
<div class="mgrid">
<div class="mt"><span class="k"><span data-l="ko">현재 팔로워 </span><span class="en">Followers</span></span><b>${f(F.current)}</b><span class="s">${F.as_of_kst} KST</span></div>
<div class="mt"><span class="k"><span data-l="ko">기록 시작 </span><span class="en">Tracking since</span></span><b>${H.length?md(H[0].date):'-'}</b><span class="s"><span data-l="ko">${M.history_note||''}</span><span data-l="en">Chart appears once data builds up</span></span></div></div>
<div class="mrow"><div class="panel"><h3><span data-l="ko">요즘 반응 좋았던 글 </span><span class="en">Recent posts</span></h3>${tops}</div>
<div class="partner" id="partner"><h3><span data-l="ko">협업·같이 놀기 </span><span class="en">Collab</span></h3><p><span data-l="ko">농산물·크립토·테슬라·그록봇 얘기 같이 하실 분, DM 편하게 주세요.<br></span><span class="en">Into produce, crypto, Tesla or Grok Bot? DM me.</span></p><div class="cta"><a class="btn" href="https://x.com/tei0002" target="_blank" rel="noopener">𝕏 DM @tei0002</a></div></div></div>
<p class="stamp"><span data-l="ko">마지막 업데이트 </span><span class="en">Last updated</span> · ${M.updated_kst} KST</p>`}).catch(()=>{el.remove()})})();
