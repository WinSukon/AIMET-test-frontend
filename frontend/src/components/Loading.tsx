import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({ value }: { value: number }) => {
  return (
    <div className="absolute bg-gray-300 w-full h-full flex justify-items-center">
      <div className="bg-white w-1/3 h-1/3 m-auto rounded-2xl flex flex-col justify-center items-center">
        <div className="absolute m-auto text-[#767DFF] ">
          <CircularProgress
            variant="determinate"
            value={value}
            color="inherit"
            size={70}
          ></CircularProgress>
        </div>
        <div className="absolute small-text text-[#767DFF] m-auto">
          {value.toFixed()}%
        </div>

        <div className="relative top-16 medium-text  text-[#767DFF]">
          กำลังประมวลผล
        </div>
      </div>
    </div>
  );
};

export default Loading;
