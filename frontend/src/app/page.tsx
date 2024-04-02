"use client";
import startSession from "@/lib/startSession";
import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import SeverityResult from "@/components/SeverityResult";
import getResult from "@/lib/getResult";
import { Result } from "@/interface";

export default function Home() {
  const id = useRef<string>("");
  const status = useRef<string>("");
  const levels = useRef<string>("");

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
    // setTimeout(()=>AIresult(id.current),1000)
    const interval = setInterval(() => {
      AIresult(id.current);
      if (status.current === "FINISHED") {
        clearInterval(interval);
        setShow(true);
        console.log("interval cleared");
      }
    }, 1000);
  }, [id]);

  return (
    <main>
      {/* <Suspense fallback={<Loading />}>
        <div className="flex justify-center  w-full">
          <SeverityResult value={100} />
        </div>
      </Suspense> */}
      <div className="flex justify-center  w-full">
        {show ? <SeverityResult value={100} /> : <Loading></Loading>}
      </div>
    </main>
  );
}
