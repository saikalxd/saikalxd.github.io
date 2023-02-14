let img = document.querySelector('img');
img.onclick = () => {
    if (document.querySelector('img').getAttribute("src") === "https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png"){
        document.querySelector('img').setAttribute('src', "https://avatars.githubusercontent.com/u/180306?s=280&v=4");
    }else{
        document.querySelector('img').setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png');
    }
}
let button = document.querySelector('button');
button.onclick = function () {
    let me = prompt("Enter your name:");
    if (me != null) {
        document.querySelector("h1").innerHTML = "Welcome to Ala-Too, " + me + "!";
    }
}