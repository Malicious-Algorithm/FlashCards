export class Carta {

    //proveemos un constructor para llenar un valor por defecto
    constructor(_id = '', palabra = '', palabraTrad = ''){
        this._id = _id;
        this.palabra = palabra;
        this.palabraTrad = palabraTrad;
    }

    _id: string;
    palabra: string;
    palabraTrad: string;
}
