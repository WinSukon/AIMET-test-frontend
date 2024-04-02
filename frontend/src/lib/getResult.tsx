
export default async function getResult(session_id:string) {
    try {
      const response = await fetch(`http://localhost:8080/api/result/${session_id}`);
      if (!response.ok) {
        throw new Error("Failed to get result");
      }
      const data = await response.json();
      return data
    } catch (err) {
      console.log(err);
    }
  }
  