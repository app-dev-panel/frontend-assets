import{$ as e,K as t,M as n,N as r,P as i,T as a,Y as o,it as s,n as c,o as l,q as u,r as d,t as f,w as p}from"./createSimplePaletteValueFilter-617d6PKJ.js";import{n as m}from"./RtlProvider-C_oVOjuZ.js";var h=s(e());function g(e){return a(`MuiLinearProgress`,e)}p(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`dashedColorPrimary`,`dashedColorSecondary`,`bar`,`bar1`,`bar2`,`barColorPrimary`,`barColorSecondary`,`bar1Indeterminate`,`bar1Determinate`,`bar1Buffer`,`bar2Indeterminate`,`bar2Buffer`]);var _=n(),v=4,y=i`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,b=typeof y==`string`?null:r`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,x=i`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,S=typeof x==`string`?null:r`
        animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,C=i`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,w=typeof C==`string`?null:r`
        animation: ${C} 3s infinite linear;
      `,T=e=>{let{classes:n,variant:r,color:i}=e;return t({root:[`root`,`color${o(i)}`,r],dashed:[`dashed`,`dashedColor${o(i)}`],bar1:[`bar`,`bar1`,`barColor${o(i)}`,(r===`indeterminate`||r===`query`)&&`bar1Indeterminate`,r===`determinate`&&`bar1Determinate`,r===`buffer`&&`bar1Buffer`],bar2:[`bar`,`bar2`,r!==`buffer`&&`barColor${o(i)}`,r===`buffer`&&`color${o(i)}`,(r===`indeterminate`||r===`query`)&&`bar2Indeterminate`,r===`buffer`&&`bar2Buffer`]},g,n)},E=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),D=l(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${o(n.color)}`],t[n.variant]]}})(d(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(f()).map(([t])=>({props:{color:t},style:{backgroundColor:E(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),O=l(`span`,{name:`MuiLinearProgress`,slot:`Dashed`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.dashed,t[`dashedColor${o(n.color)}`]]}})(d(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(f()).map(([t])=>{let n=E(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),w||{animation:`${C} 3s infinite linear`}),k=l(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar1,t[`barColor${o(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar1Indeterminate,n.variant===`determinate`&&t.bar1Determinate,n.variant===`buffer`&&t.bar1Buffer]}})(d(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(f()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${v}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:b||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),A=l(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar2,t[`barColor${o(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar2Indeterminate,n.variant===`buffer`&&t.bar2Buffer]}})(d(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(f()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(f()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:E(e,t),transition:`transform .${v}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:S||{animation:`${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),j=h.forwardRef(function(e,t){let n=c({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,value:a,valueBuffer:o,variant:s=`indeterminate`,...l}=n,d={...n,color:i,variant:s},f=T(d),p=m(),h={},g={bar1:{},bar2:{}};if((s===`determinate`||s===`buffer`)&&a!==void 0){h[`aria-valuenow`]=Math.round(a),h[`aria-valuemin`]=0,h[`aria-valuemax`]=100;let e=a-100;p&&(e=-e),g.bar1.transform=`translateX(${e}%)`}if(s===`buffer`&&o!==void 0){let e=(o||0)-100;p&&(e=-e),g.bar2.transform=`translateX(${e}%)`}return(0,_.jsxs)(D,{className:u(f.root,r),ownerState:d,role:`progressbar`,...h,ref:t,...l,children:[s===`buffer`?(0,_.jsx)(O,{className:f.dashed,ownerState:d}):null,(0,_.jsx)(k,{className:f.bar1,ownerState:d,style:g.bar1}),s===`determinate`?null:(0,_.jsx)(A,{className:f.bar2,ownerState:d,style:g.bar2})]})});export{j as t};