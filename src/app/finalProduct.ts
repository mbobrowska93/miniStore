import { Product } from './product';

export class FinalProduct {
    constructor(
        public product: Product,
        public count: number,
        public finalId: number
    ) {}
}
