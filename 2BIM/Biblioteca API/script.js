
function buscarLivro(){
    const isbn = document.getElementById("isbn").value

    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`;


    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if(data.erro){
            alert("ISBN não encontrado")
            return;
        }

        document.getElementById("titulo").value = data.title;
        document.getElementById("subtitulo").value = data.subtitle;
        document.getElementById("autores").value = data.authors;
        document.getElementById("sinopse").value = data.synopsis;
        document.getElementById("ano").value = data.year;
        document.getElementById("formato").value = data.format;
        document.getElementById("paginas").value = data.page_count;
        document.getElementById("temas").value = data.subjects;


    })
    .catch((error) => {
        alert("Erro ao buscar o ISBN")
    })
}