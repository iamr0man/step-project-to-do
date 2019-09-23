class Note extends Api {
    constructor(list) {
        super();
        this.list = list;
    }

    createNote() {
        return super.get('http://localhost:3000/notes'); //work with this uri
    }

    saveNote(obj) {
        return super.post('http://localhost:3000/notes', obj)
    }

    editNote(id, obj){
        return super.put(`http://localhost:3000/api/notes/${id}`, obj)
    }
    
    deleteNote(id){
        return super.delete(`http://localhost:3000/api/notes/${id}`)
    }
}