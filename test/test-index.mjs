import assert from "assert";
import { ChatworkHook } from "../chatworkHook.mjs";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("shold return -a when the value is not present", function () {
      // Arrange
      let testArray = [1, 2, 3];

      // Act
      let ret = testArray.indexOf(4);

      // Assert
      assert.equal(ret, -1);
    });
  });
  describe("props", function () {
    it("input props is set", function () {
      let levelValue = "error";
      let roovidvalue = "fakeroomid";
      let tokenValue = "faketoken";
      let chatworkHook = new ChatworkHook({
        level: levelValue,
        roomid: roovidvalue,
        token: tokenValue,
      });
      assert.equal(chatworkHook.level, levelValue);
      assert.equal(chatworkHook.roomid, roovidvalue);
      assert.equal(chatworkHook.token, tokenValue);
    });
  });
});
