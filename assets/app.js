const S=[
{id:'toolkits',t:'𝕏 성장 툴킷',en:'𝕏 Growth Toolkits',items:[
{b:'TOOLKIT #1',d:'2026.11.01',t:'인팔 300 서클',te:'Inpal 300 Circle',s:'맞팔 인증 친구 최대 300명을, 최근에 답글을 못 단 순서로 정렬해 주는 매일 보드.',en:'Daily board of priority mutuals, sorted by who you haven’t replied to lately.',img:'t_inpal',u:'/toolkit1',in:1,gk:'보드 소개 보기 →',ge:'See the board →'},
{b:'TOOLKIT #2',d:'2026.11.01',t:'납득 라이브러리 · 내 𝕏 글 보드',te:'Nabdeuk Library · My 𝕏 Posts Board',s:'지난 1년간 내 𝕏 글을 검색·정렬할 수 있는 보드.',en:'A searchable, sortable board of your own 𝕏 posts from the past year.',img:'t_lib',u:'/toolkit2',in:1,gk:'보드 소개 보기 →',ge:'See the board →'}]},
{id:'boards',t:'대시보드',en:'Boards',items:[
{b:'BOARD',d:'2026.11.01',t:'납득이 𝕏 효율화 대시보드',te:'Nabdeuki 𝕏 Efficiency Dashboard',s:'𝕏 효율화 프로젝트 진행 현황을 한눈에 보는 대시보드.',en:'Progress dashboard for the 𝕏 efficiency project.',img:'t_eff'},
{b:'PLAN',d:'2026.11.01',t:'30일 게시글 계획 (11/1~11/30)',te:'30-Day Posting Plan (11/1–11/30)',s:'한 달 동안의 𝕏 게시글 일정과 주제를 정리한 계획표.',en:'A 30-day 𝕏 posting plan.',img:'t_decl',u:'/plan30',in:1},
{b:'BOARD',d:'2026.11.01',t:'클린 팔로잉 룸 · 활동중단한 엑친을 언팔하라!',te:'Clean Following Room · Unfollow the inactive!',s:'오래 활동이 없는 팔로잉 계정을 모아 바로 정리할 수 있는 보드.',en:'Find inactive accounts you follow and clean up.',img:'t_unf'}]},
{id:'templates',t:'그록봇 템플릿',en:'Bot Templates',items:[
{b:'TEMPLATE',d:'2026.10.30',t:'납득이 𝕏 연구소 언팔 보드',te:'Nabdeuki 𝕏 Lab Unfollow Board',s:'내 그록봇에 바로 복사해 쓰는 언팔 보드 템플릿.',en:'Copy this Grok Bot template to build your own unfollow board.',img:'t_unf',u:'https://x.ai/bot/4-88zaIJIAtahDuxERLAZ'},
{b:'TEMPLATE',d:'2026.11.01',t:'납득이 𝕏 효율화 프로젝트',te:'Nabdeuki 𝕏 Efficiency Project',s:'툴킷 #1 인팔 300 서클 + #2 납득 라이브러리를 담은 그록봇 템플릿.',en:'Grok Bot template bundling Toolkit #1 and #2.',img:'t_eff'}]}];
const G=[['g1','2026.10.31'],['g6','2026.10.31'],['g3','2026.11.01'],['g4','2026.11.01'],['g2','2026.11.01'],['g5','2026.11.01']];
const h=s=>s;let o='';
for(const c of S){o+=`<section class="sec" id="${c.id}"><div class="sh"><h2><span data-l="ko">${c.t} </span><span class="en">${c.en}</span></h2><span class="n">${c.items.length}</span></div><div class="grid">`;
for(const i of c.items){const tag=i.u?'a':'div';o+=`<${tag} class="card"${i.u?` href="${i.u}"${i.in?'':' target="_blank" rel="noopener"'}`:''}><img src="assets/img/${i.img}.webp" alt="" loading="lazy" width="800" height="450"><div class="cb"><div class="meta"><span class="badge">${i.b}</span><time>${i.d}</time></div><h3><span data-l="ko">${i.t}</span><span data-l="en">${i.te}</span></h3><p data-l="ko">${i.s}</p><p class="en">${i.en}</p><span class="${i.u?'go':'soon'}">${i.u?(i.in?`<span data-l="ko">${i.gk||'계획 보기 →'}</span><span data-l="en">${i.ge||'Open plan →'}</span>`:'<span data-l="ko">템플릿 열기 →</span><span data-l="en">Open template →</span>'):'<span data-l="ko">공개 예정</span><span data-l="en">Coming soon</span>'}</span></div></${tag}>`}
o+='</div></section>'}
o+=`<section class="sec" id="gallery"><div class="sh"><h2><span data-l="ko">납득이 갤러리 </span><span class="en">Gallery</span></h2><span class="n">${G.length}</span></div><p class="sub"><span data-l="ko">𝕏 게시글용 납득이 이미지 시리즈</span><span data-l="en">Nabdeuki artwork series for 𝕏 posts</span></p><div class="gal">`+G.map(([g,d])=>`<button data-src="assets/img/${g}.webp" aria-label="Enlarge"><img src="assets/img/${g}.webp" alt="Nabdeuki 𝕏 post art ${d}" loading="lazy" width="800" height="450"><time>${d}</time></button>`).join('')+'</div></section>';
document.getElementById('sections').innerHTML=o;
const lb=document.getElementById('lb');document.querySelectorAll('.gal button').forEach(b=>b.onclick=()=>{lb.firstChild.src=b.dataset.src;lb.hidden=false});lb.onclick=()=>lb.hidden=true;
