const S=require('./_store');
module.exports=(req,res)=>{if(req.method!=='POST')return res.status(405).end();
let b=req.body||{};if(typeof b==='string')try{b=JSON.parse(b)}catch{b={}}
const d=new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
const c=(req.headers['x-vercel-ip-country']||'unknown');const inc=(o,k)=>o[k||'unknown']=(o[k||'unknown']||0)+1;
inc(S.days,d);inc(S.byLang,b.lang);inc(S.byCountry,c);inc(S.byBrowserLang,b.nav);res.status(200).json({ok:true})};
