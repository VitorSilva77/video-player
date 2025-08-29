"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
// ABSTRAÇÃO e ENCAPSULAMENTO
class Playlist {
    constructor(name) {
        this._name = name;
        this._videos = [];
    }
    // ENCAPSULAMENTO
    get name() { return this._name; }
    get videos() { return [...this._videos]; } 
    addVideo(video) {
        this._videos.push(video);
    }
    removeVideo(id) {
        this._videos = this._videos.filter(v => v.id !== id);
    }
    getVideos() {
        return [...this._videos];
    }
    getVideoByIndex(index) {
        return this._videos[index] || null;
    }
    getVideoCount() {
        return this._videos.length;
    }
    shuffle() {
        for (let i = this._videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._videos[i], this._videos[j]] = [this._videos[j], this._videos[i]];
        }
    }
}
exports.Playlist = Playlist;
