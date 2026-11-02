const S=require('./_store');
module.exports=(req,res)=>{const days=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()+9*3600e3-i*864e5).toISOString().slice(0,10);days.push({date:d,count:S.days[d]||0})}
res.setHeader('cache-control','no-store');
res.status(200).json({today:days[6].count,total:Object.values(S.days).reduce((a,b)=>a+b,0),days,byLang:S.byLang,byCountry:S.byCountry,byBrowserLang:S.byBrowserLang,note:'local stub'})};
