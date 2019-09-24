class List extends Api {
    constructor(){
        super();
    }

    static url = 'http://localhost:3000/';

    static createList() {
        return super.get(this.url + 'lists');
    }

    static saveList(obj) {
        return super.post(this.url + 'api/lists', obj);
    }

    static editList(id, obj){
        return super.put(this.url + `api/lists/${id}`, obj);
    }

    static deleteList(id){
        return super.delete(this.url + `api/lists/${id}`);
    }
}
