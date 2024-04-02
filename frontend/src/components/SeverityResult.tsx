import Image from "next/image";

const SeverityResult = ({ value }: { value: number }) => {
  return (
    <div className="text-center rounded-lg w-[700px] flex flex-col h-full justify-center">
      <div className="large-text text-[#3E3F45] m-8">ผลการประเมินของคุณ</div>

      <div className="bg-[#FFCFCF] rounded-2xl flex flex-col items-center m-3">
        <div className="medium-text text-[#3E3F45] m-4">
          ความเสี่ยงโรคซึมเศร้าระดับ
        </div>
        <div className="rounded-2xl bg-[#FF6464] mx-auto p-1 small-text text-[#FFCFCF]">
          รุนแรง
        </div>
        <div className="w-4/5 m-2">
          <div className="bg-gradient-to-r rounded-lg from-[#5FC88F] via-[#FFCC7E]  to-[#FF6464] h-5 ">
            <div 
            style={{width:`${value}%`}}
            className="flex justify-end">
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
      <div className=" small-text text-[#FF6464] ">
        หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป
      </div>
      <div className=" small-text text-[#FF6464] ">
        โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ
      </div>
    </div>
  );
};

export default SeverityResult;
