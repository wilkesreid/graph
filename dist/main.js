// assert.mjs
function assert(expr, msg) {
  if (typeof msg !== "string") {
    throw Error('"msg" in the call to assert must be a string');
  }
  if (!expr) {
    throw Error(msg);
  }
}
function assertType(val, type, msg) {
  assert(typeof type === "string", '"type" in the call to assertType must be a string');
  assert(typeof val === type, msg);
}

// Canvas.mjs
class Canvas {
  #id;
  #el;
  #ctx;
  constructor(id) {
    this.id = id;
  }
  get id() {
    return this.#id;
  }
  set id(v) {
    assertType(v, "string", "the value given when setting Canvas.id must be a string");
    this.#id = v;
    this.#el = document.getElementById(v);
    this.#ctx = this.#el.getContext("2d");
  }
  get el() {
    return this.#el;
  }
  get ctx() {
    return this.#ctx;
  }
}

// main.mjs
var canvas = new Canvas("canvas");
console.log(canvas.el);
