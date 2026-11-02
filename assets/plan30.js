fetch('assets/plan30.json?v='+Date.now()).then(r=>r.json()).then(j=>{const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const W=(k,n)=>`<span data-l="ko">${k}</span><span data-l="en">${n}</span>`;
const it=j.items,pub=it.filter(i=>i.status==='published').length;document.getElementById('cnt').innerHTML=W(`발행 ${pub} / ${it.length}`,`Published ${pub} / ${it.length}`);
document.getElementById('upd').innerHTML=W('업데이트 ','Updated ')+e(j.updated);const wk=d=>Math.min(5,Math.ceil(+d.split('/')[1]/7));let o='',w=0;
for(const i of it){const k=wk(i.date);if(k!==w){if(w)o+='</ul>';w=k;o+=`<h3 class="wk">${W(k+'주 차','Week '+k)}</h3><ul class="pl">`}
const st=i.url?`<a class="st ok" href="${e(i.url)}" target="_blank" rel="noopener">${W('발행 완료 · 𝕏에서 보기 →','Published · View on 𝕏 →')}</a>`:`<span class="st">${W('예정','Planned')}</span>`;
o+=`<li><div class="dt">${e(i.date)}<br>${e(i.time)} <small>KST</small></div><div><div class="ct">${W(e(i.cat),e(i.cat_en||i.cat))}</div><div class="ttl">${W(e(i.title),e(i.title_en||i.title))}</div>${st}</div></li>`}
document.getElementById('list').innerHTML=o+'</ul>'}).catch(()=>{document.getElementById('list').innerHTML='<p>목록을 불러오지 못했어요. · Could not load the list.</p>'});
