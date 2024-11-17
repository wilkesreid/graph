import { assertType } from '../assert.mjs'
import { uuidv4 } from 'uuid'

class Node {
  #id

  constructor() {
    this.#id = uuidv4()
  }
}
