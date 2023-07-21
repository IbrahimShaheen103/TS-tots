import { HasFormatter } from '../interfaces/HasFormatter.js';


export class Payments implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){

    }
format(): string {
    return `Payment to ${this.recipient} cost ${this.amount}, for the following reason:\n${this.details}`
}}