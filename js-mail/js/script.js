const eleUserMail = document.querySelector('.user-mail');
const eleListMail = [
    'intlprog@yahoo.com',
    'szymansk@aol.com',
    'richard@sbcglobal.net',
    'pappp@comcast.net',
    'horrocks@verizon.net',
    'kempsonc@sbcglobal.net',
    'lamky@comcast.net',
    'sokol@me.com',
    'cisugrad@verizon.net',
    'eabrown@hotmail.com',
    'wiseb@comcast.net',
    'zeitlin@aol.com'
]

const result = document.getElementById('block')
const generate = document.querySelector('.button')


generate.addEventListener("click", function mail(){

    let mailChecked = false;

for (let i = 0; i < eleListMail.length; i++) {

    if (eleUserMail.value == eleListMail[i]) {
        mailChecked = true;
    } 
}

if (mailChecked == true) {
    result.innerHTML = 'EMAIL MATCHED'
    result.classList.add('positive')
} else {
    result.innerHTML = 'EMAIL NOT FOUND'
    result.classList.add('negative')
}


})

const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
})