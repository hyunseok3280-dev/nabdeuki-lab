const S=[
{id:'toolkits',t:'사부작 툴킷',en:'Sabujak Toolkits',items:[
{b:'TOOLKIT #1',d:'2026.11.02',t:'인팔 보드 · 요즘 못 챙긴 엑친',te:'Inpal Board · Mutuals I’ve Missed',s:'맞팔 엑친들, 최근에 답글 못 단 순서대로 쭉. 차트만 보다 사람을 놓치면 안 되니까요.',en:'Your mutuals, sorted by who you haven’t replied to lately.',img:'t_inpal',u:'toolkit1/',in:1,gk:'보드 구경하기 →',ge:'See the board →'},
{b:'TOOLKIT #2',d:'2026.11.02',t:'사부작 글창고 · 내 𝕏 글 보드',te:'Sabujak Post Shelf · My 𝕏 Posts Board',s:'농산물 얘기, 코인 한탄, 테슬라 자랑… 내가 쓴 글 한 번에 찾아보는 보드.',en:'Search and sort everything you’ve posted on 𝕏.',img:'t_lib',u:'toolkit2/',in:1,gk:'보드 구경하기 →',ge:'See the board →'}]},
{id:'boards',t:'대시보드',en:'Boards',items:[
{b:'BOARD',d:'2026.11.02',t:'사부작 실험 현황판',te:'Sabujak Experiment Board',s:'이번 달 실험 어디까지 왔나… 스스로 감시용 대시보드.',en:'Where this month’s experiment stands.',img:'t_eff'},
{b:'PLAN',d:'2026.11.02',t:'30일 게시글 계획',te:'30-Day Posting Plan',s:'한 달 뭐 올릴지 적어둔 노트. 일상 반, 크립토 반, 헛소리 약간.',en:'A month of 𝕏 posts: daily life, crypto, a bit of nonsense.',img:'t_decl',u:'plan30/',in:1},
{b:'BOARD',d:'2026.11.02',t:'언팔 보드 · 잠수 탄 계정 정리',te:'Unfollow Board · Clean up the inactive',s:'오래 조용한 팔로잉 모아서 정리. 타임라인도 냉장고처럼 가끔 비워야 함.',en:'Find inactive accounts you follow and tidy up.',img:'t_unf'}]},
{id:'templates',t:'그록봇 템플릿',en:'Bot Templates',items:[
{b:'TEMPLATE',d:'2026.10.30',t:'언팔 보드 템플릿 (원본 공유본)',te:'Unfollow Board Template (original share)',s:'내 그록봇에 복사해 쓰는 언팔 보드. 사부작 버전은 손보는 중.',en:'Copy into your Grok Bot. Sabujak version in progress.',img:'t_unf',u:'https://x.ai/bot/4-88zaIJIAtahDuxERLAZ'},
{b:'TEMPLATE',d:'2026.11.02',t:'사부작 𝕏 실험 세트',te:'Sabujak 𝕏 Experiment Kit',s:'인팔 보드 + 글창고 묶음 템플릿. 곧 나와요, 아마도…',en:'Inpal Board + Post Shelf bundle. Coming soon-ish.',img:'t_eff'}]}];
const G=[['g1','11/1'],['g2','11/1'],['g3','11/2'],['g4','11/2']];
const h=s=>s;let o='';
for(const c of S){o+=`<section class="sec" id="${c.id}"><div class="sh"><h2><span data-l="ko">${c.t} </span><span class="en">${c.en}</span></h2><span class="n">${c.items.length}</span></div><div class="grid">`;
for(const i of c.items){const tag=i.u?'a':'div';o+=`<${tag} class="card"${i.u?` href="${i.u}"${i.in?'':' target="_blank" rel="noopener"'}`:''}><img src="assets/img/${i.img}.webp" alt="" loading="lazy" width="800" height="450"><div class="cb"><div class="meta"><span class="badge">${i.b}</span><time>${i.d}</time></div><h3><span data-l="ko">${i.t}</span><span data-l="en">${i.te}</span></h3><p data-l="ko">${i.s}</p><p class="en">${i.en}</p><span class="${i.u?'go':'soon'}">${i.u?(i.in?`<span data-l="ko">${i.gk||'계획 보기 →'}</span><span data-l="en">${i.ge||'Open plan →'}</span>`:'<span data-l="ko">템플릿 열기 →</span><span data-l="en">Open template →</span>'):'<span data-l="ko">공개 예정</span><span data-l="en">Coming soon</span>'}</span></div></${tag}>`}
o+='</div></section>'}
o+=`<section class="sec" id="gallery"><div class="sh"><h2><span data-l="ko">작업 갤러리 </span><span class="en">Gallery</span></h2><span class="n">${G.length}</span></div><p class="sub"><span data-l="ko">농산물·차트·YL·그록봇, 요즘 사부작 기록 그림</span><span data-l="en">Recent Sabujak sketches.</span></p><div class="gal">`+G.map(([g,d])=>`<button data-src="assets/img/${g}.webp" aria-label="Enlarge"><img src="assets/img/${g}.webp" alt="𝕏 post art ${d}" loading="lazy" width="800" height="800"><time>${d}</time></button>`).join('')+'</div></section>';
document.getElementById('sections').innerHTML=o;
const lb=document.getElementById('lb');document.querySelectorAll('.gal button').forEach(b=>b.onclick=()=>{lb.firstChild.src=b.dataset.src;lb.hidden=false});lb.onclick=()=>lb.hidden=true;
