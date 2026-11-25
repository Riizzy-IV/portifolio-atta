import { useEffect, useState } from 'react';
import { TOUCHS, WEBS } from './projetos';

const Seta = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);
const Play = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
);
const Fechar = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
);

const TODOS = [
  ...TOUCHS.map(p => ({ ...p, tipo: 'touch' })),
  ...WEBS.map(p => ({ ...p, tipo: 'web' })),
];
const FILTROS = [
  { id: 'todos', label: 'Todos', n: TODOS.length },
  { id: 'touch', label: 'Atta Touch', n: TOUCHS.length },
  { id: 'web', label: 'Atta Web', n: WEBS.length },
];

const GRUPOS = [
  { id: 'touch', label: 'Atta Touch', txt: 'No estande, no totem e no tablet · toque para navegar aqui mesmo' },
  { id: 'web', label: 'Atta Web', txt: 'O 3D no navegador · abre numa aba nova' },
];

/* janela com o Atta Touch rodando ao vivo (o app é desenhado em 1440 × 810 e se ajusta à janela) */
function Visor({ projeto, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="visor" onClick={onClose}>
      <div className="visorCaixa" onClick={(e) => e.stopPropagation()}>
        <div className="visorTopo">
          <div>
            <small>Atta Touch</small>
            <strong>{projeto.nome}</strong>
          </div>
          <div className="visorAcoes">
            <a className="botao botaoVidro" href={projeto.url} target="_blank" rel="noreferrer">Tela cheia <Seta /></a>
            <button className="fechar" onClick={onClose} aria-label="Fechar"><Fechar /></button>
          </div>
        </div>
        <div className="visorTela">
          <iframe src={projeto.url} title={projeto.nome} allow="fullscreen; autoplay; xr-spatial-tracking; accelerometer; gyroscope" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

function Card({ p, onAbrir }) {
  const web = p.tipo === 'web';
  const miolo = (
    <>
      <span className="cardImg">
        <img src={`/img/projetos/${p.id}.webp`} alt={p.nome} />
        <span className={`selo ${web ? 'seloWeb' : ''}`}>{web ? 'Atta Web' : 'Atta Touch'}</span>
        <span className="cardAcao">{web ? <>Abrir <Seta /></> : <><Play /> Explorar</>}</span>
      </span>
      <span className="cardInfo">
        <strong>{p.nome}</strong>
        <small>{p.cliente}</small>
      </span>
    </>
  );
  return web
    ? <a className="card" href={p.url} target="_blank" rel="noreferrer">{miolo}</a>
    : <button className="card" onClick={() => onAbrir(p)}>{miolo}</button>;
}

export default function App() {
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);

  /* três colunas de telas subindo devagar, atrás do título */
  const colunas = [0, 1, 2].map(c => TODOS.filter((_, i) => i % 3 === c));

  return (
    <>
      <header className="topo">
        <img className="logo" src="/img/atta-logo.png" alt="ATTA3D" />
        <a href="https://atta3d.com.br" target="_blank" rel="noreferrer" className="botao botaoVidro">atta3d.com.br <Seta /></a>
      </header>

      <section className="hero">
        <div className="mosaico" aria-hidden="true">
          {colunas.map((col, c) => (
            <div key={c} className={`coluna coluna${c}`}>
              {[...col, ...col].map((p, i) => <img key={i} src={`/img/projetos/${p.id}.webp`} alt="" />)}
            </div>
          ))}
        </div>
        <div className="heroVeu" />
        <div className="heroTxt">
          <p className="eyebrow">Portfólio</p>
          <h1>Imóveis para <span>tocar</span> e <span>explorar</span>.</h1>
          <p className="lead">Atta Touch no estande. Atta Web no navegador.</p>
          <a className="botao botaoRoxo" href="#projetos">Ver os {TODOS.length} projetos</a>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <div className="filtros">
          {FILTROS.map(f => (
            <button key={f.id} className={f.id === filtro ? 'ativo' : ''} onClick={() => setFiltro(f.id)}>
              {f.label}<i>{f.n}</i>
            </button>
          ))}
        </div>
        {/* em "Todos", os dois produtos aparecem em blocos separados, cada um com seu título */}
        {GRUPOS.filter(g => filtro === 'todos' || g.id === filtro).map(g => (
          <div key={`${filtro}-${g.id}`} className="grupo">
            <div className="grupoCab">
              <h2>{g.label}</h2>
              <span>{g.txt}</span>
            </div>
            <div className="grade">
              {TODOS.filter(p => p.tipo === g.id).map(p => <Card key={p.id} p={p} onAbrir={setAberto} />)}
            </div>
          </div>
        ))}
      </section>

      <footer className="rodape">
        <div>
          <h2>Vamos fazer o próximo?</h2>
          <a className="botao botaoRoxo" href="https://atta3d.com.br" target="_blank" rel="noreferrer">Fale com a ATTA3D <Seta /></a>
        </div>
        <div className="rodapeBase">
          <img src="/img/atta-logo.png" alt="ATTA3D" />
          <span>© {new Date().getFullYear()} ATTA3D · by Balzani</span>
        </div>
      </footer>

      {aberto && <Visor projeto={aberto} onClose={() => setAberto(null)} />}
    </>
  );
}
