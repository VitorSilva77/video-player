import { Video } from './Video';
import { AdVideo } from './AdVideo';
import { LiveStream } from './LiveStream';
import { Playlist } from './Playlist';
import { Player } from './Player';

console.log('=== PLAYER DE VÍDEO - DEMONSTRAÇÃO DOS 4 PILARES DE POO ===\n');


console.log('1. Criando diferentes tipos de vídeos:');
const video1 = new Video('v1', 'Tutorial TypeScript', 300);
const video2 = new Video('v2', 'Padrões de Design', 450);
const adVideo = new AdVideo('ad1', 'Anúncio Produto X', 30, 'Empresa ABC');
const liveStream = new LiveStream('live1', 'Programação ao Vivo', 'DevStreamer');


console.log(video1.getInfo());
console.log(video2.getInfo());
console.log(adVideo.getInfo());
console.log(liveStream.getInfo());
console.log();


console.log('2. Criando playlist:');
const playlist = new Playlist('Minha Playlist');
playlist.addVideo(video1);
playlist.addVideo(adVideo);
playlist.addVideo(video2);
playlist.addVideo(liveStream);
console.log(`Playlist "${playlist.name}" criada com ${playlist.getVideoCount()} vídeos\n`);


console.log('3. Testando controles do player:');
const player = new Player(playlist);


player.play();
player.pause();
player.play();
console.log();


console.log('4. Testando navegação:');
player.next();
player.next();
player.previous();
console.log();


console.log('5. Testando modos especiais:');
player.setLoop(true);
player.setShuffle(true);
player.setShuffle(false);
player.setLoop(false);
console.log();


console.log('6. Histórico de reprodução:');
const history = player.getHistory();
history.forEach((video, index) => {
    console.log(`${index + 1}. ${video.getInfo()}`);
});
console.log();


