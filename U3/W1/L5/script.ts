interface Smartphone {
    credito: number,
        nChiamate: number,
        ricarica(r: number): void,
        chiamata(m: number): void,
        azzeraChiamate(): void,
        getNumeroChiamate(): number,
        numero404(): number
}

abstract class Sim implements Smartphone {
    credito: number;
    nChiamate: number;

    tariffa:number;

    constructor(_tariffa:number, _credito: number = 0, _nChiamate: number = 0) {
        this.credito = _credito;
        this.nChiamate = _nChiamate;
        this.tariffa = _tariffa
    }

    ricarica(r: number): void {
        this.credito += r
    }

    chiamata(m: number): void {
        let spesa = this.tariffa * Math.ceil(m)

        if (spesa > this.credito) {
            throw new Error("Credito isufficiente")
        }

        this.nChiamate++
        this.credito -= spesa
        console.log("CHIAMATA EFFETTUATA");
        

    }
    azzeraChiamate(): void {
        this.nChiamate = 0
    }
    getNumeroChiamate(): number {
        return this.nChiamate;
    }
    numero404(): number {
        return Math.round(this.credito * 100) / 100;
    }
}

class Sim1 extends Sim {
    credito: number;
    nChiamate: number;
    constructor(_credito: number = 0, _nChiamate: number = 0) {
        super(.2, _credito, _nChiamate)
    }
}
class Sim2 extends Sim {
    constructor(_credito: number = 0, _nChiamate: number = 0) {
        super(.3, _credito, _nChiamate)
    }
}
class Sim3 extends Sim {
    constructor(_credito: number = 0, _nChiamate: number = 0) {
        super(.4, _credito, _nChiamate)
    }
}
class Sim4 extends Sim {
    constructor(_credito: number = 0, _nChiamate: number = 0){
        super(.5, _credito, _nChiamate)
    }
}
class Sim5 extends Sim {
    constructor(){
        super(.6)
    }
}


// let s = new Sim1()
// s.ricarica(10)
// try {
//     s.chiamata(10)
//     console.log("La chiamata è stata effettuata");
// } catch(err) {
//     console.log("ERR", err.message);
// }


document.getElementById("btn")!.addEventListener("click", (e)=>{
    e.preventDefault()
    let i = document.getElementById("input") as HTMLInputElement
    if(i.value != null, parseFloat(i.value) >= 0){
        let ricar = Math.round(parseFloat(i.value)*100)/100
        console.log(i.value);
    }
})
