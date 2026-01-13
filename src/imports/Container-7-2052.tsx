import svgPaths from "./svg-6xk4ucfvdv";

function Text() {
  return (
    <div className="bg-blue-100 h-[24px] relative rounded-[4px] shrink-0 w-[128.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[128.031px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">Quality Engineering</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-green-100 h-[24px] relative rounded-[4px] shrink-0 w-[86.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[86.875px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap whitespace-pre">Automation</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-start left-0 top-0 w-[447px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#1e2939] h-[24px] left-0 rounded-[4px] top-[36px] w-[335.25px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-0 w-[447px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[20px] w-[447px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[40px] w-[372.49px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[52px] left-0 top-[72px] w-[447px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[44px] relative rounded-[4px] shrink-0 w-[166.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[166.323px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[83.5px] not-italic text-[12px] text-center text-nowrap text-white top-[13px] translate-x-[-50%] whitespace-pre">Schedule Consultation</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-start left-0 top-[140px] w-[447px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container />
      <Container1 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] bg-gray-200 place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pl-[2px] pr-[2.01px] py-[2px] size-full" />
      </div>
    </div>
  );
}

function ServiceDetail() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[256px] relative shrink-0 w-full" data-name="ServiceDetail">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#364153] h-[20px] left-[367px] rounded-[4px] top-0 w-[192px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#d1d5dc] h-[12px] left-[271px] rounded-[4px] top-[28px] w-[384px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p390c3680} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3c16f780} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#bedbff] content-stretch flex items-center justify-center left-[20px] rounded-[2.23696e+07px] size-[56px] top-[20px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#364153] h-[16px] left-[20px] rounded-[4px] top-[88px] w-[128px]" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[248.667px]" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[248.667px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[24px] w-[207.219px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[112px] w-[248.667px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border-2 border-[#99a1af] border-solid h-[168px] left-0 rounded-[4px] top-0 w-[292.667px]" data-name="Container">
      <Container12 />
      <Container13 />
      <Container17 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p390c3680} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3c16f780} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#b9f8cf] content-stretch flex items-center justify-center left-[20px] rounded-[2.23696e+07px] size-[56px] top-[20px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#364153] h-[16px] left-[20px] rounded-[4px] top-[88px] w-[128px]" data-name="Container" />;
}

function Container21() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[248.667px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[248.667px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[24px] w-[207.219px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[112px] w-[248.667px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white border-2 border-[#99a1af] border-solid h-[168px] left-[316.67px] rounded-[4px] top-0 w-[292.667px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container24 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p390c3680} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3c16f780} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#e9d4ff] content-stretch flex items-center justify-center left-[20px] rounded-[2.23696e+07px] size-[56px] top-[20px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#364153] h-[16px] left-[20px] rounded-[4px] top-[88px] w-[128px]" data-name="Container" />;
}

function Container28() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[248.667px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[248.667px]" data-name="Container" />;
}

function Container30() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[24px] w-[207.219px]" data-name="Container" />;
}

function Container31() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[112px] w-[248.667px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white border-2 border-[#99a1af] border-solid h-[168px] left-[633.33px] rounded-[4px] top-0 w-[292.667px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container25 />
      <Container32 />
    </div>
  );
}

function ServiceDetail1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[232px] items-start relative shrink-0 w-full" data-name="ServiceDetail">
      <Container11 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[#364153] h-[20px] left-0 rounded-[4px] top-0 w-[256px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_7_2064)" id="Icon">
          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_7_2064">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#155dfc] relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-[#364153] h-[12px] left-0 rounded-[4px] top-0 w-[192px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[403px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[322.396px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[403px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <Container36 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container41 key={i} />
      ))}
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_7_2064)" id="Icon">
          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_7_2064">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#155dfc] relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-[#364153] h-[12px] left-0 rounded-[4px] top-0 w-[192px]" data-name="Container" />;
}

function Container45() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[403px]" data-name="Container" />;
}

function Container46() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[322.396px]" data-name="Container" />;
}

function Container47() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[403px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <Container44 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container49 key={i} />
      ))}
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[152px] left-0 top-[36px] w-[926px]" data-name="Container">
      <Container42 />
      <Container50 />
    </div>
  );
}

