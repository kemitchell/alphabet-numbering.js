module.exports = function alphabetNumbering(alphabet) {
  var letterCount = alphabet.length
  return function(argument) {
    var offset = ( argument - 1 )
    var letters = ( alphabet[offset % letterCount] )
    while (( offset = Math.floor(offset / letterCount) ) > 0) {
      letters = ( alphabet[--offset % letterCount] + letters ) }
    return letters } }
