const info_akkordeon =
  'Klick die Akkordeons unten um der Akkordeonsinhalt zu expandieren/kollabieren'

export const check_name = (name) => {
  // match a string that has at least 1 character
  console.log('check_name', name)
  let result = false
  //const regx = '^.+$'
  // console.log('search', name.search(regx))
  // if (name.search(regx)) {
  //   result = true
  // }

  if (name.length > 0) {
    result = true
  }

  console.log('check_name', result)
  return result
}

export default info_akkordeon
