class Note extends Api {
    constructor(list) {
        super();
        this.list = list;
    }

    url = 'http://localhost:3000';

    createNote() {
        return super.get(`${this.url}/notes`); //work with this uri
    }

    saveNote(obj) {
        return super.post(`${this.url}/notes`, obj)
    }

    editNote(id, obj) {
        return super.put(`${this.url}/api/notes/${id}`, obj)
    }

    deleteNote(id) {
        return super.delete(`${this.url}/api/notes/${id}`)
    }
}