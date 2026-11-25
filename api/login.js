import { COOKIE, tokenEsperado } from './_sessao.js';

/* POST /api/login (formulário da tela de login): confere usuário e senha e grava a sessão por 30 dias */
export async function POST(request) {
  const form = await request.formData();
  const usuario = String(form.get('usuario') || '').trim();
  const senha = String(form.get('senha') || '');
  const { LP_USUARIO, LP_SENHA } = process.env;

  if (!LP_USUARIO || usuario.toLowerCase() !== LP_USUARIO.toLowerCase() || senha !== LP_SENHA) {
    return new Response(null, { status: 303, headers: { Location: '/login.html?erro=1' } });
  }

  const token = await tokenEsperado();
  return new Response(null, {
    status: 303,
    headers: {
      Location: '/',
      'Set-Cookie': `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`,
    },
  });
}
