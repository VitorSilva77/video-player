"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Video_1 = require("./Video");
const AdVideo_1 = require("./AdVideo");
const LiveStream_1 = require("./LiveStream");
const Playlist_1 = require("./Playlist");
const Player_1 = require("./Player");
console.log('=== PLAYER DE VÍDEO - DEMONSTRAÇÃO DOS 4 PILARES DE OO ===\n');
// 1. CRIANDO VÍDEOS 
console.log('1. Criando diferentes tipos de vídeos:');
const video1 = new Video_1.Video('v1', 'Tutorial TypeScript', 300);
const video2 = new Video_1.Video('v2', 'Padrões de Design', 450);
const adVideo = new AdVideo_1.AdVideo('ad1', 'Anúncio Produto X', 30, 'Empresa ABC');
const liveStream = new LiveStream_1.LiveStream('live1', 'Programação ao Vivo', 'DevStreamer');

console.log(video1.getInfo());
console.log(video2.getInfo());
console.log(adVideo.getInfo());
console.log(liveStream.getInfo());
console.log();
// 2. CRIANDO PLAYLIST 
console.log('2. Criando playlist:');
const playlist = new Playlist_1.Playlist('Minha Playlist');
playlist.addVideo(video1);
playlist.addVideo(adVideo);
playlist.addVideo(video2);
playlist.addVideo(liveStream);
console.log(`Playlist "${playlist.name}" criada com ${playlist.getVideoCount()} vídeos\n`);
// 3. CRIANDO PLAYER 
console.log('3. Testando controles do player:');
const player = new Player_1.Player(playlist);

player.play();
player.pause();
player.play();
console.log();
// 4. NAVEGAÇÃO
console.log('4. Testando navegação:');
player.next();
player.next();
player.previous();
console.log();
// 5. MODOS ESPECIAIS
console.log('5. Testando modos especiais:');
player.setLoop(true);
player.setShuffle(true);
player.setShuffle(false);
player.setLoop(false);
console.log();
// 6. HISTÓRICO
console.log('6. Histórico de reprodução:');
const history = player.getHistory();
history.forEach((video, index) => {
    console.log(`${index + 1}. ${video.getInfo()}`);
});
console.log();

