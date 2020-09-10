import { Product } from './product';

export class FinalProduct { // Product in cart with another parameters
    constructor(
        public product: Product,
        public count: number,
        public finalId: number
    ) {}
}
