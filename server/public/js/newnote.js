class Note extends Api {
    constructor(list) {
        super();
        this.list = list;
    }

    static createNote() {
        debugger;
        return super.get(this.url + `/notes`); //work with this uri
    }

    static saveNote(obj) {
        debugger;
        return super.post(this.url + `/notes`, obj)
    }

    static editNote(id, obj) {
        return super.put(this.url + `/api/notes/${id}`, obj)
    }

    static deleteNote(id) {
        return super.delete(this.url + `/api/notes/${id}`)
    }
}

Note.url = 'http://localhost:3000'