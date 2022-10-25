const userNumber = Math.floor(Math.random() * 6)
console.log('TUO NUMERO ', userNumber)
const PcNumber = Math.floor(Math.random() * 6)
console.log('NUMERO PC ', PcNumber)

if (userNumber > PcNumber) {
    console.log('HAI VINTO')
} else if (userNumber == PcNumber) {
    console.log('HAI PAREGGIATO')
} else {
    console.log('HAI PERSO')
}
    
 