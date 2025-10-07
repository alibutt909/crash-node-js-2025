function generateRandomeNumber(){
  return Math.floor(Math.random() * 100) + 1;
}
function celciusToFahrenhiet(celcius){
  return (celcius * 9) / 5 + 32;
}
// module.exports = generateRandomeNumber;
module.exports = {
  generateRandomeNumber,
  celciusToFahrenhiet
}