"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// ABSTRAÇÃO e ENCAPSULAMENTO
class Player {
    constructor(playlist) {
        this._playlist = playlist;
        this._currentIndex = 0;
        this._isPlaying = false;
        this._loop = false;
        this._shuffle = false;
        this._history = [];
    }
    // ENCAPSULAMENTO
    get currentVideo() {
        return this._playlist.getVideoByIndex(this._currentIndex);
    }
    get isPlaying() {
        return this._isPlaying;
    }
    play() {
        if (this._playlist.getVideoCount() === 0) {
            console.log("Playlist vazia!");
            return;
        }
        this._isPlaying = true;
        const video = this.currentVideo;
        if (video) {
            this._addToHistory(video);
            console.log(`▶️ Reproduzindo: ${video.getInfo()}`);
        }
    }
    pause() {
        this._isPlaying = false;
        console.log("⏸️ Pausado");
    }
    stop() {
        this._isPlaying = false;
        console.log("⏹️ Parado");
    }
    next() {
        if (this._currentIndex < this._playlist.getVideoCount() - 1) {
            this._currentIndex++;
        }
        else if (this._loop) {
            this._currentIndex = 0;
        }
        else {
            console.log("Fim da playlist");
            return;
        }
        if (this._isPlaying) {
            this.play();
        }
    }
    previous() {
        if (this._currentIndex > 0) {
            this._currentIndex--;
        }
        else if (this._loop) {
            this._currentIndex = this._playlist.getVideoCount() - 1;
        }
        else {
            console.log("Início da playlist");
            return;
        }
        if (this._isPlaying) {
            this.play();
        }
    }
    setLoop(enabled) {
        this._loop = enabled;
        console.log(`🔄 Loop ${enabled ? 'ativado' : 'desativado'}`);
    }
    setShuffle(enabled) {
        this._shuffle = enabled;
        if (enabled) {
            this._playlist.shuffle();
            this._currentIndex = 0;
        }
        console.log(`🔀 Shuffle ${enabled ? 'ativado' : 'desativado'}`);
    }
    getHistory() {
        return [...this._history];
    }
    _addToHistory(video) {
        
        this._history = this._history.filter(v => v.id !== video.id);
        this._history.unshift(video);
        
        if (this._history.length > 5) {
            this._history = this._history.slice(0, 5);
        }
    }
}
exports.Player = Player;
