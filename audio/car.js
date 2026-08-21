window.CAR_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" preserveAspectRatio="xMidYMid meet" style="display:block;max-width:100%;height:auto;background:#04050a">
  <defs>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b1120"/><stop offset="0.55" stop-color="#070a12"/><stop offset="1" stop-color="#04060a"/>
    </linearGradient>
    <linearGradient id="fogG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0c1219" stop-opacity="0"/><stop offset="0.8" stop-color="#0c1219" stop-opacity="0.5"/><stop offset="1" stop-color="#0c1219" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="beamG" gradientUnits="userSpaceOnUse" x1="262" y1="0" x2="958" y2="0">
      <stop offset="0" stop-color="#a8d8ff" stop-opacity="0.5"/><stop offset="0.6" stop-color="#a8d8ff" stop-opacity="0.12"/><stop offset="1" stop-color="#a8d8ff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="coneG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c8dce8" stop-opacity="0.5"/><stop offset="1" stop-color="#c8dce8" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="poolG" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#a8d8ff" stop-opacity="0.16"/><stop offset="1" stop-color="#a8d8ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="moonG" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#aebcc8" stop-opacity="0.10"/><stop offset="1" stop-color="#aebcc8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vigG" cx="0.5" cy="0.5" r="0.72">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <filter id="grainF" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.06 0.06 0.06 0 0"/>
    </filter>

    <rect id="dA" width="2" height="9"/>
    <rect id="dB" width="2" height="14"/>
    <rect id="dC" width="3" height="20"/>

    <path id="tileRidge" d="M0 440 V400 L60 380 L120 404 L180 372 L240 398 L300 384 L360 410 L430 376 L500 402 L560 388 L620 412 L700 378 L780 404 L840 390 L900 410 L960 396 V440 Z" fill="#070a10"/>

    <!-- ======= 杩滄櫙鍩庡競 tile v3锛?0s/灞忥級
         缁撴瀯璇存槑锛氬乏缂?B1 璧蜂簬 x=0锛屽彸缂?B13 鏀朵簬 x=960锛?         涓ゅ绌洪殭锛?96..372 璺彛 / 608..680 绌哄湴锛夊潎鍦?tile 鍐呴儴锛?         鎷兼帴缂濅綅浜?x=960 澶勪袱鏍嬬浉閭诲缓绛戜箣闂达紝涓鸿嚜鐒堕珮搴﹀樊锛屾棤缂濄€?======= -->
    <g id="tileFar">
      <g fill="#0a0e15">
        <rect x="0" y="336" width="58" height="104"/>
        <rect x="66" y="318" width="44" height="122"/>
        <rect x="118" y="350" width="80" height="90"/>
        <rect x="206" y="300" width="38" height="140"/>
        <rect x="252" y="334" width="44" height="106"/>
        <!-- 绌洪殭1锛氳矾鍙ｄ綆灞?-->
        <rect x="300" y="412" width="68" height="28"/>
        <rect x="298" y="410" width="72" height="3"/>
        <!-- 妤肩兢缁х画 -->
        <rect x="372" y="354" width="96" height="86"/>
        <rect x="476" y="314" width="52" height="126"/>
        <rect x="536" y="342" width="72" height="98"/>
        <!-- 绌洪殭2锛氱┖鍦板簾澧?-->
        <rect x="620" y="428" width="10" height="12"/>
        <rect x="646" y="432" width="14" height="8"/>
        <rect x="664" y="436" width="6" height="4"/>
        <rect x="632" y="404" width="2" height="24"/>
        <!-- 妤肩兢鏀跺熬 -->
        <rect x="680" y="326" width="48" height="114"/>
        <rect x="736" y="350" width="78" height="90"/>
        <rect x="822" y="310" width="52" height="130"/>
        <rect x="882" y="338" width="50" height="102"/>
        <rect x="940" y="322" width="20" height="118"/>
        <!-- 澶╃嚎涓庤埅绌虹伅 -->
        <rect x="222" y="272" width="2" height="28"/>
        <rect x="221" y="266" width="4" height="4" fill="#c8383c" class="twrA"/>
        <rect x="846" y="304" width="4" height="4" fill="#c8383c" class="twrB"/>
      </g>
      <!-- 绐楁埛锛氭殩榛勫父浜?-->
      <g fill="#c99a52" opacity="0.42">
        <rect x="10" y="348" width="3" height="4"/><rect x="40" y="348" width="3" height="4"/><rect x="14" y="384" width="3" height="4"/>
        <rect x="74" y="330" width="3" height="4"/><rect x="76" y="368" width="3" height="4"/>
        <rect x="128" y="362" width="3" height="4"/><rect x="172" y="362" width="3" height="4"/><rect x="160" y="386" width="3" height="4"/>
        <rect x="214" y="314" width="3" height="4"/><rect x="214" y="368" width="3" height="4"/>
        <rect x="260" y="348" width="3" height="4"/><rect x="262" y="392" width="3" height="4"/>
        <rect x="312" y="420" width="3" height="4"/><rect x="340" y="420" width="3" height="4"/>
        <rect x="384" y="366" width="3" height="4"/><rect x="432" y="366" width="3" height="4"/><rect x="416" y="392" width="3" height="4"/>
        <rect x="486" y="328" width="3" height="4"/><rect x="488" y="372" width="3" height="4"/>
        <rect x="546" y="356" width="3" height="4"/><rect x="588" y="356" width="3" height="4"/><rect x="576" y="384" width="3" height="4"/>
        <rect x="690" y="340" width="3" height="4"/><rect x="692" y="382" width="3" height="4"/>
        <rect x="748" y="362" width="3" height="4"/><rect x="792" y="362" width="3" height="4"/><rect x="780" y="388" width="3" height="4"/>
        <rect x="832" y="324" width="3" height="4"/><rect x="834" y="368" width="3" height="4"/>
        <rect x="892" y="352" width="3" height="4"/><rect x="894" y="396" width="3" height="4"/>
        <rect x="946" y="338" width="3" height="4"/>
      </g>
      <!-- 绐楁埛锛氬喎鐧藉父浜?-->
      <g fill="#9fb4c8" opacity="0.36">
        <rect x="26" y="362" width="3" height="4"/><rect x="150" y="362" width="3" height="4"/>
        <rect x="226" y="338" width="3" height="4"/><rect x="276" y="366" width="3" height="4"/>
        <rect x="408" y="366" width="3" height="4"/><rect x="444" y="392" width="3" height="4"/>
        <rect x="504" y="396" width="3" height="4"/><rect x="568" y="356" width="3" height="4"/>
        <rect x="706" y="358" width="3" height="4"/><rect x="754" y="388" width="3" height="4"/>
        <rect x="848" y="342" width="3" height="4"/><rect x="908" y="370" width="3" height="4"/>
      </g>
      <!-- 绐楁埛锛氱唲鐏?-->
      <g fill="#060910" opacity="0.8">
        <rect x="92" y="390" width="3" height="4"/><rect x="136" y="386" width="3" height="4"/>
        <rect x="390" y="392" width="3" height="4"/><rect x="552" y="384" width="3" height="4"/>
        <rect x="708" y="404" width="3" height="4"/><rect x="850" y="394" width="3" height="4"/>
      </g>
      <!-- 绐楁埛锛氶棯鐑侊紙澶嶇敤 winB 鍔ㄧ敾锛?-->
      <rect x="90" y="346" width="3" height="4" fill="#c99a52" class="winB1"/>
      <rect x="502" y="346" width="3" height="4" fill="#c99a52" class="winB2"/>
      <rect x="770" y="362" width="3" height="4" fill="#9fb4c8" class="winB1" style="animation-delay:-4s"/>
    </g>

    <!-- 涓櫙 tile锛?s/灞忥級涓嶅彉 -->
    <g id="tileMid">
      <rect x="0" y="212" width="960" height="1" fill="#131922"/>
      <rect x="178" y="212" width="4" height="228" fill="#0f1319"/><rect x="178" y="208" width="64" height="4" fill="#0f1319"/>
      <rect x="236" y="212" width="12" height="6" fill="#1a2028"/><rect x="238" y="218" width="8" height="3" fill="#c8d8e8" opacity="0.55"/>
      <polygon points="238,222 246,222 292,440 196,440" fill="url(#coneG)" opacity="0.05"/>
      <rect x="658" y="212" width="4" height="228" fill="#0f1319"/><rect x="658" y="208" width="64" height="4" fill="#0f1319"/>
      <rect x="716" y="212" width="12" height="6" fill="#1a2028"/><rect x="718" y="218" width="8" height="3" fill="#c8d8e8" opacity="0.55"/>
      <polygon points="718,222 726,222 772,440 676,440" fill="url(#coneG)" opacity="0.05"/>
      <rect x="468" y="300" width="4" height="140" fill="#0f1319"/>
      <rect x="462" y="284" width="16" height="24" fill="#10141a"/>
      <rect x="467" y="288" width="6" height="6" fill="#7a2020"/><rect x="467" y="297" width="6" height="6" fill="#40341a"/>
    </g>

    <!-- ======= 璺潰 tile v3锛氳櫄绾挎墜宸ュ仛鏃э紙闂磋窛淇濇寔 120锛屽惊鐜笉鍙橈級 ======= -->
    <g id="tileRoad">
      <g fill="#232a33">
        <rect x="0" y="496" width="38" height="4" opacity="0.8"/>
        <rect x="30" y="496" width="5" height="2" fill="#0a0c0f"/>
        <rect x="120" y="497" width="32" height="3" opacity="0.55"/>
        <rect x="240" y="496" width="40" height="4" opacity="0.85"/>
        <rect x="270" y="497" width="5" height="2" fill="#0a0c0f"/>
        <rect x="360" y="497" width="30" height="3" opacity="0.5"/>
        <rect x="480" y="496" width="38" height="4" opacity="0.75"/>
        <rect x="600" y="497" width="34" height="3" opacity="0.6"/>
        <rect x="626" y="497" width="4" height="2" fill="#0a0c0f"/>
        <rect x="720" y="496" width="42" height="4" opacity="0.9"/>
        <rect x="840" y="496" width="30" height="4" opacity="0.65"/>
        <rect x="860" y="496" width="5" height="2" fill="#0a0c0f"/>
      </g>
      <g fill="#2c3844"><rect x="60" y="444" width="3" height="3"/><rect x="300" y="444" width="3" height="3"/><rect x="540" y="444" width="3" height="3"/><rect x="780" y="444" width="3" height="3"/></g>
    </g>

    <g id="wheelDef">
      <circle r="34" fill="#08090b" stroke="#181c22" stroke-width="2"/>
      <circle r="31" fill="none" stroke="#1e232a" stroke-width="4" stroke-dasharray="6 7"/>
      <circle r="20" fill="#12151a" stroke="#272e37" stroke-width="1.5"/>
      <circle r="12" fill="#0b0e12" stroke="#1f252d" stroke-width="1.5"/>
      <circle r="4.5" fill="#2b323c"/>
      <rect x="-2" y="-30" width="4" height="7" fill="#39424e"/>
      <rect x="-2" y="23" width="4" height="7" fill="#232932"/>
    </g>

    <g id="clusterFar">
      <use href="#dA" x="24" y="18"/><use href="#dB" x="58" y="142"/><use href="#dA" x="96" y="64"/><use href="#dA" x="134" y="296"/><use href="#dB" x="171" y="32"/><use href="#dA" x="205" y="188"/><use href="#dA" x="243" y="412"/><use href="#dB" x="282" y="96"/><use href="#dA" x="318" y="244"/><use href="#dA" x="355" y="368"/><use href="#dB" x="394" y="20"/><use href="#dA" x="431" y="158"/><use href="#dA" x="469" y="330"/><use href="#dA" x="507" y="74"/><use href="#dB" x="546" y="214"/><use href="#dA" x="583" y="438"/><use href="#dA" x="622" y="128"/><use href="#dA" x="660" y="300"/><use href="#dB" x="697" y="46"/><use href="#dA" x="736" y="196"/><use href="#dA" x="774" y="372"/><use href="#dA" x="811" y="88"/><use href="#dB" x="850" y="258"/><use href="#dA" x="888" y="148"/><use href="#dA" x="926" y="342"/><use href="#dA" x="965" y="58"/><use href="#dB" x="1003" y="232"/><use href="#dA" x="-30" y="120"/><use href="#dB" x="-15" y="420"/><use href="#dA" x="-45" y="300"/>
    </g>
    <g id="clusterMid">
      <use href="#dB" x="40" y="90"/><use href="#dB" x="88" y="310"/><use href="#dB" x="142" y="36"/><use href="#dB" x="196" y="220"/><use href="#dB" x="252" y="470"/><use href="#dB" x="306" y="140"/><use href="#dB" x="360" y="380"/><use href="#dB" x="416" y="60"/><use href="#dB" x="470" y="270"/><use href="#dB" x="524" y="490"/><use href="#dB" x="578" y="170"/><use href="#dB" x="634" y="410"/><use href="#dB" x="688" y="100"/><use href="#dB" x="742" y="330"/><use href="#dB" x="798" y="30"/><use href="#dB" x="852" y="240"/><use href="#dB" x="908" y="450"/><use href="#dB" x="958" y="150"/><use href="#dB" x="1010" y="360"/><use href="#dB" x="1035" y="80"/><use href="#dB" x="-25" y="180"/><use href="#dB" x="-50" y="520"/>
    </g>
    <g id="clusterNear">
      <use href="#dC" x="70" y="200"/><use href="#dC" x="150" y="480"/><use href="#dC" x="238" y="60"/><use href="#dC" x="330" y="320"/><use href="#dC" x="420" y="140"/><use href="#dC" x="510" y="520"/><use href="#dC" x="600" y="40"/><use href="#dC" x="688" y="280"/><use href="#dC" x="770" y="500"/><use href="#dC" x="846" y="180"/><use href="#dC" x="918" y="420"/><use href="#dC" x="992" y="90"/><use href="#dC" x="1040" y="330"/><use href="#dC" x="560" y="60"/><use href="#dC" x="-20" y="260"/>
      <use href="#dC" x="500" y="380" fill="#cfeaff" opacity="0.8"/><use href="#dC" x="640" y="240" fill="#cfeaff" opacity="0.8"/><use href="#dC" x="760" y="420" fill="#cfeaff" opacity="0.8"/><use href="#dC" x="860" y="300" fill="#cfeaff" opacity="0.8"/>
    </g>

    <g id="splashD">
      <rect width="2" height="2"/><rect x="4" y="-2" width="2" height="2"/><rect x="-3" y="-1" width="2" height="2"/><rect x="2" y="-4" width="2" height="2"/>
    </g>

    <style><![CDATA[
      text{font-family:'SF Mono',Consolas,'Courier New',monospace;user-select:none}
      .scrRidge{animation:scrK 120s linear infinite;will-change:transform}
      .scrFar{animation:scrK 80s linear infinite;will-change:transform}
      .scrMid{animation:scrK 9s linear infinite;will-change:transform}
      .scrRoad{animation:scrK 1.5s linear infinite;will-change:transform}
      @keyframes scrK{to{transform:translateX(-960px)}}
      .fallFar{animation:fallK 2.3s linear infinite;will-change:transform}
      .fallMid{animation:fallK 1.49s linear infinite;will-change:transform}
      .fallNear{animation:fallK .97s linear infinite;will-change:transform}
      @keyframes fallK{to{transform:translateY(560px)}}
      .solo{animation:soloK linear infinite}
      @keyframes soloK{to{transform:translateY(620px)}}
      .gustA{animation:gustAK 19s linear infinite}
      @keyframes gustAK{0%{opacity:.9}12%{opacity:1}22%{opacity:.62}31%{opacity:.95}45%{opacity:.72}55%{opacity:1}68%{opacity:.55}78%{opacity:.92}90%{opacity:.7}100%{opacity:.9}}
      .gustB{animation:gustBK 27s linear infinite}
      @keyframes gustBK{0%{opacity:.8}18%{opacity:1}33%{opacity:.7}47%{opacity:.95}62%{opacity:.6}75%{opacity:1}88%{opacity:.78}100%{opacity:.8}}
      .ride{transform-box:fill-box;transform-origin:50% 100%;animation:rideK 4.6s ease-in-out infinite}
      @keyframes rideK{0%,100%{transform:translateY(0) scaleY(1)}50%{transform:translateY(1.3px) scaleY(.996)}}
      .surge{animation:surgeK 13s ease-in-out infinite}
      @keyframes surgeK{0%,59%{transform:translateX(0)}65%{transform:translateX(14px)}69%{transform:translateX(8px)}73%{transform:translateX(12px)}81%,100%{transform:translateX(0)}}
      .wspin{transform-box:fill-box;transform-origin:50% 50%;animation:spinK .4s linear infinite}
      @keyframes spinK{to{transform:rotate(360deg)}}
      .ledpx{animation:ledK 13s linear infinite}
      .ledGlow{animation:ledK 13s linear infinite, glowK 13s ease infinite}
      .gndRefl{animation:ledK 13s linear infinite}
      @keyframes ledK{0%,57%{fill:#58c8ff}63%,77%{fill:#ff9d3c}83%,100%{fill:#58c8ff}}
      @keyframes glowK{0%,57%{opacity:.5}60%{opacity:.2}63%,77%{opacity:.85}83%,100%{opacity:.5}}
      .arrayMv{animation:arrayK 13s ease-in-out infinite}
      @keyframes arrayK{0%,57%{transform:translateY(10px)}64%,76%{transform:translateY(-5px)}83%,100%{transform:translateY(10px)}}
      .beacon{opacity:0;animation:beaconK 13s linear infinite}
      @keyframes beaconK{0%,62%{opacity:0}63%,64%{opacity:1}65%,66%{opacity:.15}67%,68%{opacity:1}69%,70%{opacity:.15}71%,72%{opacity:1}73%,74%{opacity:.15}75%,76%{opacity:1}79%,100%{opacity:0}}
      .tail{animation:tailK 13s linear infinite}
      @keyframes tailK{0%,60%{fill:#5c1a1a}65%,77%{fill:#ff4545}83%,100%{fill:#5c1a1a}}
      .beamF{animation:beamK 3.4s ease-in-out infinite}
      @keyframes beamK{0%,100%{opacity:.11}38%{opacity:.135}52%{opacity:.10}72%{opacity:.125}}
      .shimmer{animation:shimK 5s ease-in-out infinite}
      @keyframes shimK{0%,100%{opacity:.08}50%{opacity:.3}}
      .winB1{animation:winK 9s linear infinite}
      .winB2{animation:winK 13s linear infinite 2s}
      @keyframes winK{0%,86%,100%{opacity:.4}90%,95%{opacity:.06}}
      .twrA{animation:twrK 3.2s ease-in-out infinite}
      .twrB{animation:twrK 4.6s ease-in-out infinite 1.2s}
      @keyframes twrK{0%,100%{opacity:.15}50%{opacity:.9}}
      .ripple{transform-box:fill-box;transform-origin:50% 50%;animation:ripK .95s linear infinite}
      @keyframes ripK{0%{transform:scale(.15);opacity:.55}100%{transform:scale(2);opacity:0}}
      .ripple-click{transform-box:fill-box;transform-origin:50% 50%;animation:ripClickK .95s linear forwards}
      @keyframes ripClickK{0%{transform:scale(.1);opacity:.7}100%{transform:scale(3.2);opacity:0}}
      .sky-flash-anim{animation:lightningK .5s ease-out forwards}
      @keyframes lightningK{
        0%{opacity:0}
        8%{opacity:.42}
        18%{opacity:.18}
        30%{opacity:.35}
        48%{opacity:.08}
        65%{opacity:.15}
        100%{opacity:0}
      }
      .lightning-trace{opacity:0;animation:traceK .5s ease-out forwards}
      @keyframes traceK{
        0%{opacity:0}
        6%{opacity:.55}
        20%{opacity:.1}
        32%{opacity:.38}
        50%{opacity:0}
        100%{opacity:0}
      }
      .ripple-click-w{transform-box:fill-box;transform-origin:50% 50%;animation:ripWK 1s ease-out forwards}
      @keyframes ripWK{0%{transform:scale(.15);stroke-width:3;opacity:.65}100%{transform:scale(3.5);stroke-width:.3;opacity:0}}
      .ripple-click-m{transform-box:fill-box;transform-origin:50% 50%;animation:ripMK 1s ease-out .06s forwards}
      @keyframes ripMK{0%{transform:scale(.1);stroke-width:2;opacity:.5}100%{transform:scale(2.8);stroke-width:.4;opacity:0}}
      .ripple-click-i{transform-box:fill-box;transform-origin:50% 50%;animation:ripIK 1s ease-out .12s forwards}
      @keyframes ripIK{0%{transform:scale(.2);stroke-width:1.5;opacity:.35}100%{transform:scale(2.2);stroke-width:.5;opacity:0}}
      .beam-flash-anim{animation:beamFlashK .55s ease-out forwards}
      @keyframes beamFlashK{
        0%{opacity:var(--beam-base)}
        12%{opacity:.88}
        35%{opacity:.82}
        55%{opacity:.45}
        80%{opacity:.18}
        100%{opacity:var(--beam-base)}
      }
      .splash{animation:splK .6s linear infinite}
      @keyframes splK{0%{opacity:0;transform:translate(0,0)}14%{opacity:.85}100%{opacity:0;transform:translate(-6px,-10px)}}
      .antSway{transform-box:fill-box;transform-origin:50% 100%;animation:swayK 7s ease-in-out infinite}
      @keyframes swayK{0%,100%{transform:rotate(0)}30%{transform:rotate(1.6deg)}65%{transform:rotate(-1.2deg)}}
      .cl1{animation:cldK1 31s ease-in-out infinite alternate}
      .cl2{animation:cldK2 47s ease-in-out infinite alternate}
      .cl3{animation:cldK1 23s ease-in-out infinite alternate-reverse}
      .cl4{animation:cldK2 39s ease-in-out infinite alternate}
      @keyframes cldK1{to{transform:translateX(58px)}}
      @keyframes cldK2{to{transform:translateX(-46px)}}
      .fogD{animation:fogK 43s ease-in-out infinite alternate}
      @keyframes fogK{to{transform:translateX(38px)}}
      .light{opacity:0;animation:lightK 23s linear infinite}
      @keyframes lightK{0%,35.4%,38.6%,70.8%,75.2%,100%{opacity:0}36%{opacity:.10}37%{opacity:.03}37.6%{opacity:.12}71.6%{opacity:.09}72.6%{opacity:.02}73.4%{opacity:.11}}
      .expo{animation:expoK 11s ease-in-out infinite}
      @keyframes expoK{0%,100%{opacity:.02}50%{opacity:.085}}
      .rec{animation:recK 1.6s steps(2,start) infinite}
      @keyframes recK{0%,49%{opacity:1}50%,100%{opacity:.15}}
      .tip{animation:tipK 2.4s ease-in-out infinite}
      @keyframes tipK{0%,100%{opacity:.25}50%{opacity:.9}}
      .dragon-breathe {
        animation: breatheGlow 6.7s ease-in-out infinite;
      }
      @keyframes breatheGlow {
        0%, 100% { opacity: 0.82; }
        50%      { opacity: 1; }
      }
      @media (prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important}}
    ]]></style>
  </defs>

  <!-- ================= 澶╃┖ ================= -->
  <rect x="-30" y="-20" width="1020" height="580" fill="url(#skyG)"/>
  <circle cx="742" cy="110" r="54" fill="url(#moonG)"/>
  <circle cx="742" cy="110" r="24" fill="#aebcc8" opacity="0.14"/>
  <rect x="-30" y="-20" width="1020" height="480" fill="#24344a" class="light"/>
  <g fill="#0c1322">
    <g class="cl1" opacity="0.6"><rect x="600" y="78" width="150" height="10"/><rect x="622" y="70" width="86" height="8"/><rect x="640" y="88" width="104" height="8"/></g>
    <g class="cl2" opacity="0.55"><rect x="660" y="112" width="130" height="9"/><rect x="684" y="104" width="70" height="8"/><rect x="700" y="121" width="96" height="8"/></g>
    <g class="cl3" opacity="0.45"><rect x="700" y="148" width="110" height="8"/><rect x="726" y="141" width="60" height="7"/></g>
    <g class="cl4" opacity="0.4"><rect x="300" y="96" width="120" height="9"/><rect x="326" y="89" width="64" height="7"/><rect x="340" y="105" width="80" height="7"/></g>
  </g>

  <!-- 浜や簰鍖? 澶╃┖ 鈫?闂數鐖嗛棯 -->
  <rect id="skyHit" x="-30" y="-20" width="1020" height="440" fill="transparent" style="cursor:pointer"/>
  <g id="skyFlashGroup" opacity="0" style="pointer-events:none">
    <rect x="-30" y="-20" width="1020" height="580" fill="rgba(220,230,255,0.35)"/>
    <g stroke="rgba(200,220,255,0.6)" stroke-width="1.2" stroke-linecap="round" fill="none" class="lightning-trace">
      <line x1="380" y1="-10" x2="420" y2="140"/>
      <line x1="420" y1="140" x2="395" y2="180"/>
      <line x1="395" y1="180" x2="440" y2="300"/>
      <line x1="560" y1="0" x2="530" y2="120"/>
      <line x1="530" y1="120" x2="555" y2="220"/>
    </g>
    <g stroke="rgba(180,210,255,0.35)" stroke-width="0.6" stroke-linecap="round" fill="none" class="lightning-trace" style="animation-delay:-0.05s">
      <line x1="460" y1="20" x2="480" y2="90"/>
      <line x1="480" y1="90" x2="465" y2="150"/>
      <line x1="620" y1="-5" x2="610" y2="80"/>
    </g>
  </g>

  <!-- ================= 瑙嗗樊涓栫晫 ================= -->
  <g class="scrRidge"><use href="#tileRidge"/><use href="#tileRidge" x="960"/></g>
  <g class="scrFar"><use href="#tileFar"/><use href="#tileFar" x="960"/></g>
  <g class="fogD"><rect x="-60" y="368" width="1080" height="76" fill="url(#fogG)"/></g>
  <rect x="-30" y="428" width="1020" height="14" fill="#0b0e13"/>
  <g class="scrMid"><use href="#tileMid"/><use href="#tileMid" x="960"/></g>

  <!-- 璺潰 -->
  <rect x="-30" y="440" width="1020" height="76" fill="#0a0c0f"/>
  <rect x="-30" y="438" width="1020" height="3" fill="#161b22"/>
  <g fill="#11151c"><rect x="120" y="455" width="3" height="1"/><rect x="340" y="480" width="3" height="1"/><rect x="520" y="462" width="3" height="1"/><rect x="610" y="498" width="3" height="1"/><rect x="700" y="470" width="3" height="1"/><rect x="820" y="452" width="3" height="1"/><rect x="880" y="496" width="3" height="1"/><rect x="200" y="506" width="3" height="1"/></g>
  <g class="scrRoad"><use href="#tileRoad"/><use href="#tileRoad" x="960"/></g>
  <ellipse cx="600" cy="470" rx="140" ry="6" fill="#0c1016" opacity="0.8"/>
  <ellipse cx="250" cy="505" rx="90" ry="5" fill="#0c1016" opacity="0.7"/>
  <g fill="#2a3a4c"><rect x="560" y="468" width="90" height="2" class="shimmer"/><rect x="640" y="474" width="60" height="2" class="shimmer" style="animation-delay:-2s"/></g>
  <rect x="268" y="472" width="150" height="26" class="gndRefl" fill="#58c8ff" opacity="0.07"/>
  <g fill="none" stroke="#7f93a8" stroke-width="1">
    <ellipse cx="560" cy="492" rx="9" ry="2" class="ripple" style="animation-delay:-0.2s"/>
    <ellipse cx="700" cy="502" rx="9" ry="2" class="ripple" style="animation-delay:-0.5s"/>
    <ellipse cx="860" cy="486" rx="9" ry="2" class="ripple" style="animation-delay:-0.75s"/>
  </g>

  <!-- 浜や簰鍖? 璺潰/绉按 鈫?鎵╂暎姘存尝绾?-->
  <rect id="roadHit" x="-30" y="438" width="1020" height="82" fill="transparent" style="cursor:pointer"/>
  <g id="rippleLayer" style="pointer-events:none"/>

  <!-- ================= 銆屼俊浣裤€峷3锛堢粏鑺傚眰 2 鍊嶇矑搴﹂噸缁橈級 ================= -->
  <g transform="translate(75,305) scale(0.5)">
    <g class="surge">
      <rect x="4" y="330" width="376" height="6" fill="#04050a" opacity="0.5"/>
      <rect x="12" y="326" width="360" height="7" fill="#04050a" opacity="0.8"/>

      <g class="ride" shape-rendering="crispEdges">
        <!-- 杞﹁韩缁撴瀯浠讹紙涓嶅彉锛?-->
        <rect x="8" y="130" width="210" height="188" fill="#101318"/>
        <path d="M218 196 H334 L356 256 H368 V318 H218 Z" fill="#101318"/>
        <rect x="368" y="298" width="8" height="20" fill="#101318"/>
        <rect x="14" y="130" width="204" height="2" fill="#262d37"/>
        <rect x="218" y="196" width="118" height="2" fill="#262d37"/>
        <rect x="8" y="136" width="2" height="180" fill="#1f2630" opacity="0.6"/>
        <rect x="214" y="132" width="4" height="62" fill="#1a2028"/>
        <!-- 鍔犲己绛嬶細涓婁笅鍒嗘锛岃鍑?GEWU 娲佸噣甯︼紙y196..258锛?-->
        <g fill="#0b0e12" opacity="0.9">
          <rect x="36" y="136" width="4" height="56"/><rect x="64" y="136" width="4" height="56"/><rect x="92" y="136" width="4" height="56"/><rect x="120" y="136" width="4" height="56"/><rect x="148" y="136" width="4" height="56"/><rect x="176" y="136" width="4" height="56"/><rect x="204" y="136" width="4" height="56"/>
          <rect x="36" y="262" width="4" height="50"/><rect x="64" y="262" width="4" height="50"/><rect x="92" y="262" width="4" height="50"/><rect x="120" y="262" width="4" height="50"/><rect x="148" y="262" width="4" height="50"/><rect x="176" y="262" width="4" height="50"/><rect x="204" y="262" width="4" height="50"/>
        </g>
        <!-- 闃茬垎鎺ョ紳锛氱Щ鑷虫磥鍑€甯︿笂涓嬫部 -->
        <rect x="10" y="194" width="206" height="2" fill="#0a0d10"/><rect x="10" y="196" width="206" height="1" fill="#191f27"/>
        <rect x="10" y="258" width="206" height="2" fill="#0a0d10"/><rect x="10" y="260" width="206" height="1" fill="#191f27"/>
        <!-- 灏鹃棬缂?+ 閾伴摼 -->
        <rect x="24" y="136" width="2" height="180" fill="#0a0d10"/>
        <rect x="21" y="150" width="4" height="8" fill="#1a2028"/><rect x="21" y="240" width="4" height="8" fill="#1a2028"/>
        <rect x="217" y="196" width="3" height="122" fill="#0a0d11"/>

        <!-- 鈽?鐏劙榫欏窘 v2锛氭浛鎹负鏂扮殑鐭㈤噺榫欏窘锛宻cale 浠?0.22 鏀惧ぇ鑷?0.32锛屼簩娆℃斁澶э紝鏇存竻鏅?-->
        <g transform="translate(113, 160) scale(0.32) translate(-320, -240)">
          <g class="dragon-breathe">
            <path d="M0.13 0.13C213.38 0.13 426.63 0.13 639.88 0.13C639.88 160.04 639.88 319.96 639.88 479.88C426.63 479.88 213.38 479.88 0.13 479.88C0.13 319.96 0.13 160.04 0.13 0.13ZM302.05 147.5C300.88 148.08 300.01 146.27 298.75 145.67C298.7 153.34 306.7 168.31 312.91 172.96C313.69 173.49 314.47 174.01 315.25 174.54C316.58 173.72 317.35 174.03 318.75 174.54C319.23 172.86 318.58 169.27 317.17 168.27C317.03 167.85 316.89 167.42 316.75 167C316.53 166.97 316.3 166.94 316.08 166.92C316.47 166.69 316.86 166.46 317.25 166.24C321.46 170.74 325.66 175.25 329.87 179.75C326.29 179.25 322.72 178.75 319.14 178.25C321.15 180.08 323.17 181.92 325.18 183.75C319.01 184.78 307.89 176.23 302.59 176.25C305.88 183.12 313.53 190.82 320.46 194.26C322.79 195.41 325.47 195.98 327.67 197.25C325.86 200.7 314 195.88 310.63 195.25C311.44 197.68 314.45 198.91 316.6 200.17C329.4 207.66 335.12 198.38 346.6 201.25C345.69 201.75 344.78 202.25 343.87 202.75C345.02 203.25 346.17 203.75 347.32 204.25C346.28 205.42 345.24 206.58 344.21 207.75C347.4 208.1 351.15 206.79 354.07 208.25C353.97 210.11 353.86 211.98 353.75 213.84C356.58 213.2 358 211.11 361.25 212.46C362.61 214.32 361.99 216.2 362.25 218.33C368.31 216.53 370.49 215.01 371.75 222.79C378.64 221.14 375.71 206.1 372.25 202.32C371.31 202.63 370.27 203.21 369.26 203.07C367.75 202.87 366.29 201.02 365.11 200.16C361.8 197.77 358.07 196.52 355.43 193.25C357.47 192.99 359.59 194.31 361.58 192.8C365.1 190.11 361.62 184.2 361.6 180.75C361.58 179.15 362.19 177.79 361.75 176.24C360.42 179.31 359.08 182.37 357.75 185.44C352.61 180.65 357.81 167.89 350.75 165.24C350.75 170.56 350.75 175.88 350.75 181.2C347.92 176.6 345.08 172 342.25 167.4C342.08 168.84 341.92 170.27 341.75 171.71C337.23 168.95 333.25 163.36 331.26 158.51C330.24 156.02 329.89 152.43 328.25 150.49C327.61 157.52 328.84 165.83 333.34 171.41C336.41 175.2 340.8 177.66 344.05 181.25C342.23 181.29 340.68 180.13 339.05 179.23C331.46 175.02 328.53 169.46 324.69 162.05C323.19 159.17 320.36 157.38 318.24 155.02C315.95 152.46 313.46 148.76 312.02 145.67C308.27 137.62 308.34 126.42 310.19 117.86C310.82 114.97 312.55 112.08 312.8 109.25C310.34 110.1 308.07 115.39 306.87 117.64C301.53 127.64 301.14 136.58 302.05 147.5ZM317.95 116.5C318.02 118.86 319.76 120.89 322.25 120C322.11 118.5 321.97 117 321.83 115.5C322.64 114.04 323.44 112.58 324.25 111.12C320.88 109.41 317.46 113.1 317.95 116.5ZM288.25 114.68C287.8 115.37 287.34 116.06 286.89 116.75C287.66 118.91 289.05 119.08 290.86 117.75C290.49 116.74 290.12 115.74 289.75 114.73C289.25 114.71 288.75 114.7 288.25 114.68ZM353.25 114.63C352.63 114.84 352.01 115.04 351.39 115.25C350.7 116.91 350.84 117.72 352.25 118.81C353.08 118.46 353.91 118.1 354.74 117.75C354.95 116.22 354.46 115.53 353.25 114.63ZM251.75 119.32C250.75 121.19 249.75 123.06 248.75 124.93C252.73 127.52 256.88 120.66 251.75 119.32ZM340.78 119.75C337.65 121.07 335.89 127.67 334.81 130.61C329.7 144.53 334.22 150.25 342.05 160.69C343.77 162.98 345.44 166.4 347.75 167.96C351.88 156.88 342.39 155.47 340.31 146.38C338.89 140.22 338.34 134.07 339 127.75C339.28 125.02 340.79 122.46 340.78 119.75ZM388.25 119.33C382.13 120.97 389.16 127.87 391.53 124.75C390.44 122.94 389.34 121.14 388.25 119.33ZM279.75 120.54C278.35 121.28 277.86 122.88 276.41 123.67C272.24 125.92 267.26 125.98 266.5 131.75C268.57 131.08 270.39 129.86 272.55 129.3C277.71 127.94 280.87 127.07 279.75 120.54ZM373.61 131.75C373.86 126.44 367.95 125.71 364.42 123.78C362.96 122.98 362.52 121.1 361 120.75C360.82 128.64 363.23 128.06 369.72 130.04C371.06 130.45 372.26 131.57 373.61 131.75ZM401.75 123.17C396.76 126.08 398.57 137.21 406.59 132.75C405.83 131.79 404.98 131.51 403.97 130.77C401.34 128.82 402.03 125.92 401.75 123.17ZM238.75 123.36C237.7 124.96 238.54 127.08 237.68 128.94C236.8 130.85 234.59 131.36 233.38 132.75C240.89 136.98 243.13 128.03 238.75 123.36ZM292.75 126.19C291.14 126.14 290.95 126.29 290.28 127.75C291.14 128.87 291.35 128.87 292.75 128.83C293 128.47 293.25 128.11 293.49 127.75C293.25 127.23 293 126.71 292.75 126.19ZM320.25 126C321.01 127.83 322.74 128.99 323.23 131.06C323.55 132.39 323.08 133.72 323.25 135.04C330.31 134.45 324.98 126.87 320.25 126ZM316.08 136.5C315.99 139.93 319.04 141.04 322.04 140.75C321.64 139.25 321.23 137.75 320.83 136.25C320.2 135.83 319.57 135.42 318.95 135C319.14 134.08 319.33 133.17 319.51 132.25C317.17 132.1 316.06 134.3 316.08 136.5ZM272.25 136.5C272.67 140.26 278.06 142.99 279.11 138C280.24 132.66 274.67 133.34 272.25 136.5ZM367.75 138C367.32 134.79 363.64 131.64 361.23 135.46C359.16 138.76 362.85 140.72 365.5 140.75C366.25 139.83 367 138.92 367.75 138ZM376.37 198.54C376.59 198.86 376.81 199.18 377.03 199.5C377.19 201.8 377.22 204.23 378.75 205.99C379.17 203.16 379.59 200.33 380.02 197.5C380.43 196.14 380.84 194.79 381.25 193.43C382.47 196.29 383.69 199.14 384.92 202C386.06 208.05 385.49 214.73 383.78 220.6C382.53 224.89 380.77 228.28 381.04 232.94C381.35 234.29 381.67 235.65 381.98 237C382.74 242.55 384.97 245.94 384.8 252C383.16 257.03 378.53 259.08 376.04 263.48C373.23 265.38 373.42 268.78 372.77 271.75C365.23 271.62 360 278.57 360.06 286C359.51 291.23 362.95 297.83 359.77 302.53C358.87 303.87 356.8 304.39 355.5 305.25C363.27 311.4 379.83 301.16 373.25 291.57C371.7 292.55 370.84 294.25 368.73 294.31C361.72 294.51 364.23 285.19 368.36 282.6C372.18 280.22 379.73 280 381.75 284.97C382.5 286.85 381.59 288.93 381.75 290.85C382.56 290.4 383.36 289.96 384.17 289.51C391.18 284.28 383.28 275.64 383.52 269.27C383.84 260.74 392.26 259.15 393.34 252.47C393.69 252.06 394.03 251.66 394.38 251.25C397.38 258.52 391.04 262.8 390.14 267.75C397.27 268.49 402.67 259.08 403.44 253C403.95 247.17 404.47 241.33 404.99 235.5C405.41 235.42 405.84 235.33 406.26 235.25C414.86 241.33 408.45 250.46 409.25 257.58C410.42 257.15 411.58 256.72 412.75 256.28C416.47 261.85 414.01 274.13 411.82 280.12C410.82 282.85 407.76 287.5 409.25 289.99C420.69 277.29 427.98 258.01 426.75 240.89C426.24 233.73 424.07 227.43 422.22 220.59C420.95 215.9 419.85 206.6 417.39 202.96C417.34 202.17 417.3 201.37 417.25 200.58C420.58 203.18 423.19 207.96 424.84 211.88C425.69 213.91 426.14 218.08 427.75 219.2C429.49 215.53 429.04 211.48 428.91 207.5C429.75 199.77 423.58 194.71 422.14 187.7C421.21 183.15 423.81 180.68 424.57 176.58C425.23 173.67 424.31 169.95 421.94 168.03C420.05 164.17 420.4 162.46 420.75 158.4C414.55 162.7 422.42 178.64 408.8 174.88C407.39 174.49 405.91 173.61 404.69 172.81C404.13 171.04 403.57 169.27 403 167.5C402.44 159.66 399.62 153.3 391.34 151.7C388.59 149.62 384.5 148.51 381.14 147.94C379.51 146.81 377.88 145.68 376.25 144.56C375.9 148.88 383.06 152.02 385.97 154.25C386.24 155.75 386.5 157.25 386.76 158.75C386.49 158.85 386.22 158.95 385.95 159.05C382.29 157.18 379.11 154.24 375.41 152.34C368.7 148.89 361.62 146.23 354.89 142.82C351.27 140.99 347.92 137.67 344.28 136.25C344.49 139.11 347.27 142.53 348.75 144.97C353.72 153.18 360.3 160.12 365.75 167.99C370.09 174.28 373.15 181.88 374.86 189.31C375.56 192.31 375.31 195.65 376.37 198.54ZM258.41 138.99C255.62 139.26 252.13 138.49 249.55 139.79C246.59 141.28 247.81 144.69 250.25 145.72C253.29 144.77 254.64 142.36 258 141.81C260.15 140.96 262.42 139.46 262.75 137.13C261.3 137.75 259.85 138.37 258.41 138.99ZM254.5 158.89C254.23 158.68 253.97 158.46 253.7 158.25C253.95 155.85 254.74 154.73 255.93 152.78C257.65 151.45 259.37 150.12 261.08 148.79C261.64 147.91 262.19 147.03 262.75 146.15C258 148.12 253.25 150.09 248.5 152.05C241.55 152.65 237.57 159.09 237.08 165.5C236.55 167.89 236.02 170.29 235.49 172.68C234.45 173.65 233.06 174.47 231.67 174.86C230.59 175.15 229.37 175.17 228.25 175.14C218.59 174.91 224.81 163.82 219.87 159.25C219.23 160.15 220.13 162.36 219.94 163.75C219.72 165.43 218.66 166.94 217.96 168.45C215.91 170.38 215.09 173.22 215.18 176C215.79 180.76 219.16 182.48 217.89 188.22C216.39 195.01 210.36 199.93 211.05 207.5C210.8 211.47 210.68 215.52 212.25 219.24C213.83 218.1 214.47 214.01 215.26 211.99C216.78 208.12 219.54 203.38 222.75 200.73C222.82 201.49 222.88 202.25 222.95 203.01C220.64 207.18 220.13 212.95 218.77 217.57C216.39 225.65 213.69 233.75 213.31 242.25C212.57 259.11 220.02 276.92 230.75 289.65C232.36 286.66 229.12 282.72 228.16 279.63C226.53 274.41 224.16 261.35 227.25 256.72C228.58 256.97 229.92 257.23 231.25 257.48C231.47 255.55 230.53 254.07 230.15 252.21C228.99 246.62 229.04 239.13 233.75 235.22C234.4 235.28 235.04 235.34 235.69 235.4C236.11 241.46 236.54 247.52 236.96 253.58C237.9 259.48 243.06 267.74 249.75 267.93C249.87 264.6 245.66 260.38 245.92 253.75C245.98 252.27 245.62 250.04 247 249.53C246.42 257.61 255.96 259.95 256.9 267.75C257.64 273.87 249.48 284.16 255.85 289.01C256.68 290.39 257.71 290.82 259.25 290.8C259.16 289.07 258.14 287.54 258.47 285.76C259.51 280.07 268.06 280.17 271.88 282.38C275.31 284.36 279.32 292.5 273.24 294.03C270.2 294.79 269.44 292.27 267.12 291.75C259.98 300.09 277.31 311.31 285.22 305.25C283.52 303.81 281.45 303.65 280.34 301.41C278.04 296.81 281.88 291.64 280.62 287C280.96 279.29 275.59 271.64 267.75 271.75C266.81 268.24 267.21 265.07 263.99 262.57C261.47 258.56 257.51 256.66 255.58 252.09C256.11 249.96 255.63 247.51 256.13 245.29C257.16 240.73 259.46 236.6 259.36 231.75C259.22 225.47 256.14 219.78 255.21 213.63C254.5 208.88 255.71 204.62 255.97 200C257.06 197.67 258.16 195.35 259.25 193.02C259.53 194.01 259.81 195.01 260.09 196C260.65 199.28 261.2 202.56 261.75 205.84C262.71 202.78 263.68 199.72 264.64 196.67C265.41 193.44 265.27 190.11 266.14 186.83C268.76 177.05 273.98 169.23 280.12 161.36C284.41 155.88 288.86 150.65 292.35 144.6C293.64 142.35 295.88 139.45 295.75 136.86C291.72 138.88 288.26 141.93 284.06 143.77C273.84 148.25 263.64 152.32 254.5 158.89ZM388.75 145.46C391.59 144.6 393.19 141.08 389.84 139.41C388.29 138.64 379.12 138.2 377.85 138.75C381.48 140.99 385.12 143.22 388.75 145.46ZM230.25 144.5C227.02 143.66 222.06 146.89 221.59 150.25C224.42 149.82 229.37 147.36 230.25 144.5ZM239.75 144C237.17 144.64 233.3 147.35 232.1 149.83C230.43 153.26 232.82 156.75 236.59 155.75C236.53 154.44 235.47 153.3 235.57 151.77C235.78 148.7 238.85 146.76 239.75 144ZM400.25 144.19C401.86 149.99 405.08 147.52 403.52 155.75C412.78 157.25 406.92 144.28 400.25 144.19ZM418.75 150.5C418.25 146.41 413.41 144.11 409.65 144.25C410.17 147.59 415.98 149.07 418.75 150.5ZM410.68 156.15C409.9 156.15 409.13 156.15 408.36 156.15C407.6 157.75 407.5 158.44 408.68 159.75C409.2 159.74 409.73 159.72 410.25 159.71C411.45 158.43 411.38 157.76 410.68 156.15ZM256.1 180.02C253.25 182.2 251.27 186.87 249.82 190.12C246.03 198.65 241.86 208.54 244.05 218C243.99 220.42 243.93 222.83 243.87 225.25C239.64 225.19 236.71 218.33 233.87 215.99C233.63 215 233.4 214.02 233.17 213.04C229.19 197.52 237.1 186.59 248.31 176.54C249.78 175.22 251.61 174.29 253 172.93C259.92 167.95 266.83 162.98 273.75 158C273.46 160.11 269.25 162.66 267.65 164.4C263.39 169.02 258.92 174.45 256.1 180.02ZM386.39 172.1C387.54 173.7 389.87 174.91 391.41 176.34C397.84 182.36 406.24 190.7 407.9 199.77C408.8 204.66 407.8 208.83 407.01 213.45C406.84 214.27 406.67 215.09 406.51 215.91C402.66 218.35 401.29 223.49 396.75 225.39C395.12 223.29 396.33 219.99 396.36 217.5C398.34 207.92 394.18 198.41 390.41 189.84C389.19 187.08 387.36 182.77 384.92 180.99C381.15 171.92 372.82 165.64 366.94 158.25C369.37 158.47 371.73 161.04 373.7 162.54C377.91 165.74 382.23 168.83 386.39 172.1ZM300.75 160.09C299.51 160.09 298.27 160.09 297.03 160.09C297.6 161.28 298.18 162.47 298.75 163.66C299.42 163.63 300.08 163.61 300.75 163.58C301.61 162.23 301.33 161.54 300.75 160.09ZM305.78 172.75C302.36 168.48 293.13 165.27 287.94 166.75C288.81 168.81 292.17 170.84 294.25 171.72C294.12 167.64 303.19 173.31 305.78 172.75ZM281.75 172.31C280.39 171.21 279.49 171.62 278.35 172.75C278.75 174.4 279.04 174.73 280.75 174.93C281.82 174.06 281.84 173.68 281.75 172.31ZM304.82 191.25C302.73 188.34 299.88 185.6 298.44 182.29C297.64 180.45 296.42 176.65 294.59 175.67C292.9 174.76 290.35 175.07 288.52 175.25C289.74 176.08 290.95 176.92 292.17 177.75C290.28 178.63 287.97 178.53 285.92 179.22C282.21 180.48 276.56 183.63 274.75 187.25C277.91 188.19 289.84 183.94 295.47 185.25C293.84 187.1 290.27 187.11 287.95 188.24C282.28 191.03 272.44 201.07 273.22 207.75C276.1 206.26 280.71 200.48 284.87 198.11C289.53 195.47 294.34 193.64 299.51 192.26C301.28 191.78 303.14 191.9 304.82 191.25ZM354.95 201.25C352.42 201.3 349.89 199.13 347.42 198.32C344.12 197.24 340.48 197.67 337.42 195.8C335.37 194.55 334.62 191.96 332.77 190.47C330.95 189.01 328.72 188.44 326.8 187.25C334.01 185.04 341.94 189.81 347.97 192.72C349.78 193.6 353.53 199.45 354.95 201.25ZM400.75 201.53C402.27 197.98 399.01 191.73 395.21 190.75C395.2 195.38 398.25 198.09 400.75 201.53ZM206.41 191.25C201.69 190.1 194.66 197.48 200.5 200.75C201.1 197.02 204.33 194.35 206.41 191.25ZM244.75 190.9C241.48 193.67 238.11 196.87 239.25 201.47C242.16 198.94 245.51 194.96 244.75 190.9ZM439.75 200.27C444.98 197.11 438.33 190.59 434.06 191.25C435.95 194.26 437.85 197.27 439.75 200.27ZM343.75 194.5C342.98 192.58 340.28 190.99 338.25 191.79C339.31 194.22 341.16 195.25 343.75 194.5ZM315.8 277.45C316.15 277.55 316.5 277.65 316.85 277.75C315.94 280.08 315.03 282.42 314.12 284.75C317.68 286.6 318.17 282.58 319.73 280.25C320.05 280.5 320.37 280.75 320.69 281C320.28 282.75 319.86 284.5 319.44 286.25C320.21 286.58 320.98 286.91 321.75 287.25C330.93 276.38 326.7 262.38 321.01 251.25C325.39 252.51 329.01 258.41 331.19 262.1C333.14 265.43 334.67 268.92 336.4 272.34C338.87 277.2 342.87 281.22 345.06 286.25C346.24 288.98 346.51 291.79 347.25 294.59C354.32 288.51 352.71 272.96 346.56 266.69C343.12 263.19 338.51 260.54 334.56 257.68C323.88 249.94 306.02 236.12 302.02 223.22C300.78 219.21 301.55 215.96 301.75 212.01C297.41 214.3 299.7 219 297.75 222.23C296.92 221.16 296.83 220.13 296.42 218.81C292.78 207.23 304.2 205.66 311.56 202.25C308.62 200.36 305.69 198.47 302.75 196.59C295 197.98 294.84 205.38 290.82 209.25C288.68 209.08 286.54 208.92 284.39 208.75C284.32 207.52 290.45 200.05 291.9 198.75C284.7 198.75 276.32 210.52 277.75 217.29C279.59 215.61 281.44 213.93 283.28 212.25C281.34 219.61 276.89 232.61 282.25 239.53C284.16 236.78 283.28 227.3 287.92 225.75C287.69 228.63 287.47 231.5 287.25 234.38C288.42 232.32 289.58 230.26 290.75 228.21C291.86 232.6 289.26 237.55 290.45 242.25C292.05 248.6 296.01 252.71 298.86 258.37C300.46 261.54 300.31 264.84 301.25 268.12C303.76 265.87 303.05 261.32 302.36 258.35C301.03 252.63 295.51 244.46 296.25 238.91C298.58 243.25 300.92 247.59 303.25 251.93C303.46 246.92 296.74 237.5 296.24 230.75C297.53 231.12 301.37 239.54 302.35 241.39C307.67 251.44 315.62 261.64 312.11 273.76C310.97 277.71 307.28 280.13 306.19 283.25C310.13 285.57 313.88 280.35 315.8 277.45ZM322.75 205.18C317.46 208.49 311.25 210.88 307.56 216.25C309.6 216.19 311.7 215.29 313.75 214.95C318.48 214.14 324.55 213.9 329.16 215.25C328.51 215.92 327.85 216.58 327.2 217.25C339.75 216.32 349.55 218.66 348.61 233.25C350.23 232.18 350.27 229.57 352.15 229.25C351.9 231.11 351.64 232.97 351.39 234.84C352.34 234.84 353.28 234.84 354.23 234.84C353.24 236.47 352.26 238.11 351.27 239.75C357.88 243.99 367.42 231.42 367.25 225.44C366.08 225.79 364.92 226.14 363.75 226.49C363.25 225.44 362.75 224.4 362.25 223.35C361.08 224.65 359.92 225.94 358.75 227.23C355.85 225.22 357.23 222.72 356.75 219.86C355.42 220.26 354.08 220.66 352.75 221.06C352.25 219.73 351.75 218.39 351.25 217.06C350.42 217.56 349.58 218.05 348.75 218.55C348.42 216.72 348.08 214.88 347.75 213.05C344.46 214.66 343.22 213.8 340.94 211.25C337.82 211.81 334.5 211.61 331.77 209C330.92 208.19 330.32 207 329.24 206.49C327.32 205.58 324.79 205.83 322.75 205.18ZM370.77 211.75C368.24 211.46 364.32 208.6 363.46 206.25C367.31 206.79 370.45 207.21 370.77 211.75ZM263.22 213.25C262.4 213.67 261.57 214.08 260.75 214.5C260.96 215.98 261.39 216.48 262.75 217.03C264.69 216.24 264.86 214.61 263.22 213.25ZM268.25 219.26C267.07 220.39 267.09 220.81 267.25 222.41C268.54 223.51 269.39 223.34 270.75 222.49C271.12 220.23 270.46 219.52 268.25 219.26ZM205.75 221.23C199.89 220.19 199.94 226.54 203.25 229.59C203.78 228.86 206.07 222.41 205.75 221.23ZM436.25 229.64C440.88 227.41 440.01 220.23 434.35 221.25C433.44 223.82 436.18 225.67 436.25 229.64ZM331.52 233.25C325.01 229.58 318.49 225.92 311.97 222.25C314.02 229.06 325.08 233.51 331.52 233.25ZM339.75 228.83C345.55 227.54 340.66 222.77 336.68 222.75C337.71 224.78 338.73 226.81 339.75 228.83ZM266.43 256.9C268.56 260.26 274.17 262.04 277.46 264.29C280.4 266.31 282.39 269.43 285.25 271.4C285.54 268.46 283.63 265.84 283.69 262.77C283.77 258.64 287.39 254.9 285.02 250.87C284.83 248.7 284 245.74 281.49 245.75C281.34 246.92 282.11 247.9 281.86 249.21C281.15 252.97 276.56 254.37 273.77 252.25C274.11 251.25 274.44 250.25 274.78 249.25C273.9 246.95 271.34 247.18 270.17 245.1C267.7 240.74 269.86 233.28 265.25 230.18C264.55 232.75 264.55 235.5 263.79 238.11C261.97 244.39 260 252.37 266.43 256.9ZM361.18 257C361.71 259.39 362.23 261.78 362.75 264.16C366.65 261.6 370.55 259.03 374.44 256.47C380.91 250.64 377.78 243.3 376.1 236.25C375.61 234.2 375.8 232.11 375.25 230.11C370.83 232.26 372.19 240.17 370.81 244.12C369.98 246.49 367.78 246.85 366.46 248.75C366.73 249.92 367 251.08 367.27 252.25C361.21 254.93 360.56 249.62 359.75 245.52C353.09 249.72 359.8 253.1 361.18 257ZM349.25 249.78C349.06 247.5 345.71 244.75 344.1 243.15C337.07 236.1 336.74 238.65 327.97 236.75C325.33 236.19 322.85 235.61 320.25 235.14C318.87 234.9 317.86 233.86 316.51 233.75C322.93 242.39 332.05 245.9 342.19 248.16C344.51 248.67 346.88 249.67 349.25 249.78ZM354.75 271.37C355.16 268.17 354.37 257.03 351.89 254.86C348.58 251.96 337.2 251.21 332.72 250.25C334.41 255 345.74 260.57 349.75 264.49C351.74 266.44 352.57 270.02 354.75 271.37ZM208.75 265.08C212.39 264.37 208.78 256.68 207.21 256.25C207.72 259.19 208.24 262.13 208.75 265.08ZM432.75 256.31C431.42 258.23 428.46 263.77 431.25 265.18C432.54 263.59 433.02 258.53 432.75 256.31ZM235.75 264.92C235.29 265.37 234.83 265.81 234.38 266.25C235.06 267.61 235.22 267.77 236.75 267.8C237.08 267.28 237.4 266.77 237.73 266.25C237.07 265.81 236.41 265.37 235.75 264.92ZM405.43 265.12C404.7 265.12 403.98 265.12 403.25 265.12C403.04 266.19 402.57 267.79 404.26 267.87C406.09 267.95 405.83 266.26 405.43 265.12ZM291.57 282C290.85 289.96 297.35 293.53 302.35 297.75C302.23 298.03 302.12 298.31 302 298.59C298.17 298.22 293.94 297.57 291.24 294.52C290.11 293.25 289.49 291.6 288.25 290.53C286.49 293.06 288.4 298.85 289.63 301.5C291.65 308.6 297.7 314.7 305.25 315.65C309.9 316.23 314.59 314.98 319.25 315.44C326.2 316.13 331.93 320.07 329.75 327.55C328.75 325.96 327.75 324.36 326.75 322.77C325.53 324.44 326.28 326.75 324.56 328.31C319.82 332.61 313.31 326.69 310.25 323.35C308.21 327.27 313.54 332.81 316.57 335.2C324.04 341.1 339.9 342.82 344.64 332.45C345.67 330.12 347.35 325.82 346.1 323.5C346.75 306.94 328.1 295.14 314.6 290.21C307.32 287.56 299.82 284.92 295.63 277.84C295 275.98 294.38 274.12 293.75 272.25C291.32 274.34 291.57 279.03 291.57 282ZM394.5 282.58C396.87 286.17 401.58 283.61 401.91 280C402.19 277.93 402.47 275.86 402.75 273.79C398.78 274.49 392.9 277.76 394.5 282.58ZM238.44 279.37C239.19 285.08 246.72 286.09 246.09 280.66C245.8 276.64 241.77 274.91 238.25 273.94C238.31 275.75 238.37 277.56 238.44 279.37ZM330.25 274.23C331.14 279.62 331.93 283.8 330.75 289.35C334.42 292.78 338.08 296.2 341.75 299.62C343.99 291.13 337.66 278.56 330.25 274.23ZM215.25 278.05C214.56 278.78 213.87 279.52 213.18 280.25C213.56 281.14 213.95 282.03 214.34 282.91C215.22 282.91 216.1 282.91 216.98 282.91C218.72 280.73 218.11 278.35 215.25 278.05ZM424.25 278.07C423.52 278.79 422.79 279.52 422.06 280.25C422.41 282.8 424.34 283.76 426.56 282.25C427.44 279.94 426.67 278.42 424.25 278.07ZM247.77 291.25C245.75 290.93 244.61 291.09 244.22 293.25C244.89 293.79 245.57 294.32 246.25 294.86C246.76 294.49 247.26 294.12 247.77 293.75C247.77 292.92 247.77 292.08 247.77 291.25ZM395.48 291.25C393.77 290.98 393.32 291.3 392.45 292.75C392.99 294.36 393.48 294.93 395.25 294.72C396.37 293.35 396.44 292.74 395.48 291.25ZM352.88 296.18C351.16 296.84 352.11 300.26 353.96 299.7C356.44 298.97 355.5 295.17 352.88 296.18ZM228.25 297.67C228.6 300.8 232.78 303.83 235.51 304.75C233.09 302.39 230.67 300.03 228.25 297.67ZM411.75 297.87C409.49 300.16 407.24 302.46 404.98 304.75C407.72 303.91 411.43 300.88 411.75 297.87ZM383.25 298.41C381.21 300.19 379.17 301.97 377.13 303.75C380.66 305.1 384.92 302.22 383.25 298.41ZM257.25 298.56C256.35 303.01 259.57 304.73 263.61 303.75C261.49 302.02 259.37 300.29 257.25 298.56ZM254.25 308.68C250.73 308.77 250.17 312.49 253.75 313.21C254.43 312.56 255.1 311.9 255.78 311.25C255.27 310.39 254.76 309.54 254.25 308.68ZM386.25 308.68C385.75 309.53 385.24 310.39 384.74 311.25C385.36 312.6 386.02 313.1 387.5 313.25C388.08 312.67 388.67 312.08 389.25 311.5C389.04 309.49 388.23 308.8 386.25 308.68ZM268.15 319.5C268.77 320.88 269.38 322.25 269.99 323.63C270.85 325.34 272.78 327.77 274.8 327.75C274.38 326.85 273.96 325.96 273.55 325.06C273.32 324.71 273.09 324.36 272.86 324.01C272.9 318.56 273.51 316.06 279.08 314.75C277.43 311.54 272.27 309.72 269.37 312.61C267.58 314.39 268.03 317.23 268.15 319.5ZM365.61 327.75C372.39 328.05 376.68 306.88 364.13 311.83C362.8 312.35 361.83 313.12 360.99 314.25C362.16 315.2 363.9 314.94 365.22 316.02C368.98 319.09 366.9 324.09 365.61 327.75ZM358.5 319.25C357.23 319.36 355.56 320.28 356.43 321.81C357.66 323.96 359.25 322.21 359.68 320.75C359.29 320.25 358.89 319.75 358.5 319.25ZM282.75 319.25C280.68 320.02 280.37 321.08 281.73 322.75C284.2 322.86 284.67 320.53 282.75 319.25ZM291.53 325.97C293.01 328.84 296.39 332.96 299.93 331.03C302.29 329.39 302.33 325.65 299.47 324.29C298.58 323.87 291.07 322.74 290.03 322.75C290.53 323.82 291.03 324.89 291.53 325.97Z" fill="#070a13" fill-rule="evenodd" stroke="#070a13" stroke-width="0.25" stroke-linejoin="round"/>
            <path d="M316.08 166.92C312.54 165.14 311.07 158.02 308.5 157.05C306.69 154.58 304.88 152.11 303.07 149.63C302.73 148.92 302.39 148.21 302.05 147.5C301.14 136.58 301.53 127.64 306.87 117.64C308.07 115.39 310.34 110.1 312.8 109.25C312.55 112.08 310.82 114.97 310.19 117.86C308.34 126.42 308.27 137.62 312.02 145.67C313.46 148.76 315.95 152.46 318.24 155.02C320.36 157.38 323.19 159.17 324.69 162.05C328.53 169.46 331.46 175.02 339.05 179.23C340.68 180.13 342.23 181.29 344.05 181.25C340.8 177.66 336.41 175.2 333.34 171.41C328.84 165.83 327.61 157.52 328.25 150.49C329.89 152.43 330.24 156.02 331.26 158.51C333.25 163.36 337.23 168.95 341.75 171.71C341.92 170.27 342.08 168.84 342.25 167.4C345.08 172 347.92 176.6 350.75 181.2C350.75 175.88 350.75 170.56 350.75 165.24C357.81 167.89 352.61 180.65 357.75 185.44C359.08 182.37 360.42 179.31 361.75 176.24C362.19 177.79 361.58 179.15 361.6 180.75C361.62 184.2 365.1 190.11 361.58 192.8C359.59 194.31 357.47 192.99 355.43 193.25C358.07 196.52 361.8 197.77 365.11 200.16C366.29 201.02 367.75 202.87 369.26 203.07C370.27 203.21 371.31 202.63 372.25 202.32C375.71 206.1 378.64 221.14 371.75 222.79C370.49 215.01 368.31 216.53 362.25 218.33C361.99 216.2 362.61 214.32 361.25 212.46C358 211.11 356.58 213.2 353.75 213.84C353.86 211.98 353.97 210.11 354.07 208.25C351.15 206.79 347.4 208.1 344.21 207.75C345.24 206.58 346.28 205.42 347.32 204.25C346.17 203.75 345.02 203.25 343.87 202.75C344.78 202.25 345.69 201.75 346.6 201.25C335.12 198.38 329.4 207.66 316.6 200.17C314.45 198.91 311.44 197.68 310.63 195.25C314 195.88 325.86 200.7 327.67 197.25C325.47 195.98 322.79 195.41 320.46 194.26C313.53 190.82 305.88 183.12 302.59 176.25C307.89 176.23 319.01 184.78 325.18 183.75C323.17 181.92 321.15 180.08 319.14 178.25C322.72 178.75 326.29 179.25 329.87 179.75C325.66 175.25 321.46 170.74 317.25 166.24C316.86 166.46 316.47 166.69 316.08 166.92ZM340.78 119.75C340.79 122.46 339.28 125.02 339 127.75C338.34 134.07 338.89 140.22 340.31 146.38C342.39 155.47 351.88 156.88 347.75 167.96C345.44 166.4 343.77 162.98 342.05 160.69C334.22 150.25 329.7 144.53 334.81 130.61C335.89 127.67 337.65 121.07 340.78 119.75ZM401.75 123.17C402.03 125.92 401.34 128.82 403.97 130.77C404.98 131.51 405.83 131.79 406.59 132.75C398.57 137.21 396.76 126.08 401.75 123.17ZM238.75 123.36C243.13 128.03 240.89 136.98 233.38 132.75C234.59 131.36 236.8 130.85 237.68 128.94C238.54 127.08 237.7 124.96 238.75 123.36ZM292.75 126.19C293 126.71 293.25 127.23 293.49 127.75C293.25 128.11 293 128.47 292.75 128.83C291.35 128.87 291.14 128.87 290.28 127.75C290.95 126.29 291.14 126.14 292.75 126.19ZM385.95 159.05C386.46 159.4 386.98 159.74 387.5 160.08C389.07 161.35 390.64 162.62 392.22 163.89C396.37 166.87 400.53 169.84 404.69 172.81C405.91 173.61 407.39 174.49 408.8 174.88C422.42 178.64 414.55 162.7 420.75 158.4C420.4 162.46 420.05 164.17 421.94 168.03C421.29 170.87 420.64 173.71 419.99 176.55C418.66 177.56 417.33 178.57 416 179.58C413.24 179.14 410.48 178.69 407.72 178.25C408.07 179.88 408.41 181.5 408.75 183.13C400.33 176.92 392.82 166.36 382.5 163.06C380.46 162.13 378.2 160.18 376.05 161.25C380.17 164.39 383.58 167.5 387.16 171.25C386.9 171.53 386.64 171.81 386.39 172.1C382.23 168.83 377.91 165.74 373.7 162.54C371.73 161.04 369.37 158.47 366.94 158.25C372.82 165.64 381.15 171.92 384.92 180.99C385.19 183.75 388.28 191.11 386.5 193.14C385.26 191.43 384.78 189.31 383.81 187.42C382.34 184.55 380.1 182.14 378.2 179.58C377.03 178 375.79 175.38 373.66 175.25C373.88 177.76 375.05 180.22 375.63 182.71C376.35 185.87 376.58 189.06 377.07 192.24C377.38 194.2 378.4 197.84 376.37 198.54C375.31 195.65 375.56 192.31 374.86 189.31C373.15 181.88 370.09 174.28 365.75 167.99C360.3 160.12 353.72 153.18 348.75 144.97C347.27 142.53 344.49 139.11 344.28 136.25C347.92 137.67 351.27 140.99 354.89 142.82C361.62 146.23 368.7 148.89 375.41 152.34C379.11 154.24 382.29 157.18 385.95 159.05ZM264.64 196.67C264.14 197.11 263.64 197.56 263.14 198C263.67 190 264.63 182.92 266.94 175.25C263.27 175.53 255.92 187.89 254.71 191.57C254.22 191.64 253.74 191.71 253.25 191.78C253.45 189.69 253.73 187.04 254.28 185.03C254.77 183.23 255.89 181.87 256.1 180.02C258.92 174.45 263.39 169.02 267.65 164.4C269.25 162.66 273.46 160.11 273.75 158C266.83 162.98 259.92 167.95 253 172.93C252.92 172.54 252.84 172.14 252.76 171.75C254.83 169.35 256.95 167.18 259.41 165.18C260.85 164.01 263.57 162.88 264.59 161.34C264.99 160.72 264.77 160.55 264.75 159.89C263.38 160.42 262.01 160.95 260.63 161.48C252.57 163.67 244.47 170.56 238.49 176.24C236.28 178.34 234.37 180.87 231.75 182.46C232.04 181.22 232.34 179.99 232.63 178.75C229.76 179.07 226.88 179.39 224 179.7C222.79 178.8 221.58 177.9 220.37 177C218.88 174.1 218.08 171.73 217.96 168.45C218.66 166.94 219.72 165.43 219.94 163.75C220.13 162.36 219.23 160.15 219.87 159.25C224.81 163.82 218.59 174.91 228.25 175.14C229.37 175.17 230.59 175.15 231.67 174.86C233.06 174.47 234.45 173.65 235.49 172.68C239.63 169.65 243.76 166.61 247.89 163.57C249.34 162.57 250.78 161.57 252.23 160.57C252.98 160.01 253.74 159.45 254.5 158.89C263.64 152.32 273.84 148.25 284.06 143.77C288.26 141.93 291.72 138.88 295.75 136.86C295.88 139.45 293.64 142.35 292.35 144.6C288.86 150.65 284.41 155.88 280.12 161.36C273.98 169.23 268.76 177.05 266.14 186.83C265.27 190.11 265.41 193.44 264.64 196.67ZM261.08 148.79C259.37 148.6 251.37 152.75 250 154.27C248.42 156.04 248.12 158.28 245.75 159.05C245.24 156.07 246.85 154.32 248.5 152.05C253.25 150.09 258 148.12 262.75 146.15C262.19 147.03 261.64 147.91 261.08 148.79ZM381.14 147.94C384.5 148.51 388.59 149.62 391.34 151.7C392.36 153.95 394.05 155.59 393.83 158.25C393.13 158.08 392.43 157.92 391.73 157.75C387.27 151.57 387.36 153.06 381.23 149.25C380.46 148.33 380.39 148.83 381.14 147.94ZM305.78 172.75C303.19 173.31 294.12 167.64 294.25 171.72C292.17 170.84 288.81 168.81 287.94 166.75C293.13 165.27 302.36 168.48 305.78 172.75ZM304.82 191.25C303.14 191.9 301.28 191.78 299.51 192.26C294.34 193.64 289.53 195.47 284.87 198.11C280.71 200.48 276.1 206.26 273.22 207.75C272.44 201.07 282.28 191.03 287.95 188.24C290.27 187.11 293.84 187.1 295.47 185.25C289.84 183.94 277.91 188.19 274.75 187.25C276.56 183.63 282.21 180.48 285.92 179.22C287.97 178.53 290.28 178.63 292.17 177.75C290.95 176.92 289.74 176.08 288.52 175.25C290.35 175.07 292.9 174.76 294.59 175.67C296.42 176.65 297.64 180.45 298.44 182.29C299.88 185.6 302.73 188.34 304.82 191.25ZM354.95 201.25C353.53 199.45 349.78 193.6 347.97 192.72C341.94 189.81 334.01 185.04 326.8 187.25C328.72 188.44 330.95 189.01 332.77 190.47C334.62 191.96 335.37 194.55 337.42 195.8C340.48 197.67 344.12 197.24 347.42 198.32C349.89 199.13 352.42 201.3 354.95 201.25ZM320.69 281C320.86 280.17 321.03 279.33 321.2 278.5C321.66 276.58 321.84 274.76 320.5 273.25C320.64 271.66 320.3 270.98 319.25 269.78C318.88 270.36 318.52 270.93 318.15 271.5C317.22 273.25 316.29 275 315.36 276.75C315.51 276.98 315.66 277.22 315.8 277.45C313.88 280.35 310.13 285.57 306.19 283.25C307.28 280.13 310.97 277.71 312.11 273.76C315.62 261.64 307.67 251.44 302.35 241.39C301.37 239.54 297.53 231.12 296.24 230.75C296.74 237.5 303.46 246.92 303.25 251.93C300.92 247.59 298.58 243.25 296.25 238.91C295.51 244.46 301.03 252.63 302.36 258.35C303.05 261.32 303.76 265.87 301.25 268.12C300.31 264.84 300.46 261.54 298.86 258.37C296.01 252.71 292.05 248.6 290.45 242.25C289.26 237.55 291.86 232.6 290.75 228.21C289.58 230.26 288.42 232.32 287.25 234.38C287.47 231.5 287.69 228.63 287.92 225.75C283.28 227.3 284.16 236.78 282.25 239.53C276.89 232.61 281.34 219.61 283.28 212.25C281.44 213.93 279.59 215.61 277.75 217.29C276.32 210.52 284.7 198.75 291.9 198.75C290.45 200.05 284.32 207.52 284.39 208.75C286.54 208.92 288.68 209.08 290.82 209.25C294.84 205.38 295 197.98 302.75 196.59C305.69 198.47 308.62 200.36 311.56 202.25C304.2 205.66 292.78 207.23 296.42 218.81C296.83 220.13 296.92 221.16 297.75 222.23C299.7 219 297.41 214.3 301.75 212.01C301.55 215.96 300.78 219.21 302.02 223.22C306.02 236.12 323.88 249.94 334.56 257.68C338.51 260.54 343.12 263.19 346.56 266.69C352.71 272.96 354.32 288.51 347.25 294.59C346.51 291.79 346.24 288.98 345.06 286.25C342.87 281.22 338.87 277.2 336.4 272.34C334.67 268.92 333.14 265.43 331.19 262.1C329.01 258.41 325.39 252.51 321.01 251.25C326.7 262.38 330.93 276.38 321.75 287.25C320.98 286.91 320.21 286.58 319.44 286.25C319.86 284.5 320.28 282.75 320.69 281ZM322.75 205.18C324.79 205.83 327.32 205.58 329.24 206.49C330.32 207 330.92 208.19 331.77 209C334.5 211.61 337.82 211.81 340.94 211.25C343.22 213.8 344.46 214.66 347.75 213.05C348.08 214.88 348.42 216.72 348.75 218.55C349.58 218.05 350.42 217.56 351.25 217.06C351.75 218.39 352.25 219.73 352.75 221.06C354.08 220.66 355.42 220.26 356.75 219.86C357.23 222.72 355.85 225.22 358.75 227.23C359.92 225.94 361.08 224.65 362.25 223.35C362.75 224.4 363.25 225.44 363.75 226.49C364.92 226.14 366.08 225.79 367.25 225.44C367.42 231.42 357.88 243.99 351.27 239.75C352.26 238.11 353.24 236.47 354.23 234.84C353.28 234.84 352.34 234.84 351.39 234.84C351.64 232.97 351.9 231.11 352.15 229.25C350.27 229.57 350.23 232.18 348.61 233.25C349.55 218.66 339.75 216.32 327.2 217.25C327.85 216.58 328.51 215.92 329.16 215.25C324.55 213.9 318.48 214.14 313.75 214.95C311.7 215.29 309.6 216.19 307.56 216.25C311.25 210.88 317.46 208.49 322.75 205.18ZM370.77 211.75C370.45 207.21 367.31 206.79 363.46 206.25C364.32 208.6 368.24 211.46 370.77 211.75ZM249.25 210.27C250.07 211.8 250.3 213.54 251.15 215.12C253.1 218.71 258.91 224.89 257.25 229.09C250.42 227.05 246.73 216.68 249.25 210.27ZM391.25 211.26C393.07 217.43 389.18 226.5 383.25 229.08C382.81 227.19 383.22 225.55 383.99 223.78C384.48 222.65 390.79 211.75 391.25 211.26ZM412.96 212.03C413.31 212.04 413.66 212.05 414 212.05C413.81 214.99 412.44 217.77 412.52 220.75C412.6 224.12 414.43 226.84 415.04 230C412.36 231.19 409.21 225.48 409.11 223.25C409.02 221.3 409.85 219.81 410.16 217.95C411.09 215.98 412.03 214.01 412.96 212.03ZM226.95 213.58C227.2 213.54 227.45 213.51 227.71 213.47C228.37 214.98 229.03 216.49 229.69 218C231.27 223.11 230.75 225.98 226.75 229.62C226.32 229.58 225.89 229.54 225.46 229.5C227.69 221.62 227.7 221.82 226.95 213.58ZM205.75 221.23C206.07 222.41 203.78 228.86 203.25 229.59C199.94 226.54 199.89 220.19 205.75 221.23ZM436.25 229.64C436.18 225.67 433.44 223.82 434.35 221.25C440.01 220.23 440.88 227.41 436.25 229.64ZM331.52 233.25C325.08 233.51 314.02 229.06 311.97 222.25C318.49 225.92 325.01 229.58 331.52 233.25ZM349.25 249.78C346.88 249.67 344.51 248.67 342.19 248.16C332.05 245.9 322.93 242.39 316.51 233.75C317.86 233.86 318.87 234.9 320.25 235.14C322.85 235.61 325.33 236.19 327.97 236.75C336.74 238.65 337.07 236.1 344.1 243.15C345.71 244.75 349.06 247.5 349.25 249.78ZM354.75 271.37C352.57 270.02 351.74 266.44 349.75 264.49C345.74 260.57 334.41 255 332.72 250.25C337.2 251.21 348.58 251.96 351.89 254.86C354.37 257.03 355.16 268.17 354.75 271.37ZM255.58 252.09C257.51 256.66 261.47 258.56 263.99 262.57C264.67 266.87 264.99 273.49 260.75 276.05C260.94 274.77 261.65 273.56 261.65 272.25C261.63 263.84 253.27 259.96 254.25 250.73C254.69 251.19 255.13 251.64 255.58 252.09ZM376.04 263.48C378.53 259.08 383.16 257.03 384.8 252C385.27 251.92 385.74 251.83 386.21 251.75C386.51 257.76 382.57 261.36 380.23 266.44C378.89 269.34 379.23 272.06 378.75 275C375.7 271.14 376.43 268.13 376.04 263.48ZM208.75 265.08C208.24 262.13 207.72 259.19 207.21 256.25C208.78 256.68 212.39 264.37 208.75 265.08ZM432.75 256.31C433.02 258.53 432.54 263.59 431.25 265.18C428.46 263.77 431.42 258.23 432.75 256.31ZM235.75 264.92C236.41 265.37 237.07 265.81 237.73 266.25C237.4 266.77 237.08 267.28 236.75 267.8C235.22 267.77 235.06 267.61 234.38 266.25C234.83 265.81 235.29 265.37 235.75 264.92ZM405.43 265.12C405.83 266.26 406.09 267.95 404.26 267.87C402.57 267.79 403.04 266.19 403.25 265.12C403.98 265.12 404.7 265.12 405.43 265.12ZM330.25 274.23C337.66 278.56 343.99 291.13 341.75 299.62C338.08 296.2 334.42 292.78 330.75 289.35C331.93 283.8 331.14 279.62 330.25 274.23ZM215.25 278.05C218.11 278.35 218.72 280.73 216.98 282.91C216.1 282.91 215.22 282.91 214.34 282.91C213.95 282.03 213.56 281.14 213.18 280.25C213.87 279.52 214.56 278.78 215.25 278.05ZM295.63 277.84C299.82 284.92 307.32 287.56 314.6 290.21C328.1 295.14 346.75 306.94 346.1 323.5C345.82 323.64 345.53 323.78 345.25 323.92C343.13 317.77 336.77 313.45 331 311.18C330 310.68 329 310.17 328 309.67C325.7 305.39 319.93 305.22 316.72 302.25C319.58 302.92 322.44 303.58 325.29 304.25C321.22 292.37 299.89 293.52 294.79 278.75C295.07 278.45 295.35 278.14 295.63 277.84ZM424.25 278.07C426.67 278.42 427.44 279.94 426.56 282.25C424.34 283.76 422.41 282.8 422.06 280.25C422.79 279.52 423.52 278.79 424.25 278.07ZM247.77 291.25C247.77 292.08 247.77 292.92 247.77 293.75C247.26 294.12 246.76 294.49 246.25 294.86C245.57 294.32 244.89 293.79 244.22 293.25C244.61 291.09 245.75 290.93 247.77 291.25ZM395.48 291.25C396.44 292.74 396.37 293.35 395.25 294.72C393.48 294.93 392.99 294.36 392.45 292.75C393.32 291.3 393.77 290.98 395.48 291.25ZM228.25 297.67C230.67 300.03 233.09 302.39 235.51 304.75C232.78 303.83 228.6 300.8 228.25 297.67ZM411.75 297.87C411.43 300.88 407.72 303.91 404.98 304.75C407.24 302.46 409.49 300.16 411.75 297.87Z" fill="#f6f5f2" fill-rule="evenodd" stroke="#f6f5f2" stroke-width="0.25" stroke-linejoin="round"/>
            <path d="M288.25 114.68C288.75 114.7 289.25 114.71 289.75 114.73C290.12 115.74 290.49 116.74 290.86 117.75C289.05 119.08 287.66 118.91 286.89 116.75C287.34 116.06 287.8 115.37 288.25 114.68ZM353.25 114.63C354.46 115.53 354.95 116.22 354.74 117.75C353.91 118.1 353.08 118.46 352.25 118.81C350.84 117.72 350.7 116.91 351.39 115.25C352.01 115.04 352.63 114.84 353.25 114.63ZM321.83 115.5C321.97 117 322.11 118.5 322.25 120C319.76 120.89 318.02 118.86 317.95 116.5C318.21 116.5 318.48 116.5 318.75 116.5C319.58 115.93 320.42 115.36 321.25 114.79C321.44 115.03 321.64 115.26 321.83 115.5ZM251.75 119.32C256.88 120.66 252.73 127.52 248.75 124.93C249.75 123.06 250.75 121.19 251.75 119.32ZM388.25 119.33C389.34 121.14 390.44 122.94 391.53 124.75C389.16 127.87 382.13 120.97 388.25 119.33ZM318.95 135C319.57 135.42 320.2 135.83 320.83 136.25C321.23 137.75 321.64 139.25 322.04 140.75C319.04 141.04 315.99 139.93 316.08 136.5C317.33 135.96 317.76 136.1 318.25 135C318.48 135 318.72 135 318.95 135ZM258 141.81C257.88 141.46 257.77 141.1 257.65 140.75C257 140.58 256.36 140.42 255.72 140.25C256.06 140 256.41 139.75 256.75 139.5C257.25 139.5 257.75 139.5 258.25 139.5C258.3 139.33 258.35 139.16 258.41 138.99C259.85 138.37 261.3 137.75 262.75 137.13C262.42 139.46 260.15 140.96 258 141.81ZM303.07 149.63C304.88 152.11 306.69 154.58 308.5 157.05C308.84 160.29 313.68 168.13 317.17 168.27C318.58 169.27 319.23 172.86 318.75 174.54C317.35 174.03 316.58 173.72 315.25 174.54C314.47 174.01 313.69 173.49 312.91 172.96C313.91 171.42 310.84 168.68 309.9 167.34C306.73 162.83 302.95 156.21 302.06 150.75C302.39 150.38 302.73 150.01 303.07 149.63ZM255.93 152.78C254.74 154.73 253.95 155.85 253.7 158.25C253.97 158.46 254.23 158.68 254.5 158.89C253.74 159.45 252.98 160.01 252.23 160.57C252.23 160.42 252.24 160.27 252.25 160.12C249.6 157.89 253.29 153.41 255.93 152.78ZM385.97 154.25C386.61 154.59 387.24 154.92 387.87 155.25C388.03 155.92 388.18 156.58 388.33 157.25C388.06 157.92 387.78 158.58 387.5 159.25C387.5 159.53 387.5 159.8 387.5 160.08C386.98 159.74 386.46 159.4 385.95 159.05C386.22 158.95 386.49 158.85 386.76 158.75C386.5 157.25 386.24 155.75 385.97 154.25ZM410.68 156.15C411.38 157.76 411.45 158.43 410.25 159.71C409.73 159.72 409.2 159.74 408.68 159.75C407.5 158.44 407.6 157.75 408.36 156.15C409.13 156.15 409.9 156.15 410.68 156.15ZM253 172.93C251.61 174.29 249.78 175.22 248.31 176.54C237.1 186.59 229.19 197.52 233.17 213.04C233.03 212.99 232.89 212.95 232.75 212.91C231.06 214.38 231.04 215.6 230.75 217.76C230.5 217.59 230.25 217.42 230 217.25C229.9 217.5 229.79 217.75 229.69 218C229.03 216.49 228.37 214.98 227.71 213.47C228.31 210.52 226.65 206.64 227.11 203.27C228.14 195.76 233 188.47 237.21 182.43C240.83 177.23 246.5 172.07 251.61 168.36C254.48 166.29 258.87 164.54 260.63 161.48C262.01 160.95 263.38 160.42 264.75 159.89C264.77 160.55 264.99 160.72 264.59 161.34C263.57 162.88 260.85 164.01 259.41 165.18C256.95 167.18 254.83 169.35 252.76 171.75C252.84 172.14 252.92 172.54 253 172.93ZM382.5 163.06C382.9 164.91 385.01 165.7 386.48 166.78C390.05 169.43 394.07 172.34 397.1 175.64C403.39 182.51 410.61 191.2 412.73 200.5C413.65 204.5 412.7 208.14 412.96 212.03C412.03 214.01 411.09 215.98 410.16 217.95C409.86 217.52 409.55 217.08 409.25 216.65C409.05 215.52 408.85 214.38 408.65 213.25C408.35 213.12 408.05 212.98 407.75 212.85C407.5 213.05 407.25 213.25 407.01 213.45C407.8 208.83 408.8 204.66 407.9 199.77C406.24 190.7 397.84 182.36 391.41 176.34C389.87 174.91 387.54 173.7 386.39 172.1C386.64 171.81 386.9 171.53 387.16 171.25C383.58 167.5 380.17 164.39 376.05 161.25C378.2 160.18 380.46 162.13 382.5 163.06ZM247.89 163.57C243.76 166.61 239.63 169.65 235.49 172.68C236.02 170.29 236.55 167.89 237.08 165.5C237.47 165.9 237.86 166.3 238.25 166.7C240.56 164.53 242.25 162.52 245.25 161.18C246.13 161.98 247.01 162.78 247.89 163.57ZM403 167.5C403.57 169.27 404.13 171.04 404.69 172.81C400.53 169.84 396.37 166.87 392.22 163.89C392.36 162.26 393.29 161.68 394.75 161.01C397.53 162.39 399.88 163.83 401.21 166.75C402.73 166.72 402.01 166.02 403 167.5ZM281.75 172.31C281.84 173.68 281.82 174.06 280.75 174.93C279.04 174.73 278.75 174.4 278.35 172.75C279.49 171.62 280.39 171.21 281.75 172.31ZM263.14 198C262.85 198.5 262.55 199 262.25 199.5C262.08 198.69 261.92 197.89 261.75 197.08C261.42 197.22 261.08 197.36 260.75 197.5C260.67 197.08 260.58 196.67 260.5 196.25C260.36 196.17 260.23 196.08 260.09 196C259.81 195.01 259.53 194.01 259.25 193.02C258.16 195.35 257.06 197.67 255.97 200C254.21 200.58 254.12 202.2 253.25 203.65C253.74 199.63 254.22 195.6 254.71 191.57C255.92 187.89 263.27 175.53 266.94 175.25C264.63 182.92 263.67 190 263.14 198ZM386.5 193.14C385.29 196.74 388.32 200.28 386.25 203.67C385.81 203.11 385.36 202.56 384.92 202C383.69 199.14 382.47 196.29 381.25 193.43C380.84 194.79 380.43 196.14 380.02 197.5C379.43 197.59 378.84 197.67 378.25 197.76C378.08 198.34 377.92 198.92 377.75 199.5C377.51 199.5 377.27 199.5 377.03 199.5C376.81 199.18 376.59 198.86 376.37 198.54C378.4 197.84 377.38 194.2 377.07 192.24C376.58 189.06 376.35 185.87 375.63 182.71C375.05 180.22 373.88 177.76 373.66 175.25C375.79 175.38 377.03 178 378.2 179.58C380.1 182.14 382.34 184.55 383.81 187.42C384.78 189.31 385.26 191.43 386.5 193.14ZM215.18 176C215.37 176.17 215.56 176.33 215.75 176.5C217.28 175.89 218.23 176.76 219.75 177.38C219.96 177.25 220.16 177.13 220.37 177C221.58 177.9 222.79 178.8 224 179.7C224.13 182.48 225.65 184.73 224.91 187.72C223.64 192.91 218.06 196.19 215.16 200.4C213.71 202.51 212.74 205.99 211.05 207.5C210.36 199.93 216.39 195.01 217.89 188.22C219.16 182.48 215.79 180.76 215.18 176ZM424.57 176.58C423.81 180.68 421.21 183.15 422.14 187.7C423.58 194.71 429.75 199.77 428.91 207.5C427.18 205.99 426.33 202.47 424.9 200.36C422.06 196.16 416.47 192.7 415.04 187.73C414.15 184.62 416.12 182.38 416 179.58C417.33 178.57 418.66 177.56 419.99 176.55C420.24 176.7 420.5 176.85 420.75 177C421.75 176.63 422.75 176.27 423.75 175.9C424.02 176.13 424.3 176.36 424.57 176.58ZM400.75 201.53C398.25 198.09 395.2 195.38 395.21 190.75C399.01 191.73 402.27 197.98 400.75 201.53ZM244.75 190.9C245.51 194.96 242.16 198.94 239.25 201.47C238.11 196.87 241.48 193.67 244.75 190.9ZM222.95 203.01C223.7 206.06 224.54 211.59 226.95 213.58C227.7 221.82 227.69 221.62 225.46 229.5C222.48 231.02 219.84 241.39 221.75 244C223.07 240.08 224.56 235.76 227.29 232.54C229.15 230.33 231.52 228.27 232.79 225.59C234.27 222.44 232.68 219.1 233.87 215.99C236.71 218.33 239.64 225.19 243.87 225.25C243.93 222.83 243.99 220.42 244.05 218C245.34 218.45 246 219.8 246.93 220.82C247.88 221.86 249.19 223.13 249.81 224.4C252.46 229.81 247.37 239.95 240.64 237.75C240.28 235.58 239.93 233.42 239.58 231.25C237.77 231.8 236.09 233.58 235.69 235.4C235.04 235.34 234.4 235.28 233.75 235.22C229.04 239.13 228.99 246.62 230.15 252.21C230.53 254.07 231.47 255.55 231.25 257.48C229.92 257.23 228.58 256.97 227.25 256.72C224.16 261.35 226.53 274.41 228.16 279.63C229.12 282.72 232.36 286.66 230.75 289.65C220.02 276.92 212.57 259.11 213.31 242.25C213.69 233.75 216.39 225.65 218.77 217.57C220.13 212.95 220.64 207.18 222.95 203.01ZM417.39 202.96C419.85 206.6 420.95 215.9 422.22 220.59C424.07 227.43 426.24 233.73 426.75 240.89C427.98 258.01 420.69 277.29 409.25 289.99C407.76 287.5 410.82 282.85 411.82 280.12C414.01 274.13 416.47 261.85 412.75 256.28C411.58 256.72 410.42 257.15 409.25 257.58C408.45 250.46 414.86 241.33 406.26 235.25C405.84 235.33 405.41 235.42 404.99 235.5C404.9 234.92 404.8 234.33 404.71 233.75C403.45 232.92 402.19 232.08 400.93 231.25C400.54 233.48 400.14 235.71 399.75 237.93C388.21 239.27 386.97 223.17 396.36 217.5C396.33 219.99 395.12 223.29 396.75 225.39C401.29 223.49 402.66 218.35 406.51 215.91C408.05 218.24 406.42 221.87 407.23 224.6C408.39 228.54 412.47 231.23 414.6 234.64C416.38 237.46 416.95 241.07 418.75 243.74C419.4 239.64 418.54 232.63 415.04 230C414.43 226.84 412.6 224.12 412.52 220.75C412.44 217.77 413.81 214.99 414 212.05C416.54 210.42 416.29 205.57 417.39 202.96ZM268.25 219.26C270.46 219.52 271.12 220.23 270.75 222.49C269.39 223.34 268.54 223.51 267.25 222.41C267.09 220.81 267.07 220.39 268.25 219.26ZM339.75 228.83C338.73 226.81 337.71 224.78 336.68 222.75C340.66 222.77 345.55 227.54 339.75 228.83ZM403.44 253C402.67 259.08 397.27 268.49 390.14 267.75C391.04 262.8 397.38 258.52 394.38 251.25C394.03 251.66 393.69 252.06 393.34 252.47C392.7 250.16 393.02 247.88 391.58 245.65C388.35 240.65 384.44 242.53 382.75 234.37C382.49 235.25 382.24 236.12 381.98 237C381.67 235.65 381.35 234.29 381.04 232.94C381.93 232.71 382.82 232.48 383.72 232.25C385.03 236.91 390.08 239.28 393.75 241.89C395.79 241.67 396.81 242.15 398.75 242.74C400.19 245.85 401.62 250.63 403.44 253ZM247 249.53C245.62 250.04 245.98 252.27 245.92 253.75C245.66 260.38 249.87 264.6 249.75 267.93C243.06 267.74 237.9 259.48 236.96 253.58C238.19 250.31 239.43 247.03 240.66 243.75C242.47 245.46 243.45 242.78 244.82 242.11C245.69 241.69 246.74 241.77 247.62 241.37C251.84 239.42 254.45 236.01 257.25 232.57C259.2 238.65 252.83 241.25 249.49 244.75C248.28 246.03 247.62 247.97 247 249.53ZM285.02 250.87C287.39 254.9 283.77 258.64 283.69 262.77C283.63 265.84 285.54 268.46 285.25 271.4C282.39 269.43 280.4 266.31 277.46 264.29C274.17 262.04 268.56 260.26 266.43 256.9C268.29 256.49 269.2 255.64 270.75 257.29C272.97 256.27 274.78 257.59 277.26 257.15C281.54 256.38 282.7 253.83 285.02 250.87ZM374.44 256.47C370.55 259.03 366.65 261.6 362.75 264.16C362.23 261.78 361.71 259.39 361.18 257C361.54 256.59 361.89 256.19 362.25 255.78C366.69 255.59 371.14 252.67 374.44 256.47ZM318.15 271.5C318.77 271.75 319.38 272 320 272.25C320.22 274.25 320.45 276.25 320.67 278.25C320.85 278.33 321.03 278.42 321.2 278.5C321.03 279.33 320.86 280.17 320.69 281C320.37 280.75 320.05 280.5 319.73 280.25C318.17 282.58 317.68 286.6 314.12 284.75C315.03 282.42 315.94 280.08 316.85 277.75C316.5 277.65 316.15 277.55 315.8 277.45C315.66 277.22 315.51 276.98 315.36 276.75C316.29 275 317.22 273.25 318.15 271.5ZM280.62 287C281.88 291.64 278.04 296.81 280.34 301.41C281.45 303.65 283.52 303.81 285.22 305.25C277.31 311.31 259.98 300.09 267.12 291.75C269.44 292.27 270.2 294.79 273.24 294.03C279.32 292.5 275.31 284.36 271.88 282.38C268.06 280.17 259.51 280.07 258.47 285.76C258.14 287.54 259.16 289.07 259.25 290.8C257.71 290.82 256.68 290.39 255.85 289.01C256.15 288.64 256.45 288.27 256.75 287.9C255.1 276.72 264.17 275.37 272.51 279.27C275.88 280.85 278.49 284.56 280.62 287ZM384.17 289.51C383.36 289.96 382.56 290.4 381.75 290.85C381.59 288.93 382.5 286.85 381.75 284.97C379.73 280 372.18 280.22 368.36 282.6C364.23 285.19 361.72 294.51 368.73 294.31C370.84 294.25 371.7 292.55 373.25 291.57C379.83 301.16 363.27 311.4 355.5 305.25C356.8 304.39 358.87 303.87 359.77 302.53C362.95 297.83 359.51 291.23 360.06 286C366.08 281.3 368.51 276.98 377.31 277.43C379.55 277.55 381.64 277.97 382.8 280.4C384.26 283.48 383.42 286.38 384.17 289.51ZM246.09 280.66C246.72 286.09 239.19 285.08 238.44 279.37C241.17 279.27 242.93 278.35 244.88 280.75C245.28 280.72 245.69 280.69 246.09 280.66ZM401.91 280C401.58 283.61 396.87 286.17 394.5 282.58C396.62 280.11 398.3 277.11 401.91 280ZM302 298.59C302.12 298.31 302.23 298.03 302.35 297.75C297.35 293.53 290.85 289.96 291.57 282C291.91 281.75 292.26 281.5 292.6 281.25C294.56 290.73 306 293.07 311.75 299.28C310.59 299.87 302.89 299.35 302 298.59ZM352.88 296.18C355.5 295.17 356.44 298.97 353.96 299.7C352.11 300.26 351.16 296.84 352.88 296.18ZM383.25 298.41C384.92 302.22 380.66 305.1 377.13 303.75C379.17 301.97 381.21 300.19 383.25 298.41ZM257.25 298.56C259.37 300.29 261.49 302.02 263.61 303.75C259.57 304.73 256.35 303.01 257.25 298.56ZM328 309.67C329 310.17 330 310.68 331 311.18C330.85 311.7 330.71 312.23 330.56 312.75C334.58 319.38 341.74 322.87 343.25 331C344.36 331.29 344.41 331.2 344.64 332.45C339.9 342.82 324.04 341.1 316.57 335.2C313.54 332.81 308.21 327.27 310.25 323.35C313.31 326.69 319.82 332.61 324.56 328.31C326.28 326.75 325.53 324.44 326.75 322.77C327.75 324.36 328.75 325.96 329.75 327.55C331.93 320.07 326.2 316.13 319.25 315.44C314.59 314.98 309.9 316.23 305.25 315.65C297.7 314.7 291.65 308.6 289.63 301.5C290.17 301.1 290.71 300.71 291.25 300.31C293.66 302.48 292.19 301.93 293.1 303.75C293.73 303.58 294.35 303.42 294.98 303.25C295.27 303.81 295.43 304.99 295.85 305.35C298.44 307.65 304.72 309.21 308.11 308.75C307.49 307.91 306.87 307.07 306.25 306.23C313.5 307.37 320.75 308.52 328 309.67ZM268.15 319.5C269.02 320.79 269.88 322.08 270.75 323.37C271.08 322.29 271.42 321.21 271.75 320.13C271.92 321.42 272.08 322.71 272.25 324C272.45 324 272.65 324.01 272.86 324.01C273.09 324.36 273.32 324.71 273.55 325.06C273.11 325.21 272.68 325.35 272.25 325.5C271.75 324.83 271.25 324.17 270.75 323.5C270.5 323.54 270.25 323.59 269.99 323.63C269.38 322.25 268.77 320.88 268.15 319.5ZM299.93 331.03C296.39 332.96 293.01 328.84 291.53 325.97C293.02 325.07 295.33 325.91 297.01 326.25C298.01 327.58 299 328.92 300 330.25C299.98 330.51 299.95 330.77 299.93 331.03Z" fill="#8b0000" fill-rule="evenodd" stroke="#8b0000" stroke-width="0.25" stroke-linejoin="round"/>
            <path d="M321.83 115.5C321.64 115.26 321.44 115.03 321.25 114.79C320.42 115.36 319.58 115.93 318.75 116.5C318.48 116.5 318.21 116.5 317.95 116.5C317.46 113.1 320.88 109.41 324.25 111.12C323.44 112.58 322.64 114.04 321.83 115.5ZM279.75 120.54C280.87 127.07 277.71 127.94 272.55 129.3C270.39 129.86 268.57 131.08 266.5 131.75C267.26 125.98 272.24 125.92 276.41 123.67C277.86 122.88 278.35 121.28 279.75 120.54ZM373.61 131.75C372.26 131.57 371.06 130.45 369.72 130.04C363.23 128.06 360.82 128.64 361 120.75C362.52 121.1 362.96 122.98 364.42 123.78C367.95 125.71 373.86 126.44 373.61 131.75ZM320.25 126C324.98 126.87 330.31 134.45 323.25 135.04C323.08 133.72 323.55 132.39 323.23 131.06C322.74 128.99 321.01 127.83 320.25 126ZM318.95 135C318.72 135 318.48 135 318.25 135C317.76 136.1 317.33 135.96 316.08 136.5C316.06 134.3 317.17 132.1 319.51 132.25C319.33 133.17 319.14 134.08 318.95 135ZM272.25 136.5C274.67 133.34 280.24 132.66 279.11 138C278.06 142.99 272.67 140.26 272.25 136.5ZM367.75 138C367 138.92 366.25 139.83 365.5 140.75C362.85 140.72 359.16 138.76 361.23 135.46C363.64 131.64 367.32 134.79 367.75 138ZM388.75 145.46C385.12 143.22 381.48 140.99 377.85 138.75C379.12 138.2 388.29 138.64 389.84 139.41C393.19 141.08 391.59 144.6 388.75 145.46ZM258.41 138.99C258.35 139.16 258.3 139.33 258.25 139.5C257.75 139.5 257.25 139.5 256.75 139.5C256.41 139.75 256.06 140 255.72 140.25C256.36 140.42 257 140.58 257.65 140.75C257.77 141.1 257.88 141.46 258 141.81C254.64 142.36 253.29 144.77 250.25 145.72C247.81 144.69 246.59 141.28 249.55 139.79C252.13 138.49 255.62 139.26 258.41 138.99ZM230.25 144.5C229.37 147.36 224.42 149.82 221.59 150.25C222.06 146.89 227.02 143.66 230.25 144.5ZM239.75 144C238.85 146.76 235.78 148.7 235.57 151.77C235.47 153.3 236.53 154.44 236.59 155.75C232.82 156.75 230.43 153.26 232.1 149.83C233.3 147.35 237.17 144.64 239.75 144ZM400.25 144.19C406.92 144.28 412.78 157.25 403.52 155.75C405.08 147.52 401.86 149.99 400.25 144.19ZM418.75 150.5C415.98 149.07 410.17 147.59 409.65 144.25C413.41 144.11 418.25 146.41 418.75 150.5ZM381.14 147.94C380.39 148.83 380.46 148.33 381.23 149.25C387.36 153.06 387.27 151.57 391.73 157.75C392.43 157.92 393.13 158.08 393.83 158.25C394.05 155.59 392.36 153.95 391.34 151.7C399.62 153.3 402.44 159.66 403 167.5C402.01 166.02 402.73 166.72 401.21 166.75C399.88 163.83 397.53 162.39 394.75 161.01C393.29 161.68 392.36 162.26 392.22 163.89C390.64 162.62 389.07 161.35 387.5 160.08C387.5 159.8 387.5 159.53 387.5 159.25C387.78 158.58 388.06 157.92 388.33 157.25C388.18 156.58 388.03 155.92 387.87 155.25C387.24 154.92 386.61 154.59 385.97 154.25C383.06 152.02 375.9 148.88 376.25 144.56C377.88 145.68 379.51 146.81 381.14 147.94ZM302.05 147.5C302.39 148.21 302.73 148.92 303.07 149.63C302.73 150.01 302.39 150.38 302.06 150.75C302.95 156.21 306.73 162.83 309.9 167.34C310.84 168.68 313.91 171.42 312.91 172.96C306.7 168.31 298.7 153.34 298.75 145.67C300.01 146.27 300.88 148.08 302.05 147.5ZM261.08 148.79C259.37 150.12 257.65 151.45 255.93 152.78C253.29 153.41 249.6 157.89 252.25 160.12C252.24 160.27 252.23 160.42 252.23 160.57C250.78 161.57 249.34 162.57 247.89 163.57C247.01 162.78 246.13 161.98 245.25 161.18C242.25 162.52 240.56 164.53 238.25 166.7C237.86 166.3 237.47 165.9 237.08 165.5C237.57 159.09 241.55 152.65 248.5 152.05C246.85 154.32 245.24 156.07 245.75 159.05C248.12 158.28 248.42 156.04 250 154.27C251.37 152.75 259.37 148.6 261.08 148.79ZM308.5 157.05C311.07 158.02 312.54 165.14 316.08 166.92C316.3 166.94 316.53 166.97 316.75 167C316.89 167.42 317.03 167.85 317.17 168.27C313.68 168.13 308.84 160.29 308.5 157.05ZM300.75 160.09C301.33 161.54 301.61 162.23 300.75 163.58C300.08 163.61 299.42 163.63 298.75 163.66C298.18 162.47 297.6 161.28 297.03 160.09C298.27 160.09 299.51 160.09 300.75 160.09ZM260.63 161.48C258.87 164.54 254.48 166.29 251.61 168.36C246.5 172.07 240.83 177.23 237.21 182.43C233 188.47 228.14 195.76 227.11 203.27C226.65 206.64 228.31 210.52 227.71 213.47C227.45 213.51 227.2 213.54 226.95 213.58C224.54 211.59 223.7 206.06 222.95 203.01C222.88 202.25 222.82 201.49 222.75 200.73C219.54 203.38 216.78 208.12 215.26 211.99C214.47 214.01 213.83 218.1 212.25 219.24C210.68 215.52 210.8 211.47 211.05 207.5C212.74 205.99 213.71 202.51 215.16 200.4C218.06 196.19 223.64 192.91 224.91 187.72C225.65 184.73 224.13 182.48 224 179.7C226.88 179.39 229.76 179.07 232.63 178.75C232.34 179.99 232.04 181.22 231.75 182.46C234.37 180.87 236.28 178.34 238.49 176.24C244.47 170.56 252.57 163.67 260.63 161.48ZM382.5 163.06C392.82 166.36 400.33 176.92 408.75 183.13C408.41 181.5 408.07 179.88 407.72 178.25C410.48 178.69 413.24 179.14 416 179.58C416.12 182.38 414.15 184.62 415.04 187.73C416.47 192.7 422.06 196.16 424.9 200.36C426.33 202.47 427.18 205.99 428.91 207.5C429.04 211.48 429.49 215.53 427.75 219.2C426.14 218.08 425.69 213.91 424.84 211.88C423.19 207.96 420.58 203.18 417.25 200.58C417.3 201.37 417.34 202.17 417.39 202.96C416.29 205.57 416.54 210.42 414 212.05C413.66 212.05 413.31 212.04 412.96 212.03C412.7 208.14 413.65 204.5 412.73 200.5C410.61 191.2 403.39 182.51 397.1 175.64C394.07 172.34 390.05 169.43 386.48 166.78C385.01 165.7 382.9 164.91 382.5 163.06ZM421.94 168.03C424.31 169.95 425.23 173.67 424.57 176.58C424.3 176.36 424.02 176.13 423.75 175.9C422.75 176.27 421.75 176.63 420.75 177C420.5 176.85 420.24 176.7 419.99 176.55C420.64 173.71 421.29 170.87 421.94 168.03ZM217.96 168.45C218.08 171.73 218.88 174.1 220.37 177C220.16 177.13 219.96 177.25 219.75 177.38C218.23 176.76 217.28 175.89 215.75 176.5C215.56 176.33 215.37 176.17 215.18 176C215.09 173.22 215.91 170.38 217.96 168.45ZM256.1 180.02C255.89 181.87 254.77 183.23 254.28 185.03C253.73 187.04 253.45 189.69 253.25 191.78C253.74 191.71 254.22 191.64 254.71 191.57C254.22 195.6 253.74 199.63 253.25 203.65C254.12 202.2 254.21 200.58 255.97 200C255.71 204.62 254.5 208.88 255.21 213.63C256.14 219.78 259.22 225.47 259.36 231.75C259.46 236.6 257.16 240.73 256.13 245.29C255.63 247.51 256.11 249.96 255.58 252.09C255.13 251.64 254.69 251.19 254.25 250.73C253.27 259.96 261.63 263.84 261.65 272.25C261.65 273.56 260.94 274.77 260.75 276.05C264.99 273.49 264.67 266.87 263.99 262.57C267.21 265.07 266.81 268.24 267.75 271.75C275.59 271.64 280.96 279.29 280.62 287C278.49 284.56 275.88 280.85 272.51 279.27C264.17 275.37 255.1 276.72 256.75 287.9C256.45 288.27 256.15 288.64 255.85 289.01C249.48 284.16 257.64 273.87 256.9 267.75C255.96 259.95 246.42 257.61 247 249.53C247.62 247.97 248.28 246.03 249.49 244.75C252.83 241.25 259.2 238.65 257.25 232.57C254.45 236.01 251.84 239.42 247.62 241.37C246.74 241.77 245.69 241.69 244.82 242.11C243.45 242.78 242.47 245.46 240.66 243.75C239.43 247.03 238.19 250.31 236.96 253.58C236.54 247.52 236.11 241.46 235.69 235.4C236.09 233.58 237.77 231.8 239.58 231.25C239.93 233.42 240.28 235.58 240.64 237.75C247.37 239.95 252.46 229.81 249.81 224.4C249.19 223.13 247.88 221.86 246.93 220.82C246 219.8 245.34 218.45 244.05 218C241.86 208.54 246.03 198.65 249.82 190.12C251.27 186.87 253.25 182.2 256.1 180.02ZM384.92 180.99C387.36 182.77 389.19 187.08 390.41 189.84C394.18 198.41 398.34 207.92 396.36 217.5C386.97 223.17 388.21 239.27 399.75 237.93C400.14 235.71 400.54 233.48 400.93 231.25C402.19 232.08 403.45 232.92 404.71 233.75C404.8 234.33 404.9 234.92 404.99 235.5C404.47 241.33 403.95 247.17 403.44 253C401.62 250.63 400.19 245.85 398.75 242.74C396.81 242.15 395.79 241.67 393.75 241.89C390.08 239.28 385.03 236.91 383.72 232.25C382.82 232.48 381.93 232.71 381.04 232.94C380.77 228.28 382.53 224.89 383.78 220.6C385.49 214.73 386.06 208.05 384.92 202C385.36 202.56 385.81 203.11 386.25 203.67C388.32 200.28 385.29 196.74 386.5 193.14C388.28 191.11 385.19 183.75 384.92 180.99ZM206.41 191.25C204.33 194.35 201.1 197.02 200.5 200.75C194.66 197.48 201.69 190.1 206.41 191.25ZM439.75 200.27C437.85 197.27 435.95 194.26 434.06 191.25C438.33 190.59 444.98 197.11 439.75 200.27ZM343.75 194.5C341.16 195.25 339.31 194.22 338.25 191.79C340.28 190.99 342.98 192.58 343.75 194.5ZM260.09 196C260.23 196.08 260.36 196.17 260.5 196.25C260.58 196.67 260.67 197.08 260.75 197.5C261.08 197.36 261.42 197.22 261.75 197.08C261.92 197.89 262.08 198.69 262.25 199.5C262.55 199 262.85 198.5 263.14 198C263.64 197.56 264.14 197.11 264.64 196.67C263.68 199.72 262.71 202.78 261.75 205.84C261.2 202.56 260.65 199.28 260.09 196ZM380.02 197.5C379.59 200.33 379.17 203.16 378.75 205.99C377.22 204.23 377.19 201.8 377.03 199.5C377.27 199.5 377.51 199.5 377.75 199.5C377.92 198.92 378.08 198.34 378.25 197.76C378.84 197.67 379.43 197.59 380.02 197.5ZM249.25 210.27C246.73 216.68 250.42 227.05 257.25 229.09C258.91 224.89 253.1 218.71 251.15 215.12C250.3 213.54 250.07 211.8 249.25 210.27ZM391.25 211.26C390.79 211.75 384.48 222.65 383.99 223.78C383.22 225.55 382.81 227.19 383.25 229.08C389.18 226.5 393.07 217.43 391.25 211.26ZM233.17 213.04C233.4 214.02 233.63 215 233.87 215.99C232.68 219.1 234.27 222.44 232.79 225.59C231.52 228.27 229.15 230.33 227.29 232.54C224.56 235.76 223.07 240.08 221.75 244C219.84 241.39 222.48 231.02 225.46 229.5C225.89 229.54 226.32 229.58 226.75 229.62C230.75 225.98 231.27 223.11 229.69 218C229.79 217.75 229.9 217.5 230 217.25C230.25 217.42 230.5 217.59 230.75 217.76C231.04 215.6 231.06 214.38 232.75 212.91C232.89 212.95 233.03 212.99 233.17 213.04ZM263.22 213.25C264.86 214.61 264.69 216.24 262.75 217.03C261.39 216.48 260.96 215.98 260.75 214.5C261.57 214.08 262.4 213.67 263.22 213.25ZM410.16 217.95C409.85 219.81 409.02 221.3 409.11 223.25C409.21 225.48 412.36 231.19 415.04 230C418.54 232.63 419.4 239.64 418.75 243.74C416.95 241.07 416.38 237.46 414.6 234.64C412.47 231.23 408.39 228.54 407.23 224.6C406.42 221.87 408.05 218.24 406.51 215.91C406.67 215.09 406.84 214.27 407.01 213.45C407.25 213.25 407.5 213.05 407.75 212.85C408.05 212.98 408.35 213.12 408.65 213.25C408.85 214.38 409.05 215.52 409.25 216.65C409.55 217.08 409.86 217.52 410.16 217.95ZM285.02 250.87C282.7 253.83 281.54 256.38 277.26 257.15C274.78 257.59 272.97 256.27 270.75 257.29C269.2 255.64 268.29 256.49 266.43 256.9C260 252.37 261.97 244.39 263.79 238.11C264.55 235.5 264.55 232.75 265.25 230.18C269.86 233.28 267.7 240.74 270.17 245.1C271.34 247.18 273.9 246.95 274.78 249.25C274.44 250.25 274.11 251.25 273.77 252.25C276.56 254.37 281.15 252.97 281.86 249.21C282.11 247.9 281.34 246.92 281.49 245.75C284 245.74 284.83 248.7 285.02 250.87ZM374.44 256.47C371.14 252.67 366.69 255.59 362.25 255.78C361.89 256.19 361.54 256.59 361.18 257C359.8 253.1 353.09 249.72 359.75 245.52C360.56 249.62 361.21 254.93 367.27 252.25C367 251.08 366.73 249.92 366.46 248.75C367.78 246.85 369.98 246.49 370.81 244.12C372.19 240.17 370.83 232.26 375.25 230.11C375.8 232.11 375.61 234.2 376.1 236.25C377.78 243.3 380.91 250.64 374.44 256.47ZM393.34 252.47C392.26 259.15 383.84 260.74 383.52 269.27C383.28 275.64 391.18 284.28 384.17 289.51C383.42 286.38 384.26 283.48 382.8 280.4C381.64 277.97 379.55 277.55 377.31 277.43C368.51 276.98 366.08 281.3 360.06 286C360 278.57 365.23 271.62 372.77 271.75C373.42 268.78 373.23 265.38 376.04 263.48C376.43 268.13 375.7 271.14 378.75 275C379.23 272.06 378.89 269.34 380.23 266.44C382.57 261.36 386.51 257.76 386.21 251.75C385.74 251.83 385.27 251.92 384.8 252C384.97 245.94 382.74 242.55 381.98 237C382.24 236.12 382.49 235.25 382.75 234.37C384.44 242.53 388.35 240.65 391.58 245.65C393.02 247.88 392.7 250.16 393.34 252.47ZM321.2 278.5C321.03 278.42 320.85 278.33 320.67 278.25C320.45 276.25 320.22 274.25 320 272.25C319.38 272 318.77 271.75 318.15 271.5C318.52 270.93 318.88 270.36 319.25 269.78C320.3 270.98 320.64 271.66 320.5 273.25C321.84 274.76 321.66 276.58 321.2 278.5ZM295.63 277.84C295.35 278.14 295.07 278.45 294.79 278.75C299.89 293.52 321.22 292.37 325.29 304.25C322.44 303.58 319.58 302.92 316.72 302.25C319.93 305.22 325.7 305.39 328 309.67C320.75 308.52 313.5 307.37 306.25 306.23C306.87 307.07 307.49 307.91 308.11 308.75C304.72 309.21 298.44 307.65 295.85 305.35C295.43 304.99 295.27 303.81 294.98 303.25C294.35 303.42 293.73 303.58 293.1 303.75C292.19 301.93 293.66 302.48 291.25 300.31C290.71 300.71 290.17 301.1 289.63 301.5C288.4 298.85 286.49 293.06 288.25 290.53C289.49 291.6 290.11 293.25 291.24 294.52C293.94 297.57 298.17 298.22 302 298.59C302.89 299.35 310.59 299.87 311.75 299.28C306 293.07 294.56 290.73 292.6 281.25C292.26 281.5 291.91 281.75 291.57 282C291.57 279.03 291.32 274.34 293.75 272.25C294.38 274.12 295 275.98 295.63 277.84ZM401.91 280C398.3 277.11 396.62 280.11 394.5 282.58C392.9 277.76 398.78 274.49 402.75 273.79C402.47 275.86 402.19 277.93 401.91 280ZM246.09 280.66C245.69 280.69 245.28 280.72 244.88 280.75C242.93 278.35 241.17 279.27 238.44 279.37C238.37 277.56 238.31 275.75 238.25 273.94C241.77 274.91 245.8 276.64 246.09 280.66ZM254.25 308.68C254.76 309.54 255.27 310.39 255.78 311.25C255.1 311.9 254.43 312.56 253.75 313.21C250.17 312.49 250.73 308.77 254.25 308.68ZM386.25 308.68C388.23 308.8 389.04 309.49 389.25 311.5C388.67 312.08 388.08 312.67 387.5 313.25C386.02 313.1 385.36 312.6 384.74 311.25C385.24 310.39 385.75 309.53 386.25 308.68ZM272.86 324.01C272.65 324.01 272.45 324 272.25 324C272.08 322.71 271.92 321.42 271.75 320.13C271.42 321.21 271.08 322.29 270.75 323.37C269.88 322.08 269.02 320.79 268.15 319.5C268.03 317.23 267.58 314.39 269.37 312.61C272.27 309.72 277.43 311.54 279.08 314.75C273.51 316.06 272.9 318.56 272.86 324.01ZM331 311.18C336.77 313.45 343.13 317.77 345.25 323.92C345.53 323.78 345.82 323.64 346.1 323.5C347.35 325.82 345.67 330.12 344.64 332.45C344.41 331.2 344.36 331.29 343.25 331C341.74 322.87 334.58 319.38 330.56 312.75C330.71 312.23 330.85 311.7 331 311.18ZM365.61 327.75C366.9 324.09 368.98 319.09 365.22 316.02C363.9 314.94 362.16 315.2 360.99 314.25C361.83 313.12 362.8 312.35 364.13 311.83C376.68 306.88 372.39 328.05 365.61 327.75ZM358.5 319.25C358.89 319.75 359.29 320.25 359.68 320.75C359.25 322.21 357.66 323.96 356.43 321.81C355.56 320.28 357.23 319.36 358.5 319.25ZM282.75 319.25C284.67 320.53 284.2 322.86 281.73 322.75C280.37 321.08 280.68 320.02 282.75 319.25ZM299.93 331.03C299.95 330.77 299.98 330.51 300 330.25C299 328.92 298.01 327.58 297.01 326.25C295.33 325.91 293.02 325.07 291.53 325.97C291.03 324.89 290.53 323.82 290.03 322.75C291.07 322.74 298.58 323.87 299.47 324.29C302.33 325.65 302.29 329.39 299.93 331.03ZM269.99 323.63C270.25 323.59 270.5 323.54 270.75 323.5C271.25 324.17 271.75 324.83 272.25 325.5C272.68 325.35 273.11 325.21 273.55 325.06C273.96 325.96 274.38 326.85 274.8 327.75C272.78 327.77 270.85 325.34 269.99 323.63Z" fill="#cc0000" fill-rule="evenodd" stroke="#cc0000" stroke-width="0.25" stroke-linejoin="round"/>
          </g>
        </g>

        <!-- 鈽?GEWU锛?px 鍍忕礌鏍奸噸缁?-->
        <g fill="#dfe3e8" opacity="0.95">
          <rect x="29" y="206" width="24" height="8"/><rect x="21" y="214" width="8" height="8"/><rect x="21" y="222" width="8" height="8"/><rect x="37" y="222" width="24" height="8"/><rect x="21" y="230" width="8" height="8"/><rect x="53" y="230" width="8" height="8"/><rect x="29" y="238" width="24" height="8"/>
          <rect x="69" y="206" width="32" height="8"/><rect x="69" y="214" width="8" height="8"/><rect x="69" y="222" width="24" height="8"/><rect x="69" y="230" width="8" height="8"/><rect x="69" y="238" width="32" height="8"/>
          <rect x="117" y="206" width="8" height="8"/><rect x="149" y="206" width="8" height="8"/><rect x="117" y="214" width="8" height="8"/><rect x="149" y="214" width="8" height="8"/><rect x="117" y="222" width="8" height="8"/><rect x="133" y="222" width="8" height="8"/><rect x="149" y="222" width="8" height="8"/><rect x="117" y="230" width="8" height="8"/><rect x="133" y="230" width="8" height="8"/><rect x="149" y="230" width="8" height="8"/><rect x="125" y="238" width="8" height="8"/><rect x="141" y="238" width="8" height="8"/>
          <rect x="165" y="206" width="8" height="8"/><rect x="197" y="206" width="8" height="8"/><rect x="165" y="214" width="8" height="8"/><rect x="197" y="214" width="8" height="8"/><rect x="165" y="222" width="8" height="8"/><rect x="197" y="222" width="8" height="8"/><rect x="165" y="230" width="8" height="8"/><rect x="197" y="230" width="8" height="8"/><rect x="173" y="238" width="24" height="8"/>
        </g>

        <!-- 鈽?鐢滅瓛璐寸焊锛?6脳20锛岄珮楗卞拰锛屼綆璋冨僵铔?-->
        <g>
          <rect x="12" y="268" width="12" height="4" fill="#ffd0dc"/>
          <rect x="13" y="269" width="3" height="2" fill="#fff0f4"/>
          <rect x="10" y="272" width="16" height="4" fill="#ff9ab8"/>
          <rect x="12" y="276" width="12" height="4" fill="#f06292"/>
          <rect x="14" y="280" width="8" height="4" fill="#e3517f"/>
          <rect x="16" y="284" width="4" height="4" fill="#d84672"/>
        </g>

        <!-- 璀︽姤鐏?/ 澶╃嚎 / 灏剧伅 -->
        <rect x="202" y="126" width="8" height="4" fill="#1a2028"/>
        <rect x="203" y="120" width="6" height="6" fill="#ff9d3c" class="beacon"/>
        <g class="antSway"><rect x="12" y="104" width="2" height="26" fill="#1f252d"/><rect x="11" y="100" width="4" height="4" fill="#39424e"/></g>
        <rect x="8" y="238" width="3" height="12" fill="#5c1a1a" class="tail"/>

        <!-- 椹鹃┒瀹ょ粏鑺?-->
        <polygon points="242,202 330,202 350,254 242,254" fill="#0e141c"/>
        <path d="M256 206 l10 0 l-14 42 l-10 0 z" fill="#223244" opacity="0.5"/>
        <path d="M282 206 l6 0 l-14 42 l-6 0 z" fill="#223244" opacity="0.3"/>
        <rect x="268" y="256" width="2" height="14" fill="#0a0d10"/>
        <rect x="322" y="256" width="9" height="3" fill="#1c222b"/>
        <!-- 杞﹂棬缂栧彿 07锛?px 绮掑害锛?-->
        <g fill="#5a6470" opacity="0.85">
          <rect x="281" y="250" width="12" height="4"/><rect x="277" y="254" width="4" height="12"/><rect x="293" y="254" width="4" height="12"/><rect x="281" y="266" width="12" height="4"/>
          <rect x="300" y="250" width="20" height="4"/><rect x="312" y="254" width="4" height="4"/><rect x="308" y="258" width="4" height="4"/><rect x="304" y="262" width="4" height="8"/>
        </g>
        <rect x="346" y="242" width="8" height="2" fill="#0d1014"/><rect x="352" y="236" width="7" height="10" fill="#0d1014"/><rect x="352" y="236" width="2" height="10" fill="#232a34"/>
        <!-- 鍓嶈劯鐏粍 -->
        <rect x="364" y="262" width="3" height="12" fill="#4a3a16"/>
        <rect x="352" y="250" width="24" height="38" fill="#58c8ff" opacity="0.06" class="ledGlow"/>
        <rect x="358" y="254" width="14" height="30" fill="#58c8ff" opacity="0.12" class="ledGlow"/>
        <g class="ledpx" fill="#58c8ff"><rect x="364" y="260" width="4" height="3"/><rect x="364" y="264" width="4" height="3"/><rect x="364" y="268" width="4" height="3"/><rect x="364" y="272" width="4" height="3"/><rect x="364" y="276" width="4" height="3"/></g>
        <rect x="336" y="256" width="32" height="2" fill="#1a2028"/>
        <rect x="368" y="300" width="8" height="2" fill="#232a34"/>
        <rect x="4" y="306" width="6" height="12" fill="#0c0f13"/>
        <rect x="20" y="314" width="344" height="4" fill="#080a0d"/>
        <!-- 杞嫳鎸栧垏浠?-->
        <path d="M246 318 V292 H262 V280 H278 V272 H314 V280 H330 V292 H346 V318 Z" fill="#05060a" stroke="#191f27" stroke-width="1"/>
        <path d="M14 318 V292 H30 V280 H46 V272 H82 V280 H98 V292 H114 V318 Z" fill="#05060a" stroke="#191f27" stroke-width="1"/>
        <!-- 浼犳劅鍣ㄩ樀鍒?-->
        <rect x="252" y="192" width="52" height="4" fill="#0a0d10"/>
        <g class="arrayMv">
          <rect x="262" y="180" width="4" height="12" fill="#141922"/><rect x="292" y="180" width="4" height="12" fill="#141922"/>
          <rect x="256" y="176" width="46" height="4" fill="#191f29"/>
          <rect x="260" y="172" width="10" height="4" fill="#232a36"/><rect x="286" y="172" width="12" height="4" fill="#232a36"/>
          <rect x="302" y="160" width="2" height="16" fill="#1f252d"/><rect x="301" y="156" width="4" height="4" fill="#d96a2a" class="tip"/>
        </g>
      </g>

      <g transform="translate(64,296)"><g class="wspin" shape-rendering="crispEdges"><use href="#wheelDef"/></g></g>
      <g transform="translate(296,296)"><g class="wspin" shape-rendering="crispEdges"><use href="#wheelDef"/></g></g>
    </g>
  </g>

  <!-- 鍏夋潫涓庡厜姹?-->
  <polygon points="262,432 958,372 958,480 262,452" fill="url(#beamG)" class="beamF"/>
  <ellipse cx="640" cy="478" rx="240" ry="13" fill="url(#poolG)" class="beamF"/>

  <!-- 浜や簰鍖? 杞﹁韩 鈫?杩滃厜鐏垎闂?-->
  <rect id="rideHit" x="110" y="420" width="260" height="80" fill="transparent" style="cursor:pointer"/>

  <!-- 杞竟婧呮按 -->
  <g fill="#8fa3b8">
    <use href="#splashD" x="212" y="468" class="splash" style="animation-delay:-0.1s"/>
    <use href="#splashD" x="236" y="470" class="splash" style="animation-delay:-0.3s"/>
    <use href="#splashD" x="96" y="468" class="splash" style="animation-delay:-0.45s"/>
  </g>

  <!-- ================= 闆?================= -->
  <g class="gustA" style="pointer-events:none"><g class="gustB">
    <g transform="skewX(-7)">
      <g class="fallFar" fill="#7f93a8" opacity="0.16"><use href="#clusterFar"/><use href="#clusterFar" y="-560"/></g>
      <g class="fallMid" fill="#93a7bc" opacity="0.26"><use href="#clusterMid"/><use href="#clusterMid" y="-560"/></g>
      <g class="fallNear" fill="#aebfd2" opacity="0.38"><use href="#clusterNear"/><use href="#clusterNear" y="-560"/></g>
      <g fill="#aebfd2" opacity="0.5">
        <g class="solo" style="animation-duration:1.32s;animation-delay:-0.2s"><use href="#dB" x="90" y="-30"/></g>
        <g class="solo" style="animation-duration:1.05s;animation-delay:-0.7s"><use href="#dA" x="170" y="-16"/></g>
        <g class="solo" style="animation-duration:1.62s;animation-delay:-1.1s"><use href="#dC" x="255" y="-40"/></g>
        <g class="solo" style="animation-duration:1.18s;animation-delay:-0.4s"><use href="#dB" x="340" y="-12"/></g>
        <g class="solo" style="animation-duration:0.98s;animation-delay:-0.15s"><use href="#dA" x="430" y="-28"/></g>
        <g class="solo" style="animation-duration:1.71s;animation-delay:-0.9s"><use href="#dC" x="515" y="-44" fill="#cfeaff"/></g>
        <g class="solo" style="animation-duration:1.26s;animation-delay:-0.55s"><use href="#dB" x="590" y="-18"/></g>
        <g class="solo" style="animation-duration:1.08s;animation-delay:-0.3s"><use href="#dA" x="660" y="-34"/></g>
        <g class="solo" style="animation-duration:1.55s;animation-delay:-1.3s"><use href="#dC" x="720" y="-10" fill="#cfeaff"/></g>
        <g class="solo" style="animation-duration:1.22s;animation-delay:-0.8s"><use href="#dB" x="790" y="-26"/></g>
        <g class="solo" style="animation-duration:1.02s;animation-delay:-0.5s"><use href="#dA" x="860" y="-42"/></g>
        <g class="solo" style="animation-duration:1.66s;animation-delay:-0.05s"><use href="#dC" x="925" y="-14"/></g>
        <g class="solo" style="animation-duration:1.3s;animation-delay:-1.0s"><use href="#dB" x="990" y="-30"/></g>
        <g class="solo" style="animation-duration:1.12s;animation-delay:-0.65s"><use href="#dA" x="1040" y="-20"/></g>
        <g class="solo" style="animation-duration:1.48s;animation-delay:-0.95s"><use href="#dC" x="35" y="-22"/></g>
        <g class="solo" style="animation-duration:1.38s;animation-delay:-1.2s"><use href="#dB" x="480" y="-36"/></g>
      </g>
    </g>
  </g></g>

  <!-- ================= 鍚庢湡 ================= -->
  <rect width="960" height="540" fill="#101c2e" class="expo" style="pointer-events:none"/>
  <rect width="960" height="540" fill="url(#vigG)" style="pointer-events:none"/>
  <rect width="960" height="540" filter="url(#grainF)" opacity="0.45" style="pointer-events:none"/>
  <g id="skyFlashTopGroup" opacity="0" style="pointer-events:none">
    <rect width="960" height="540" fill="rgba(220,230,255,0.2)"/>
    <g stroke="rgba(200,220,255,0.5)" stroke-width="1" stroke-linecap="round" fill="none" class="lightning-trace">
      <line x1="380" y1="0" x2="420" y2="160"/>
      <line x1="560" y1="0" x2="530" y2="140"/>
    </g>
  </g>
  <rect width="960" height="26" fill="#000"/><rect y="514" width="960" height="26" fill="#000"/>
  <circle cx="20" cy="13" r="3" fill="#c8383c" class="rec"/>
  <text x="30" y="17" font-size="9" letter-spacing="2" fill="#8a93a5">REC</text>
  <text x="944" y="17" text-anchor="end" font-size="9" letter-spacing="2" fill="#5a6470">NIGHT RAIN 路 23:47 路 SECTOR C-4</text>
</svg>

`;

/* 自挂载 + 三交互绑定 */
(function(){
  var v = document.getElementById('roadViewport');
  if(!v || !window.CAR_SVG) return;
  v.innerHTML = window.CAR_SVG;
  var svg = v.querySelector('svg');
  if(!svg) return;
  var NS = 'http://www.w3.org/2000/svg';
  var skyHit = svg.querySelector('#skyHit');
  var skyFlashGroup = svg.querySelector('#skyFlashGroup');
  var skyFlashTopGroup = svg.querySelector('#skyFlashTopGroup');
  if(skyHit && skyFlashGroup){
    skyHit.addEventListener('click',function(e){
      e.stopPropagation();
      skyFlashGroup.classList.remove('sky-flash-anim');
      skyFlashTopGroup.classList.remove('sky-flash-anim');
      void skyFlashGroup.offsetWidth;
      skyFlashGroup.classList.add('sky-flash-anim');
      skyFlashTopGroup.classList.add('sky-flash-anim');
      setTimeout(function(){
        skyFlashGroup.classList.remove('sky-flash-anim');
        skyFlashTopGroup.classList.remove('sky-flash-anim');
      },550);
    });
  }
  var roadHit = svg.querySelector('#roadHit');
  var rippleLayer = svg.querySelector('#rippleLayer');
  if(roadHit && rippleLayer){
    roadHit.addEventListener('click',function(e){
      e.stopPropagation();
      var pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;
      var svgP=pt.matrixTransform(svg.getScreenCTM().inverse());
      [{cls:'ripple-click-w',rx:14,ry:3.5},{cls:'ripple-click-m',rx:10,ry:2.5},{cls:'ripple-click-i',rx:7,ry:1.8}].forEach(function(r){
        var c=document.createElementNS(NS,'ellipse');
        c.setAttribute('cx',svgP.x);c.setAttribute('cy',svgP.y);
        c.setAttribute('rx',r.rx);c.setAttribute('ry',r.ry);
        c.setAttribute('fill','none');c.setAttribute('stroke','#7f93a8');
        c.setAttribute('stroke-width','2');c.setAttribute('class',r.cls);
        rippleLayer.appendChild(c);
        setTimeout(function(){c.remove();},1100);
      });
    });
  }
  var rideHit=svg.querySelector('#rideHit');
  var beams=svg.querySelectorAll('.beamF');
  var beacon=svg.querySelector('.beacon');
  if(rideHit){
    rideHit.addEventListener('click',function(e){
      e.stopPropagation();
      beams.forEach(function(b){
        var base=getComputedStyle(b).opacity;
        b.style.setProperty('--beam-base',base);
        b.classList.remove('beam-flash-anim');
        void b.offsetWidth;
        b.classList.add('beam-flash-anim');
        setTimeout(function(){b.classList.remove('beam-flash-anim');},600);
      });
      if(beacon){
        var orig=beacon.style.animation;
        beacon.style.animation='none';
        beacon.offsetHeight;
        beacon.style.animation='beaconFlash .15s steps(1) 6';
        setTimeout(function(){beacon.style.animation=orig||'';},950);
      }
    });
  }
})();