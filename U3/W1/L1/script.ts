class SonAccount {
    
    balance:number;
    nome:string;

    //i default sempre dopo i parametri non default
    constructor(nome:string, _balanceInit:number = 0) {
        this.balance = _balanceInit
        this.nome = nome;
    }
 
    //restituisce quanto abbiamo prelevato
    withdraw(amount:number):number {
        if(amount <= this.balance) {
            this.balance -= amount;
            return amount
        } else {
            console.log("PRELIEVO RIFIUTATO");
            return 0;
        }
    }
 
    //restituisce quanto abbiamo versato
    deposit(amount:number):number {
        this.balance += amount
        return amount
    }

    withdrawTwenty():number {
        return this.withdraw(20)
    }
    depositTwenty():number {
        return this.deposit(20)
    }

}

class MotherAccount extends SonAccount {

    private interest:number;

    constructor(n:string, _balanceInit: number = 0) {
        super(n, _balanceInit);
        this.interest = .1;
    }

    getInterest() {
        return this.interest
    }

    withdraw(amount: number): number {
        let w = (amount + this.countInterest(amount))
        if(w <= this.balance) {
            this.balance -= w
            return w
        } else {
            return 0
        }
    }

    deposit(amount:number):number {
        let d = (amount - this.countInterest(amount))
        this.balance += d
        return d
    }

    private countInterest(a:number):number {
        return a * this.interest
    }

}

let m = new MotherAccount("Test") 






////////////////////////////////
let s = new SonAccount("Flavio") //0 balance
let s1 = new SonAccount("Flavio", 1000) //1000 balance

////////////////////////////////////////////////////////////////
// la tipizzazione è essenziale per
// proprietà delle classi -> specificare che tipi di dati dovranno essere usati con quella proprietà
// parametri -> sono dati esterni, vogliamo che ts controlli che li inseriamo correttamenti
// return -> per controllare internamente alla funzione/metodo che la logica sia corretta e che quando li eseguiamo li utilizziamo correttamente
// let s = new SonAccount("ciao")
// let s1 = new SonAccount(10)
// let s2 = new SonAccount(true)
// let s3 = new SonAccount()
// // s.z -> undefined
// // s.addZ()
// // s.z -> 30

// let x = 5
// x.toLowerCase()

// function somma(a:number, b:number):number {
//     return a + b
// }

// let y = 10 * somma(5, 6)