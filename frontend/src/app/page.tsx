"use client";
import startSession from "@/lib/startSession";
import { useEffect, useState, useRef } from "react";
import Loading from "@/components/Loading";
import SeverityResult from "@/components/SeverityResult";
import getResult from "@/lib/getResult";

export default function Home() {
  const id = useRef<string>("");
  const status = useRef<string>("");
  const levels = useRef<string>("");
  const [progressNum, setProgressNum] = useState<number>(1);

  const [show, setShow] = useState<boolean>(false);

  const AIresult = async (id: string) => {
    const res = await getResult(id);
    if (res) {
      status.current = res.data.result_ai_status;

      if (res.data.result_ai_severity_level !== null) {
        levels.current = res.data.result_ai_severity_level;
      }
      console.log(status.current, levels.current, "test");
    }
  };
  //for get session id
  useEffect(() => {
    const getID = async () => {
      const res = await startSession();
      if (res) {
        id.current = res.data.session_id;
        console.log(id.current);
      }
    };
    getID();
  }, []);
  //fetch data until satisfied
  useEffect(() => {
    const interval = setInterval(() => {
      AIresult(id.current);
      setProgressNum((prev) => prev + 1);
      if (status.current === "FINISHED") {
        clearInterval(interval);
        setShow(true);
        console.log("interval cleared");
      }
    }, 1000);
  }, [id]);

  return (
    <main>
      {show ? (
        <div className="flex justify-center  w-full h-full">
          <SeverityResult levels={levels.current} session_id={id.current} />
        </div>
      ) : (
        <Loading value={(progressNum * 100) / 26}></Loading>
      )}
    </main>
  );
}
