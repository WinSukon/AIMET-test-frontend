import Image from "next/image";

const levels_mapper = new Map<string, number>([
  ["LOW", 0],
  ["SEVERE", 100],
]);

const SeverityResult = ({ levels }: { levels: string }) => {
  const value = levels_mapper.get(levels);
  console.log(value);
  return (
    <div className="text-center rounded-lg w-[700px] flex flex-col h-full justify-center">
      <div className="large-text text-[#3E3F45] m-8">ผลการประเมินของคุณ</div>

      <div
        className={`${
          value!=undefined && value > 50 ? "bg-[#FFCFCF]" : "bg-[#CEEEDC]"
        } rounded-3xl flex flex-col items-center mx-7 my-3`}
      >
        <div className="medium-text text-[#3E3F45] m-4">
          ความเสี่ยงโรคซึมเศร้าระดับ
        </div>
        {value!=undefined && value > 50 ? (
          <div className="rounded-2xl bg-[#FF6464] mx-auto my-2 p-1 small-text text-[#FFCFCF]">
            รุนแรง
          </div>
        ) : (
          <div className="rounded-2xl bg-[#60C78F] mx-auto my-2 p-1 small-text text-[#CEEEDC]">
            ต่ำ
          </div>
        )}

        <div className="w-4/5 m-2">
          <div className="bg-gradient-to-r rounded-lg from-[#5FC88F] via-[#FFCC7E]  to-[#FF6464] h-3 flex justify-start">
            <div style={{ width: `${value}%` }} ></div>
            <div className="relative bottom-1">
              <Image src="/Heart.svg" alt="heart" width={30} height={30} />
            </div>
          </div>

          <div className="flex justify-between text-[#A9AAB6] little-text my-2">
            <div>ต่ำ</div>
            <div>ปานกลาง</div>
            <div>รุนแรง</div>
          </div>
        </div>
      </div>
      {value!=undefined && value > 50 ? (
        <div className=" small-text text-[#FF6464] my-2">
          <div>หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป</div>
          <div>โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ</div>
        </div>
      ) : (
        <div className=" small-text text-[#60C78F] my-2">
          <div>เยี่ยมมากเลย</div>
          <div>หมั่นดูแลจิตใจให้แข็งแรงแบบนี้เสมอนะ</div>
          <div>อยากพูดคุยกันเมื่อไร มาหาหมอได้เสมอ</div>
        </div>
      )}
      <button className="small-text rounded-3xl shadow-2xl mx-7 my-5 p-3 text-[#767DFF]">ให้คะแนนความพึงพอใจ</button>
    </div>
  );
};

export default SeverityResult;
