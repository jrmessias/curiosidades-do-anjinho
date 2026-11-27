import { motion, AnimatePresence, MotionConfig, useScroll, useTransform, animate, useInView, useMotionValue, useMotionValueEvent } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { KITS, COMPLETA, MATERIAIS, PASSOS, FAQ, PRECO_KIT, PRECO_COMPLETA, LINK_COMPLETA, brl,
  CHECKLISTS, PRECO_CHECKLISTS, PRECO_PACOTE_CHK, LINK_CHECKLISTS, WHATSAPP, WHATSAPP_MSG, WEB3FORMS_KEY, INSTAGRAM } from './dados.js'

const img = (f) => `${import.meta.env.BASE_URL}img/${f}`
const zap = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
// sem link real da Cakto (vazio ou '#...'), o botao de compra vira "Em breve"
const temLink = (l) => /^https?:\/\//.test(l)
const EmBreve = () => <span className="btn em-breve">Em breve</span>
const totalChk = CHECKLISTS.pacotes.reduce((n, p) => n + p.itens.length, 0)
const mola = { type: 'spring', stiffness: 260, damping: 22 }

// sobe e aparece quando entra na tela; filhos entram em sequencia
const grupo = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }
const naTela = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.2 } }

function Cab({ rotulo, titulo, texto }) {
  return (
    <motion.div className="cab" variants={grupo} {...naTela}>
      <motion.div className="rotulo" variants={item}>{rotulo}</motion.div>
      <motion.h2 variants={item}>{titulo}</motion.h2>
      {texto && <motion.p variants={item}>{texto}</motion.p>}
    </motion.div>
  )
}

function Contador({ ate }) {
  const ref = useRef(null)
  const visto = useInView(ref, { once: true })
  const v = useMotionValue(0)
  const txt = useTransform(v, (n) => Math.round(n).toLocaleString('pt-BR'))
  useEffect(() => {
    if (visto) return animate(v, ate, { duration: 1.4, ease: 'easeOut' }).stop
  }, [visto, ate, v])
  return <motion.b ref={ref}>{txt}</motion.b>
}

function Leque() {
  const { scrollY } = useScroll()
  const sobe = useTransform(scrollY, [0, 600], [0, -60])
  const cartas = [
    ['c1', 'carta-tubaroes-1B.png', -24],
    ['c2', 'carta-espaco-6B.png', 24],
    ['c3', 'carta-dinossauros-1B.png', 0],
  ]
  return (
    <motion.div className="leque" aria-hidden="true" style={{ y: sobe }}>
      {cartas.map(([c, f, giro], i) => (
        <div className={`carta ${c}`} key={c}>
          <motion.img
            src={img(f)} alt=""
            initial={{ opacity: 0, y: 120, rotate: -giro }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ ...mola, delay: 0.25 + i * 0.12 }}
            whileHover={{ y: -14, rotate: giro / 6, transition: mola }}
          />
        </div>
      ))}
    </motion.div>
  )
}

