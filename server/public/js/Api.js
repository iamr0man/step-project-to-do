class Api {

    static get(url) {
        return fetch(url)
    }

    static async post(url, obj) {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }

    static async put(url, obj) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }

    static async delete(url) {
        return await fetch(url, {
            method: 'DELETE'
        })
    }
}