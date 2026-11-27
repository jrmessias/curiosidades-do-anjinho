// ===== Ajuste aqui: precos e links de compra =====
export const PRECO_KIT = 9.90         // preco de cada kit tematico, em reais
export const PRECO_COMPLETA = 60      // preco da Colecao Completa, em reais

// links de checkout da Cakto (https://...). Vazio = botao "Em breve" no lugar do botao de compra
export const LINK_DINOSSAUROS = ''
export const LINK_FUNDO_DO_MAR = ''
export const LINK_BICHOS = ''
export const LINK_VEICULOS = ''
export const LINK_CIENCIA = ''
export const LINK_MUNDO = ''
export const LINK_BRASIL = ''
export const LINK_MITOLOGIA = ''
export const LINK_COMPLETA = ''

// checklists de rotina e organizacao
export const PRECO_CHECKLISTS = 9.90  // preco do kit de checklists, em reais
export const LINK_CHECKLISTS = ''

// contato
export const WHATSAPP = '5500000000000'  // DDI + DDD + numero, so digitos (ex.: 5511999998888)
export const WHATSAPP_MSG = 'Olá! Vim pelo site Curiosidades do Anjinho e quero saber mais sobre os kits.'
// endereco que recebe o formulario (ex.: https://formspree.io/f/xxxx). Vazio = o formulario abre o WhatsApp com a mensagem.
export const CONTATO_ENDPOINT = ''
// =================================================

export const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: Number.isInteger(v) ? 0 : 2 })

// Numeros de contar() em marketing/gerar.py (26/11/2026). Atualize aqui quando entrar baralho ou material novo.
export const KITS = [
  { id: 'dinossauros', link: LINK_DINOSSAUROS, titulo: 'Dinossauros', cor: '#5f3dc4', capa: 'dinossauros', baralhos: 3, atividades: 87,
    temas: 'Dinossauros, Pré-Históricos e Animais Extintos.' },
  { id: 'fundo-do-mar', link: LINK_FUNDO_DO_MAR, titulo: 'Fundo do Mar', cor: '#1971c2', capa: 'tubaroes', baralhos: 5, atividades: 140,
    temas: 'Tubarões, Vida Marinha, Peixes, Mamíferos Marinhos, Crustáceos e Moluscos.' },
  { id: 'bichos', link: LINK_BICHOS, titulo: 'Bichos do Mundo', cor: '#2b8a3e', capa: 'felinos', baralhos: 16, atividades: 451,
    temas: 'Felinos, Safári, Cães, Cobras, Aves, Pássaros, Répteis, Anfíbios, Aranhas, Insetos (2), Venenosos, Fazenda, Madagascar, Ártico e Antártida.' },
  { id: 'veiculos', link: LINK_VEICULOS, titulo: 'Veículos e Máquinas', cor: '#c92a2a', capa: 'carros', baralhos: 10, atividades: 284,
    temas: 'Carros, Aviões, Trens, Motos, Navios, Helicópteros, Máquinas Gigantes, Militares, Tanques e Caças e Aviões Militares.' },
  { id: 'ciencia', link: LINK_CIENCIA, titulo: 'Espaço e Ciência', cor: '#364fc7', capa: 'espaco', baralhos: 10, atividades: 283,
    temas: 'Espaço, Planetas e Luas, Foguetes, Inventores, Montanhas e Vulcões, Frutas, Vírus, Bactérias, Doenças da História e Pedras e Minerais.' },
  { id: 'mundo', link: LINK_MUNDO, titulo: 'Volta ao Mundo', cor: '#0c8599', capa: 'paises', baralhos: 12, atividades: 264,
    temas: 'Países do Mundo, Américas, Europa, Ásia, África (2), Oceania, Seleções, Construções, Moedas, Esportes Olímpicos e Rios e Lagos.' },
  { id: 'brasil', link: LINK_BRASIL, titulo: 'Brasil', cor: '#2f9e44', capa: 'fauna-brasil', baralhos: 7, atividades: 219,
    temas: 'Fauna do Brasil, Folclore, Parques, Cidades, Esportes do Brasil e Jiu-Jítsu (adulto e infantil).' },
  { id: 'mitologia', link: LINK_MITOLOGIA, titulo: 'Mitologia', cor: '#e67700', capa: 'grega', baralhos: 4, atividades: 108,
    temas: 'Mitologia Grega, Nórdica, Egípcia e Criaturas Mitológicas.' },
]