function Pergunta({ q, r }) {
  const [aberta, setAberta] = useState(false)
  return (
    <motion.div className="item" variants={item}>
      <button aria-expanded={aberta} onClick={() => setAberta(!aberta)}>
        {q}
        <motion.span className="sinal" animate={{ rotate: aberta ? 45 : 0 }} transition={mola} aria-hidden="true">+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {aberta && (
          <motion.div className="resp" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <p>{r}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Contato({ dlg }) {
  const [estado, setEstado] = useState('') // '', 'enviando', 'ok', 'erro'
  async function enviar(e) {
    e.preventDefault()
    const dados = Object.fromEntries(new FormData(e.target))
    if (!WEB3FORMS_KEY) {
      window.open(zap(`Olá! Sou ${dados.nome} (${dados.email}, ${dados.telefone}).\n\n${dados.mensagem}`), '_blank', 'noopener')
      return setEstado('ok')
    }
    setEstado('enviando')
    try {
      const corpo = new FormData(e.target)
      corpo.append('access_key', WEB3FORMS_KEY)
      corpo.append('subject', `Contato pelo site: ${dados.nome}`)
      corpo.append('from_name', 'Curiosidades do Anjinho')
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: corpo })
      if (!(await r.json()).success) throw new Error(r.status)
      e.target.reset(); setEstado('ok')
    } catch { setEstado('erro') }
  }
  return (
    <dialog className="contato" ref={dlg} onClose={() => setEstado('')}
      onClick={(e) => e.target === dlg.current && dlg.current.close()}>
      <form onSubmit={enviar}>
        <button type="button" className="fechar" aria-label="Fechar" onClick={() => dlg.current.close()}>×</button>
        <input type="checkbox" name="botcheck" className="isca" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <h2>Fale com a gente</h2>
        <p>Dúvida sobre os kits, um tema que seus filhos amam ou uma sugestão. Respondemos rápido.</p>
        <label>Nome<input name="nome" autoFocus required autoComplete="name" maxLength={80} /></label>
        <label>E-mail<input name="email" type="email" required autoComplete="email" maxLength={120} /></label>
        <label>Telefone<input name="telefone" type="tel" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="(11) 99999-8888" /></label>
        <label>Mensagem<textarea name="mensagem" required rows="4" maxLength={1500} /></label>
        <button className="btn btn-roxo" disabled={estado === 'enviando'}>{estado === 'enviando' ? 'Enviando…' : 'Enviar mensagem'}</button>
        <p className="aviso" role="status">
          {estado === 'ok' && 'Mensagem enviada. Obrigado!'}
          {estado === 'erro' && 'Não deu para enviar agora. Tente de novo ou chame no WhatsApp.'}
        </p>
      </form>
    </dialog>
  )
}

export default function App() {
  const dlg = useRef(null)
  const [rolou, setRolou] = useState(false)
  useMotionValueEvent(useScroll().scrollY, 'change', (y) => setRolou(y > 20))
  const abrirContato = (e) => { e.preventDefault(); dlg.current.showModal() }
  return (
    <MotionConfig reducedMotion="user">
      <header className={rolou ? 'topo rolou' : 'topo'}>
        <div className="wrap">
          <a className="marca" href="#">
            <motion.img src={`${import.meta.env.BASE_URL}icon-192.png`} alt="" width="52" height="52"
              initial={{ rotate: -90, scale: 0.4, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }}
              whileHover={{ rotate: 12, scale: 1.08 }} transition={mola} />
            Curiosidades do Anjinho
          </a>
          <nav><a href="#como">Como funciona</a><a href="#kits">Kits</a><a href="#completa">Coleção completa</a><a href="#checklists">Checklists</a><a href="#faq">Dúvidas</a><a href="#contato" onClick={abrirContato}>Contato</a></nav>
        </div>
      </header>

      <section className="hero">
        <div className="aurora" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="wrap">
          <motion.div variants={grupo} initial="hidden" animate="show">
            <motion.div className="rotulo" variants={item}>Jogos para imprimir · 6+ anos</motion.div>
            <motion.h1 style={{ marginTop: 14 }} variants={item}>Os filhos crescem rápido. <em className="brilho">Faça valer o tempo junto.</em></motion.h1>
            <motion.p variants={item}>Jogos de Trunfo e atividades para imprimir em casa e jogar com seus filhos, longe da tela. Dinossauros, tubarões, países, planetas e muito mais. As crianças aprendem brincando, e vocês ficam juntos de verdade.</motion.p>
            <motion.div className="acoes" variants={item}>
              <motion.a className="btn btn-ouro" href="#kits" whileTap={{ scale: 0.96 }}>Escolher um kit</motion.a>
              <motion.a className="btn btn-claro" href="#completa" whileTap={{ scale: 0.96 }}>Coleção completa · {brl(PRECO_COMPLETA)}</motion.a>
            </motion.div>
            <motion.div className="selos" variants={item}><span>Imprima quantas vezes quiser</span><span>Dados reais e curiosidades</span><span>Acesso na hora</span><span>Novos materiais sempre</span></motion.div>
          </motion.div>
          <Leque />
        </div>
      </section>

      <section className="historia">
        <motion.div className="wrap" variants={grupo} {...naTela}>
          <motion.div className="aspas" aria-hidden="true" variants={item}>“</motion.div>
          <motion.p variants={item}>Comecei a fazer estes jogos para brincar com meu filho. No jiu-jítsu ele ficou conhecido como Anjinho, e o nome ficou. Cada rodada de Trunfo vira uma pergunta nova: qual é o maior dinossauro? Qual país tem mais gente?
            <small>Um pai, criando para o próprio filho e agora para a sua família.</small></motion.p>
        </motion.div>
      </section>

      <section className="bloco" id="como">
        <div className="wrap">
          <Cab rotulo="Como funciona" titulo="Do PDF à mesa da sala em minutos" texto="Sem aplicativo, sem tela e sem nada para instalar." />
          <motion.div className="passos" variants={grupo} {...naTela}>
            {PASSOS.map(([t, d]) => (
              <motion.div className="passo" key={t} variants={item}><h3>{t}</h3><p>{d}</p></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bloco materiais">
        <div className="wrap">
          <Cab rotulo="O que vem nos kits" titulo="Muito mais que cartas" texto="Cada tema vem com o jogo de Trunfo e dezenas de atividades. Veja alguns exemplos do Kit Dinossauros." />
          <motion.div className="mats" variants={grupo} {...naTela}>
            {MATERIAIS.map(([f, t, d, alt]) => (
              <motion.figure className="mat" key={f} variants={item} whileHover={{ y: -6, rotate: -0.6 }} transition={mola}>
                <img src={img(`mat-${f}.jpg`)} alt={alt} loading="lazy" />
                <figcaption><b>{t}</b><span>{d}</span></figcaption>
              </motion.figure>
            ))}
          </motion.div>
          <motion.p className="mais" variants={item} {...naTela}>E ainda: álbum de figurinhas, caça-palavras e labirintos, palavras cruzadas, flashcards, jogo da velha, ligue os pontos, mini livro, leitura, matemática, linha do tempo, calendário 2027, marcadores de página, quadro de recompensas e outras.</motion.p>
        </div>
      </section>

      <section className="bloco" id="kits">
        <div className="wrap">
          <Cab rotulo="Os kits" titulo="Escolha o tema favorito" texto={`Cada kit custa ${brl(PRECO_KIT)} e traz todos os baralhos e atividades do tema.`} />
          <motion.div className="kits" variants={grupo} {...naTela}>
            {KITS.map((k) => (
              <motion.article className="kit" key={k.id} style={{ '--c': k.cor }} variants={item}
                whileHover={{ y: -8, boxShadow: '0 18px 30px rgba(31,26,46,.16)' }} transition={mola}>
                <div className="capa"><motion.img src={img(`capa-${k.capa}.jpg`)} alt={`Capa do kit ${k.titulo}`} loading="lazy"
                  whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} /></div>
                <div className="corpo">
                  <h3>{k.titulo}</h3>
                  <div className="nums"><b>{k.baralhos}</b> baralhos · <b>{k.atividades}</b> atividades</div>
                  <div className="temas">{k.temas}</div>
                  <div className="rodape">
                    <div className="preco">{brl(PRECO_KIT)}</div>
                    {temLink(k.link) ? <motion.a className="btn" href={k.link} whileTap={{ scale: 0.95 }}>Quero este</motion.a> : <EmBreve />}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bloco" id="completa" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <motion.div className="oferta" initial={{ opacity: 0, scale: 0.96, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div variants={grupo} {...naTela}>
              <motion.div className="rotulo" variants={item}>Melhor oferta</motion.div>
              <motion.h2 variants={item}>Coleção Completa</motion.h2>
              <ul>
                <motion.li variants={item}><b>Os 8 kits</b> em um só pedido</motion.li>
                <motion.li variants={item}><Contador ate={COMPLETA.baralhos} /> baralhos de Trunfo</motion.li>
                <motion.li variants={item}><Contador ate={COMPLETA.atividades} /> atividades para imprimir</motion.li>
                <motion.li variants={item}>Novos materiais que entrarem na coleção</motion.li>
              </ul>
              <motion.div className="valor" variants={item}>
                <span className="de">{brl(KITS.length * PRECO_KIT)} nos kits separados</span>
                <motion.span className="por" initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.4 }}>{brl(PRECO_COMPLETA)}</motion.span>
              </motion.div>
              {temLink(LINK_COMPLETA) ? <motion.a className="btn btn-ouro" href={LINK_COMPLETA}
                animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
                whileTap={{ scale: 0.96 }}>Quero a coleção completa</motion.a> : <EmBreve />}
            </motion.div>
            <motion.img src={img('kit-completo.png')} alt="Arte da Coleção Completa com cartas de Trunfo" loading="lazy"
              initial={{ rotate: 8, x: 40, opacity: 0 }} whileInView={{ rotate: 2, x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ ...mola, delay: 0.2 }} />
          </motion.div>
        </div>
      </section>

      <section className="bloco checklists" id="checklists">
        <div className="wrap">
          <div className="chk">
            <motion.div variants={grupo} {...naTela}>
              <motion.div className="rotulo" variants={item}>Checklists de rotina</motion.div>
              <motion.h2 variants={item}>Checklists para a rotina dele e dela</motion.h2>
              <motion.p variants={item}>Menos briga para sair de casa. Cada passo tem um desenho, e a criança marca sozinha o que já fez. Tem checklist para a escola, para o esporte, para viajar e para os hábitos do dia a dia. Assim as crianças ganham autonomia, e você não precisa repetir a mesma coisa toda hora.</motion.p>
              <motion.p className="obs" variants={item}><b>{totalChk} checklists</b> em versão menino e menina, em 4 pacotes de {brl(PRECO_PACOTE_CHK)}. Imprima, cole na porta do quarto ou plastifique e use caneta de quadro branco. Novos modelos entram sempre, e quem comprou recebe sem pagar de novo.</motion.p>
              <motion.div className="completo" variants={item}>
                <div>
                  <b>Checklists Completo</b>
                  <span>Os {totalChk} checklists dos 4 pacotes</span>
                  <span className="de">{brl(CHECKLISTS.pacotes.length * PRECO_PACOTE_CHK)} nos pacotes separados</span>
                </div>
                <div className="preco">{brl(PRECO_CHECKLISTS)}</div>
                {temLink(LINK_CHECKLISTS) ? <motion.a className="btn btn-roxo" href={LINK_CHECKLISTS} whileTap={{ scale: 0.96 }}>Quero todos</motion.a> : <EmBreve />}
              </motion.div>
            </motion.div>
            <motion.div className="folhas" variants={grupo} {...naTela}>
              {CHECKLISTS.fotos.map(([f, alt], i) => (
                <motion.img key={f} src={img(`chk-${f}.jpg`)} alt={alt} loading="lazy" variants={item}
                  style={{ rotate: [-4, 3, -2, 4][i] }} whileHover={{ rotate: 0, scale: 1.05, zIndex: 2 }} transition={mola} />
              ))}
            </motion.div>
          </div>
          <motion.div className="kits pacotes" variants={grupo} {...naTela}>
            {CHECKLISTS.pacotes.map((p) => (
              <motion.article className="kit" key={p.id} style={{ '--c': p.cor }} variants={item}
                whileHover={{ y: -8, boxShadow: '0 18px 30px rgba(31,26,46,.16)' }} transition={mola}>
                <div className="capa"><img src={img(`kit-chk-${p.id}.png`)} alt={`Arte do pacote ${p.titulo}`} loading="lazy" /></div>
                <div className="corpo">
                  <h3>{p.titulo}</h3>
                  <div className="nums"><b>{p.itens.length}</b> checklists</div>
                  <div className="temas">{p.itens.join(', ')}.</div>
                  <div className="rodape">
                    <div className="preco">{brl(PRECO_PACOTE_CHK)}</div>
                    {temLink(p.link) ? <motion.a className="btn" href={p.link} whileTap={{ scale: 0.95 }}>Quero este</motion.a> : <EmBreve />}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bloco" id="faq">
        <div className="wrap">
          <Cab rotulo="Dúvidas" titulo="Perguntas frequentes" />
          <motion.div className="faq" variants={grupo} {...naTela}>
            {FAQ.map(([q, r]) => <Pergunta key={q} q={q} r={r} />)}
          </motion.div>
        </div>
      </section>

      <section className="fim">
        <div className="aurora" aria-hidden="true"><i /><i /><i /><i /></div>
        <motion.div variants={grupo} {...naTela}>
          <motion.h2 variants={item}>Hoje à noite pode ter uma rodada de Trunfo na sua casa</motion.h2>
          <motion.p variants={item}>Escolha um kit, imprima e chame as crianças para jogar.</motion.p>
          <motion.a className="btn btn-ouro" href="#kits" variants={item} whileTap={{ scale: 0.96 }}>Ver os kits</motion.a>
          <motion.p className="siga" variants={item}>Ideias de brincadeiras e novidades no Instagram: <a className="insta" href={`https://www.instagram.com/${INSTAGRAM}/`} target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2S2.8 5 2.6 5.6c-.3.6-.4 1.4-.5 2.4C2 9 2 9.3 2 12s0 3 .1 4.1c0 1 .2 1.8.5 2.4.3.7.6 1.2 1.2 1.8s1.1.9 1.8 1.2c.6.3 1.4.4 2.4.5 1 .1 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2s.9-1.1 1.2-1.8c.3-.6.4-1.4.5-2.4.1-1 .1-1.4.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8S19 2.8 18.4 2.6c-.6-.3-1.4-.4-2.4-.5C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1.9 0 1.5.2 1.8.3.5.2.8.4 1.1.7.4.4.6.7.7 1.1.1.3.3.9.3 1.8.1 1 .1 1.4.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.4.4-.7.6-1.1.7-.3.1-.9.3-1.8.3-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.4-.4-.6-.7-.7-1.1-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.5.4-.8.7-1.1.4-.4.7-.6 1.1-.7.3-.1.9-.3 1.8-.3 1-.1 1.4-.1 4-.1Z"/></svg>@{INSTAGRAM}</a></motion.p>
        </motion.div>
      </section>

      <footer>Curiosidades do Anjinho · Jogos e atividades para imprimir · a partir de 6 anos · <a href="#contato" onClick={abrirContato}>Fale com a gente</a> · <a className="insta" href={`https://www.instagram.com/${INSTAGRAM}/`} target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2S2.8 5 2.6 5.6c-.3.6-.4 1.4-.5 2.4C2 9 2 9.3 2 12s0 3 .1 4.1c0 1 .2 1.8.5 2.4.3.7.6 1.2 1.2 1.8s1.1.9 1.8 1.2c.6.3 1.4.4 2.4.5 1 .1 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2s.9-1.1 1.2-1.8c.3-.6.4-1.4.5-2.4.1-1 .1-1.4.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8S19 2.8 18.4 2.6c-.6-.3-1.4-.4-2.4-.5C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1.9 0 1.5.2 1.8.3.5.2.8.4 1.1.7.4.4.6.7.7 1.1.1.3.3.9.3 1.8.1 1 .1 1.4.1 4s0 3-.1 4c0 .9-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.4.4-.7.6-1.1.7-.3.1-.9.3-1.8.3-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.4-.4-.6-.7-.7-1.1-.1-.3-.3-.9-.3-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c0-.9.2-1.5.3-1.8.2-.5.4-.8.7-1.1.4-.4.7-.6 1.1-.7.3-.1.9-.3 1.8-.3 1-.1 1.4-.1 4-.1Z"/></svg>@{INSTAGRAM}</a></footer>

      <motion.a className="zap" href={zap(WHATSAPP_MSG)} target="_blank" rel="noopener" aria-label="Conversar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...mola, delay: 1.2 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}>
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2a13.2 13.2 0 0 0 6.6 1.7c7.2 0 13-5.7 13-12.8S23.2 3 16 3Zm0 23.4c-2.1 0-4.1-.6-5.8-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.7-5.8C5.2 10 10 5.3 16 5.3s10.8 4.7 10.8 10.5S22 26.4 16 26.4Zm5.9-7.8c-.3-.2-1.9-1-2.2-1-.3-.2-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.6 4.9 2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z"/></svg>
      </motion.a>

      <Contato dlg={dlg} />
    </MotionConfig>
  )
}
