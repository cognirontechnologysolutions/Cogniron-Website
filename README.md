
  # Cogniron Website

  This is a code bundle for Cogniron Website. The original project is available at https://www.figma.com/design/tAZiaA0qmerjJGj6rbGQ50/Cogniron-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

## Secrets

Do not commit production secrets to the repo. The `SUPABASE_SERVICE_ROLE_KEY` is a highly privileged key and must only be set in your deployment or server-side environment secrets (e.g., Vercel/Netlify/Heroku project secrets or Supabase Function environment variables). Keep only `VITE_SUPABASE_PUBLISHABLE_KEY` (publishable/client key) in local `.env` for development and never push the real `.env` to source control.
