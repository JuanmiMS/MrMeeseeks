class MrMeeseeks{
    constructor(firstname) {
        this.firstname = firstname;
    }
    getName() {
        return "MrMeeseeks_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
    }

    decirHola(){
        console.log("hola");
    }
}

module.exports = MrMeeseeks;