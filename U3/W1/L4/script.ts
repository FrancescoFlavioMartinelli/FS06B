// interface todoResquest {
//     title:string,
//     completed:boolean
// }

// interface todoResponse extends todoResquest {
//     id:number
// }

interface todoDTO {
    id ? : number,
        title: string,
        completed: boolean
}

class ToDo implements todoDTO {
    id: number
    title: string
    completed: boolean
    li: HTMLLIElement
    constructor(
        _id: number,
        _title: string,
        _completed: boolean,
    ) {
        this.completed = _completed;
        this.id = _id;
        this.title = _title;
    }

    creaRiga() {
        let tr = document.createElement("tr")

        this.li = document.createElement("li")
        this.li.innerText = this.title;
        let btn = document.createElement("button")
        if(!this.completed){
            //se non è completato mette i tasti per completare
            btn.innerHTML = "completa"
            btn.addEventListener("click", (e) => {
                this.completa()
            })
            this.li.append(btn)
        } else {
            btn.innerHTML = "ripristina"
            btn.addEventListener("click", (e) => {
                this.ripristina()
            })
            let btnElimina = document.createElement("button")
            btnElimina.innerHTML = "Elimina"
            btnElimina.addEventListener("click", (e) => {
                this.elimina()
            })
            this.li.append(btn, btnElimina)
        }


        return this.li
    }

    elimina() {
        fetch("http://localhost:3000/todos/" + this.id, {
            method: "DELETE"
        }).then(res => {
            if (!res.ok) throw new Error("Errore eliminazione")
            return res.json() as Promise < todoDTO >
        }).then((res) => {
            console.log(res); //ultima volta che vediamo i dati dell'oggetto dopo averlo eliminato
            this.li.remove()
        })
    }

    ripristina() {
        this.completed = false
        //essendo questa logica uguale per riprisina() e completa() la isolo in un metodo a parte
        this.update()
        // fetch("http://localhost:3000/todos/"+this.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this)

        // }).then((response)=>{
        //     if(!response.ok){
        //         throw new Error("Errore update")
        //     }
        //     return response.json() as Promise<todoDTO>
        // }).then(res=>{
        //     this.li.remove()
        //     addToListCompletati(this.creaRiga())
        // })

    }

    completa() {
        this.completed = true

        //essendo questa logica uguale per riprisina() e completa() la isolo in un metodo a parte
        this.update()
        // fetch("http://localhost:3000/todos/"+this.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this)

        // }).then((response)=>{
        //     if(!response.ok){
        //         throw new Error("Errore update")
        //     }
        //     return response.json() as Promise<todoDTO>
        // }).then(res=>{
        //     this.li.remove()
        //     addToListCompletati(this.creaRiga())
        // })
    }

    update() {
        let requestBody = this.creaRequestBody()
        //avendo messo this.li ora i dati da inviare non è this ma solo una parte che estrapoliamo con un metodo apposta
        fetch("http://localhost:3000/todos/" + this.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)

        }).then((response) => {
            if (!response.ok) {
                throw new Error("Errore update")
            }
            return response.json() as Promise < todoDTO >
        }).then(res => {
            this.li.remove()
            //questo update è usato da completa() e ripristina()
            //con questo if capiamo dove va inserito
            if (this.completed) {
                addToListCompletati(this.creaRiga())
            } else {
                addToListNonCompletati(this.creaRiga())
            }
        })
    }

    //qua la tipolgia controlla che l'oggetto che scriviamo manualmente sia corretto
    creaRequestBody(): todoDTO {
        //crea a partire da this un oggetto adatto a essere usato per le operazioni PUT (qwuindi senza this.li)
        return {
            id: this.id,
            title: this.title,
            completed: this.completed
        }
    }
}

// lettura e visualizzazione dei todo
// function getTodo() {
//     return fetch("http://localhost:3000/todos").then(res=>res.json())
// }
async function getTodo() {
    let response = await fetch("http://localhost:3000/todos")
    if (!response.ok) {
        throw new Error("Errore lettura")
    }
    let data = (await response.json()) as todoDTO[]
    return data.map((e) => new ToDo(e.id!, e.title, e.completed))
}

// function getTodoCompletati(comp:boolean){
//     return getTodo().then(data=>{
//         return data.filter((e)=>{
//             return (e.completed == comp)
//             // if(e.completed == comp){
//             //     return true
//             // } else {
//             //     return false
//             // }
//         })
//     })
// }
async function getTodoCompletati(comp: boolean = true) {
    let todos = await getTodo()
    return todos.filter((e) => e.completed == comp)
}

//queste due funzioni potrebbero essere una sola parametrica
// function addToList(li:HTMLLIElement, completati:boolean = false) {
//     let list = completati ? document.getElementById("listaCompletati")! : document.getElementById("listaNonCompletati")!
//     list.appendChild(li)
// }
function addToListNonCompletati(li: HTMLLIElement) {
    let listNonCompletati = document.getElementById("listaNonCompletati") !
        listNonCompletati.appendChild(li)
}

function addToListCompletati(li: HTMLLIElement) {
    let listNonCompletati = document.getElementById("listaCompletati") !
        listNonCompletati.appendChild(li)
}

function creaTodo(t: string) {
    let newTodo: todoDTO = {
        title: t,
        completed: false
    }
    return fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    }).then((res) => {
        if (!res.ok) {
            throw new Error("Errore aggiunta")
        }
        return res.json() as Promise < todoDTO >
    })
}

window.addEventListener("DOMContentLoaded", (e) => {

    //leggo i dati iniziali
    //tutti e separo
    // getTodo().then((todo) => {
    //     todo.forEach((e)=>{
    //         if(e.completed) addToListCompletati(e.creaRiga())
    //         else addToListNonCompletati(e.creaRiga())
    //     })
    // })
    //solo non completati
    getTodoCompletati(false).then((data) => {
        data.forEach((e) => {
            addToListNonCompletati(e.creaRiga())
        })
    }).catch((err) => {
        alert("Non sono riuscito a leggere i dati, riprovare")
    })
    //solo completati
    getTodoCompletati(true).then((data) => {
        data.forEach((e) => {
            addToListCompletati(e.creaRiga())
        })
    }).catch((err) => {
        alert("Non sono riuscito a leggere i dati, riprovare")
    })

    //aggiunta nuovo todo
    document.getElementById("newTodo") !.addEventListener("submit", (e) => {
        e.preventDefault()
        let title = e.target![0].value as string
        creaTodo(title).then(res => {
            let t = new ToDo(res.id!, res.title, res.completed)
            addToListNonCompletati(t.creaRiga())
        })
    })
})