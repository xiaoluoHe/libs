interface Function {
  xCall: any;
}
Function.prototype.xCall = function(context: any, ...restOfArgs: any[]): any {
  context.fn = this;
  let result: any = context.fn(...restOfArgs);
  delete context.fn;
  return result;
};
