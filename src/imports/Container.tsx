import svgPaths from "./svg-4avy2rd19m";

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[185.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[185.063px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[93.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">GRETAHAI HERO SECTION</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="bg-[#364153] h-[16px] rounded-[4px] shrink-0 w-[297.75px]" data-name="Container" />;
}

function Container1() {
  return <div className="bg-[#d1d5dc] h-[12px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#d1d5dc] h-[12px] rounded-[4px] shrink-0 w-[330.823px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[397px]">
      <Container />
      {[...Array(5).keys()].map((_, i) => (
        <Container1 key={i} />
      ))}
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[4px] shrink-0 w-[109.74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[16px] py-[8px] relative w-[109.74px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Request Demo</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-[103.271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[18px] py-[10px] relative w-[103.271px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Watch Video</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-0 top-[163px] w-[397px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-full relative shrink-0 w-[397px]" data-name="Container">
      <Frame />
      <Container5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[37.72px] size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p115c1800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[56px] w-[123.448px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center text-nowrap whitespace-pre">Service Overview Video</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[72px] relative shrink-0 w-[123.448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[123.448px]">
        <Icon />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-gray-200 box-border content-stretch flex h-full items-center justify-center pl-[2px] pr-[2.01px] py-[2px] relative rounded-[4px] shrink-0 w-[397px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container8 />
    </div>
  );
}

function GretahAi() {
  return (
    <div className="h-[288px] relative shrink-0 w-[890px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-wrap gap-[32px] h-[288px] items-start px-[32px] py-0 relative w-[890px]">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[363px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text />
      <GretahAi />
    </div>
  );
}

function WireframeBox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[367px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#364153] h-[20px] left-[367px] rounded-[4px] top-0 w-[192px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[#d1d5dc] h-[12px] left-[271px] rounded-[4px] top-[28px] w-[384px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.74px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[33.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Feature 1</p>
      </div>
    </div>
  );
}

function GretahAi1() {
  return (
    <div className="bg-[#d1d5dc] relative rounded-[2.23696e+07px] shrink-0 size-[64px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function GretahAi2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[202.5px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start px-[16px] py-0 relative w-[202.5px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center text-nowrap whitespace-pre">Feature description and benefits</p>
      </div>
    </div>
  );
}

function WireframeBox1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[192px] items-center justify-center left-0 p-[2px] rounded-[4px] top-0 w-[292.667px]" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text1 />
      <GretahAi1 />
      <GretahAi2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.74px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[33.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Feature 2</p>
      </div>
    </div>
  );
}

function GretahAi3() {
  return (
    <div className="bg-[#d1d5dc] relative rounded-[2.23696e+07px] shrink-0 size-[64px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function GretahAi4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[202.5px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start px-[16px] py-0 relative w-[202.5px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center text-nowrap whitespace-pre">Feature description and benefits</p>
      </div>
    </div>
  );
}

function WireframeBox2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[192px] items-center justify-center left-[316.67px] p-[2px] rounded-[4px] top-0 w-[292.667px]" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text2 />
      <GretahAi3 />
      <GretahAi4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.74px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[33.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Feature 3</p>
      </div>
    </div>
  );
}

function GretahAi5() {
  return (
    <div className="bg-[#d1d5dc] relative rounded-[2.23696e+07px] shrink-0 size-[64px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[64px]" />
    </div>
  );
}

function GretahAi6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[202.5px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start px-[16px] py-0 relative w-[202.5px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center text-nowrap whitespace-pre">Feature description and benefits</p>
      </div>
    </div>
  );
}

function WireframeBox3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[192px] items-center justify-center left-[633.33px] p-[2px] rounded-[4px] top-0 w-[292.667px]" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text3 />
      <GretahAi5 />
      <GretahAi6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <WireframeBox1 />
      <WireframeBox2 />
      <WireframeBox3 />
    </div>
  );
}

function GretahAi7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[256px] items-start relative shrink-0 w-full" data-name="GretahAI">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[173.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[173.292px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[87px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">HOW GRETAHAI WORKS</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex items-center justify-center left-[62.07px] rounded-[2.23696e+07px] size-[48px] top-[16px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[72px] w-[140.146px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-neutral-950">Step 1</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-gray-100 h-[104px] left-[31.99px] rounded-[4px] top-0 w-[172.146px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24px] left-[220.14px] top-[40px] w-[13.813px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">→</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex items-center justify-center left-[62.07px] rounded-[2.23696e+07px] size-[48px] top-[16px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[72px] w-[140.146px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-neutral-950">Step 2</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-gray-100 h-[104px] left-[249.95px] rounded-[4px] top-0 w-[172.146px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[24px] left-[438.09px] top-[40px] w-[13.813px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">→</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex items-center justify-center left-[62.07px] rounded-[2.23696e+07px] size-[48px] top-[16px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[72px] w-[140.146px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-neutral-950">Step 3</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-gray-100 h-[104px] left-[467.91px] rounded-[4px] top-0 w-[172.146px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-[656.05px] top-[40px] w-[13.813px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">→</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#51a2ff] content-stretch flex items-center justify-center left-[62.07px] rounded-[2.23696e+07px] size-[48px] top-[16px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[72px] w-[140.146px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-neutral-950">Step 4</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-gray-100 h-[104px] left-[685.86px] rounded-[4px] top-0 w-[172.146px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function GretahAi8() {
  return (
    <div className="h-[104px] relative shrink-0 w-[890px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[104px] relative w-[890px]">
        <Container17 />
        <Container18 />
        <Container21 />
        <Container22 />
        <Container25 />
        <Container26 />
        <Container29 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[256px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text4 />
      <GretahAi8 />
    </div>
  );
}

function WireframeBox4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container30 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#364153] h-[20px] left-[335px] rounded-[4px] top-0 w-[256px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[122.125px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[61px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Financial Services</p>
      </div>
    </div>
  );
}

function WireframeBox5() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-center justify-center p-[2px] place-self-stretch relative rounded-[4px] shrink-0" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[75.688px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Healthcare</p>
      </div>
    </div>
  );
}

function WireframeBox6() {
  return (
    <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col items-center justify-center p-[2px] place-self-stretch relative rounded-[4px] shrink-0" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[88.51px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[88.51px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[44.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">E-commerce</p>
      </div>
    </div>
  );
}

function WireframeBox7() {
  return (
    <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col items-center justify-center p-[2px] place-self-stretch relative rounded-[4px] shrink-0" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80.479px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[80.479px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[40.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Technology</p>
      </div>
    </div>
  );
}

function WireframeBox8() {
  return (
    <div className="[grid-area:1_/_4] bg-white box-border content-stretch flex flex-col items-center justify-center p-[2px] place-self-stretch relative rounded-[4px] shrink-0" data-name="WireframeBox">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[128px] left-0 top-[44px] w-[926px]" data-name="Container">
      <WireframeBox5 />
      <WireframeBox6 />
      <WireframeBox7 />
      <WireframeBox8 />
    </div>
  );
}

function GretahAi9() {
  return (
    <div className="h-[187px] relative shrink-0 w-full" data-name="GretahAI">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[195.99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[195.99px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[98.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`PLATFORM BENEFITS & ROI`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[24px] text-center">60%</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Faster Testing</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[24px] text-center">40%</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Cost Reduction</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[24px] text-center">99.9%</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Accuracy</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[24px] text-center">24/7</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Automated</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function GretahAi10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[890px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[48px] px-[32px] py-0 relative w-[890px]">
        <Container35 />
        <Container38 />
        <Container41 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[192px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text9 />
      <GretahAi10 />
    </div>
  );
}

function WireframeBox9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container45 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[237.51px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[237.51px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[119px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`INTEGRATIONS & COMPATIBILITY`}</p>
      </div>
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container47() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-[92px] rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-[184px] rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container49() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-[276px] rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-[368px] rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container51() {
  return <div className="absolute bg-gray-200 border-[#d1d5dc] border-[0.667px] border-solid h-[48px] left-[460px] rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function GretahAi11() {
  return (
    <div className="h-[48px] relative shrink-0 w-[540px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[540px]">
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[160px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text10 />
      <GretahAi11 />
    </div>
  );
}

function WireframeBox10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container52 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[269.385px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[269.385px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[135px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">CUSTOMER SUCCESS WITH GRETAHAI</p>
      </div>
    </div>
  );
}

function Container53() {
  return <div className="absolute bg-[#364153] h-[12px] left-[18px] rounded-[4px] top-[18px] w-[128px]" data-name="Container" />;
}

function Container54() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[38px] w-[365px]" data-name="Container" />;
}

function Container55() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[50px] w-[365px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[62px] w-[273.75px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">Before</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e7000b] text-[12px] text-nowrap whitespace-pre">Metric</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[32px] relative shrink-0 w-[34.396px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[34.396px]">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px]">After</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">Metric</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[32px] relative shrink-0 w-[33.74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[33.74px]">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[32px] items-start left-[18px] top-[82px] w-[365px]" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return <div className="absolute bg-[#364153] h-[12px] left-[18px] rounded-[4px] top-[18px] w-[128px]" data-name="Container" />;
}

function Container66() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[38px] w-[365px]" data-name="Container" />;
}

function Container67() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[50px] w-[365px]" data-name="Container" />;
}

function Container68() {
  return <div className="absolute bg-gray-200 h-[8px] left-[18px] rounded-[4px] top-[62px] w-[273.75px]" data-name="Container" />;
}

function Container69() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">Before</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#e7000b] text-[12px] text-nowrap whitespace-pre">Metric</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[32px] relative shrink-0 w-[34.396px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[34.396px]">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[12px]">After</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">Metric</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[32px] relative shrink-0 w-[33.74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[33.74px]">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[32px] items-start left-[18px] top-[82px] w-[365px]" data-name="Container">
      <Container71 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container75 />
    </div>
  );
}

function GretahAi12() {
  return (
    <div className="h-[132px] relative shrink-0 w-[890px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[132px] px-[32px] py-0 relative w-[890px]">
        <Container64 />
        <Container76 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[224px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text11 />
      <GretahAi12 />
    </div>
  );
}

function WireframeBox11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container77 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[257.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[257.313px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[129.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">FINAL CTA: Schedule Platform Demo</p>
      </div>
    </div>
  );
}

function GretahAi13() {
  return (
    <div className="bg-[#155dfc] h-[40px] relative rounded-[4px] shrink-0 w-[180.625px]" data-name="GretahAI">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-start px-[32px] py-[12px] relative w-[180.625px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Schedule a Live Demo</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[160px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text12 />
      <GretahAi13 />
    </div>
  );
}

function WireframeBox12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container78 />
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container80() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container81() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container82() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container83() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container85() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container86() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container87() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container88() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container90() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container91() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container92() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container93() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <Container89 />
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[96px]" data-name="Container" />;
}

function Container95() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container96() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container97() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[76px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container88 />
      <Container93 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[32.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[437.11px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[15.67px] translate-x-[-50%] whitespace-pre">Footer: Links, Social Media, Legal, Contact Info</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex flex-col gap-[16px] h-[176.667px] items-start pb-[2px] pt-[26px] px-[26px] relative rounded-[4px] shrink-0 w-[926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container98 />
      <Container99 />
    </div>
  );
}

export default function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Container">
      <WireframeBox />
      <GretahAi7 />
      <WireframeBox4 />
      <GretahAi9 />
      <WireframeBox9 />
      <WireframeBox10 />
      <WireframeBox11 />
      <WireframeBox12 />
      <Container100 />
    </div>
  );
}