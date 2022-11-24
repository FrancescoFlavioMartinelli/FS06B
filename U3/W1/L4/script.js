// interface todoResquest {
//     title:string,
//     completed:boolean
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ToDo = /** @class */ (function () {
    function ToDo(_id, _title, _completed) {
        this.completed = _completed;
        this.id = _id;
        this.title = _title;
    }
    ToDo.prototype.creaRiga = function () {
        var _this = this;
        var tr = document.createElement("tr");
        this.li = document.createElement("li");
        this.li.innerText = this.title;
        var btn = document.createElement("button");
        if (!this.completed) {
            //se non è completato mette i tasti per completare
            btn.innerHTML = "completa";
            btn.addEventListener("click", function (e) {
                _this.completa();
            });
            this.li.append(btn);
        }
        else {
            btn.innerHTML = "ripristina";
            btn.addEventListener("click", function (e) {
                _this.ripristina();
            });
            var btnElimina = document.createElement("button");
            btnElimina.innerHTML = "Elimina";
            btnElimina.addEventListener("click", function (e) {
                _this.elimina();
            });
            this.li.append(btn, btnElimina);
        }
        return this.li;
    };
    ToDo.prototype.elimina = function () {
        var _this = this;
        fetch("http://localhost:3000/todos/" + this.id, {
            method: "DELETE"
        }).then(function (res) {
            if (!res.ok)
                throw new Error("Errore eliminazione");
            return res.json();
        }).then(function (res) {
            console.log(res); //ultima volta che vediamo i dati dell'oggetto dopo averlo eliminato
            _this.li.remove();
        });
    };
    ToDo.prototype.ripristina = function () {
        this.completed = false;
        //essendo questa logica uguale per riprisina() e completa() la isolo in un metodo a parte
        this.update();
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
    };
    ToDo.prototype.completa = function () {
        this.completed = true;
        //essendo questa logica uguale per riprisina() e completa() la isolo in un metodo a parte
        this.update();
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
    };
    ToDo.prototype.update = function () {
        var _this = this;
        var requestBody = this.creaRequestBody();
        //avendo messo this.li ora i dati da inviare non è this ma solo una parte che estrapoliamo con un metodo apposta
        fetch("http://localhost:3000/todos/" + this.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        }).then(function (response) {
            if (!response.ok) {
                throw new Error("Errore update");
            }
            return response.json();
        }).then(function (res) {
            _this.li.remove();
            //questo update è usato da completa() e ripristina()
            //con questo if capiamo dove va inserito
            if (_this.completed) {
                addToListCompletati(_this.creaRiga());
            }
            else {
                addToListNonCompletati(_this.creaRiga());
            }
        });
    };
    //qua la tipolgia controlla che l'oggetto che scriviamo manualmente sia corretto
    ToDo.prototype.creaRequestBody = function () {
        //crea a partire da this un oggetto adatto a essere usato per le operazioni PUT (qwuindi senza this.li)
        return {
            id: this.id,
            title: this.title,
            completed: this.completed
        };
    };
    return ToDo;
}());
// lettura e visualizzazione dei todo
// function getTodo() {
//     return fetch("http://localhost:3000/todos").then(res=>res.json())
// }
function getTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:3000/todos")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Errore lettura");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent());
                    return [2 /*return*/, data.map(function (e) { return new ToDo(e.id, e.title, e.completed); })];
            }
        });
    });
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
function getTodoCompletati(comp) {
    if (comp === void 0) { comp = true; }
    return __awaiter(this, void 0, void 0, function () {
        var todos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTodo()];
                case 1:
                    todos = _a.sent();
                    return [2 /*return*/, todos.filter(function (e) { return e.completed == comp; })];
            }
        });
    });
}
//queste due funzioni potrebbero essere una sola parametrica
// function addToList(li:HTMLLIElement, completati:boolean = false) {
//     let list = completati ? document.getElementById("listaCompletati")! : document.getElementById("listaNonCompletati")!
//     list.appendChild(li)
// }
function addToListNonCompletati(li) {
    var listNonCompletati = document.getElementById("listaNonCompletati");
    listNonCompletati.appendChild(li);
}
function addToListCompletati(li) {
    var listNonCompletati = document.getElementById("listaCompletati");
    listNonCompletati.appendChild(li);
}
function creaTodo(t) {
    var newTodo = {
        title: t,
        completed: false
    };
    return fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    }).then(function (res) {
        if (!res.ok) {
            throw new Error("Errore aggiunta");
        }
        return res.json();
    });
}
window.addEventListener("DOMContentLoaded", function (e) {
    //leggo i dati iniziali
    getTodo().then(function (todo) {
        todo.forEach(function (e) {
            if (e.completed)
                addToListCompletati(e.creaRiga());
            else
                addToListNonCompletati(e.creaRiga());
        });
    });
    getTodoCompletati(false).then(function (data) {
        data.forEach(function (e) {
            addToListNonCompletati(e.creaRiga());
        });
    })["catch"](function (err) {
        alert("Non sono riuscito a leggere i dati, riprovare");
    });
    getTodoCompletati(true).then(function (data) {
        data.forEach(function (e) {
            addToListCompletati(e.creaRiga(true));
        });
    })["catch"](function (err) {
        alert("Non sono riuscito a leggere i dati, riprovare");
    });
    //aggiunta del todo
    document.getElementById("newTodo").addEventListener("submit", function (e) {
        e.preventDefault();
        var title = e.target[0].value;
        creaTodo(title).then(function (res) {
            var t = new ToDo(res.id, res.title, res.completed);
            addToListNonCompletati(t.creaRiga());
        });
    });
});
