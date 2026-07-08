# PORTFOLIO PERSONNEL — PROJET FINAL

**AFFOUKOU D.O. Prosper Charmel**  
Session : Semaine 6 — Developpement Web (Debutant)

## DESCRIPTION

Portfolio personnel presentant mon profil d'eleve-ingenieur en Genie Mathematique et Modelisation a l'UNSTIM-ENSGM et de developpeur web débutant.

Mini-site responsive (4 pages) :

- `index.html` (sections Hero/Competences/Projets)
- `about.html` (A propos)
- `projects.html` (details projets)
- `contact.html` (formulaire)

avec formulaire de contact valide en JavaScript.

Design inspire du portfolio de Robbie Lens issu du cours OpenClassroom  
"Créez votre site web avec HTML5 et CSS3" (fond `#1f2039`, accents violets `#a5b4fc`, degrade `#8e86b5`).

## STRUCTURE DU PROJET

```text
ProjetFinal_AFFOUKOU_Prosper/
  wireframe/
    prompts/
      prompt_v1.txt
      prompt_v2.txt
    exports_stitch/
      accueil_desktop_focus_dev_web/
      accueil_mobile_focus_dev_web_v2/
      projets_desktop_focus_dev_web/
      projets_mobile_focus_dev_web_v3/
    figma/
      lien_prototype.txt
  site/
    index.html
    about.html
    projects.html
    contact.html
    css/
      style.css
    js/
      app.js
    assets/
      images/
  README.md
```

## FONCTIONNALITES

- Hero avec photo a droite et texte a gauche (angle `Union.png`)
- Navigation coherente (menu) sur toutes les pages
- Navigation par ancres sur `index.html` (Hero/Competences)
- Pages dediees : `about.html`, `projects.html`, `contact.html`
- 6 sections : Hero, A propos, Competences, Projets, Contact, Footer
- A propos avec barre separatrice verticale (degrade)
- Competences avec titres en police monospace
- Projets avec tags en monospace violet
- Formulaire de contact avec validation JavaScript :
  - Champ nom requis
  - Email valide (regex)
  - Message minimum 10 caracteres
  - Messages d'erreur/succes dynamiques
- Design responsive (breakpoints 768px et 1024px)
- Variables CSS pour changement rapide des couleurs
- Palette : fond sombre (`#1f2039`) + fond blanc (`#ffffff`) + accent violet (`#a5b4fc`)

## PALETTE DE COULEURS

- Fond sombre : `#1f2039` (Hero, Competences, Contact)
- Fond blanc : `#ffffff` (Header, A propos, Projets, Footer)
- Texte clair : `#f9f8ff` (sur fond sombre)
- Texte fonce : `#1a1a2e` (sur fond blanc)
- Accent : `#a5b4fc` (liens, titres, bordures)
- Degrade : `#8e86b5` a `#acaeed` (boutons, barre separator)

## INSTRUCTIONS D'UTILISATION

1. Ouvrir `site/index.html` dans un navigateur.
2. Naviguer via le menu (ancres ou pages dediees).
3. Tester le formulaire sur `site/contact.html` (validation JS).

## CHECKLIST FINALE (AUTO-CONTROLE)

- [x] Wireframe desktop+mobile + prompts (v1/v2) sauvegardes
- [x] Prototype Figma avec >= 6 interactions (lien dans `wireframe/figma/`)
- [x] HTML semantique + navigation coherente (menu sur toutes les pages)
- [x] CSS : Flex/Grid + 2 breakpoints minimum
- [x] JS : validation formulaire + feedback utilisateur (sans `alert()`)
- [x] QUALITE : a11y/perf/corrections documentees + correctifs appliques
- [x] Tests multi-navigateurs (Teste sur Edge et Firefox)
- [ ] Verification console (F12) sans erreurs bloquantes
- [ ] Verification responsive (360x640, 768x1024, desktop) 

## PREUVES DE VERIFICATION (DEVTOOLS & TESTS)

### A) CONSOLE (F12)

- `index.html` et les trois autres pages  : 1 warning non bloquant (capture : `_console_index.png`)


### B) NETWORK (Disable cache + Hard Reload)

- Nombre de requetes : `03`
- Poids transfere (Transferred) : `755/803 kB`
- Ressource la plus lourde : `assets/images/eauracle.jpeg`(667kB)
- Temps de chargement total observe : `1.67 s`
- Correctifs appliques : lazy loading des images, CSS unique, JS minimal
- Capture recommandee : `network.png`

### C) RESPONSIVE (mode appareil DevTools)

- `360x640` : OK (menu lisible, sections empilees, formulaire utilisable)
- `768x1024` : OK (grilles adaptees, lisibilite conservee)
- Desktop (`1366x768` ou `1440x900`) : OK (alignements et espacements stables)
- Captures recommandees : `responsive.png`, `desktop.png`

### D) FORMULAIRE DE CONTACT (tests fonctionnels)

