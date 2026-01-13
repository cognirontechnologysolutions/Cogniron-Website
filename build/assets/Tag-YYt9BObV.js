import{u as b,j as a}from"./index-CBkQUGjH.js";function v({children:l,icon:g,size:s="md",variant:c="default",state:n="default",className:p="",onClick:d}){const{theme:r}=b(),m={sm:{wrapper:"text-xs",padding:"px-3 py-1",iconSize:"w-3 h-3",gap:"gap-1.5"},md:{wrapper:"text-sm",padding:"px-4 py-2",iconSize:"w-4 h-4",gap:"gap-2"},lg:{wrapper:"text-base",padding:"px-5 py-2.5",iconSize:"w-5 h-5",gap:"gap-2.5"}},o=(()=>{const e=r==="dark";switch(c){case"primary":return{text:e?"#FFFFFF":"#0054A6",fill:e?"rgba(37, 99, 235, 0.15)":"rgba(37, 99, 235, 0.08)"};case"secondary":return{text:e?"#06B6D4":"#0EA5E9",fill:e?"rgba(6, 182, 212, 0.15)":"rgba(6, 182, 212, 0.08)"};case"accent":return{text:e?"#A855F7":"#7C3AED",fill:e?"rgba(168, 85, 247, 0.15)":"rgba(168, 85, 247, 0.08)"};default:return{text:e?"#FFFFFF":"#1E40AF",fill:e?"rgba(15, 23, 42, 0.95)":"rgba(255, 255, 255, 0.95)"}}})(),t=m[s],x=()=>n==="disabled"?.5:1,i=d&&n!=="disabled";return a.jsxs("div",{className:`tag-moving-border inline-flex ${p}`,style:{position:"relative",padding:"2px",borderRadius:"9999px",background:r==="dark"?"conic-gradient(from var(--tag-angle), #00A8B7 0%, #00C2C7 25%, #DDEBFA 50%, #00A8B7 75%, #00A8B7 100%)":"conic-gradient(from var(--tag-angle), #0054A6 0%, #00A8B7 25%, #00C2C7 50%, #0054A6 75%, #0054A6 100%)",animation:"tagBorderRotate 4s linear infinite",opacity:x(),cursor:i?"pointer":"default",transition:"all 0.3s ease"},onClick:i?d:void 0,role:i?"button":void 0,tabIndex:i?0:void 0,children:[a.jsxs("div",{className:`relative inline-flex items-center ${t.gap} ${t.padding} rounded-full ${t.wrapper}`,style:{backgroundColor:o.fill,backdropFilter:"blur(8px)",color:o.text},children:[g&&a.jsx(g,{className:t.iconSize,style:{color:o.text}}),a.jsx("span",{children:l})]}),a.jsx("style",{children:`
        @property --tag-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes tagBorderRotate {
          0% {
            --tag-angle: 0deg;
          }
          100% {
            --tag-angle: 360deg;
          }
        }

        .tag-moving-border {
          --tag-angle: 0deg;
        }

        .tag-moving-border:hover {
          filter: drop-shadow(0 0 8px ${r==="dark"?"rgba(0, 194, 199, 0.4)":"rgba(0, 84, 166, 0.3)"});
        }

        .tag-moving-border:active {
          transform: scale(0.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .tag-moving-border {
            animation: none !important;
          }
          
          .tag-moving-border {
            background: ${r==="dark"?"linear-gradient(90deg, #00A8B7, #00C2C7, #DDEBFA)":"linear-gradient(90deg, #0054A6, #00A8B7, #00C2C7)"} !important;
          }
        }
      `})]})}export{v as T};
