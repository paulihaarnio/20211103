var eka= document.querySelector("#content")
document.write(eka.nodeName+"<br>")

var toka = document.querySelector(".basic")
document.write(toka.nodeName+"<br>")

var kolmas= document.querySelectorAll("li")
for (const i of kolmas) {
    document.write(i.textContent)
}

var body = document.querySelector("body")
var allnodes= body.querySelectorAll("*")
for (const x of allnodes) {
    document.write("<br>"+x.nodeName)
}

for (const i of kolmas) {
    i.textContent="John Doe"
}

