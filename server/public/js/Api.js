class Api {

    get(url) {
        return fetch(url)
            .then(response => {
                return response.text();
            });
    }

    async post(url, obj) {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }

    async put(url, obj) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }

    async delete(url) {
        return await fetch(url, {
            method: 'DELETE'
        })
    }
}