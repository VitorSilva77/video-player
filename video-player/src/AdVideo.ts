import { Video } from './Video';

// HERANÇA e POLIMORFISMO
export class AdVideo extends Video {
    private _sponsor: string; // ENCAPSULAMENTO 

    constructor(id: string, title: string, duration: number, sponsor: string) {
        super(id, title, duration); // HERANÇA
        this._sponsor = sponsor;
    }

    get sponsor(): string { return this._sponsor; }

    // POLIMORFISMO
    getInfo(): string {
        return `[Anúncio] ${this._title} - ${this._sponsor} (${this._duration}s)`;
    }
}

