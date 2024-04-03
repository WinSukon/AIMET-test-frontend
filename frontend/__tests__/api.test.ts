import getResult from "../src/lib/getResult";
import postFeedback from "../src/lib/postFeedback";
import startSession from "../src/lib/startSession";

describe("test successful", () => {
  it("test start session successful", () => {
    return startSession().then((data) => {
      expect(data.message).toBe("success");
    });
  });

  it("test get result successful", async () => {
    const res = await startSession();
    return getResult(res.data.session_id).then((data) => {
      expect(data.message).toBe("success");
    });
  });

  it("test submit feedback successful", async () => {
    const res = await startSession();
    return postFeedback(res.data.session_id, "some feedback").then((data) => {
      expect(data.message).toBe("successfully submit feedback");
    });
  });
});

