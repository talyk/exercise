module.exports = class Secret {
    constructor(name, data, id = '') {
        this.name = name;
        this.data = data;
        this.id = id;
    }
};