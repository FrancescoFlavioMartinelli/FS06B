Leggere una lista di ToDos (da jsonplaceholser, json-server, un file json, ...) e visualizzarla in un componente

STEP
- npm i @angular/cli

CREAZIONE
- creare un progetto ng
ng new NomeProgetto
routing -> si
stile -> scss
*spostarsi nella cartella del progetto per i prossimi comandi
cd ./path/to/cartella

- cancellare tutto il contenuto di app.component.html
(attenzione a non eliminare il <router-outlet>)
Qua inseriremo i nostri contenuti

- creare 3 nuovi component Home, PostAttivi, PostInattivi
ng generate component NomeComponent
(attenzione: bisogna essere nella cartella del progetto)

//- inserire il nuovo component dell'app
//metter un tag copiando il selector del nostro componente nel template del component app
- impostare le rotte nel app-module.ts o app-routing.ts
const Routes:Rotue[] = [
    {
        path: "/",
        component: NomeComponent
    }
] 

- creare un file service che effettuerà le chiamate di lettura
ng g service NomeService

getPosts() -> legge tutti i post
getPostsFilter(active:boolean) -> legge i post attivi o no

il service per essere usato in un component va iniettato (Injection)
nel component

constructort(private postSrv:PostService){}
postSrv.getPost(true)...


ESERCIZIO
- leggere i dati con fetch alla creazione del component
il fetch va fatto nel metodo ngOnInit (che dovreste avere già impostato, altrimenti per ora va bene il constructor)

* quando abbiamo un fetch è ESSENZIALE avere un tipologia per i dati esterni
creaiamo una interface per descriverli
ng generate interface NomeInteface

le interface avranno un loro file e per essere utilizzate nel component dovremo importarle
import {NomeInterface} from "./path/to/file"
./ -> a partire dalla directory del file attuale
../ -> indietro di una cartella

- visualizzarli nel template
tramite il data binding {{}} all'interno del template
*ngFor

- aggiungere le rotte alla navbar e ai pulsanti nella home
[routerLink]="{'/'}"

- avviare il server
ng serve -o