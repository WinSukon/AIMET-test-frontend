import getResult from "../src/lib/getResult";
import postFeedback from "../src/lib/postFeedback";
import startSession from "../src/lib/startSession";

it('test start session successful',()=>{
    return startSession().then(data=>{
        expect(data.message).toBe('success')
    })
})