class Api {
    get(url) {
        return fetch(url)
            .then(response => {
            return response.text();
            });
    }
}
