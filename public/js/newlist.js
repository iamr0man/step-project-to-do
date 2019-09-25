class List extends Api {
    constructor(){
        super();
    }

    static url = 'https://google-keep-nodejs-app.herokuapp.com/';

    static createList() {
        return super.get(this.url + 'lists');
    }
    static openEditList(id, obj){
        return super.get(this.url + `lists/${id}`, obj);
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
    static deleteAll(){
        return super.delete(this.url);
    }
}
