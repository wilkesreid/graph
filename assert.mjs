export function assert(expr, msg) {
  if (typeof msg !== 'string') {
    throw Error('"msg" in the call to assert must be a string')
  }
  if (!expr) {
    throw Error(msg)
  }
}

export function assertType(val, type, msg) {
  assert(typeof type === 'string', '"type" in the call to assertType must be a string')
  assert(typeof val === type, msg)
}