function ServiceDetail2() {
  return (
    <div className="h-[188px] relative shrink-0 w-full" data-name="ServiceDetail">
      <Container34 />
      <Container51 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[346.06px] top-[18px] w-[233.865px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[117px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">OUR PROCESS / METHODOLOGY</p>
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[#d1d5dc] h-[2px] left-0 top-[32px] w-[826px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute bg-[#364153] h-[12px] left-[28.2px] rounded-[4px] top-[76px] w-[96px]" data-name="Container" />;
}

function Container54() {
  return <div className="bg-gray-200 h-[8px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[20px] items-start left-0 px-[8px] py-0 top-[96px] w-[152.396px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container54 key={i} />
      ))}
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[44.2px] rounded-[2.23696e+07px] size-[64px] top-0" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[116px] left-0 top-0 w-[152.396px]" data-name="Container">
      <Container53 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-[#364153] h-[12px] left-[28.2px] rounded-[4px] top-[76px] w-[96px]" data-name="Container" />;
}

function Container59() {
  return <div className="bg-gray-200 h-[8px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[20px] items-start left-0 px-[8px] py-0 top-[96px] w-[152.396px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container59 key={i} />
      ))}
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[44.2px] rounded-[2.23696e+07px] size-[64px] top-0" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[116px] left-[168.4px] top-0 w-[152.396px]" data-name="Container">
      <Container58 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-[#364153] h-[12px] left-[28.2px] rounded-[4px] top-[76px] w-[96px]" data-name="Container" />;
}

function Container64() {
  return <div className="bg-gray-200 h-[8px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[20px] items-start left-0 px-[8px] py-0 top-[96px] w-[152.406px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container64 key={i} />
      ))}
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[44.2px] rounded-[2.23696e+07px] size-[64px] top-0" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[116px] left-[336.79px] top-0 w-[152.406px]" data-name="Container">
      <Container63 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return <div className="absolute bg-[#364153] h-[12px] left-[28.2px] rounded-[4px] top-[76px] w-[96px]" data-name="Container" />;
}

function Container69() {
  return <div className="bg-gray-200 h-[8px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container70() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[20px] items-start left-0 px-[8px] py-0 top-[96px] w-[152.396px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container69 key={i} />
      ))}
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[44.2px] rounded-[2.23696e+07px] size-[64px] top-0" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[116px] left-[505.2px] top-0 w-[152.396px]" data-name="Container">
      <Container68 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-[#364153] h-[12px] left-[28.2px] rounded-[4px] top-[76px] w-[96px]" data-name="Container" />;
}

function Container74() {
  return <div className="bg-gray-200 h-[8px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[20px] items-start left-0 px-[8px] py-0 top-[96px] w-[152.406px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container74 key={i} />
      ))}
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[44.2px] rounded-[2.23696e+07px] size-[64px] top-0" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[116px] left-[673.59px] top-0 w-[152.406px]" data-name="Container">
      <Container73 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[116px] left-0 top-0 w-[826px]" data-name="Container">
      <Container57 />
      <Container62 />
      <Container67 />
      <Container72 />
      <Container77 />
    </div>
  );
}

function ServiceDetail3() {
  return (
    <div className="absolute h-[116px] left-[50px] top-[66px] w-[826px]" data-name="ServiceDetail">
      <Container52 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-white h-[216px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text2 />
      <ServiceDetail3 />
    </div>
  );
}

function WireframeBox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[216px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container79 />
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-[#364153] h-[20px] left-0 rounded-[4px] top-0 w-[224px]" data-name="Container" />;
}

function Container81() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Selenium</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-0 w-[125.667px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Cypress</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[149.67px] top-0 w-[125.667px]" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Playwright</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[299.33px] top-0 w-[125.667px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Jenkins</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[449px] top-0 w-[125.667px]" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Docker</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[598.67px] top-0 w-[125.667px]" data-name="Container">
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-gray-200 h-[64px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">Kubernetes</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[748.33px] top-0 w-[125.667px]" data-name="Container">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container86 />
      <Container89 />
      <Container92 />
      <Container95 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">+ More tools and frameworks based on project requirements</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[180px] items-start left-0 pb-[2px] pt-[26px] px-[26px] rounded-[4px] top-[36px] w-[926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container99 />
      <Container100 />
    </div>
  );
}

function ServiceDetail4() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="ServiceDetail">
      <Container80 />
      <Container101 />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[#364153] h-[20px] relative rounded-[4px] shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-[256px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[125.458px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[125.458px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center text-nowrap whitespace-pre">View All Case Studies →</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Button1 />
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-gray-200 content-stretch flex h-[128px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Client Logo / Image</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex h-[20px] items-start left-[16px] px-[8px] py-[2px] rounded-[4px] top-[16px] w-[107.594px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-nowrap whitespace-pre">Financial Services</p>
    </div>
  );
}

function Container105() {
  return <div className="absolute bg-[#364153] h-[12px] left-[16px] rounded-[4px] top-[44px] w-[345.823px]" data-name="Container" />;
}

function Container106() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[415px]" data-name="Container" />;
}

function Container107() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[332px]" data-name="Container" />;
}

function Container108() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[64px] w-[415px]" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">60%</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Faster</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container109 />
      <Container110 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">$1.2M</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Saved</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">99%</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Accuracy</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute box-border gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44.667px] left-[16px] pb-0 pt-[12.667px] px-0 top-[96px] w-[415px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container111 />
      <Container114 />
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[156.667px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Container105 />
      <Container108 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[288.667px] justify-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[288.667px] items-start p-[2px] relative w-full">
          <Container104 />
          <Container119 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-gray-200 content-stretch flex h-[128px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">Client Logo / Image</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-purple-100 box-border content-stretch flex h-[20px] items-start left-[16px] px-[8px] py-[2px] rounded-[4px] top-[16px] w-[72.76px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-nowrap whitespace-pre">Healthcare</p>
    </div>
  );
}

function Container122() {
  return <div className="absolute bg-[#364153] h-[12px] left-[16px] rounded-[4px] top-[44px] w-[345.823px]" data-name="Container" />;
}

function Container123() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-0 w-[415px]" data-name="Container" />;
}

