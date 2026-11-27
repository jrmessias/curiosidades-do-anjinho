# Curiosidades do Anjinho

Landing page dos kits de Trunfo e atividades para imprimir, para crianças a partir de 6 anos.

Site: https://curiosidades-do-anjinho.vercel.app · Instagram: [@curiosidades.do.anjinho](https://instagram.com/curiosidades.do.anjinho)

## Stack

React 19, Vite 7 e [motion](https://motion.dev). Sem backend: o formulário de contato envia pelo [Web3Forms](https://web3forms.com).

## Rodar

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # gera dist/
npm run preview   # serve o dist/ local
```

## Onde mudar o conteúdo

Quase tudo fica em `src/dados.js`:

- **Preços:** `PRECO_KIT`, `PRECO_COMPLETA`, `PRECO_CHECKLISTS`.
- **Links de checkout da Cakto:** `LINK_*`. Link vazio mostra o botão "Em breve" no lugar do de compra.
- **Contato:** `WHATSAPP` (só dígitos, com DDI e DDD), `INSTAGRAM` (sem @), `WHATSAPP_MSG`, `WEB3FORMS_KEY`. Sem chave do Web3Forms, o formulário abre o WhatsApp.
- **Kits:** `KITS`, com número de baralhos e atividades. Atualize quando entrar baralho ou material novo.
- **Checklists:** `CHECKLISTS`.
- **Dúvidas:** a lista do FAQ.

Layout e seções ficam em `src/App.jsx`; estilos em `src/index.css`; imagens em `public/img/`.

## Texto

O texto fala com pais de meninos e meninas: "seus filhos", "as crianças", "dele e dela". Evite "seu filho" ou "dele" sozinhos.

## Git

Git flow: `main` é o que está no ar, `develop` recebe as features (`feature/...`), e cada versão sai por `release/X.Y.Z` com tag. A versão fica no `package.json`.

## Deploy

Vercel, com o conteúdo da `main` (projeto `curiosidades-do-anjinho`).
