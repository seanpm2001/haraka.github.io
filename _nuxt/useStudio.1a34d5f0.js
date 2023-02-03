import{u as _,b as O,g}from"./index.e4010cc5.js";import{d as b}from"./DocsAsideTree.6a520e57.js";import{r as x}from"./asyncData.7a8932d9.js";import{u as P,g as k}from"./Container.98cf359b.js";import{u as m}from"./cookie.3fefbf02.js";import J from"./ContentPreviewMode.ebad7501.js";import{i as R,j as A,k as U,S as F,m as S}from"./entry.3560c402.js";import"./runtime-core.esm-bundler.92c6bc06.js";/* empty css                               */import"./query.c3f7607a.js";const L=(u=[],v,h)=>{const f=[...v||[]],n=[...h||[]],p=JSON.parse(JSON.stringify(u));for(const i of f)if(i.oldPath)if(n.splice(n.findIndex(r=>r.path===i.oldPath),1),f.find(r=>r.path===i.oldPath))p.push({path:i.path,parsed:i.parsed});else{const r=p.find(d=>d.path===i.oldPath);r&&(r.path=i.path,i.parsed?r.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(d=>{r.parsed[d]=i.pathMeta[d]}))}else if(i.new)p.push({path:i.path,parsed:i.parsed});else{const l=p.find(r=>r.path===i.path);l&&Object.assign(l,{path:i.path,parsed:i.parsed})}for(const i of n)p.splice(p.findIndex(l=>l.path===i.path),1);const w=new Intl.Collator(void 0,{numeric:!0});return p.sort((i,l)=>w.compare(i.path,l.path)),p},D=R(()=>JSON.parse(JSON.stringify(k()))),Q=()=>{const u=_(),v=O().public.studio||{},h=D();let f;const n=P("studio-client-db",()=>null),p=P("studio-preview-db-files",()=>[]);u.hook("content:storage",e=>{n.value=e});const w=async(e,t,s=!0)=>{const o=m("previewToken",{sameSite:"none",secure:!0}),c=await e.getKeys(`${o.value}:`);await Promise.all(c.map(a=>e.removeItem(a))),await e.setItem(`${o.value}$`,JSON.stringify({ignoreBuiltContents:s})),await Promise.all(t.map(a=>{var C;return e.setItem(`${o.value}:${(C=a.parsed)==null?void 0:C._id}`,JSON.stringify(a.parsed))}))},i=e=>{const t=g(u,k);A(t,e||h),e||U(t,h)},l=e=>{var s,o,c,a;const t=(a=(c=(o=(s=u==null?void 0:u.vueApp)==null?void 0:s._context)==null?void 0:o.config)==null?void 0:c.globalProperties)==null?void 0:a.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(f||(f=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),g(u,t.updateTheme,[e||f]))},r=async e=>{if(p.value=e.files=e.files||p.value||[],!n.value)return!1;const t=L(e.files,e.additions,e.deletions),s=t.filter(a=>!a.path.startsWith(F));await w(n.value,s,(e.files||[]).length!==0);const o=t.find(a=>a.path===S.appConfig);i(o==null?void 0:o.parsed);const c=t.find(a=>a.path===S.tokensConfig);return l(c==null?void 0:c.parsed),y(),!0},d=async()=>{const e=m("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:v.apiURL,method:"POST",params:{token:e.value}})},T=()=>{const e=m("previewToken",{sameSite:"none",secure:!0}),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),b(J,{previewToken:e,apiURL:v.apiURL,syncPreview:r,requestPreviewSyncAPI:d}).mount(t)},I=async e=>{var o,c;const t=m("previewToken",{sameSite:"none",secure:!0});if(!e)return null;e=e.replace(/\/$/,"");let s=await((o=n.value)==null?void 0:o.getItem(`${t.value}:${e}`));return s||(s=await((c=n.value)==null?void 0:c.getItem(e))),s},$=e=>{var s;const t=m("previewToken",{sameSite:"none",secure:!0});n.value&&n.value.setItem(`${t.value}:${(s=e.parsed)==null?void 0:s._id}`,JSON.stringify(e.parsed))},N=async e=>{var s;const t=m("previewToken",{sameSite:"none",secure:!0});await((s=n.value)==null?void 0:s.removeItem(`${t.value}:${e}`))},y=()=>{g(u,x)};return{apiURL:v.apiURL,contentStorage:n,syncPreviewFiles:w,syncPreviewAppConfig:i,syncPreviewTokensConfig:l,requestPreviewSynchronization:d,mountPreviewUI:T,findContentWithId:I,updateContent:$,removeContentWithId:N,requestRerender:y}};export{Q as useStudio};
