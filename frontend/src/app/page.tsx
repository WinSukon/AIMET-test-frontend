"use client";
import startSession from "@/libs/startSession";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import SeverityResult from "@/components/SeverityResult";
import getResult from "@/libs/getResult";
export default function Home() {
  const [status, setStatus] = useState<boolean>(false);
  const [levels, setLevels] = useState<string | null>(null);

  useEffect(() => {
    const start = async () => {
      const start = await startSession();
      const session_id = start.data.session_id;
      const res = await getResult(session_id);
      console.log("id :", session_id);
      const ai_status = res.data.result_ai_status;
      if (ai_status === "PROCESSING") {
        setStatus(false);
      } else if (ai_status === "FINISHED") {
        setStatus(true);
      }
      setLevels(res.data.result_ai_severity_level);
    };
    start();
  });
  return (
    <main>
      <div className="flex items-center w-full">
        <Suspense fallback={<Loading />}>
          <SeverityResult />
        </Suspense>
      </div>

      {/* {
        status?
        <SeverityResult/>:
        <Loading/>
      } */}
    </main>
  );
}
