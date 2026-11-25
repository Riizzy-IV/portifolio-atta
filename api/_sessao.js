/* Sessão da LP: o cookie guarda um hash de usuário + senha + segredo. Quem não tem o cookie certo
   é mandado para /login.html (ver middleware.js). Usuário, senha e segredo ficam nas variáveis de
   ambiente da Vercel: LP_USUARIO, LP_SENHA e LP_SEGREDO. */
export const COOKIE = 'atta_sessao';

export async function tokenEsperado() {
  const { LP_USUARIO = '', LP_SENHA = '', LP_SEGREDO = 'atta3d' } = process.env;
  const dados = new TextEncoder().encode(`${LP_USUARIO}:${LP_SENHA}:${LP_SEGREDO}`);
  const hash = await crypto.subtle.digest('SHA-256', dados);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export function lerCookie(cabecalho, nome) {
  const par = (cabecalho || '').split(/;\s*/).find(c => c.startsWith(`${nome}=`));
  return par ? decodeURIComponent(par.slice(nome.length + 1)) : '';
}
