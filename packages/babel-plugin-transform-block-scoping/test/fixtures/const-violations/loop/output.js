function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

for (var i = 0; i < 3; i = (_readOnlyError("i"), i + 1)) {
  console.log(i);
}
