window.String.prototype.splitWords = function () {
  return this.match(/[A-Z]*[a-z]*/g)
    .join(" ")
    .trim();
};
