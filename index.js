var musicas = [
    {titulo: 'Dirt', artista: 'Alice in Chains', src:'musicas/Dirt.flac', img:'imagens/alice-in-chains.jpg'},
    {titulo: 'Black Hole Sun', artista: 'Soundgarden', src:'musicas/Soundgarden - Black Hole Sun.mp3', img:'imagens/soundgarden.jpg'},
    {titulo: 'Long Gone Day', artista: 'Mad Season', src:'musicas/Mad Season - Long Gone Day.mp3', img:'imagens/madseason.jpg'}
]

var musica = document.querySelector('audio')
var indexMusica = 0

var duracaoMusica = document.querySelector('.fim')
var imagem = document.querySelector('img')
var nomeMusica = document.querySelector('.descricao h1')
var nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

//evento clique
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
//eventoMusica
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas [index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}

//funçaoTocar
function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

//função pausar
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

//funçãoAtualizarBarra
function atualizarBarra(){
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    var tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

//funcão Transformar
function segundosParaMinutos(segundos){
    var campoMinutos = Math.floor(segundos /60)
    var campoSegundos = segundos%60
    if (campoSegundos<10){
        campoSegundos = '0'+ campoSegundos
    } 
    return campoMinutos + ':' + campoSegundos
}


