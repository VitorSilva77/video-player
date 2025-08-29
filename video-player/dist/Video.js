"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
// ABSTRAÇÃO e ENCAPSULAMENTO
class Video {
    constructor(id, title, duration) {
        this._id = id;
        this._title = title;
        this._duration = duration;
    }
    // ENCAPSULAMENTO
    get id() { return this._id; }
    get title() { return this._title; }
    get duration() { return this._duration; }
    // POLIMORFISMO
    getInfo() {
        return `[Vídeo] ${this._title} (${this._duration}s)`;
    }
}
exports.Video = Video;
