export default async function postFeedback(
  session_id: string,
  feedback: string
) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/feedback/${session_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: feedback }),
      }
    );

    if (!response.ok) {
      throw new Error("failed to post feedback");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
