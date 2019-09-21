class Note extends Api {
    constructor(list){
        super();
        this.list = list;
    }
    createNote() {
        return super.get(`${window.location.href }/notes`);
    }
}
