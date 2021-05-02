var { EventEmmiter } = require("events")
var Table = require("./LocalStorage.BowserDB/Table");

module.exports = class LocalStorage {

    constructor(opts) {
        if(opts.verbose) {
            console.info("[BOWSER] Verbose enabled.")
        }
        this.emitter = new EventEmmiter()
    }


    set() {

    }

    get() {

    }

    createTable() {

    }    

    getTable() {

    }

    deleteTable() {

    }


}