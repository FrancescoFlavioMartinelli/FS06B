TD
template -> class
- creare un form con la relativa variabile -> ngForm
- creare gli input con la relativa variabile
    - impostarli come ngModel del form
    - impostare validatori e errori relativi

- submit -> metodo nella classe per visualizzare i dati

REACTIVE
class -> template
FormBuilder in injection
- creare un FormGroup dal formBuilder 
    -> specificare i formControls (gli input)
    - ? validatori
    - nome
    - valore iniziale
    - ...

- creare template che rispecchi il formGroup
    - gli input del template devono avere il formControlName uguale alla relativa proprieta (formControl)
    - ? validatori
- inserire errori leggendo formControl.errors (può essere null/undefined se non ce ne sono)
- submit -> visualizza i dati

+ pulsante per aggiungere i poteri (aggiungere al formArray un nuovo formControl e visualizzarlo nel template)