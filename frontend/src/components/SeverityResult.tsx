const SeverityResult = () => {
  return (
    <div className="text-center rounded-lg w-full flex flex-col h-full ">
      <div className="">ผลการประเมินของคุณ</div>

      <div className="bg-slate-300 rounded-lg flex flex-col items-center">
        <h2>ความเสี่ยงโรคซึมเศร้าระดับ</h2>
        <div className="rounded-lg bg-[#FF6464] mx-auto w-12">รุนแรง</div>
        <div className="w-4/5">
          <div className="bg-gradient-to-r rounded-lg from-[#5FC88F] via-[#FFCC7E]  to-[#FF6464] h-5"></div>
          <div className="flex justify-between">
            <div>ต่ำ</div>
            <div>ปานกลาง</div>
            <div>สูง</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeverityResult;
