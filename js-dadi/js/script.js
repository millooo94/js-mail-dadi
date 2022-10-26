const user = document.querySelector('.your-number');
const pc = document.querySelector('.pc-number')
const result = document.querySelector('.result');


result.addEventListener("click", function game(){
    let userNumber = Math.floor(Math.random() * 6) +1
    let PcNumber = Math.floor(Math.random() * 6) +1
    user.innerHTML = userNumber
    pc.innerHTML = PcNumber


    if (userNumber > PcNumber) {
        result.innerHTML = 'YOU WIN'
        result.removeAttribute('class')
        result.classList.add('result')
        result.classList.add('my_text2')
        result.classList.add('positive')
    } else if (userNumber == PcNumber) {
        result.innerHTML = 'DRAW'
        result.removeAttribute('class')
        result.classList.add('result')
        result.classList.add('my_text2')
        result.classList.add('draw')
    } else {
        result.innerHTML = 'YOU LOST'
        result.removeAttribute('class')
        result.classList.add('result')
        result.classList.add('my_text2')
        result.classList.add('negative')
    }
    })





 