document.addEventListener('DOMContentLoaded', setupPage)

let userInput = ""
let shortLink = ""

function setupPage() {
}

function getLink() {
    event.preventDefault()
    userInput = document.querySelector('#input-link').value
    getDomain()
}
// onsubmit event listener on form in index.html

function getDomain() {
    let splitBySlash = userInput.split('/')
    let domain = `${splitBySlash[0]}//${splitBySlash[2]}`
    generateLink(domain)
}
// split input by / to get domain name

function generateLink(domain) {
    let randomString = ""
    const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    for (let i=0; i<6; i++) {
        randomString+= options.charAt(Math.floor(Math.random() * options.length))
    }
    shortLink = `${domain}/${randomString}`
    renderLink()
}
// generate random string & add to domain

function renderLink() {
    const link = document.querySelector('#short-link')
    link.innerHTML = shortLink
    link.href = userInput
}