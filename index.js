// Write your code here!
main.remove();

const newHeader = document.createElement("h1");

newHeader.id = 'victory'

const newContent = document.createTextNode("Linda is the champion")

newHeader.appendChild(newContent);

const currentHeader = document.getElementById("victory");
    document.body.insertBefore(newHeader, currentHeader);

