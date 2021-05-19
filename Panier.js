class Panier {
    produits; // type Array<Produit>
    utilisateur; // type Utilisateur
    total; // type number

    constructor(utilisateur) {
        this.produits = [];
        this.total = 0;
        this.utilisateur = utilisateur;
    }

    ajouterProduit(produit) {
        this.produits.push(produit);

        this.total = this.total + produit.getPrix();
    }

    getTotal() {
        return this.total;
    }

    getTotalProduits () {
        return this.produits.length;
    }
}
