import { assertType } from './assert.mjs'

export default class Canvas {
  #id
  #el
  #ctx

  constructor(id) {
    this.id = id;
  }

  get id() {
    return this.#id
  }
  set id(v) {
    assertType(v, 'string', 'the value given when setting Canvas.id must be a string')
    this.#id = v
    this.#el = document.getElementById(v)
    this.#ctx = this.#el.getContext('2d')
  }

  get el() {
    return this.#el
  }
  get ctx() {
    return this.#ctx
  }
}