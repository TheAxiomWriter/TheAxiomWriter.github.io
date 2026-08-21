/* AX-0 Live Containment Eye — 嵌入 section-label 版 */
(function(){
  var NS='http://www.w3.org/2000/svg';
  var viewport=document.getElementById('ax0-viewport');
  if(!viewport)return;

  /* ── 样式注入 ── */
  var css=''
    /* 眼球 SVG */
    +'#ax0{cursor:crosshair;display:block;width:100%;height:100%;}'
    +'#ax0 *{transform-box:fill-box;}'
    +'#ax0 #ax0-dial,#ax0 #ax0-ring2{transform-box:view-box;transform-origin:50% 50%;}'
    +'#ax0-breath{transform-origin:center;animation:ax0breath 9s ease-in-out infinite;}'
    +'@keyframes ax0breath{0%,100%{transform:scale(.9);opacity:.22}50%{transform:scale(1.08);opacity:.45}}'
    +'#ax0-slit-wrap{transform-box:fill-box;transform-origin:center;}'
    +'.ax0-lids{transform-origin:center;transition:transform .22s cubic-bezier(.2,.8,.3,1);}'
    +'#ax0.ax0-blink .ax0-lids{transform:scaleY(.08);transition-duration:.08s;}'
    +'.ax0-pulse{transform-origin:center;animation:ax0pulse .9s ease-out forwards;}'
    +'@keyframes ax0pulse{0%{transform:scale(.3);opacity:.55}100%{transform:scale(3.4);opacity:0}}'
    +'@media(prefers-reduced-motion:reduce){#ax0 *{animation:none!important;transition:none!important;}}';
  var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);

  var svgHTML='<svg id="ax0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="AX-0 Live Containment">'
    +'<defs>'
    +'<radialGradient id="ax0-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c9a34e" stop-opacity="0.32"/><stop offset="45%" stop-color="#c9a34e" stop-opacity="0.12"/><stop offset="78%" stop-color="#c9a34e" stop-opacity="0"/></radialGradient>'
    +'<radialGradient id="ax0-sclera" cx="40%" cy="35%" r="78%"><stop offset="0%" stop-color="#e6dabf"/><stop offset="30%" stop-color="#c6b48c"/><stop offset="60%" stop-color="#8f774e"/><stop offset="85%" stop-color="#4a3a1e"/><stop offset="100%" stop-color="#150e06"/></radialGradient>'
    +'<radialGradient id="ax0-irisp" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1c1206"/><stop offset="55%" stop-color="#4a3814"/><stop offset="85%" stop-color="#6b5222" stop-opacity="0.85"/><stop offset="100%" stop-color="#6b5222" stop-opacity="0"/></radialGradient>'
    +'<radialGradient id="ax0-slitg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#0d0803"/><stop offset="60%" stop-color="#241708"/><stop offset="100%" stop-color="#6b5222"/></radialGradient>'
    +'<linearGradient id="ax0-bladeg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff3b30"/><stop offset="0.5" stop-color="#ffd24a"/><stop offset="1" stop-color="#ff3b30"/></linearGradient>'
    +'<radialGradient id="ax0-alertiris" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c92a2a" stop-opacity="0"/><stop offset="80%" stop-color="#c92a2a" stop-opacity="0"/><stop offset="100%" stop-color="#c92a2a" stop-opacity="0.7"/></radialGradient>'
    +'<linearGradient id="ax0-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#aab3c2"/><stop offset="0.5" stop-color="#5d6673"/><stop offset="1" stop-color="#343b45"/></linearGradient>'
    +'<clipPath id="ax0-ballclip"><circle cx="60" cy="60" r="20.5"/></clipPath>'
    +'<filter id="ax0-soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.3"/></filter>'
    +'<filter id="ax0-wobble" x="-30%" y="-30%" width="160%" height="160%">'
    +'<feTurbulence type="fractalNoise" baseFrequency="0.11" numOctaves="2" seed="7" result="n"><animate attributeName="baseFrequency" values="0.11;0.16;0.11" dur="9s" repeatCount="indefinite"/></feTurbulence>'
    +'<feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter>'
    +'</defs>'

    /* 收容框角标 */
    +'<g stroke="#5d6673" stroke-width="1" fill="none">'
    +'<path d="M6 16 V6 H16" opacity="0.45"/>'
    +'<path d="M103.5 6.5 H113.5 V15.5" opacity="0.38" transform="rotate(2.5 108.5 11)"/>'
    +'<path d="M6 104 V109.5" opacity="0.42"/>'
    +'<path d="M6 111.8 V114 H16" opacity="0.42" transform="rotate(-1.8 11 112.9)"/>'
    +'<path d="M104 114 H114 V104" opacity="0.45"/>'
    +'</g>'
    +'<g stroke="#8a93a3" stroke-width="0.5" opacity="0.18"><line x1="98" y1="10" x2="104" y2="7.5"/><line x1="17" y1="107" x2="22" y2="105"/></g>'

    /* 脑压监视环 */
    +'<g id="ax0-dial">'
    +'<circle cx="60" cy="60" r="46" fill="none" stroke="#66707e" stroke-width="0.5" opacity="0.1"/>'
    +'<path d="M33.6 22.3 A46 46 0 0 1 79.4 18.3" fill="none" stroke="#8a93a3" stroke-width="2.2" stroke-dasharray="1.6 2.1" opacity="0.62"/>'
    +'<path d="M89.6 24.8 A46 46 0 0 1 104.4 48.1" fill="none" stroke="#8a93a3" stroke-width="1.4" stroke-dasharray="1 8" opacity="0.4"/>'
    +'<path d="M105.8 64 A46 46 0 0 1 52 105.3" fill="none" stroke="#8a93a3" stroke-width="1.7" stroke-dasharray="5 11 2 7 9 13" opacity="0.5"/>'
    +'<path d="M40.6 101.7 A46 46 0 0 1 16.8 75.7" fill="none" stroke="#8a93a3" stroke-width="2" stroke-dasharray="2 6 7 4" opacity="0.55"/>'
    +'<path d="M14 61.6 A46 46 0 0 1 22.3 33.6" fill="none" stroke="#8a93a3" stroke-width="1.2" stroke-dasharray="1 4" opacity="0.35"/>'
    +'<g stroke="#8a93a3" stroke-width="1" opacity="0.55">'
    +'<line x1="44.1" y1="16.3" x2="45.6" y2="20.5"/><line x1="53.5" y1="14" x2="54.2" y2="18.4"/>'
    +'<line x1="64.9" y1="13.8" x2="64.4" y2="18.2"/><line x1="74.4" y1="15.8" x2="73" y2="20.1"/>'
    +'</g>'
    +'<line x1="71.2" y1="14.9" x2="70.2" y2="19.2" stroke="#c9a34e" stroke-width="1.2" opacity="0.9"/>'
    +'<polyline points="45,103 42,100 40,105 37,93 34,100 31,95 28,98 24,88 21,84" fill="none" stroke="#c9a34e" stroke-width="0.8" opacity="0.45"/>'
    +'</g>'

    /* 内层断裂数据弧 */
    +'<g id="ax0-ring2"><path d="M71.6 28 A34 34 0 1 1 30.6 43" fill="none" stroke="#66707e" stroke-width="0.6" stroke-dasharray="1 5 3 9 1 7" opacity="0.5"/></g>'

    /* 呼吸辉光 */
    +'<circle id="ax0-breath" cx="60" cy="60" r="20" fill="url(#ax0-glow)"/>'

    /* 视线组 */
    +'<g id="ax0-gaze"><g class="ax0-lids">'
    +'<circle cx="60" cy="60" r="21" fill="url(#ax0-sclera)" stroke="#120b05" stroke-width="1.2" filter="url(#ax0-wobble)"/>'
    +'<circle cx="60" cy="60" r="19.6" fill="none" stroke="#0d0805" stroke-width="2.6" opacity="0.35"/>'
    /* 血丝光晕层 */
    +'<g id="ax0-veins-glow" stroke="#ff4b3e" stroke-width="1.6" fill="none" opacity="0" filter="url(#ax0-soft)">'
    +'<path d="M42 52 Q47 54.5 46 59.5"/><path d="M44.5 68 Q49 66 50.5 62.5"/>'
    +'<path d="M75 49 Q71.5 53 73.5 57.5"/><path d="M77 63 Q73 63.5 71 61"/>'
    +'<path d="M52 76 Q56.5 72.5 61 74.5"/><path d="M66 43.5 Q64.5 47 66.5 49.5"/>'
    +'<path d="M47 45 Q50.5 48 50 51.5"/><path d="M70 72 Q67.5 70 67.8 67"/>'
    +'</g>'
    /* 猩红血丝 */
    +'<g id="ax0-veins" stroke="#c92a2a" stroke-width="0.5" fill="none" opacity="0.3">'
    +'<path d="M42 52 Q47 54.5 46 59.5"/><path d="M44.5 68 Q49 66 50.5 62.5"/>'
    +'<path d="M75 49 Q71.5 53 73.5 57.5"/><path d="M77 63 Q73 63.5 71 61"/>'
    +'<path d="M52 76 Q56.5 72.5 61 74.5"/><path d="M66 43.5 Q64.5 47 66.5 49.5"/>'
    +'<path d="M47 45 Q50.5 48 50 51.5"/><path d="M70 72 Q67.5 70 67.8 67"/>'
    +'</g>'
    /* 巩膜 rim */
    +'<circle id="ax0-rim" cx="60" cy="60" r="20.9" fill="none" stroke="#c92a2a" stroke-width="1.3" filter="url(#ax0-soft)" opacity="0"/>'
    /* 虹膜+横瞳 */
    +'<g clip-path="url(#ax0-ballclip)"><g id="ax0-iris-lag">'
    +'<ellipse cx="60" cy="60" rx="11.5" ry="7.5" fill="url(#ax0-irisp)"/>'
    +'<ellipse cx="60" cy="60" rx="11.5" ry="7.5" fill="none" stroke="#b08c3e" stroke-width="0.9" opacity="0.5"/>'
    +'<path d="M50.5 56.5 Q55 53.2 60 52.8" stroke="#e8c87a" stroke-width="0.8" fill="none" opacity="0.45"/>'
    +'<g stroke="#7a5c24" stroke-width="0.55" opacity="0.35">'
    +'<line x1="48.5" y1="58.5" x2="45.5" y2="57"/><line x1="48.5" y1="61.5" x2="45.5" y2="63"/>'
    +'<line x1="71.5" y1="58.5" x2="74.5" y2="57"/><line x1="71.5" y1="61.5" x2="74.5" y2="63"/>'
    +'<line x1="60" y1="52.6" x2="60" y2="49.8"/><line x1="60" y1="67.4" x2="60" y2="70.2"/>'
    +'</g>'
    /* 横裂瞳 */
    +'<g id="ax0-slit-wrap">'
    +'<path d="M54.5 60 C54.5 59.35 55.1 59.05 55.8 58.85 L56.9 59.35 L58.1 58.7 L59.3 59.3 L60.5 58.72 L61.7 59.32 L62.9 58.82 L64.1 59.28 C64.95 59.45 65.5 59.6 65.5 60 C65.5 60.4 64.95 60.55 64.1 61.12 L62.9 60.66 L61.7 61.26 L60.5 60.7 L59.3 61.32 L58.1 60.68 L56.9 61.22 L55.8 60.72 C55.1 60.95 54.5 60.65 54.5 60 Z" fill="url(#ax0-slitg)" stroke="#8a6a2c" stroke-width="0.3" stroke-opacity="0.5"/>'
    +'<path id="ax0-blade-glow" d="M54.5 60 C54.5 59.35 55.1 59.05 55.8 58.85 L56.9 59.35 L58.1 58.7 L59.3 59.3 L60.5 58.72 L61.7 59.32 L62.9 58.82 L64.1 59.28 C64.95 59.45 65.5 59.6 65.5 60 C65.5 60.4 64.95 60.55 64.1 61.12 L62.9 60.66 L61.7 61.26 L60.5 60.7 L59.3 61.32 L58.1 60.68 L56.9 61.22 L55.8 60.72 C55.1 60.95 54.5 60.65 54.5 60 Z" fill="url(#ax0-bladeg)" filter="url(#ax0-soft)" opacity="0"/>'
    +'<path id="ax0-blade" d="M54.5 60 C54.5 59.35 55.1 59.05 55.8 58.85 L56.9 59.35 L58.1 58.7 L59.3 59.3 L60.5 58.72 L61.7 59.32 L62.9 58.82 L64.1 59.28 C64.95 59.45 65.5 59.6 65.5 60 C65.5 60.4 64.95 60.55 64.1 61.12 L62.9 60.66 L61.7 61.26 L60.5 60.7 L59.3 61.32 L58.1 60.68 L56.9 61.22 L55.8 60.72 C55.1 60.95 54.5 60.65 54.5 60 Z" fill="url(#ax0-bladeg)" opacity="0"/>'
    +'</g>'
    +'<ellipse id="ax0-iris-alert" cx="60" cy="60" rx="12.2" ry="8.1" fill="none" stroke="#c92a2a" stroke-width="1.5" filter="url(#ax0-soft)" opacity="0"/>'
    +'</g></g>'
    /* 角膜湿光 */
    +'<g clip-path="url(#ax0-ballclip)"><g id="ax0-sheen"><ellipse cx="54" cy="51" rx="6" ry="3.4" transform="rotate(-24 54 51)" fill="#f5eeda" opacity="0.14"/></g></g>'
    +'</g></g>'

    /* 涟漪层 */
    +'<g id="ax0-ripples"></g>'

    /* 外科开睑器 */
    +'<g>'
    +'<path id="ax0-es0" d="M57 26 Q73.5 51.5 90 77" fill="none" stroke="#0d0805" stroke-width="3.4" opacity="0.55" filter="url(#ax0-soft)" transform="translate(0 1.2)"/>'
    +'<path id="ax0-es1" d="M90 77 Q61.5 75 33 73" fill="none" stroke="#0d0805" stroke-width="3.4" opacity="0.55" filter="url(#ax0-soft)" transform="translate(0 1.2)"/>'
    +'<path id="ax0-es2" d="M33 73 Q45 49.5 57 26" fill="none" stroke="#0d0805" stroke-width="3.4" opacity="0.55" filter="url(#ax0-soft)" transform="translate(0 1.2)"/>'
    +'<path id="ax0-e0" d="M57 26 Q73.5 51.5 90 77" fill="none" stroke="url(#ax0-metal)" stroke-width="2" stroke-linecap="round"/>'
    +'<path id="ax0-e1" d="M90 77 Q61.5 75 33 73" fill="none" stroke="url(#ax0-metal)" stroke-width="2" stroke-linecap="round"/>'
    +'<path id="ax0-e2" d="M33 73 Q45 49.5 57 26" fill="none" stroke="url(#ax0-metal)" stroke-width="2" stroke-linecap="round"/>'
    +'<g stroke="#8f98a8" stroke-width="1.6" stroke-linecap="round">'
    +'<line x1="57" y1="26" x2="57.4" y2="30.5"/><line x1="90" y1="77" x2="86.2" y2="74.7"/><line x1="33" y1="73" x2="37" y2="70.9"/>'
    +'</g>'
    +'<g fill="#77808f" stroke="#232830" stroke-width="0.6">'
    +'<circle cx="57" cy="26" r="1.8"/><circle cx="90" cy="77" r="1.8"/><circle cx="33" cy="73" r="1.8"/>'
    +'</g>'
    +'<g id="ax0-spark0" opacity="0"><g stroke="#ffc266" stroke-width="0.6" stroke-linecap="round"><line x1="53.8" y1="23.4" x2="55.6" y2="25"/><line x1="60.4" y1="23.2" x2="58.8" y2="25.2"/><line x1="54.2" y1="28.8" x2="56" y2="27.4"/></g><path d="M55.9 25.2 L57.2 26.9 L56.4 28" stroke="#ffdf9e" stroke-width="0.5" fill="none"/></g>'
    +'<g id="ax0-spark1" opacity="0"><g stroke="#ffc266" stroke-width="0.6" stroke-linecap="round"><line x1="93.2" y1="74.6" x2="91.4" y2="76"/><line x1="93" y1="80" x2="91.2" y2="78.6"/><line x1="87" y1="80.4" x2="88.4" y2="78.8"/></g><path d="M91 75.8 L89.6 77.2 L90.4 78.6" stroke="#ffdf9e" stroke-width="0.5" fill="none"/></g>'
    +'<g id="ax0-spark2" opacity="0"><g stroke="#ffc266" stroke-width="0.6" stroke-linecap="round"><line x1="29.8" y1="70.6" x2="31.6" y2="72"/><line x1="29.9" y1="75.6" x2="31.7" y2="74.2"/><line x1="36.2" y1="70.2" x2="34.8" y2="71.8"/></g><path d="M32 71.6 L33.3 73.1 L32.6 74.4" stroke="#ffdf9e" stroke-width="0.5" fill="none"/></g>'
    +'</g>'

    /* 点击脉冲层 */
    +'<g id="ax0-pulses"></g>'

    +'</svg>';

  viewport.innerHTML=svgHTML;

  /* ── 注入 SVG 流光描边 + 火花层 ── */
  var borderSVG=document.createElementNS(NS,'svg');
  borderSVG.setAttribute('class','ax0-border-stream');
  borderSVG.setAttribute('viewBox','0 0 64 64');
  borderSVG.innerHTML='<rect x="0.5" y="0.5" width="63" height="63" rx="4" fill="none" class="ax0-stream"/>';
  viewport.insertBefore(borderSVG,viewport.firstChild);

  var sparkLayer=document.createElementNS(NS,'svg');
  sparkLayer.setAttribute('class','ax0-spark-layer');
  sparkLayer.setAttribute('viewBox','0 0 64 64');
  viewport.appendChild(sparkLayer);

  /* ── 边框火花粒子系统 ── */
  var borderSparks=[];var nextBorderSparkT=performance.now()+2000+Math.random()*4000;

  /* ── AX-0 交互引擎 ── */
  var svg=document.getElementById('ax0');
  if(!svg)return;
  function $id(id){return document.getElementById(id);}
  var gaze=$id('ax0-gaze'),irisLag=$id('ax0-iris-lag'),sheen=$id('ax0-sheen'),
      slitWrap=$id('ax0-slit-wrap'),
      dial=$id('ax0-dial'),ring2=$id('ax0-ring2'),
      ripples=$id('ax0-ripples'),pulses=$id('ax0-pulses'),
      veins=$id('ax0-veins'),veinsGlow=$id('ax0-veins-glow'),rim=$id('ax0-rim'),
      irisAlert=$id('ax0-iris-alert'),blade=$id('ax0-blade'),bladeGlow=$id('ax0-blade-glow');
  var edgeP=[$id('ax0-e0'),$id('ax0-e1'),$id('ax0-e2')];
  var edgeS=[$id('ax0-es0'),$id('ax0-es1'),$id('ax0-es2')];
  var sparks=[$id('ax0-spark0'),$id('ax0-spark1'),$id('ax0-spark2')];
  if(!gaze||!irisLag||!slitWrap||!dial||!ring2||!ripples||!pulses||
     !veins||!veinsGlow||!rim||!irisAlert||!blade||!bladeGlow||!sheen)return;
  for(var q=0;q<3;q++){if(!edgeP[q]||!edgeS[q]||!sparks[q])return;}

  var reduce=false;
  try{reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}

  var MAX=6.5,IDLE=12000,LOCK_R=150,ENERGY_T=2200,IRIS_R=12.5;
  var SF=0.4,IM=2.2,IRIS_EDGE=13;
  var mode='follow';
  var cx=0,cy=0,ix=0,iy=0,hx=0,hy=0,tx=0,ty=0;
  var px=null,py=null,lastMove=0,lpx=null,lpy=null,moveE=0;
  var sacX=0,sacY=0,sacTX=0,sacTY=0,nextSac=0;
  var rollT=0,rollHold=0,rollX=0,rollY=0,snapT=0,cooldown=0,introDone=false;
  var dialA=0,dialAT=0,ringA=0,ringAT=0;
  var p=0,pLock=false,al=0,alF=0,nextRedPulse=0;
  var wander=[[4.5,-2.5,900],[-4.8,1.5,1200],[0.5,4.2,800],[-2,-3.8,700],[0,0,1400]];
  var wanderIdx=0,wanderT=0;
  var ROLLS=[[0.5,-7.4],[7.6,-4.6],[7.8,0.5],[-5.8,-5.2]];
  var VTX=[[57,26],[90,77],[33,73]];
  var EDG=[[0,1],[1,2],[2,0]];
  var EN=[[0.883,-0.468],[0.0916,0.9958],[-0.853,-0.522]];
  var eb=[{b:0,v:0,prev:-9},{b:0,v:0,prev:-9},{b:0,v:0,prev:-9}];
  var sparkOp=[0,0,0];

  window.addEventListener('pointermove',function(e){
    if(lpx!==null){var ddx=e.clientX-lpx,ddy=e.clientY-lpy;moveE+=Math.sqrt(ddx*ddx+ddy*ddy);}
    lpx=e.clientX;lpy=e.clientY;
    px=e.clientX;py=e.clientY;lastMove=performance.now();
  },{passive:true});
  document.addEventListener('mouseleave',function(){px=null;py=null;lpx=null;lpy=null;});

  svg.addEventListener('pointerdown',function(){
    if(reduce)return;
    var c=document.createElementNS(NS,'circle');
    c.setAttribute('cx','60');c.setAttribute('cy','60');c.setAttribute('r','12');
    c.setAttribute('fill','none');c.setAttribute('stroke','#c9a34e');c.setAttribute('stroke-width','0.8');
    c.setAttribute('class','ax0-pulse');
    pulses.appendChild(c);
    c.addEventListener('animationend',function(){c.remove();});
  });

  function startRoll(t){
    mode='roll';rollT=t;
    rollHold=1900+Math.random()*700;
    var v=ROLLS[(Math.random()*ROLLS.length)|0];
    rollX=v[0];rollY=v[1];
    dialAT+=(Math.random()<0.5?-1:1)*(10+Math.random()*6);
    cooldown=t+rollHold+6000+Math.random()*8000;
  }
  function cursorTarget(mx,my,dist){
    if(px!==null&&dist>8){
      var dx=px-mx,dy=py-my;
      var m=Math.min(MAX,1.5+dist*0.045);
      tx=dx/dist*m;ty=dy/dist*m;
    }else{tx=0;ty=0;}
  }
  function rippleCore(rFrom,rTo,stroke,dur,peak){
    var c=document.createElementNS(NS,'circle');
    c.setAttribute('cx','60');c.setAttribute('cy','60');c.setAttribute('r',rFrom);
    c.setAttribute('fill','none');c.setAttribute('stroke',stroke);c.setAttribute('stroke-width','0.9');c.setAttribute('opacity','0');
    var ar=document.createElementNS(NS,'animate');
    ar.setAttribute('attributeName','r');ar.setAttribute('from',rFrom);ar.setAttribute('to',rTo);
    ar.setAttribute('dur',dur);ar.setAttribute('begin','indefinite');ar.setAttribute('fill','freeze');
    ar.setAttribute('calcMode','spline');ar.setAttribute('keySplines','0.22 0.61 0.36 1');ar.setAttribute('keyTimes','0;1');
    var ao=document.createElementNS(NS,'animate');
    ao.setAttribute('attributeName','opacity');ao.setAttribute('values','0;'+peak+';0');
    ao.setAttribute('keyTimes','0;0.15;1');ao.setAttribute('dur',dur);ao.setAttribute('begin','indefinite');ao.setAttribute('fill','freeze');
    c.appendChild(ar);c.appendChild(ao);
    ripples.appendChild(c);
    try{ar.beginElement();ao.beginElement();}catch(e){}
    setTimeout(function(){if(c.parentNode)c.parentNode.removeChild(c);},parseFloat(dur)*1000+150);
  }
  function spawnRipple(){rippleCore('8','45','#c9a34e',(2.5+Math.random()*1.5).toFixed(1)+'s','0.35');}
  function scheduleRipple(){
    var delay=Math.round((7+Math.random()*24)*10)*100;
    setTimeout(function(){spawnRipple();scheduleRipple();},delay);
  }
  function spawnRedPulse(){rippleCore('21','42','#c92a2a',(1.1+Math.random()*0.5).toFixed(1)+'s','0.5');}

  var nextBlink=performance.now()+5000+Math.random()*9000;

  function loop(t){
    var r=svg.getBoundingClientRect();
    var mx=r.left+r.width/2,my=r.top+r.height/2;
    var dist=1e9;
    if(px!==null){var ex=px-mx,ey=py-my;dist=Math.sqrt(ex*ex+ey*ey);}
    moveE*=0.93;
    var k=0.075;
    if(mode==='follow'){
      cursorTarget(mx,my,dist);
      if(px===null||t-lastMove>IDLE){
        var wp=wander[wanderIdx];
        if(t-wanderT>wp[2]){wanderT=t;wanderIdx=(wanderIdx+1)%wander.length;}
        tx=wp[0]+0.9*Math.sin(t*0.00021);ty=wp[1]+0.7*Math.cos(t*0.00016);
      }
      if(!introDone&&t>3500){introDone=true;startRoll(t);}
      else if(px!==null&&t>cooldown&&moveE>ENERGY_T){startRoll(t);}
    }else if(mode==='roll'){
      tx=rollX+(Math.random()-0.5)*0.7;ty=rollY+(Math.random()-0.5)*0.7;k=0.3;
      if(t-rollT>rollHold){mode='snap';snapT=t;dialAT+=(Math.random()<0.5?-1:1)*8;}
    }else{
      cursorTarget(mx,my,dist);k=0.5;
      if(t-snapT>320)mode='follow';
    }
    if(mode!=='roll'&&t>=nextSac){
      var amp=0.4+Math.random()*0.5;
      var ang=Math.random()*Math.PI*2;
      sacTX=Math.cos(ang)*amp;sacTY=Math.sin(ang)*amp;
      nextSac=t+800+Math.random()*1700;
      dialAT+=(Math.random()<0.5?-1:1)*(3+Math.random()*6);
      if(Math.random()<0.3)ringAT+=(Math.random()<0.5?-1:1)*(3+Math.random()*5);
    }
    sacX+=(sacTX-sacX)*0.12;sacY+=(sacTY-sacY)*0.12;
    var TX=tx+sacX,TY=ty+sacY;
    cx+=(TX*SF-cx)*0.075;cy+=(TY*SF-cy)*0.075;
    var ki=(mode==='snap')?0.09:0.04;
    ix+=(TX-ix)*ki;iy+=(TY-iy)*ki;
    var IOX=ix*IM,IOY=iy*IM;
    var om=Math.sqrt(IOX*IOX+IOY*IOY);
    if(om>IRIS_EDGE){IOX*=IRIS_EDGE/om;IOY*=IRIS_EDGE/om;}
    hx+=(TX*0.4-hx)*0.05;hy+=(TY*0.4-hy)*0.05;
    gaze.setAttribute('transform','translate('+cx.toFixed(2)+' '+cy.toFixed(2)+')');
    irisLag.setAttribute('transform','translate('+IOX.toFixed(2)+' '+IOY.toFixed(2)+')');
    sheen.setAttribute('transform','translate('+(hx-cx).toFixed(2)+' '+(hy-cy).toFixed(2)+')');
    var BX=60+cx+IOX,BY=60+cy+IOY,maxPen=0;
    for(var i=0;i<3;i++){
      var e=EDG[i],V1=VTX[e[0]],V2=VTX[e[1]];
      var vx=V2[0]-V1[0],vy=V2[1]-V1[1];
      var len=Math.sqrt(vx*vx+vy*vy);
      var cross=vx*(V1[1]-BY)-(V1[0]-BX)*vy;
      var dLine=Math.abs(cross)/len;
      var pen=IRIS_R-dLine;
      if(pen>maxPen)maxPen=pen;
      var tgt=pen>0?Math.min(pen*0.45,1.3):0;
      var s=eb[i];
      s.v+=(tgt-s.b)*0.22;s.v*=0.72;s.b+=s.v;
      if(s.b<-0.3)s.b=-0.3;
      var qx=((V1[0]+V2[0])/2+EN[i][0]*s.b).toFixed(2);
      var qy=((V1[1]+V2[1])/2+EN[i][1]*s.b).toFixed(2);
      var dd='M'+V1[0]+' '+V1[1]+' Q'+qx+' '+qy+' '+V2[0]+' '+V2[1];
      edgeP[i].setAttribute('d',dd);
      edgeS[i].setAttribute('d',dd);
      if(pen>0.4&&s.prev<=0.4){
        var tt=((BX-V1[0])*vx+(BY-V1[1])*vy)/(len*len);
        sparkOp[tt<0.5?e[0]:e[1]]=1;
      }
      s.prev=pen;
    }
    for(var j=0;j<3;j++){
      sparkOp[j]*=0.86;
      if(sparkOp[j]<0.02)sparkOp[j]=0;
      sparks[j].setAttribute('opacity',sparkOp[j].toFixed(2));
    }
    var pt=(px!==null&&dist<LOCK_R)?1:0;
    if(mode==='roll'&&pt<0.35)pt=0.35;
    p+=(pt-p)*(pt>p?0.3:0.045);
    if(!pLock&&p>0.5){pLock=true;dialAT+=(Math.random()<0.5?-1:1)*7;}
    if(pLock&&p<0.2)pLock=false;
    var alT=Math.max(p,Math.min(Math.max(maxPen,0)/3.5,1)*0.9);
    al+=(alT-al)*0.2;
    alF+=(alT-alF)*(alT>alF?0.45:0.08);
    veins.setAttribute('stroke-width',(0.5+alF*0.55).toFixed(2));
    veins.setAttribute('opacity',(0.3+alF*0.65).toFixed(2));
    veinsGlow.setAttribute('opacity',(alF*0.75).toFixed(2));
    rim.setAttribute('opacity',(alF*0.85).toFixed(2));
    irisAlert.setAttribute('opacity',(alF*0.8).toFixed(2));
    var bOp=alF*p;
    blade.setAttribute('opacity',bOp.toFixed(2));
    bladeGlow.setAttribute('opacity',(bOp*0.9).toFixed(2));
    if(al>0.55&&t>=nextRedPulse){spawnRedPulse();nextRedPulse=t+900+Math.random()*700;}
    /* 容器警戒联动 */
    var isAlert=al>0.35;
    if(isAlert){viewport.classList.add('ax0-alerting');}
    else{viewport.classList.remove('ax0-alerting');}

    /* ── 边框火花粒子生成+更新 ── */
    if(t>=nextBorderSparkT){
      var side=Math.random()*240;
      var sx,sy;
      if(side<60){sx=side;sy=0;}
      else if(side<120){sx=60;sy=side-60;}
      else if(side<180){sx=180-side;sy=60;}
      else{sx=0;sy=240-side;}
      var sparkEl=document.createElementNS(NS,'circle');
      sparkEl.setAttribute('cx',sx.toFixed(1));
      sparkEl.setAttribute('cy',sy.toFixed(1));
      sparkEl.setAttribute('r',(1+Math.random()*0.5).toFixed(1));
      sparkEl.setAttribute('fill',Math.random()<0.5?'#ffc266':'#ff3b30');
      sparkEl.setAttribute('opacity','1');
      sparkLayer.appendChild(sparkEl);
      borderSparks.push({el:sparkEl,x:sx,y:sy,vy:0.8+Math.random()*0.6,
        vx:(Math.random()-0.5)*1.2,born:t,life:600+Math.random()*300});
      var intMin=isAlert?1000:3000;
      var intMax=isAlert?2500:8000;
      nextBorderSparkT=t+intMin+Math.random()*(intMax-intMin);
    }
    for(var si=borderSparks.length-1;si>=0;si--){
      var sk=borderSparks[si];
      var age=t-sk.born;
      var prog=age/sk.life;
      if(prog>=1){if(sk.el.parentNode)sk.el.parentNode.removeChild(sk.el);borderSparks.splice(si,1);continue;}
      sk.vy+=0.18;
      sk.x+=sk.vx*(1-prog*0.6);
      sk.y+=sk.vy*(1-prog*0.4);
      sk.el.setAttribute('cx',sk.x.toFixed(1));
      sk.el.setAttribute('cy',sk.y.toFixed(1));
      sk.el.setAttribute('opacity',(1-prog).toFixed(2));
    }

    var breathV=1.22+0.08*Math.sin(t*0.0006);
    var sv=breathV+(0.22-breathV)*p;
    slitWrap.style.transform='scaleY('+sv.toFixed(3)+')';
    dialA+=(dialAT-dialA)*0.4;ringA+=(ringAT-ringA)*0.4;
    dial.style.transform='rotate('+dialA.toFixed(2)+'deg)';
    ring2.style.transform='rotate('+ringA.toFixed(2)+'deg)';
    if(t>=nextBlink){
      svg.classList.add('ax0-blink');
      var slow=Math.random()<0.15;
      dialAT+=(Math.random()<0.5?-1:1)*(4+Math.random()*5);
      ringAT+=(Math.random()<0.5?-1:1)*(3+Math.random()*4);
      setTimeout(function(){
        svg.classList.remove('ax0-blink');
        if(!slow&&Math.random()<0.2){
          setTimeout(function(){
            svg.classList.add('ax0-blink');
            setTimeout(function(){svg.classList.remove('ax0-blink');},110);
          },240);
        }
      },slow?850:120);
      nextBlink=t+11000+Math.random()*18000;
    }
    window.requestAnimationFrame(loop);
  }
  if(!reduce){
    setTimeout(spawnRipple,1500);
    scheduleRipple();
    window.requestAnimationFrame(loop);
  }
})();
