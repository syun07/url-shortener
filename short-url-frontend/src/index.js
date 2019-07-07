document.addEventListener('DOMContentLoaded', setupPage)

let userInput = ""
let randomString = ""

function setupPage() {
}

function getLink() {
    event.preventDefault()
    userInput = document.querySelector('#input-link').value
    generateLink()
}
// onsubmit event listener on form in index.html


function generateLink() {
    const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    for (let i=0; i<6; i++) {
        randomString+= options.charAt(Math.floor(Math.random() * options.length))
    }
    renderLink()
}
// generate random string & add to domain

function renderLink() {
    let shortLink = `http://localhost:3000/${randomString}`
    const link = document.querySelector('#short-link')
    link.innerHTML = shortLink
    link.href = userInput
    postLink({slug: randomString, target: userInput})
}

function postLink(links) {
    console.log(randomString, userInput)
    return fetch('http://localhost:3000/urls', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(links)
    }).then(res => res.json())
}