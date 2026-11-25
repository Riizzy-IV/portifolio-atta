/* categoria: 'vertical' (prédios, padrão) ou 'horizontal' (loteamentos).
   Projetos do portfólio: tanto o Atta Touch quanto o Atta Web abrem ao vivo numa janela por cima da página. */
export const TOUCHS = [
  { id: 'arvoredo', nome: 'Arvoredo Residencial', cidade: 'Salvador · BA', cliente: 'Azinunes', url: 'https://arvoredo.atta3d.com.br/' },
  { id: 'openview', nome: 'Open View 47', cidade: 'Alphaville · Barueri · SP', cliente: 'Dubai Incorporação', url: 'https://openview47.vercel.app/' },
  { id: 'edensky', nome: 'Eden Sky', cidade: 'Vitória da Conquista · BA', cliente: 'Andrade Borré', url: 'https://eden-skyv2.vercel.app/' },
  { id: 'zabaleta', nome: 'Zabaleta Milano', cidade: 'Pelotas · RS', cliente: 'Zabaleta', url: 'https://zabaleta.vercel.app/' },
  { id: 'senses', nome: 'Senses', cidade: 'São José dos Campos · SP', cliente: 'M Vituzzo', url: 'https://senses.atta3d.com.br/' },
  { id: 'vivaclub', nome: 'Viva Club', cidade: 'Botucatu · SP', cliente: 'Luiz Targa', url: 'https://vivaclub.atta3d.com.br/' },
  { id: 'lindenberg', nome: 'Edifício Adolpho Lindenberg', cidade: 'Moema · São Paulo · SP', cliente: 'Lindenberg', url: 'https://adolpholindenberg.atta3d.com.br/' },
  { id: 'bromelias', nome: 'Reserva das Bromélias', cidade: 'Juiz de Fora · MG', cliente: 'INC', url: 'https://reservadasbromelias.atta3d.com.br/' },
  { id: 'atlantida', nome: 'Atlântida SE', cidade: 'Pajuçara · Maceió · AL', cliente: 'SPE Investimentos', url: 'https://atlantida.atta3d.com.br/' },
  { id: 'bravia-touch', nome: 'Brávia Marina & Beach Club', cidade: 'Maquiné · RS', cliente: 'Amis', categoria: 'horizontal', url: 'https://bravia.atta3d.com.br/' },
  { id: 'vertice-touch', nome: 'Vértice Anália Franco', cidade: 'Anália Franco · São Paulo · SP', cliente: 'Zimbel · Housi', url: 'https://vertice.atta3d.com.br/' },
];

const EMBED = (slug) => `https://editor.atta3d.com.br/projetos/${slug}/embed?embedMode=inline`;

/* Atta Web: o link de embed (/projetos/<slug>/embed) aceita ser exibido dentro da LP, então abre na mesma
   janela dos Touch; "Tela cheia" leva para a página do projeto no editor. */
export const WEBS = [
  { id: 'vertice', nome: 'Vértice Anália Franco', cidade: 'São Paulo · SP', cliente: 'Zimbel · Housi', embed: EMBED('vertice'), url: 'https://editor.atta3d.com.br/interativo/vertice' },
  { id: 'patio-camino', nome: 'Pátio Camino', cidade: 'Iputinga · Recife · PE', cliente: 'Carrilho', embed: EMBED('patio-camino'), url: EMBED('patio-camino') },
  { id: 'bravia', nome: 'Brávia Marina & Beach Club', cidade: 'Maquiné · RS', cliente: 'Amis', categoria: 'horizontal', embed: EMBED('bravia-marina-e-beach-club'), url: EMBED('bravia-marina-e-beach-club') },
  { id: 'mud-sao-mateus', nome: 'MUD São Mateus', cidade: 'Torre residencial · acompanhamento de obra', cliente: 'MUD', embed: EMBED('mud-sao-mateus'), url: 'https://editor.atta3d.com.br/interativo/mud-sao-mateus' },
  { id: 'sustentare', nome: 'Portal das Rosas', cidade: 'Loteamento', cliente: 'Grupo Sustentare', categoria: 'horizontal', embed: EMBED('sustentare'), url: 'https://editor.atta3d.com.br/interativo/sustentare' },
];
