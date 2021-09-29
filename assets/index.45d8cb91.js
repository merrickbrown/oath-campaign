import{c as u,P as E,r as t,R as s,I as D,S as P,a as O,b as T,d as h,e as L}from"./vendor.49c771c8.js";const g=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};g();var W=`/* Basic page style resets */
* {
  box-sizing: border-box;
}
[hidden] {
  display: none !important;
}

@font-face {
  font-family: Goudy Old Style;
    font-style: normal;
    font-weight: 400;
    src: local('Goudy Old Style'), url('https://fonts.cdnfonts.com/s/14850/GOUDOS.woff') format('woff');} 

@font-face {
  font-family: Goudy Text MT; 
  src: url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.eot"); 
  src: url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.woff") format("woff"), url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/1c869c3808c2670f9036650cf2a755ee.svg#Goudy Text MT") format("svg"); }

@font-face {
    font-family: Oath Symbols;
    src: url("https://cdn.glitch.com/6c9053eb-447f-4f98-93ff-1eaa0577aeb2%2FOath%20Symbols%20(Public).otf?v=1632608571045") format('OpenType');
}

.oath-symbol {
  font-family: Oath Symbols;
  visibility: hidden;
}

/* Page structure */
body {
  font-family: Goudy Old style;
  background-color: ivory;
  padding-bottom: 100px;
  height: 100%;
  font-size: 20px

}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.simulate-content {
    width: 500px
}

/* Page titles */
.simulate-page h1 {
  color: #8e58b1;
  font-family: "Goudy Text MT";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
}

.slider-container .rc-slider {
  width: calc(100% - 2rem);
  display: inline-block;
}

.slider-container .slider-value {
  display: inline;
  padding-left: 5px
}

.assumptions {
    background-color: beige;
    padding: 5px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 15px;
}
`;const R=u(E);function A(o){const a=o.data,i={x:a.remaining,y:a.remainingWinProb,type:"bar",mode:"lines+markers",name:"Prob att win",marker:{color:"lightcoral"}},r={x:a.remaining,y:a.remainingLoseProb,type:"bar",mode:"lines+markers",name:"Prob def win",marker:{color:"skyblue"}},e={x:a.remaining,y:a.winPercents,name:"% to win",type:"scatter",mode:"lines",yaxis:"y2",line:{color:"grey",dash:"dash"}},n={title:"% chance to win AND retain \u2265  X warbands",titlefont:{size:12},hoverformat:"d",font:{size:14},overlaying:"y",side:"right",range:[0,100]},c=`Attack: ${a.scenario.attackWarbands+a.scenario.attackDieModifier}d${a.scenario.attackWarbands}w vs Defense:${a.scenario.defenseDice}d${a.scenario.defenseWarbands}w`,m={autotick:!1,title:"# attacker warbands remaining",titlefont:{size:16},font:{size:18}};return t.exports.createElement(R,{data:[i,r,e],style:{width:o.width,height:o.height},layout:{margin:{t:36,b:36,l:28,r:36,pad:5},showlegend:!1,barmode:"stack",title:c,titlefont:{family:"Goudy Old Style, sans-serif",size:18},font:{family:"Goudy Old Style, sans-serif"},xaxis:m,yaxis:{showgrid:!1,autotick:!0},yaxis2:n,autosize:!0,paper_bgcolor:"ivory",plot_bgcolor:"ivory"},config:{displayModeBar:!1,responsive:!0,scrollZoom:!1}})}const I="modulepreload",j={},V="/oath-campaign/",d=function(a,i){return!i||i.length===0?a():Promise.all(i.map(r=>{if(r=`${V}${r}`,r in j)return;j[r]=!0;const e=r.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const _=document.createElement("link");if(_.rel=e?"stylesheet":I,e||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),e)return new Promise((c,m)=>{_.addEventListener("load",c),_.addEventListener("error",m)})})).then(()=>a())},x={"./scenarios/dd0/scenarios_dd0_adm-1.json":()=>d(()=>import("./scenarios_dd0_adm-1.e0023f4a.js"),[]),"./scenarios/dd0/scenarios_dd0_adm-2.json":()=>d(()=>import("./scenarios_dd0_adm-2.06440047.js"),[]),"./scenarios/dd0/scenarios_dd0_adm-3.json":()=>d(()=>import("./scenarios_dd0_adm-3.ddc9d22c.js"),[]),"./scenarios/dd0/scenarios_dd0_adm-4.json":()=>d(()=>import("./scenarios_dd0_adm-4.0feb1627.js"),[]),"./scenarios/dd0/scenarios_dd0_adm-5.json":()=>d(()=>import("./scenarios_dd0_adm-5.dd14a3ea.js"),[]),"./scenarios/dd0/scenarios_dd0_adm-6.json":()=>d(()=>import("./scenarios_dd0_adm-6.33a60e06.js"),[]),"./scenarios/dd0/scenarios_dd0_adm0.json":()=>d(()=>import("./scenarios_dd0_adm0.00b0876b.js"),[]),"./scenarios/dd0/scenarios_dd0_adm1.json":()=>d(()=>import("./scenarios_dd0_adm1.cf36ca35.js"),[]),"./scenarios/dd0/scenarios_dd0_adm2.json":()=>d(()=>import("./scenarios_dd0_adm2.12db28b3.js"),[]),"./scenarios/dd0/scenarios_dd0_adm3.json":()=>d(()=>import("./scenarios_dd0_adm3.928af405.js"),[]),"./scenarios/dd0/scenarios_dd0_adm4.json":()=>d(()=>import("./scenarios_dd0_adm4.82a3d834.js"),[]),"./scenarios/dd0/scenarios_dd0_adm5.json":()=>d(()=>import("./scenarios_dd0_adm5.8ba98075.js"),[]),"./scenarios/dd0/scenarios_dd0_adm6.json":()=>d(()=>import("./scenarios_dd0_adm6.6603f890.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-1.json":()=>d(()=>import("./scenarios_dd1_adm-1.10725427.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-2.json":()=>d(()=>import("./scenarios_dd1_adm-2.6b470052.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-3.json":()=>d(()=>import("./scenarios_dd1_adm-3.cfd66307.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-4.json":()=>d(()=>import("./scenarios_dd1_adm-4.83621a4d.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-5.json":()=>d(()=>import("./scenarios_dd1_adm-5.fa76cc8f.js"),[]),"./scenarios/dd1/scenarios_dd1_adm-6.json":()=>d(()=>import("./scenarios_dd1_adm-6.3ebb19b5.js"),[]),"./scenarios/dd1/scenarios_dd1_adm0.json":()=>d(()=>import("./scenarios_dd1_adm0.c691a712.js"),[]),"./scenarios/dd1/scenarios_dd1_adm1.json":()=>d(()=>import("./scenarios_dd1_adm1.8a0cb1e3.js"),[]),"./scenarios/dd1/scenarios_dd1_adm2.json":()=>d(()=>import("./scenarios_dd1_adm2.d3045f59.js"),[]),"./scenarios/dd1/scenarios_dd1_adm3.json":()=>d(()=>import("./scenarios_dd1_adm3.f18c0cb1.js"),[]),"./scenarios/dd1/scenarios_dd1_adm4.json":()=>d(()=>import("./scenarios_dd1_adm4.eeb48e03.js"),[]),"./scenarios/dd1/scenarios_dd1_adm5.json":()=>d(()=>import("./scenarios_dd1_adm5.bc2086a6.js"),[]),"./scenarios/dd1/scenarios_dd1_adm6.json":()=>d(()=>import("./scenarios_dd1_adm6.276a71b8.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-1.json":()=>d(()=>import("./scenarios_dd10_adm-1.8b9491d4.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-2.json":()=>d(()=>import("./scenarios_dd10_adm-2.7e51c023.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-3.json":()=>d(()=>import("./scenarios_dd10_adm-3.99132d8a.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-4.json":()=>d(()=>import("./scenarios_dd10_adm-4.39927be6.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-5.json":()=>d(()=>import("./scenarios_dd10_adm-5.11fac169.js"),[]),"./scenarios/dd10/scenarios_dd10_adm-6.json":()=>d(()=>import("./scenarios_dd10_adm-6.0d84352a.js"),[]),"./scenarios/dd10/scenarios_dd10_adm0.json":()=>d(()=>import("./scenarios_dd10_adm0.fe827d06.js"),[]),"./scenarios/dd10/scenarios_dd10_adm1.json":()=>d(()=>import("./scenarios_dd10_adm1.9daa74fd.js"),[]),"./scenarios/dd10/scenarios_dd10_adm2.json":()=>d(()=>import("./scenarios_dd10_adm2.89c219c5.js"),[]),"./scenarios/dd10/scenarios_dd10_adm3.json":()=>d(()=>import("./scenarios_dd10_adm3.08bfc0b6.js"),[]),"./scenarios/dd10/scenarios_dd10_adm4.json":()=>d(()=>import("./scenarios_dd10_adm4.353ffbc4.js"),[]),"./scenarios/dd10/scenarios_dd10_adm5.json":()=>d(()=>import("./scenarios_dd10_adm5.aa98d779.js"),[]),"./scenarios/dd10/scenarios_dd10_adm6.json":()=>d(()=>import("./scenarios_dd10_adm6.34f2ca5a.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-1.json":()=>d(()=>import("./scenarios_dd2_adm-1.f83e4919.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-2.json":()=>d(()=>import("./scenarios_dd2_adm-2.eebc2244.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-3.json":()=>d(()=>import("./scenarios_dd2_adm-3.881bf472.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-4.json":()=>d(()=>import("./scenarios_dd2_adm-4.70819552.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-5.json":()=>d(()=>import("./scenarios_dd2_adm-5.d04b347e.js"),[]),"./scenarios/dd2/scenarios_dd2_adm-6.json":()=>d(()=>import("./scenarios_dd2_adm-6.572af85d.js"),[]),"./scenarios/dd2/scenarios_dd2_adm0.json":()=>d(()=>import("./scenarios_dd2_adm0.7fc4b3ad.js"),[]),"./scenarios/dd2/scenarios_dd2_adm1.json":()=>d(()=>import("./scenarios_dd2_adm1.7eb4b8e3.js"),[]),"./scenarios/dd2/scenarios_dd2_adm2.json":()=>d(()=>import("./scenarios_dd2_adm2.cbd3517a.js"),[]),"./scenarios/dd2/scenarios_dd2_adm3.json":()=>d(()=>import("./scenarios_dd2_adm3.5ceeea88.js"),[]),"./scenarios/dd2/scenarios_dd2_adm4.json":()=>d(()=>import("./scenarios_dd2_adm4.19397b36.js"),[]),"./scenarios/dd2/scenarios_dd2_adm5.json":()=>d(()=>import("./scenarios_dd2_adm5.4499ee10.js"),[]),"./scenarios/dd2/scenarios_dd2_adm6.json":()=>d(()=>import("./scenarios_dd2_adm6.01e176e9.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-1.json":()=>d(()=>import("./scenarios_dd3_adm-1.4b2c3a7a.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-2.json":()=>d(()=>import("./scenarios_dd3_adm-2.a58dad21.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-3.json":()=>d(()=>import("./scenarios_dd3_adm-3.22826894.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-4.json":()=>d(()=>import("./scenarios_dd3_adm-4.1f205bba.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-5.json":()=>d(()=>import("./scenarios_dd3_adm-5.e6c3de33.js"),[]),"./scenarios/dd3/scenarios_dd3_adm-6.json":()=>d(()=>import("./scenarios_dd3_adm-6.0cf99bcc.js"),[]),"./scenarios/dd3/scenarios_dd3_adm0.json":()=>d(()=>import("./scenarios_dd3_adm0.497d6fe7.js"),[]),"./scenarios/dd3/scenarios_dd3_adm1.json":()=>d(()=>import("./scenarios_dd3_adm1.de51d9f1.js"),[]),"./scenarios/dd3/scenarios_dd3_adm2.json":()=>d(()=>import("./scenarios_dd3_adm2.a5b34ec1.js"),[]),"./scenarios/dd3/scenarios_dd3_adm3.json":()=>d(()=>import("./scenarios_dd3_adm3.131a8f6c.js"),[]),"./scenarios/dd3/scenarios_dd3_adm4.json":()=>d(()=>import("./scenarios_dd3_adm4.9b77a7c7.js"),[]),"./scenarios/dd3/scenarios_dd3_adm5.json":()=>d(()=>import("./scenarios_dd3_adm5.0bc10d3a.js"),[]),"./scenarios/dd3/scenarios_dd3_adm6.json":()=>d(()=>import("./scenarios_dd3_adm6.44f38048.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-1.json":()=>d(()=>import("./scenarios_dd4_adm-1.eacde6d5.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-2.json":()=>d(()=>import("./scenarios_dd4_adm-2.bf0864b4.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-3.json":()=>d(()=>import("./scenarios_dd4_adm-3.d9762a48.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-4.json":()=>d(()=>import("./scenarios_dd4_adm-4.70a8f41f.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-5.json":()=>d(()=>import("./scenarios_dd4_adm-5.f31483a8.js"),[]),"./scenarios/dd4/scenarios_dd4_adm-6.json":()=>d(()=>import("./scenarios_dd4_adm-6.4674d5ff.js"),[]),"./scenarios/dd4/scenarios_dd4_adm0.json":()=>d(()=>import("./scenarios_dd4_adm0.5335bd74.js"),[]),"./scenarios/dd4/scenarios_dd4_adm1.json":()=>d(()=>import("./scenarios_dd4_adm1.1c94f1fd.js"),[]),"./scenarios/dd4/scenarios_dd4_adm2.json":()=>d(()=>import("./scenarios_dd4_adm2.15a5b036.js"),[]),"./scenarios/dd4/scenarios_dd4_adm3.json":()=>d(()=>import("./scenarios_dd4_adm3.f48e19e5.js"),[]),"./scenarios/dd4/scenarios_dd4_adm4.json":()=>d(()=>import("./scenarios_dd4_adm4.793f0339.js"),[]),"./scenarios/dd4/scenarios_dd4_adm5.json":()=>d(()=>import("./scenarios_dd4_adm5.cdf8d52b.js"),[]),"./scenarios/dd4/scenarios_dd4_adm6.json":()=>d(()=>import("./scenarios_dd4_adm6.1ec40366.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-1.json":()=>d(()=>import("./scenarios_dd5_adm-1.d3d7de13.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-2.json":()=>d(()=>import("./scenarios_dd5_adm-2.74d54d3d.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-3.json":()=>d(()=>import("./scenarios_dd5_adm-3.dc63631a.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-4.json":()=>d(()=>import("./scenarios_dd5_adm-4.3de0fc21.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-5.json":()=>d(()=>import("./scenarios_dd5_adm-5.6921cec0.js"),[]),"./scenarios/dd5/scenarios_dd5_adm-6.json":()=>d(()=>import("./scenarios_dd5_adm-6.3f981eb9.js"),[]),"./scenarios/dd5/scenarios_dd5_adm0.json":()=>d(()=>import("./scenarios_dd5_adm0.8f87abe0.js"),[]),"./scenarios/dd5/scenarios_dd5_adm1.json":()=>d(()=>import("./scenarios_dd5_adm1.7ace6841.js"),[]),"./scenarios/dd5/scenarios_dd5_adm2.json":()=>d(()=>import("./scenarios_dd5_adm2.79a27858.js"),[]),"./scenarios/dd5/scenarios_dd5_adm3.json":()=>d(()=>import("./scenarios_dd5_adm3.b1fb55ae.js"),[]),"./scenarios/dd5/scenarios_dd5_adm4.json":()=>d(()=>import("./scenarios_dd5_adm4.45293909.js"),[]),"./scenarios/dd5/scenarios_dd5_adm5.json":()=>d(()=>import("./scenarios_dd5_adm5.3ed68c8d.js"),[]),"./scenarios/dd5/scenarios_dd5_adm6.json":()=>d(()=>import("./scenarios_dd5_adm6.b21f6868.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-1.json":()=>d(()=>import("./scenarios_dd6_adm-1.f45eb802.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-2.json":()=>d(()=>import("./scenarios_dd6_adm-2.7d3a000c.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-3.json":()=>d(()=>import("./scenarios_dd6_adm-3.e5b809e2.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-4.json":()=>d(()=>import("./scenarios_dd6_adm-4.1d596ef9.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-5.json":()=>d(()=>import("./scenarios_dd6_adm-5.4d4cb50c.js"),[]),"./scenarios/dd6/scenarios_dd6_adm-6.json":()=>d(()=>import("./scenarios_dd6_adm-6.45c3a3a8.js"),[]),"./scenarios/dd6/scenarios_dd6_adm0.json":()=>d(()=>import("./scenarios_dd6_adm0.ae6bd18d.js"),[]),"./scenarios/dd6/scenarios_dd6_adm1.json":()=>d(()=>import("./scenarios_dd6_adm1.945b622a.js"),[]),"./scenarios/dd6/scenarios_dd6_adm2.json":()=>d(()=>import("./scenarios_dd6_adm2.9bb66686.js"),[]),"./scenarios/dd6/scenarios_dd6_adm3.json":()=>d(()=>import("./scenarios_dd6_adm3.a13cd9a0.js"),[]),"./scenarios/dd6/scenarios_dd6_adm4.json":()=>d(()=>import("./scenarios_dd6_adm4.e337938a.js"),[]),"./scenarios/dd6/scenarios_dd6_adm5.json":()=>d(()=>import("./scenarios_dd6_adm5.bd5164c0.js"),[]),"./scenarios/dd6/scenarios_dd6_adm6.json":()=>d(()=>import("./scenarios_dd6_adm6.fcfde1d6.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-1.json":()=>d(()=>import("./scenarios_dd7_adm-1.7ec10a1c.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-2.json":()=>d(()=>import("./scenarios_dd7_adm-2.a536e3af.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-3.json":()=>d(()=>import("./scenarios_dd7_adm-3.c7fb623b.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-4.json":()=>d(()=>import("./scenarios_dd7_adm-4.e7c4c92e.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-5.json":()=>d(()=>import("./scenarios_dd7_adm-5.a6b1a159.js"),[]),"./scenarios/dd7/scenarios_dd7_adm-6.json":()=>d(()=>import("./scenarios_dd7_adm-6.eba60ef7.js"),[]),"./scenarios/dd7/scenarios_dd7_adm0.json":()=>d(()=>import("./scenarios_dd7_adm0.7d5ebf3c.js"),[]),"./scenarios/dd7/scenarios_dd7_adm1.json":()=>d(()=>import("./scenarios_dd7_adm1.c72b14f2.js"),[]),"./scenarios/dd7/scenarios_dd7_adm2.json":()=>d(()=>import("./scenarios_dd7_adm2.3b90b869.js"),[]),"./scenarios/dd7/scenarios_dd7_adm3.json":()=>d(()=>import("./scenarios_dd7_adm3.41b6d19c.js"),[]),"./scenarios/dd7/scenarios_dd7_adm4.json":()=>d(()=>import("./scenarios_dd7_adm4.3a655812.js"),[]),"./scenarios/dd7/scenarios_dd7_adm5.json":()=>d(()=>import("./scenarios_dd7_adm5.94b732e2.js"),[]),"./scenarios/dd7/scenarios_dd7_adm6.json":()=>d(()=>import("./scenarios_dd7_adm6.45c251c4.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-1.json":()=>d(()=>import("./scenarios_dd8_adm-1.b48512fd.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-2.json":()=>d(()=>import("./scenarios_dd8_adm-2.f410f07b.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-3.json":()=>d(()=>import("./scenarios_dd8_adm-3.2b8e1c55.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-4.json":()=>d(()=>import("./scenarios_dd8_adm-4.bc4b37db.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-5.json":()=>d(()=>import("./scenarios_dd8_adm-5.558612eb.js"),[]),"./scenarios/dd8/scenarios_dd8_adm-6.json":()=>d(()=>import("./scenarios_dd8_adm-6.5d4223d5.js"),[]),"./scenarios/dd8/scenarios_dd8_adm0.json":()=>d(()=>import("./scenarios_dd8_adm0.5b9cd159.js"),[]),"./scenarios/dd8/scenarios_dd8_adm1.json":()=>d(()=>import("./scenarios_dd8_adm1.b16bee14.js"),[]),"./scenarios/dd8/scenarios_dd8_adm2.json":()=>d(()=>import("./scenarios_dd8_adm2.91f0b131.js"),[]),"./scenarios/dd8/scenarios_dd8_adm3.json":()=>d(()=>import("./scenarios_dd8_adm3.bdf29b9b.js"),[]),"./scenarios/dd8/scenarios_dd8_adm4.json":()=>d(()=>import("./scenarios_dd8_adm4.5db2954b.js"),[]),"./scenarios/dd8/scenarios_dd8_adm5.json":()=>d(()=>import("./scenarios_dd8_adm5.0ae91c6e.js"),[]),"./scenarios/dd8/scenarios_dd8_adm6.json":()=>d(()=>import("./scenarios_dd8_adm6.bf7a06e0.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-1.json":()=>d(()=>import("./scenarios_dd9_adm-1.a30d7d88.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-2.json":()=>d(()=>import("./scenarios_dd9_adm-2.4d78898a.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-3.json":()=>d(()=>import("./scenarios_dd9_adm-3.5a07df52.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-4.json":()=>d(()=>import("./scenarios_dd9_adm-4.350fb3ab.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-5.json":()=>d(()=>import("./scenarios_dd9_adm-5.42db1834.js"),[]),"./scenarios/dd9/scenarios_dd9_adm-6.json":()=>d(()=>import("./scenarios_dd9_adm-6.703091b6.js"),[]),"./scenarios/dd9/scenarios_dd9_adm0.json":()=>d(()=>import("./scenarios_dd9_adm0.7f9e866d.js"),[]),"./scenarios/dd9/scenarios_dd9_adm1.json":()=>d(()=>import("./scenarios_dd9_adm1.0712794e.js"),[]),"./scenarios/dd9/scenarios_dd9_adm2.json":()=>d(()=>import("./scenarios_dd9_adm2.cc5992de.js"),[]),"./scenarios/dd9/scenarios_dd9_adm3.json":()=>d(()=>import("./scenarios_dd9_adm3.21b27736.js"),[]),"./scenarios/dd9/scenarios_dd9_adm4.json":()=>d(()=>import("./scenarios_dd9_adm4.663fae9d.js"),[]),"./scenarios/dd9/scenarios_dd9_adm5.json":()=>d(()=>import("./scenarios_dd9_adm5.42a35ea1.js"),[]),"./scenarios/dd9/scenarios_dd9_adm6.json":()=>d(()=>import("./scenarios_dd9_adm6.86b16edd.js"),[])},l={aw:{min:1,max:17},adm:{min:-6,max:6},dd:{min:0,max:10},dw:{min:0,max:17}};async function w(o,a,i,r){const e=`./scenarios/dd${i}/scenarios_dd${i}_adm${o}.json`;return(await x[e]()).default.find(c=>c.scenario.attackWarbands===a&&c.scenario.defenseWarbands===r)}var M=`.rc-slider {
  position: relative;
  height: 14px;
  padding: 5px 0;
  width: 100%;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-rail {
  position: absolute;
  width: 100%;
  background-color: #e9e9e9;
  height: 4px;
  border-radius: 6px;
}
.rc-slider-track {
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 6px;
  background-color: #abe2fb;
}
.rc-slider-handle {
  position: absolute;
  width: 14px;
  height: 14px;
  cursor: pointer;
  cursor: -webkit-grab;
  margin-top: -5px;
  cursor: grab;
  border-radius: 50%;
  border: solid 2px #96dbfa;
  background-color: #fff;
  touch-action: pan-x;
}
.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
  border-color: #57c5f7;
  box-shadow: 0 0 0 5px #96dbfa;
}
.rc-slider-handle:focus {
  outline: none;
}
.rc-slider-handle-click-focused:focus {
  border-color: #96dbfa;
  box-shadow: unset;
}
.rc-slider-handle:hover {
  border-color: #57c5f7;
}
.rc-slider-handle:active {
  border-color: #57c5f7;
  box-shadow: 0 0 5px #57c5f7;
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.rc-slider-mark {
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  font-size: 12px;
}
.rc-slider-mark-text {
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: #999;
}
.rc-slider-mark-text-active {
  color: #666;
}
.rc-slider-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
}
.rc-slider-dot {
  position: absolute;
  bottom: -2px;
  margin-left: -4px;
  width: 8px;
  height: 8px;
  border: 2px solid #e9e9e9;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  vertical-align: middle;
}
.rc-slider-dot-active {
  border-color: #96dbfa;
}
.rc-slider-dot-reverse {
  margin-right: -4px;
}
.rc-slider-disabled {
  background-color: #e9e9e9;
}
.rc-slider-disabled .rc-slider-track {
  background-color: #ccc;
}
.rc-slider-disabled .rc-slider-handle,
.rc-slider-disabled .rc-slider-dot {
  border-color: #ccc;
  box-shadow: none;
  background-color: #fff;
  cursor: not-allowed;
}
.rc-slider-disabled .rc-slider-mark-text,
.rc-slider-disabled .rc-slider-dot {
  cursor: not-allowed !important;
}
.rc-slider-vertical {
  width: 14px;
  height: 100%;
  padding: 0 5px;
}
.rc-slider-vertical .rc-slider-rail {
  height: 100%;
  width: 4px;
}
.rc-slider-vertical .rc-slider-track {
  left: 5px;
  bottom: 0;
  width: 4px;
}
.rc-slider-vertical .rc-slider-handle {
  margin-left: -5px;
  touch-action: pan-y;
}
.rc-slider-vertical .rc-slider-mark {
  top: 0;
  left: 18px;
  height: 100%;
}
.rc-slider-vertical .rc-slider-step {
  height: 100%;
  width: 4px;
}
.rc-slider-vertical .rc-slider-dot {
  left: 2px;
  margin-bottom: -4px;
}
.rc-slider-vertical .rc-slider-dot:first-child {
  margin-bottom: -4px;
}
.rc-slider-vertical .rc-slider-dot:last-child {
  margin-bottom: -4px;
}
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  display: block !important;
  animation-play-state: paused;
}
.rc-slider-tooltip-zoom-down-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  display: block !important;
  animation-play-state: paused;
}
.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
  animation-name: rcSliderTooltipZoomDownIn;
  animation-play-state: running;
}
.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
  animation-name: rcSliderTooltipZoomDownOut;
  animation-play-state: running;
}
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-appear {
  transform: scale(0, 0);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
.rc-slider-tooltip-zoom-down-leave {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}
@keyframes rcSliderTooltipZoomDownIn {
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0, 0);
  }
  100% {
    transform-origin: 50% 100%;
    transform: scale(1, 1);
  }
}
@keyframes rcSliderTooltipZoomDownOut {
  0% {
    transform-origin: 50% 100%;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0, 0);
  }
}
.rc-slider-tooltip {
  position: absolute;
  left: -9999px;
  top: -9999px;
  visibility: visible;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-tooltip * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-tooltip-hidden {
  display: none;
}
.rc-slider-tooltip-placement-top {
  padding: 4px 0 8px 0;
}
.rc-slider-tooltip-inner {
  padding: 6px 2px;
  min-width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #6c6c6c;
  border-radius: 6px;
  box-shadow: 0 0 4px #d9d9d9;
}
.rc-slider-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
  bottom: 4px;
  left: 50%;
  margin-left: -4px;
  border-width: 4px 4px 0;
  border-top-color: #6c6c6c;
}
`;const y={scenario:{attackWarbands:3,attackDieModifier:0,defenseDice:1,defenseWarbands:1,numSims:1e4},remaining:[0,1,2,3],remainingWinProb:[.18603215999999997,.47781664,.30359556,.01267968],remainingLoseProb:[0,.01987596,0,0],winProbability:.9801240399999999,winPercents:[98.01240399999999,79.40918799999999,31.627523999999983,1.2679679999999889],expectedBands:1.1429227599999998},p=o=>s.createElement("div",{className:"slider-container"},s.createElement("div",{className:"slider-label"},o.children),s.createElement(D,{min:o.range.min,max:o.range.max,onChange:a=>o.setter(a),value:o.value}),s.createElement("div",{className:"slider-value"},o.value));function v(){const[o,a]=t.exports.useState(1),[i,r]=t.exports.useState(3),[e,n]=t.exports.useState(1),[_,c]=t.exports.useState(0),[m,f]=t.exports.useState(y);return t.exports.useEffect(async()=>f(await w(_,i,o,e))),s.createElement("div",{className:"simulate-page"},s.createElement("h1",{className:"title"},"Oath Campaign Simulator"),s.createElement("div",{className:"simulate-content"},s.createElement("div",{className:"simulate-container flex-container"},s.createElement("div",{className:"controls-container"},s.createElement(p,{range:l.aw,setter:r,value:i},"Attacking Warbands"),s.createElement(p,{range:l.adm,setter:c,value:_},"Attack Dice Modifier"),s.createElement(p,{range:l.dd,setter:a,value:o},"Defense Dice"),s.createElement(p,{range:l.dw,setter:n,value:e},"Defending Warbands")),s.createElement("div",{className:"dice-plot-container"},s.createElement(A,{data:m,width:500,height:480})),s.createElement("hr",null),s.createElement("div",{className:"info"},s.createElement("p",null,"Expected remaining attacking warbands: ",m.expectedBands.toFixed(2),"; \u0394 = ",(m.expectedBands-m.scenario.attackWarbands).toFixed(2)),s.createElement("div",{className:"assumptions"},s.createElement("p",null,"The simulator makes a number of assumptions about player behavior:"),s.createElement("ol",null,s.createElement("li",null,"An attack die is rolled for every attacking warband, adjusted by the modifier value."),s.createElement("li",null,"If it is possible for the attacker to win by sacrificing warbands, they will sacrifice the minimal number to be victorious."),s.createElement("li",null,"If it is impossible for the attacker to win, they will not sacrifice any warbands.")))))),s.createElement("p",{className:"oath-symbol"},"12!@+-~$%7&=abdhnoCMRSTt"),s.createElement("footer",null))}var k=()=>t.exports.createElement(P,null,t.exports.createElement(O,{path:"/",component:v}));const b=()=>window.location.hash.replace("#","")||"/",S=()=>{const[o,a]=t.exports.useState(b());t.exports.useEffect(()=>{const r=()=>a(b());return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]);const i=t.exports.useCallback(r=>window.location.hash=r,[]);return[o,i]};function z(){return s.createElement(T,{hook:S},s.createElement("main",{role:"main",className:"wrapper"},s.createElement("div",{className:"content"},s.createElement(k,null))))}h.render(s.createElement(s.StrictMode,null,s.createElement(L,null,s.createElement(z,null))),document.getElementById("root"));
