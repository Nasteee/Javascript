class Produit {
    label;
    description;
    prix;

    constructor(label, description, prix) {
        this.label = label;
        this.description = description;
        this.prix = prix;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getPrix() {
        return this.prix;
    }
}