function Container124() {
  return <div className="absolute bg-gray-200 h-[8px] left-0 rounded-[4px] top-[12px] w-[332px]" data-name="Container" />;
}

function Container125() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[64px] w-[415px]" data-name="Container">
      <Container123 />
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">45%</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Faster</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container126 />
      <Container127 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">$800K</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Saved</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">Zero</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Downtime</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container132 />
      <Container133 />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute box-border gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44.667px] left-[16px] pb-0 pt-[12.667px] px-0 top-[96px] w-[415px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container128 />
      <Container131 />
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[156.667px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Container122 />
      <Container125 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[288.667px] justify-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[288.667px] items-start p-[2px] relative w-full">
          <Container121 />
          <Container136 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container138() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[288.667px] relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Container137 />
    </div>
  );
}

function ServiceDetail5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[325px] items-start relative shrink-0 w-full" data-name="ServiceDetail">
      <Container103 />
      <Container138 />
    </div>
  );
}

function Container139() {
  return <div className="absolute bg-[#364153] h-[20px] left-0 rounded-[4px] top-0 w-[288px]" data-name="Container" />;
}

function Container140() {
  return (
    <div className="bg-[#364153] h-[12px] relative rounded-[4px] shrink-0 w-[384px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] w-[384px]" />
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.948px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[10.948px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">−</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return <div className="absolute bg-[#d1d5dc] h-[8px] left-[16px] rounded-[4px] top-0 w-[874px]" data-name="Container" />;
}

function Container144() {
  return <div className="absolute bg-[#d1d5dc] h-[8px] left-[16px] rounded-[4px] top-[12px] w-[874px]" data-name="Container" />;
}

function Container145() {
  return <div className="absolute bg-[#d1d5dc] h-[8px] left-[16px] rounded-[4px] top-[24px] w-[728.323px]" data-name="Container" />;
}

function Container146() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container143 />
      <Container144 />
      <Container145 />
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-blue-50 h-[104px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[104px] items-start pb-[2px] pt-[18px] px-[18px] relative w-full">
          <Container142 />
          <Container146 />
        </div>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="bg-[#364153] h-[12px] relative rounded-[4px] shrink-0 w-[384px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] w-[384px]" />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.948px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[10.948px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1.67px] whitespace-pre">+</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-white h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[60px] items-start pb-[2px] pt-[18px] px-[18px] relative w-full">
          <Container150 />
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[320px] items-start left-0 top-[36px] w-[926px]" data-name="Container">
      <Container147 />
      {[...Array(3).keys()].map((_, i) => (
        <Container151 key={i} />
      ))}
    </div>
  );
}

function ServiceDetail6() {
  return (
    <div className="h-[356px] relative shrink-0 w-full" data-name="ServiceDetail">
      <Container139 />
      <Container152 />
    </div>
  );
}

function Container153() {
  return <div className="absolute bg-[#364153] h-[20px] left-0 rounded-[4px] top-0 w-[192px]" data-name="Container" />;
}

function Container154() {
  return <div className="absolute bg-gray-200 left-[85.75px] rounded-[4px] size-[48px] top-[18px]" data-name="Container" />;
}

function Container155() {
  return <div className="absolute bg-[#364153] h-[12px] left-[61.75px] rounded-[4px] top-[74px] w-[96px]" data-name="Container" />;
}

function Container156() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[18px] top-[94px] w-[183.5px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Related Service</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container154 />
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return <div className="absolute bg-gray-200 left-[85.75px] rounded-[4px] size-[48px] top-[18px]" data-name="Container" />;
}

function Container159() {
  return <div className="absolute bg-[#364153] h-[12px] left-[61.75px] rounded-[4px] top-[74px] w-[96px]" data-name="Container" />;
}

function Container160() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[18px] top-[94px] w-[183.5px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Related Service</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container158 />
      <Container159 />
      <Container160 />
    </div>
  );
}

function Container162() {
  return <div className="absolute bg-gray-200 left-[85.75px] rounded-[4px] size-[48px] top-[18px]" data-name="Container" />;
}

function Container163() {
  return <div className="absolute bg-[#364153] h-[12px] left-[61.75px] rounded-[4px] top-[74px] w-[96px]" data-name="Container" />;
}

function Container164() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[18px] top-[94px] w-[183.5px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Related Service</p>
    </div>
  );
}

