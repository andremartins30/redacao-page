# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3238ee70-77c3-4c69-addb-50ee4d46ac1e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3238ee70-77c3-4c69-addb-50ee4d46ac1e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You have two easy options:

1) Lovable Publish
- Open [Lovable](https://lovable.dev/projects/3238ee70-77c3-4c69-addb-50ee4d46ac1e) and click on Share -> Publish.

2) Deploy na Vercel (recomendado)
- Este projeto é um app Vite + React estático. Já adicionamos o arquivo `vercel.json` com um rewrite para suportar rotas do React Router em produção.
- Passos:
	- Faça login em https://vercel.com e clique em “Add New… > Project”.
	- Importar este repositório do GitHub.
	- Framework Preset: Vite (Vercel detecta automaticamente).
	- Build Command: `npm run build` (ou `bun run build`, se preferir Bun).
	- Output Directory: `dist`.
	- Variáveis de ambiente: não é necessário nada para rodar a landing, adicione apenas se sua app precisar.
	- Clique em Deploy.

Sobre rotas SPA
- Como usamos `BrowserRouter`, a Vercel precisa fazer rewrite de qualquer URL para `index.html`. O arquivo `vercel.json` já garante isso:

```
{
	"version": 2,
	"rewrites": [
		{ "source": "/(.*)", "destination": "/index.html" }
	]
}
```

Após o primeiro deploy, os pushes na branch principal (main) disparam novos deploys automaticamente.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
