const SeverityResult = () => {
  return (
    <div className="text-center rounded-lg w-full flex flex-col h-full ">
      <div className="large-text text-[#3E3F45] m-2">ผลการประเมินของคุณ</div>

      <div className="bg-[#FFCFCF] rounded-2xl flex flex-col items-center ">
        <div className="medium-text text-[#3E3F45] m-2">
          ความเสี่ยงโรคซึมเศร้าระดับ
        </div>
        <div className="rounded-2xl bg-[#FF6464] mx-auto p-1 small-text text-[#FFCFCF]">
          รุนแรง
        </div>
        <div className="w-4/5 m-2">
          <div className="bg-gradient-to-r rounded-lg from-[#5FC88F] via-[#FFCC7E]  to-[#FF6464] h-5"></div>
          <div className="flex justify-between text-[#A9AAB6] little-text">
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
