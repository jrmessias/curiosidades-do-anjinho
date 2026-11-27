// ===== Ajuste aqui: precos e links de compra =====
export const PRECO_KIT = 9.90         // preco de cada kit tematico, em reais
export const PRECO_COMPLETA = 60      // preco da Colecao Completa, em reais

// links de checkout da Cakto (https://...). Vazio = botao "Em breve" no lugar do botao de compra
export const LINK_DINOSSAUROS = 'https://pay.cakto.com.br/36emq5u_1380389'
export const LINK_FUNDO_DO_MAR = 'https://pay.cakto.com.br/cxw3a3n_1380401'
export const LINK_BICHOS = 'https://pay.cakto.com.br/ysvaa64_1380408'
export const LINK_VEICULOS = 'https://pay.cakto.com.br/t4eprix_1380412'
export const LINK_CIENCIA = 'https://pay.cakto.com.br/34snswt_1380420'
export const LINK_MUNDO = 'https://pay.cakto.com.br/36sehhw_1380423'
export const LINK_BRASIL = 'https://pay.cakto.com.br/36fipda_1380426'
export const LINK_MITOLOGIA = 'https://pay.cakto.com.br/vir8rtw_1380428'
export const LINK_COMPLETA = 'https://pay.cakto.com.br/33m63tk_1380435'

// checklists: 4 pacotes (PRECO_PACOTE_CHK cada) ou o Checklists Completo
export const PRECO_PACOTE_CHK = 9.90   // preco de cada pacote de checklists, em reais
export const PRECO_CHECKLISTS = 24.90  // preco do Checklists Completo, em reais
export const LINK_CHECKLISTS = 'https://pay.cakto.com.br/w6mdp7m_1380480'  // Checklists Completo
export const LINK_CHK_ROTINA = 'https://pay.cakto.com.br/39xs4hq_1381188'
export const LINK_CHK_PASSEIOS = 'https://pay.cakto.com.br/688qnsh_1381207'
export const LINK_CHK_HABITOS = 'https://pay.cakto.com.br/36c76m9_1381212'
export const LINK_CHK_ESPORTES = 'https://pay.cakto.com.br/72u5hiz_1381215'

// contato
export const WHATSAPP = '5549988198409'  // DDI + DDD + numero, so digitos (ex.: 5511999998888)
export const INSTAGRAM = 'curiosidades.do.anjinho'  // usuario do Instagram, sem @
export const WHATSAPP_MSG = 'Olá! Vim pelo site Curiosidades do Anjinho e quero saber mais sobre os kits.'
// chave de acesso do Web3Forms (web3forms.com): as mensagens do formulario chegam no e-mail cadastrado nela.
// E publica por natureza (fica no HTML). Vazio = o formulario abre o WhatsApp com a mensagem.
export const WEB3FORMS_KEY = 'f4bf7a1b-e8eb-443b-9761-b91c024ffcf6'
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
  { id: 'veiculos', link: LINK_VEICULOS, titulo: 'Veículos e Máquinas', cor: '#c92a2a', capa: 'carros', baralhos: 11, atividades: 312,
    temas: 'Carros, Aviões, Trens, Motos, Navios, Helicópteros, Máquinas Gigantes, Militares, Tanques, Caças e Aviões Militares e Navios de Guerra.' },
  { id: 'ciencia', link: LINK_CIENCIA, titulo: 'Espaço e Ciência', cor: '#364fc7', capa: 'espaco', baralhos: 10, atividades: 283,
    temas: 'Espaço, Planetas e Luas, Foguetes, Inventores, Montanhas e Vulcões, Frutas, Vírus, Bactérias, Doenças da História e Pedras e Minerais.' },
  { id: 'mundo', link: LINK_MUNDO, titulo: 'Volta ao Mundo', cor: '#0c8599', capa: 'paises', baralhos: 12, atividades: 264,
    temas: 'Países do Mundo, Américas, Europa, Ásia, África (2), Oceania, Seleções, Construções, Moedas, Esportes Olímpicos e Rios e Lagos.' },
  { id: 'brasil', link: LINK_BRASIL, titulo: 'Brasil', cor: '#2f9e44', capa: 'fauna-brasil', baralhos: 7, atividades: 219,
    temas: 'Fauna do Brasil, Folclore, Parques, Cidades, Esportes do Brasil e Jiu-Jítsu (adulto e infantil).' },
  { id: 'mitologia', link: LINK_MITOLOGIA, titulo: 'Mitologia', cor: '#e67700', capa: 'grega', baralhos: 4, atividades: 108,
    temas: 'Mitologia Grega, Nórdica, Egípcia e Criaturas Mitológicas.' },
]