- Cas 1 : nom vide -> message d'erreur affiche sous le champ
- Cas 2 : email invalide -> message d'erreur explicite
- Cas 3 : message < 10 caracteres -> message d'erreur affiche
- Cas 4 : formulaire valide -> message de succes inline
- Captures recommandees : `error_validation.png`, `form_success.png`

### E) NAVIGATION / ACCESSIBILITE CLAVIER

- Navigation Tab sur les liens et boutons : OK
- Skip link "Aller au contenu" : OK
- Focus visible sur les elements interactifs : OK
- Liens pages + ancres menu : OK


## QUALITE — Resume des ameliorations

### 1) ACCESSIBILITE

- Probleme : Structure non semantique (div sans role)  
  Correction : Utilisation de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`  
  Resultat : Meilleure navigation pour lecteurs d'ecran

- Probleme : Labels de formulaire manquants  
  Correction : Chaque champ a un `<label>` avec `for` lie a l'id du champ  
  Resultat : Accessible aux technologies d'assistance

- Probleme : Images sans alt  
  Correction : Toutes les images ont un attribut `alt` pertinent  
  Resultat : Images comprehensibles sans chargement

- Probleme : Navigation clavier (focus) peu visible + absence de "skip link"  
  Correction : Ajout d'un lien "Aller au contenu" + style `:focus-visible`  
  Resultat : Navigation clavier plus claire (Tab) et acces direct au contenu

### 2) PERFORMANCE

- Probleme : Polices externes (Google Fonts) -> requetes reseau  
  Correction : Suppression des liens Google Fonts, utilisation de polices systeme uniquement  
  Resultat : Moins de requetes et chargement plus sobre

- Probleme : Script en tete bloquant le rendu  
  Correction : Script place en bas du body (avant `</body>`)  
  Resultat : Page visible avant chargement JS

- Probleme : CSS non optimise  
  Correction : Un seul fichier `style.css`, pas de regles inutilisees  
  Resultat : Poids reduit, maintenance facilitee

### 3) CORRECTIONS & ROBUSTESSE

- Probleme : Pas de validation de formulaire  
  Correction : Validation JS complete (champs requis, email, longueur message)  
  Resultat : Feedback utilisateur immediat

- Probleme : Pop-up `alert()` apres envoi  
  Correction : Suppression de `alert()`, feedback inline uniquement  
  Resultat : UX plus propre, aucune interruption

- Probleme : Couleurs en dur dans le CSS  
  Correction : Variables CSS dans `:root` pour toutes les couleurs  
  Resultat : Modification globale en un seul endroit

- Probleme : Pas de responsive  
  Correction : 2 breakpoints (768px mobile, 1024px tablette) avec Flexbox/Grid  
  Resultat : Site fonctionnel sur mobile, tablette et desktop

- Probleme : Liens casses possibles  
  Correction : Ancres `#id` coherentes, navigation homogene entre pages  
  Resultat : Navigation fluide sans erreur 404

## REFACTOR D'ESTHETIQUE (PRODUCTION) — ECARTS VS WIREFRAME V2

Objectif : Ces points sont des ameliorations cosmetiques / UX a traiter apres livraison (non-bloquants pour le rendu actuel).

1. **NAVIGATION (MOBILE) & ACCESSIBILITE**
   - Menu hamburger (icone ☰) en mobile : non implemente (menu toujours visible).
   - Lien "Skip to content" (navigation clavier) : non present.
   - Focus visible (ex: `:focus-visible`) : non personnalise.
   - Roles/attributs ARIA supplementaires (nav, formulaire) : non ajoutes.

2. **HERO**
   - CTA secondaire "Me contacter" : aligne (ajoute).

3. **A PROPOS (ESTHETIQUE)**
   - Photo en cercle (wireframe) : photo actuellement rectangulaire (border-radius faible).

4. **PROJETS (UX)**
   - Lien "En savoir plus" sur chaque carte projet (index) : absent
     (seulement "Voir tous les projets" vers `projects.html`).

5. **RESPONSIVE / TECHNIQUE**
   - Breakpoint 1440px (wireframe) : non specifie (seulement 1024px et 768px).

6. **ECOCONCEPTION / PERFORMANCE**
   - Polices systeme uniquement : wireframe recommande, mais Google Fonts est utilise.
   - -> Correction appliquee : polices systeme uniquement (suppression des liens Google Fonts).

7. **DETAILS UI**
   - Texte footer : wireframe "Fait avec ❤️ en HTML/CSS/JS" vs actuel "Fait avec passion...".
   - JS : une alerte navigateur est affichee a l'envoi (`alert`), a remplacer par feedback inline uniquement.
   - -> Correction appliquee : suppression de `alert()` dans `app.js`.

## TECHNOLOGIES UTILISEES

- HTML5 (balises semantiques)
- CSS3 (Flexbox, Grid, variables CSS, responsive, degrades)
- JavaScript (validation DOM, feedback utilisateur)

## CONTACT

- Email : `prosperaffoukou@outlook.com`
- GitHub : `github.com/Charmel7`
