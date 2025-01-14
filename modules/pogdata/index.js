const pathSymbol = Symbol("path")
const objs = []

class PogObject {
    constructor(module, defaultObject = {}, fileName = ".data.json") {
        this[pathSymbol] = [module, fileName]
        let data = FileLib.read(module, fileName)
        try {
            data = data ? JSON.parse(data) : {}
        } catch (e) {
            print(`[PogData] error: ${e}`)
            print(`[PogData] Reset ${module} to default data`)
            data = {}
        }
        Object.assign(this, defaultObject, data)
        objs.push(this)
    }

    /**
     * * Don't call this unless it's for internal use.
     * * The module should handle all of the savings, the user should
     * only worry about the "cached" data (the data in memory)
     */
    _save() {
        FileLib.write(
            this[pathSymbol][0],
            this[pathSymbol][1],
            JSON.stringify(this, null, 4),
            true
        )
    }

    /**
     * @deprecated leave the module handle it by itself.
     */
    save() {
        print("[PogData] #save function was called, this is deprecated in this version of PogData please refrain from calling it. it will save your data for now.")
        this._save()
    }
}

register("gameUnload", () => {
    for (let obj of objs) {
        obj._save()
    }
})

register("unload", () => {
    for (let obj of objs) {
        obj._save()
    }
})

export default PogObject
