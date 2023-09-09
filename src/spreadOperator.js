// @ts-check

const arr = [1, 2, 3, 4, 5]

const [head, ...rest] = arr

console.log(head, rest)

const personalData = {
  email: 'abc@def.com',
  password: '*********',
}

const publicData = {
  nickname: 'foo',
}

const overrides = {
  email: 'fff@fff.com',
}

const shouldOverride = true

const user = {
  ...personalData,
  //   ...publicData,
  ...{
    nickname: 'foo',
  },
  ...(shouldOverride ? overrides : null),
}

console.log(user)

// ---------function-----------
function foo(head, ...rest) {
  console.log(head)
  console.log(rest)
}
foo(1, 2, 3, 4)
