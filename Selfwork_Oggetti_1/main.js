// Crea un oggetto persona con le seguenti caratteristiche:
// - nome
// - cognome
// - eta'
// - un metodo che permetta di salutare

let persona = {
    'nome' : 'Silvia',
    'cognome' : 'Ercolino',
    'età' : 33,
    saluta : function() {
        console.log(`Ciao a tutti mi chiamo ${this.nome}`);   
    }
}

persona.saluta();