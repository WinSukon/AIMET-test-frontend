import Image from "next/image";

const levels_mapper = {
  LOW: 0,
  SEVERE: 100,
};
const SeverityResult = ({ levels }: { levels: string }) => {
  const value = levels_mapper.levels;
  return (
    <div className="text-center rounded-lg w-[700px] flex flex-col h-full justify-center">
      <div className="large-text text-[#3E3F45] m-8">ผลการประเมินของคุณ</div>

      <div
        className={`${
          value > 50 ? "bg-[#FFCFCF]" : "bg-[#CEEEDC]"
        } rounded-2xl flex flex-col items-center mx-7 my-3`}
      >
        <div className="medium-text text-[#3E3F45] m-4">
          ความเสี่ยงโรคซึมเศร้าระดับ
        </div>
        {value > 50 ? (
          <div className="rounded-2xl bg-[#FF6464] mx-auto p-1 small-text text-[#FFCFCF]">
            รุนแรง
          </div>
        ) : (
          <div className="rounded-2xl bg-[#60C78F] mx-auto p-1 small-text text-[#CEEEDC]">
            ต่ำ
          </div>
        )}

        <div className="w-4/5 m-2">
          <div className="bg-gradient-to-r rounded-lg from-[#5FC88F] via-[#FFCC7E]  to-[#FF6464] h-5 justify-start">
            <div style={{ width: `${value}%` }} className=" flex  "></div>
            <div className="flex">
              <Image src="/Heart.svg" alt="heart" width={40} height={40} />
            </div>
          </div>

          <div className="flex justify-between text-[#A9AAB6] little-text my-2">
            <div>ต่ำ</div>
            <div>ปานกลาง</div>
            <div>รุนแรง</div>
          </div>
        </div>
      </div>
      {value > 50 ? (
        <div className=" small-text text-[#FF6464] ">
          <div>หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป</div>
          <div>โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ</div>
        </div>
      ) : (
        <div className=" small-text text-[#60C78F] ">
          <div>เยี่ยมมากเลย</div>
          <div>หมั่นดูแลจิตใจให้แข็งแรงแบบนี้เสมอนะ</div>
          <div>อยากพูดคุยกันเมื่อไร มาหาหมอได้เสมอ</div>
        </div>
      )}
    </div>
  );
};

export default SeverityResult;
