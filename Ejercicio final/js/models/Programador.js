export default class Programador {
    constructor() { }
    static from(json){
        return Object.assign(new Programador(), json);
    }
}

