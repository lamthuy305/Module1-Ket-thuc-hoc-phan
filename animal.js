class Animal {
    _name;
    _weight;

    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(value) {
        this._weight = value;
    }

    toString() {
        document.write("Name " + this._name.toString() + "Weight" + this._weight.toString());
    }
}