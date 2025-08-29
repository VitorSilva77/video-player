import { IVideo } from './Video';
import { Playlist } from './Playlist';

// ABSTRAÇÃO
export interface IPlayer {
    currentVideo: IVideo | null;
    isPlaying: boolean;
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    previous(): void;
    setLoop(enabled: boolean): void;
    setShuffle(enabled: boolean): void;
    getHistory(): IVideo[];
}

// ABSTRAÇÃO e ENCAPSULAMENTO
export class Player implements IPlayer {
    private _playlist: Playlist;        // ENCAPSULAMENTO 
    private _currentIndex: number;      // ENCAPSULAMENTO 
    private _isPlaying: boolean;        // ENCAPSULAMENTO 
    private _loop: boolean;             // ENCAPSULAMENTO 
    private _shuffle: boolean;          // ENCAPSULAMENTO 
    private _history: IVideo[];         // ENCAPSULAMENTO 

    constructor(playlist: Playlist) {
        this._playlist = playlist;
        this._currentIndex = 0;
        this._isPlaying = false;
        this._loop = false;
        this._shuffle = false;
        this._history = [];
    }

    // ENCAPSULAMENTO
    get currentVideo(): IVideo | null {
        return this._playlist.getVideoByIndex(this._currentIndex);
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    play(): void {
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

    pause(): void {
        this._isPlaying = false;
        console.log("⏸️ Pausado");
    }

    stop(): void {
        this._isPlaying = false;
        console.log("⏹️ Parado");
    }

    next(): void {
        if (this._currentIndex < this._playlist.getVideoCount() - 1) {
            this._currentIndex++;
        } else if (this._loop) {
            this._currentIndex = 0;
        } else {
            console.log("Fim da playlist");
            return;
        }
        
        if (this._isPlaying) {
            this.play();
        }
    }

    previous(): void {
        if (this._currentIndex > 0) {
            this._currentIndex--;
        } else if (this._loop) {
            this._currentIndex = this._playlist.getVideoCount() - 1;
        } else {
            console.log("Início da playlist");
            return;
        }
        
        if (this._isPlaying) {
            this.play();
        }
    }

    setLoop(enabled: boolean): void {
        this._loop = enabled;
        console.log(`🔄 Loop ${enabled ? 'ativado' : 'desativado'}`);
    }

    setShuffle(enabled: boolean): void {
        this._shuffle = enabled;
        if (enabled) {
            this._playlist.shuffle();
            this._currentIndex = 0;
        }
        console.log(`🔀 Shuffle ${enabled ? 'ativado' : 'desativado'}`);
    }

    getHistory(): IVideo[] {
        return [...this._history];
    }

    private _addToHistory(video: IVideo): void {
        
        this._history = this._history.filter(v => v.id !== video.id);
        this._history.unshift(video);
        
        
        if (this._history.length > 5) {
            this._history = this._history.slice(0, 5);
        }
    }
}

