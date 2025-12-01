function Group2() {
  return (
    <div className="absolute contents left-[122px] top-[565px]">
      <div className="absolute bg-[#8a88ff] h-[16px] left-[215px] top-[610px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[20px] left-[122px] top-[565px] w-[394px]" />
      <div className="absolute bg-[#8a88ff] h-[16px] left-[215px] top-[632px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[16px] left-[215px] top-[654px] w-[420px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[122px] top-[380px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[425px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[20px] left-[122px] top-[380px] w-[394px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[447px] w-[420px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[469px] w-[420px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[122px] top-[195px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[240px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[20px] left-[122px] top-[195px] w-[394px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[262px] w-[420px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[215px] top-[284px] w-[420px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[61px] top-[101px]">
      <div className="absolute h-[663px] left-[61px] rounded-[20px] top-[101px] w-[636px]">
        <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group2 />
      <Group1 />
      <Group />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[814px] top-[565px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[907px] top-[610px] w-[420px]" />
      <div className="absolute bg-[#d9d9d9] h-[20px] left-[814px] top-[565px] w-[394px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[907px] top-[632px] w-[420px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[907px] top-[654px] w-[420px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[814px] top-[380px]">
      <div className="absolute bg-[#8a88ff] h-[16px] left-[907px] top-[425px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[20px] left-[814px] top-[380px] w-[394px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[907px] top-[447px] w-[420px]" />
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[907px] top-[469px] w-[420px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[814px] top-[195px]">
      <div className="absolute bg-[#8a88ff] h-[16px] left-[907px] top-[240px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[20px] left-[814px] top-[195px] w-[394px]" />
      <div className="absolute bg-[#8a88ff] h-[16px] left-[907px] top-[262px] w-[420px]" />
      <div className="absolute bg-[#8a88ff] h-[16px] left-[907px] top-[284px] w-[420px]" />
    </div>
  );
}

export default function P() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="P4">
      <Group3 />
      <Group6 />
      <Group5 />
      <Group4 />
      <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.3)] h-[663px] left-[753px] rounded-[20px] top-[101px] w-[636px]">
        <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}