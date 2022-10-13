const main = document.getElementById("main");
// console.log(main)

main.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "Liv is the champion"

const body = document.querySelector('body')
body.append(newHeader)
// console.log(newHeader)
