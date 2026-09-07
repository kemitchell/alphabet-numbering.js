export default function alphabetNumbering (alphabet) {
  const letterCount = alphabet.length
  return function (argument) {
    let offset = argument - 1
    let letters = alphabet[offset % letterCount]
    while ((offset = Math.floor(offset / letterCount)) > 0) {
      letters = alphabet[--offset % letterCount] + letters
    }
    return letters
  }
}
