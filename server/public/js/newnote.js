class Note extends Api {
    constructor(list) {
        super();
        this.list = list;
    }

    url = 'http://localhost:3000';

    createNote() {
        return super.get(`${url}/notes`); //work with this uri
    }

    saveNote(obj) {
        return super.post(`${url}/notes`, obj)
    }

    editNote(id, obj){
        return super.put(`${url}/api/notes/${id}`, obj) 
    }
    
    deleteNote(id){
        return super.delete(`${url}/api/notes/${id}`)
    }
}