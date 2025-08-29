import { Video } from './Video';

// HERANÇA e POLIMORFISMO
export class LiveStream extends Video {
    private _streamer: string; // ENCAPSULAMENTO 

    constructor(id: string, title: string, streamer: string) {
        super(id, title, -1); // HERANÇA
        this._streamer = streamer;
    }

    get streamer(): string { return this._streamer; }

    // POLIMORFISMO
    getInfo(): string {
        return `[Live] ${this._title} - ${this._streamer} (AO VIVO)`;
    }
}

