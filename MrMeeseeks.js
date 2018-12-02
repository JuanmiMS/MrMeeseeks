class MrMeeseeks{
    constructor() {
        this.name = this.getName(),
        this.answers = ['Oh yeah! yes ma\'am!', 'Oh yeah! Can do', 'Yes sireee!'];
        this.speakOnCreate();
    }
    getName() {
        return "MrMeeseeks_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
    }

    speakOnCreate(){
        console.log("["+this.name+"] I'm Mr. Meeseeks, look at me!");
    }

    makeRequest(what, where){
        console.log(what + ' ' + where + ' All done!!');
    }
}

module.exports = MrMeeseeks;