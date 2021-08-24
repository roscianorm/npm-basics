const messages = [
  'miguel',
  'luis',
  'hilery',
  'esteban',
  'rafael',
  'herick',
  'carolina',
  'valeria',
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }
