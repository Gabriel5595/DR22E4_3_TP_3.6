const titulo = document.getElementsByTagName("h1")[0];

titulo.setAttribute("onclick", "mudaCor()");

function mudaCor() {
    titulo.classList.toggle("corVermelha");
}