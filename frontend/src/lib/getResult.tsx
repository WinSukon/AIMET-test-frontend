export default async function getResult(session_id:string) {
    try {
      const response = await fetch(`http://localhost:8080/api/result/${session_id}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to get result");
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  