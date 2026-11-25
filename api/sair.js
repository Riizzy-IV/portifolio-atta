import { COOKIE } from './_sessao.js';

/* GET /api/sair: apaga a sessão e volta para a tela de login */
export function GET() {
  return new Response(null, {
    status: 303,
    headers: {
      Location: '/login.html',
      'Set-Cookie': `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}
