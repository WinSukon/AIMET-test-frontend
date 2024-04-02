import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="bg-slate-500 w-full h-full">
      <div className="bg-white w-1/3 h-1/3 m-auto">
        <CircularProgress></CircularProgress>

      </div>
    </div>
  );
};

export default Loading;
