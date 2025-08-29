"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdVideo = void 0;
const Video_1 = require("./Video");
//  HERANÇA e POLIMORFISMO
class AdVideo extends Video_1.Video {
    constructor(id, title, duration, sponsor) {
        super(id, title, duration); // HERANÇA 
        this._sponsor = sponsor;
    }
    get sponsor() { return this._sponsor; }
    // POLIMORFISMO
    getInfo() {
        return `[Anúncio] ${this._title} - ${this._sponsor} (${this._duration}s)`;
    }
}
exports.AdVideo = AdVideo;
