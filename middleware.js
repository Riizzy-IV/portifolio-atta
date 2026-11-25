import { next } from '@vercel/functions';
import { COOKIE, tokenEsperado, lerCookie } from './api/_sessao.js';

/* Só entra quem fez login: qualquer página ou arquivo sem a sessão vai para a tela de login.
   Ficam abertos apenas a própria tela de login, o logo dela e as rotas de entrar/sair. */
export const config = {
  matcher: ['/((?!login\\.html|api/login|api/sair|img/atta-logo\\.png|favicon).*)'],
};

export default async function middleware(request) {
  const sessao = lerCookie(request.headers.get('cookie'), COOKIE);
  if (process.env.LP_USUARIO && sessao && sessao === (await tokenEsperado())) return next();
  return Response.redirect(new URL('/login.html', request.url), 302);
}
