const assert = require("chai").assert;
const getToken = require("../services/token.service.js");

describe(("spotify services"), function () {
    it("get token", async function () {
        const token = await getToken();
        console.log(token);
    })
})