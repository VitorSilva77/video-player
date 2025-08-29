import { IVideo } from './Video';

// ABSTRAÇÃO
export interface IPlaylist {
    name: string;
    videos: IVideo[];
    addVideo(video: IVideo): void;
    removeVideo(id: string): void;
    getVideos(): IVideo[];
}

// ABSTRAÇÃO e ENCAPSULAMENTO
export class Playlist implements IPlaylist {
    private _name: string;      // ENCAPSULAMENTO 
    private _videos: IVideo[];  // ENCAPSULAMENTO 

    constructor(name: string) {
        this._name = name;
        this._videos = [];
    }

    // ENCAPSULAMENTO
    get name(): string { return this._name; }
    get videos(): IVideo[] { return [...this._videos]; } 

    addVideo(video: IVideo): void {
        this._videos.push(video);
    }

    removeVideo(id: string): void {
        this._videos = this._videos.filter(v => v.id !== id);
    }

    getVideos(): IVideo[] {
        return [...this._videos];
    }

    getVideoByIndex(index: number): IVideo | null {
        return this._videos[index] || null;
    }

    getVideoCount(): number {
        return this._videos.length;
    }

    shuffle(): void {
        for (let i = this._videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._videos[i], this._videos[j]] = [this._videos[j], this._videos[i]];
        }
    }
}

