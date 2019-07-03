document.addEventListener('DOMContentLoaded', setupPage)

function setupPage() {

}

function getLink() {
    event.preventDefault()
    let userInput = document.querySelector('#input-link').value
    getDomain(userInput)
}
// onsubmit event listener on form in index.html


function getDomain(input) {
    let splitBySlash = input.split('/')
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
    console.log(`${domain}/${randomString}`)
}
// generate random string & add to domain