export const COMPLETA = { baralhos: 67, atividades: 1836 }

export const MATERIAIS = [
  ['bingo', 'Bingo', 'Sorteie o nome e marque a foto na cartela.', 'Cartelas de bingo com fotos de dinossauros'],
  ['trilha', 'Trilha', 'Tabuleiro com desafios e cartas.', 'Tabuleiro de trilha com dinossauros'],
  ['quiz', 'Quiz', 'Perguntas com resposta no pé da carta.', 'Cartas de quiz com perguntas sobre dinossauros'],
  ['domino', 'Dominó', 'Junte cada nome à sua figura.', 'Peças de dominó com nome e foto'],
  ['poster', 'Pôster', 'Para pendurar no quarto.', 'Pôster com os dinossauros por grupo'],
  ['memoria', 'Memória', 'Junte cada foto ao seu nome.', 'Jogo da memória de dinossauros'],
]

export const PASSOS = [
  ['Escolha o tema', 'Seus filhos amam dinossauros? Carros? Espaço? Cada kit reúne os baralhos e as atividades de um tema.'],
  ['Imprima em casa', 'Você recebe os PDFs na hora, no e-mail. Imprima em papel comum ou mais grosso e recorte junto com as crianças.'],
  ['Joguem juntos', 'Uma rodada de Trunfo depois do jantar, um bingo no fim de semana, um quiz na viagem. Curiosidade que vira conversa.'],
]

export const FAQ = [
  ['Como recebo os materiais?', 'Logo depois do pagamento você recebe o acesso por e-mail. Os arquivos são PDFs prontos para baixar e imprimir.'],
  ['Preciso de impressora especial?', 'Não. Uma impressora comum em papel A4 resolve. Para as cartas durarem mais, use papel mais grosso (180 g) ou plastifique. Você também pode imprimir numa copiadora.'],
  ['Para qual idade é indicado?', 'A partir de 6 anos. Os menores brincam de bingo, memória e dominó com a ajuda de um adulto. Os maiores jogam Trunfo, quiz e trilha sozinhos ou com a família, e muitos adultos entram no jogo também.'],
  ['Posso imprimir mais de uma vez?', 'Sim. Imprima quantas vezes quiser para uso da sua família, por exemplo se uma carta rasgar ou se chegar um irmão.'],
  ['Os dados das cartas são reais?', 'Sim. Tamanhos, pesos, populações e datas vêm de fontes confiáveis, e cada carta traz uma curiosidade.'],
  ['Vai ter material novo?', 'Sim. A coleção não para de crescer: entram novos baralhos e atividades. Quem tem a Coleção Completa recebe as novidades sem pagar de novo. Os checklists, vendidos à parte, também ganham modelos novos, e quem comprou recebe sem pagar de novo.'],
  ['Achei um dado errado ou um problema no arquivo. O que faço?', 'Fale com a gente pelo botão do WhatsApp no canto da tela ou pelo link Fale com a gente, no rodapé. Vale para dado errado em alguma carta, problema para baixar ou arquivo que não abre ou não imprime direito. Corrigimos o arquivo.'],
  ['Qual é o formato dos arquivos?', 'PDF em tamanho A4, que abre no celular, no tablet e no computador.'],
]

// saida/pdf/checklists: cada um em versao menino e menina
export const CHECKLISTS = {
  itens: ['Rotina da manhã', 'Rotina da noite', 'Tarefas da semana', 'Mochila', 'Futebol', 'Vôlei', 'Basquete', 'Natação', 'Judô', 'Jiu-jítsu', 'Caratê', 'Balé', 'Patinação'],
  fotos: [
    ['rotina-manha-menina', 'Checklist da rotina da manhã com desenhos de cada passo'],
    ['tarefas-semana-menino', 'Quadro de tarefas da semana com bolinhas para pintar'],
    ['mochila-menina', 'Checklist da mochila com roupas e material da escola'],
    ['jiujitsu-menino', 'Checklist da bolsa de jiu-jítsu com kimono, faixa e garrafinha'],
  ],
}
