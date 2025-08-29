// ABSTRAÇÃO
export interface IVideo {
    id: string;
    title: string;
    duration: number;
    getInfo(): string; // Método polimórfico
}

// ABSTRAÇÃO e ENCAPSULAMENTO
export class Video implements IVideo {
    protected _id: string;      // ENCAPSULAMENTO 
    protected _title: string;   // ENCAPSULAMENTO 
    protected _duration: number; // ENCAPSULAMENTO 

    constructor(id: string, title: string, duration: number) {
        this._id = id;
        this._title = title;
        this._duration = duration;
    }

    // ENCAPSULAMENTO
    get id(): string { return this._id; }
    get title(): string { return this._title; }
    get duration(): number { return this._duration; }

    // POLIMORFISMO
    getInfo(): string {
        return `[Vídeo] ${this._title} (${this._duration}s)`;
    }
}

