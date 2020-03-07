import "./apply";

let num = 0;

let obj = {
  num: 1
};

window.globalNum = 2;

function fnWithoutArgs() {
  return this.num;
}

function fnTendToFindGlobal() {
  return this.globalNum;
}

function fnWithOneArg(num) {
  return num + this.num;
}

function fnWithTwoArgs(num1, num2) {
  return num1 + num2 + this.num;
}

test("call should change this target", () => {
  expect(fnWithoutArgs.xApply(obj)).toEqual(1);
  // "unstrict mode: 'null and undefined' context will be replaced with the global object"
  expect(fnTendToFindGlobal.xApply()).toEqual(2);
});

test("call could handle function arguments", () => {
  expect(fnWithOneArg.xApply(obj, [2])).toEqual(3);
  expect(fnWithTwoArgs.xApply(obj, [2, 3])).toEqual(6);
});
