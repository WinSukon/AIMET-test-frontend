export default async function startSession() {
  try {
    const response = await fetch("http://localhost:8080/api/start");
    if (!response.ok) {
      throw new Error("Failed to start session");
    }
    const data = await response.json();
    console.log(data)
    return data

  } catch (err) {
    console.log(err);
  }
}