function Container165() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container162 />
      <Container163 />
      <Container164 />
    </div>
  );
}

function Container166() {
  return <div className="absolute bg-gray-200 left-[85.75px] rounded-[4px] size-[48px] top-[18px]" data-name="Container" />;
}

function Container167() {
  return <div className="absolute bg-[#364153] h-[12px] left-[61.75px] rounded-[4px] top-[74px] w-[96px]" data-name="Container" />;
}

function Container168() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[18px] top-[94px] w-[183.5px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center">Related Service</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container166 />
      <Container167 />
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[128px] left-0 top-[36px] w-[926px]" data-name="Container">
      <Container157 />
      <Container161 />
      <Container165 />
      <Container169 />
    </div>
  );
}

function ServiceDetail7() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="ServiceDetail">
      <Container153 />
      <Container170 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[178.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[178.188px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[89.5px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">READY TO GET STARTED?</p>
      </div>
    </div>
  );
}

function Container171() {
  return <div className="absolute bg-[#364153] h-[16px] left-[114.49px] rounded-[4px] top-0 w-[384px]" data-name="Container" />;
}

function Container172() {
  return <div className="absolute bg-[#d1d5dc] h-[12px] left-[146.49px] rounded-[4px] top-[24px] w-[320px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="bg-[#155dfc] h-[44px] relative rounded-[4px] shrink-0 w-[208.188px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[208.188px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[104.5px] not-italic text-[12px] text-center text-nowrap text-white top-[13px] translate-x-[-50%] whitespace-pre">Schedule Free Consultation</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[44px] relative rounded-[4px] shrink-0 w-[190.927px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[44px] items-center justify-center px-[34px] py-[14px] relative w-[190.927px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">Talk to Expert</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-start justify-center left-0 top-[60px] w-[612.99px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function ServiceDetail8() {
  return (
    <div className="h-[104px] relative shrink-0 w-[612.99px]" data-name="ServiceDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[104px] relative w-[612.99px]">
        <Container171 />
        <Container172 />
        <Container173 />
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[192px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text5 />
      <ServiceDetail8 />
    </div>
  );
}

function WireframeBox1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[192px] items-start relative shrink-0 w-full" data-name="WireframeBox">
      <Container174 />
    </div>
  );
}

function Container175() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container176() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container177() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container178() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container179() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Container175 />
      <Container176 />
      <Container177 />
      <Container178 />
    </div>
  );
}

function Container180() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container181() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container182() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container183() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container184() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <Container180 />
      <Container181 />
      <Container182 />
      <Container183 />
    </div>
  );
}

function Container185() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[80px]" data-name="Container" />;
}

function Container186() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container187() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container188() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[64px] w-[154.875px]" data-name="Container" />;
}

function Container189() {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0" data-name="Container">
      <Container185 />
      <Container186 />
      <Container187 />
      <Container188 />
    </div>
  );
}

function Container190() {
  return <div className="absolute bg-[#d1d5dc] h-[16px] left-0 rounded-[4px] top-0 w-[96px]" data-name="Container" />;
}

function Container191() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[24px] w-[206.5px]" data-name="Container" />;
}

function Container192() {
  return <div className="absolute bg-gray-200 h-[12px] left-0 rounded-[4px] top-[44px] w-[206.5px]" data-name="Container" />;
}

function Container193() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <Container190 />
      <Container191 />
      <Container192 />
    </div>
  );
}

function Container194() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[76px] relative shrink-0 w-full" data-name="Container">
      <Container179 />
      <Container184 />
      <Container189 />
      <Container193 />
    </div>
  );
}

function Container195() {
  return (
    <div className="h-[32.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[437.11px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[15.67px] translate-x-[-50%] whitespace-pre">Footer: Links, Social Media, Legal, Contact Info</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex flex-col gap-[16px] h-[176.667px] items-start pb-[2px] pt-[26px] px-[26px] relative rounded-[4px] shrink-0 w-[926px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container194 />
      <Container195 />
    </div>
  );
}

export default function Container197() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[48px] relative size-full" data-name="Container">
      <ServiceDetail />
      <ServiceDetail1 />
      <ServiceDetail2 />
      <WireframeBox />
      <ServiceDetail4 />
      <ServiceDetail5 />
      <ServiceDetail6 />
      <ServiceDetail7 />
      <WireframeBox1 />
      <Container196 />
    </div>
  );
}