# Portfolio de Cassidy Charles

Site React + Tailwind + Framer Motion + Supabase, avec espace d'administration intégré (`/admin`).

## Ce qui fonctionne tout de suite
- Site public complet (8 sections, pages projet, mentions légales, 404), responsive.
- Espace d'administration en **mode démo** (rien n'est enregistré tant que Supabase n'est pas configuré).

## Ce qui reste à configurer (≈ 20 min)

### 1. Supabase (base de données, photos/PDF, connexion)
1. Crée un compte gratuit sur https://supabase.com puis un projet.
2. Ouvre **SQL Editor → New query**, colle le contenu de `supabase/schema.sql`, remplace l'e-mail dans `is_admin()` par celui de ton compte admin, puis **Run**.
3. **Authentication → Users → Add user** : crée ton compte (e-mail + mot de passe), en cochant « Auto Confirm ».
4. **Authentication → Sign In / Providers → Email** : désactive **« Allow new users to sign up »** (personne d'autre ne doit pouvoir créer de compte).
5. **Project Settings → API** : copie l'URL et la clé **anon** dans un fichier `.env` (modèle : `.env.example`). Ne jamais utiliser la clé `service_role`.

### 2. Formulaire de contact
Crée un formulaire sur https://formspree.io (gratuit), copie son URL dans `VITE_FORM_ENDPOINT`. Tant que ce n'est pas fait, le bouton « Envoyer » est désactivé et le bouton « M'envoyer un e-mail » reste disponible.

### 3. Mise en ligne
```bash
npm install
npm run build      # génère le dossier dist/
```
Déploie sur **Netlify** ou **Vercel** (import du dépôt GitHub, ou glisser-déposer de `dist/` sur Netlify). Ajoute les 3 variables d'environnement du `.env` dans les réglages de l'hébergeur. Les fichiers `public/_redirects` et `vercel.json` gèrent déjà les routes.

### 4. Remplir le site
Va sur `/admin`, connecte-toi, puis : importe ta photo (Présentation), ton CV et ta lettre (CV & lettre), tes projets, tes certifications. Renseigne l'hébergeur dans **Coordonnées** (mentions légales).

## Développement local
```bash
npm install
npm run dev
```

## Structure
- `src/lib/defaults.js` : tous les textes par défaut
- `src/admin/` : espace d'administration
- `src/components/site/` : sections du site
- `supabase/schema.sql` : tables, règles de sécurité (RLS), stockage
