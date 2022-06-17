function profil() {
    const xhttp = new XMLHttpRequest();
    const url = "https:/pokeapi.co/api/v2/pokemon?lomit=10";
    const httpMethod = "GET";

    xhttp.onload = function() {
        const response = JSON.parse(this.responseText);
        const result = response.result;

        let data = "";
        for (i = 0; i < result.length; i++) {
            data = data + `<p> ${result[i].name}</p>`;
        }

        document.getElementById('tampilkan').innerHTML = data;
    }
    xhttp.open(httpMethod, url);
    xhttp.send();


}