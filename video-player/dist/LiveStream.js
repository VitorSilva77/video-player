"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveStream = void 0;
const Video_1 = require("./Video");
// HERANÇA e POLIMORFISMO
class LiveStream extends Video_1.Video {
    constructor(id, title, streamer) {
        super(id, title, -1); // HERANÇA 
        this._streamer = streamer;
    }
    get streamer() { return this._streamer; }
    //  POLIMORFISMO
    getInfo() {
        return `[Live] ${this._title} - ${this._streamer} (AO VIVO)`;
    }
}
exports.LiveStream = LiveStream;
