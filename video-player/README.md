# Player de Vídeo com Playlist em typeScript utilizando POO

Este projeto implementa um player de vídeo com sistema de playlist em TypeScript, aplicando os 4 pilares fundamentais da Programação
Orientada a Objetos (POO).

Como o Sistema Funciona:
O sistema é composto por interfaces e classes que representam os elementos de um player de vídeo. A classe Video é a base, com
subclasses AdVideo e LiveStream para tipos específicos, a Playlist gerencia uma coleção de vídeos, e o Player controla a reprodução,
navegação, modos (loop/shuffle) e histórico. A interação entre essas classes demonstra os princípios de Abstração, Encapsulamento,
Herança e Polimorfismo.

## Como Executar

```bash
# Instalar dependências
npm install

# Executar o projeto
npm run dev
```

##  4 Pilares de POO

### Abstração
**Onde:** Interfaces `IVideo`, `IPlaylist`, `IPlayer`
```typescript
export interface IVideo {
    id: string;
    title: string;
    duration: number;
    getInfo(): string; // Método polimórfico
}
```
**Como:** As interfaces definem contratos claros, expondo apenas o essencial.

### Encapsulamento
**Onde:** Atributos privados/protegidos em todas as classes
```typescript
export class Video implements IVideo {
    protected _id: string;      // Protegido - acessível por subclasses
    protected _title: string;
    protected _duration: number;
    
    get id(): string { return this._id; } // Acesso controlado
}
```
**Como:** Atributos internos são protegidos, acesso apenas via getters.

### Herança
**Onde:** `AdVideo` e `LiveStream` herdam de `Video`
```typescript
export class AdVideo extends Video {
    private _sponsor: string;
    
    constructor(id: string, title: string, duration: number, sponsor: string) {
        super(id, title, duration); // Chama construtor da classe mãe
        this._sponsor = sponsor;
    }
}
```
**Como:** Subclasses reutilizam código da classe mãe e adicionam funcionalidades especificas.

### Polimorfismo
**Onde:** Método `getInfo()` implementado diferentemente em cada classe
```typescript
// Video
getInfo(): string {
    return `[Vídeo] ${this._title} (${this._duration}s)`;
}

// AdVideo
getInfo(): string {
    return `[Anúncio] ${this._title} - ${this._sponsor} (${this._duration}s)`;
}

// LiveStream
getInfo(): string {
    return `[Live] ${this._title} - ${this._streamer} (AO VIVO)`;
}
```
**Como:** Mesmo método, comportamentos diferentes dependendo do tipo de objeto.