export const COMPLETA = { baralhos: 68, atividades: 1864 }

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
  ['O que tem de novo?', '27/11/2026: 5 baralhos novos de Trunfo, cada um com todas as atividades do tema. Kit Veículos e Máquinas: Caças e Aviões Militares e Navios de Guerra. Kit Volta ao Mundo: Rios e Lagos. Kit Espaço e Ciência: Pedras e Minerais. Kit Brasil: Jiu-Jítsu Infantil. Quem tem o kit ou a Coleção Completa recebe sem pagar de novo. Também em 27/11/2026: 19 checklists novos, em versão menino e menina, e agora os checklists são vendidos em 4 pacotes ou no Checklists Completo. Escola e casa: estojo, lição de casa, quarto arrumado, agenda da semana e cartões de rotina para a geladeira. Passeios: malas de praia, campo e frio, festa do pijama, piscina e clube, lancheira da semana. Hábitos e emoções: lavar as mãos, escovar os dentes, hora do banho, termômetro das emoções, antes do tablet, registro de leitura, segurança e banheiro público. Quem já comprou os checklists recebe tudo sem pagar de novo.'],
  ['Qual é o formato dos arquivos?', 'PDF em tamanho A4, que abre no celular, no tablet e no computador.'],
]

// saida/pdf/checklists/<area>: cada checklist em versao menino e menina
export const CHECKLISTS = {
  pacotes: [
    { id: 'rotina', link: LINK_CHK_ROTINA, titulo: 'Rotina e Organização', cor: '#1971c2',
      itens: ['Rotina da manhã', 'Rotina da noite', 'Mochila', 'Estojo', 'Lição de casa', 'Quarto arrumado', 'Tarefas da semana', 'Agenda da semana', 'Cartões de rotina'] },
    { id: 'passeios', link: LINK_CHK_PASSEIOS, titulo: 'Passeios e Ocasiões', cor: '#d9480f',
      itens: ['Mala da praia', 'Mala do campo', 'Mala do frio', 'Festa do pijama', 'Piscina e clube', 'Lancheira da semana'] },
    { id: 'habitos', link: LINK_CHK_HABITOS, titulo: 'Hábitos e Emoções', cor: '#2b8a3e',
      itens: ['Lavar as mãos', 'Escovar os dentes', 'Hora do banho', 'Termômetro das emoções', 'Antes do tablet', 'Registro de leitura', 'Segurança', 'Banheiro público'] },
    { id: 'esportes', link: LINK_CHK_ESPORTES, titulo: 'Esportes', cor: '#c2255c',
      itens: ['Futebol', 'Natação', 'Judô', 'Jiu-jítsu', 'Caratê', 'Balé', 'Vôlei', 'Basquete', 'Patinação'] },
  ],
  fotos: [
    ['rotina-manha-menina', 'Checklist da rotina da manhã com desenhos de cada passo'],
    ['tarefas-semana-menino', 'Quadro de tarefas da semana com bolinhas para pintar'],
    ['mochila-menina', 'Checklist da mochila com roupas e material da escola'],
    ['jiujitsu-menino', 'Checklist da bolsa de jiu-jítsu com kimono, faixa e garrafinha'],
  ],
}
