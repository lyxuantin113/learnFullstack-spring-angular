export class Product {

    constructor(
        public sku: String,
        public name: String,
        public description: String,
        public unitPrice: number,
        public active: boolean,
        public imageUrl: String,
        public unitsInStock: String,
        public dateCreated: Date,
        public lastUpdated: Date
    ) {}

}
