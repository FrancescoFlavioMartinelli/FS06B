abstract class Lavoratore {
    reddito: number;

    codRedd: number;
    tasseInps: number;
    tasseIrpef: number;
    //prop

    //costruttore
    constructor(_codRed:number, _inps:number, _irpef:number, _reddito:number){
        this.codRedd = _codRed;
        this.tasseInps = _inps;
        this.tasseIrpef = _irpef;

        this.reddito = _reddito;
    }

    abstract cheLavoroFai():string

    //metodi
    getUtileAnnuo(): number {
        let utile = this.reddito * (this.codRedd / 100) + 5;
        return utile;
    }
    getTasseIrpef(): number {
        return this.getUtileAnnuo() * (this.tasseIrpef / 100);
    }
    getTasseInps(): number {
        return this.getUtileAnnuo() * (this.tasseInps / 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.reddito - (this.getTasseIrpef() + this.getTasseInps());
    }
}

class Commerciante extends Lavoratore {
    cheLavoroFai(): string {
        throw new Error("Method not implemented.");
    }
    constructor(_reddito: number) {
        super(40, 12, 13, _reddito)
    }
}

class Professionista extends Lavoratore {
    cheLavoroFai(): string {
        throw new Error("Method not implemented.");
    }
    professione:string;
    constructor(_reddito: number, _prof:string) {
        super(78, 13, 10, _reddito)

        this.professione = _prof;
    }
    getUtileAnnuo(): number {
        let utile = this.reddito * (this.codRedd / 100)+5;
        return utile;
    }

    getProfessione() {
        return "Il professionsta lavora nel "+ this.professione
    }
}

class Artigiano extends Lavoratore {
    cheLavoroFai(): string {
        return "sono un artigiano";
    }
    constructor(_reddito: number) {
        super(34, 12, 15, _reddito)
    }
}

class Dipendente extends Lavoratore {
    cheLavoroFai(): string {
        throw new Error("Method not implemented.");
    }
    constructor(_reddito:number) {
        super(20, 10, 7, _reddito)
    }
}



////////////////////////////////////////////////////////////////////////
let l1 = new Commerciante(30000) //commerciante
let l2 = new Professionista(25000, "test") //professionista

// function calcolo(a:number, b:number, c:number, d:number, e:number){
//     return a + b * c - d / e
// }

// let x = calcolo(3, 5, 2, 6, 8)
// let y = 13 + 25 * 52 - 36 / 86 

// creaRiga("testo")
// creaRiga("testo1")



// function creaRiga(txt: string) {
//     tr = document.createElement("tr")
//     td = document.createElement("td")
//     td.innerHTML = txt
//     tr.appendChild(td)
//     table.appendChild(tr)
// }
