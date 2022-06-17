function profil() {
    const xhttp = new XMLHttpRequest();
    const url = "https:/pokeapi.co/api/v2/pokemon?limit=10";
    const httpMethod = "GET";

    xhttp.onload = function() {
        const response = JSON.parse(this.responseText);
        const results = response.results;

        let data = "";
        for (i = 0; i < results.length; i++) {
            data = data + `<p> ${results[i].name}</p>`;
        }

        document.getElementById('tampilkan').innerHTML = data;
    }
    xhttp.open(httpMethod, url);
    xhttp.send();


}