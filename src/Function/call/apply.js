Function.prototype.xApply = function(context, restOfArgs = []) {
  let fixedCtx = context || window;
  fixedCtx.fn = this;
  const result = fixedCtx.fn(...restOfArgs);
  delete fixedCtx.fn;
  return result;
};
