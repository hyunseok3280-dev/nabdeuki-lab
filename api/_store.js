// 메모리 저장(인스턴스 재시작 시 초기화). 영구 저장하려면 Vercel KV/Upstash로 교체.
const g=globalThis; g.__nbd=g.__nbd||{days:{},byLang:{},byCountry:{},byBrowserLang:{}};
module.exports=g.__nbd;
