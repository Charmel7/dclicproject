
# PORTFOLIO PERSONNEL — PROJET FINAL

**AFFOUKOU D.O. Prosper Charmel**  
Session : Semaine 6 — Développement Web (Débutant)

---

## 1. Description

Portfolio personnel présentant mon profil d'élève-ingénieur en Génie Mathématique et Modélisation à l'UNSTIM-ENSGM et de développeur web débutant.

Mini-site responsive (4 pages) :
- `index.html` (sections Hero/Compétences/Projets)
- `about.html` (À propos)
- `projects.html` (Détails projets)
- `contact.html` (Formulaire)

Design inspiré du portfolio de Robbie Lens (cours OpenClassroom) : fond `#1f2039`, accents violets `#a5b4fc`, dégradé `#8e86b5`.

---

## 2. Aperçu visuel

### Page d'accueil (Hero)
![Portrait Prosper AFFOUKOU](assets/images/profile.jpeg)

*Photo de profil utilisée dans la section Hero et À propos.*

---

## 3. Structure du projet

```text
ProjetFinal_AFFOUKOU_Prosper/
├── wireframe/
│   ├── prompts/
│   ├── exports_stitch/
│   └── figma/
├── site/
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   ├── contact.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── images/
└── README.md
```

---

## 4. Fonctionnalités principales

- **Hero** : Photo à droite, texte à gauche, avec l'angle décoratif (`Union.png`).
- **Navigation** : Menu cohérent sur toutes les pages + ancres internes sur `index.html`.
- **Sections** : Hero, À propos, Compétences, Projets, Contact, Footer.
- **À propos** : Barre séparatrice verticale (dégradé).
- **Compétences** : Titres en police monospace, icônes illustrées.
- **Projets** : Cartes avec tags en monospace violet.
- **Formulaire** : Validation JavaScript (nom requis, email valide, message ≥ 10 caractères). Retour utilisateur dynamique (sans `alert()`).
- **Responsive** : Breakpoints 768px (mobile) et 1024px (tablette) avec Flexbox/Grid.
- **Maintenance** : Variables CSS pour la palette de couleurs.

---

## 5. Palette de couleurs

| Élément | Couleur |
| :--- | :--- |
| Fonds sombres (Hero, Compétences, Contact) | `#1f2039` |
| Fonds clairs (Header, À propos, Projets, Footer) | `#ffffff` |
| Texte clair | `#f9f8ff` |
| Texte foncé | `#1a1a2e` |
| Accent (liens, titres, bordures) | `#a5b4fc` |
| Dégradé (boutons, séparateur) | `#8e86b5` → `#acaeed` |

---

## 6. Projets mis en avant

### Eauracle – Prédiction et alerte aux inondations
![Aperçu Eauracle](assets/images/eauracle.png)

*1er Prix mondial – Hackathon Water4Future UNESCO 2026.*  
Système combinant données satellitaires et stations hydrométriques low-cost (ESP32).

---

### Timetabling ACO – Optimisation combinatoire
![Aperçu Timetabling](assets/images/timetabling.webp)

*Algorithme de Colonie de Fourmis pour l'affectation de groupes pédagogiques (contraintes de salles, horaires).*

---

### Débruitage d'image – BLAS/LAPACK en C
![Aperçu Débruitage](assets/images/debruitage.webp)

*Méthodes d'algèbre linéaire numérique haute performance pour le débruitage d'image.*

---

### Sixteen Soldiers – Agent IA de jeu
![Aperçu Sixteen Soldiers](assets/images/soldiers.jpg)

*Demi-finaliste Kyfax – Agent intelligent avec raisonnement algorithmique et prise de décision.*

---

## 7. Résumé des améliorations qualité

### 7.1 Accessibilité (a11y)
- **Problème** : Structure non sémantique (`<div>` sans rôle).
  - **Correction** : Utilisation de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Problème** : Labels de formulaire manquants.
  - **Correction** : Chaque champ possède un `<label>` avec `for` lié à l'`id`.
- **Problème** : Images sans `alt`.
  - **Correction** : Toutes les images ont un attribut `alt` pertinent (ou `alt=""` pour les décoratives).
- **Problème** : Focus clavier peu visible + absence de *skip link*.
  - **Correction** : Ajout d'un lien "Aller au contenu" et style `:focus-visible`.

### 7.2 Performance
- **Problème** : Polices Google externes → requêtes réseau.
  - **Correction** : Suppression des liens Google Fonts, utilisation de polices système.
- **Problème** : Script en tête bloquant le rendu.
  - **Correction** : Script placé en bas du `<body>`.
- **Problème** : CSS non optimisé.
  - **Correction** : Fichier unique `style.css` sans règles inutilisées.
- **Problème** : Images lourdes.
  - **Correction** : Ajout du `loading="lazy"` sur toutes les images.

### 7.3 Robustesse & corrections
- **Problème** : Absence de validation formulaire.
  - **Correction** : Validation JS complète avec messages d'erreur explicites.
- **Problème** : Utilisation de `alert()` après envoi.
  - **Correction** : Suppression de `alert()`, feedback inline uniquement.
- **Problème** : Couleurs en dur dans le CSS.
  - **Correction** : Variables CSS dans `:root` pour toutes les couleurs.
- **Problème** : Non-responsive.
  - **Correction** : 2 breakpoints (768px, 1024px) avec Flexbox/Grid.
- **Problème** : Risque de liens cassés.
  - **Correction** : Ancres `#id` cohérentes et navigation homogène.

---

## 8. Vérifications effectuées (DevTools & tests)

| Test | Résultat |
| :--- | :--- |
| **Console (F12)** | 1 warning non bloquant (OK) |
| **Network** | 3 requêtes, ~803 kB transférés, chargement ~1.67s |
| **Responsive (360×640, 768×1024, Desktop)** | OK (empilement, grilles adaptées, lisibilité) |
| **Formulaire (nom vide, email invalide, msg < 10 caractères)** | Erreurs affichées sous les champs |
| **Formulaire valide** | Message de succès inline (sans `alert()`) |
| **Navigation clavier (Tab)** | OK, focus visible, skip link opérationnel |
| **Compatibilité navigateurs** | Testé sur Edge et Firefox |

---

## 9. Écarts vs wireframe (non bloquants – à améliorer ultérieurement)

- Menu hamburger non implémenté en mobile (menu toujours visible).
- Photo de profil non circulaire (wireframe prévoyait un cercle).
- Absence de lien « En savoir plus » sur chaque carte projet (seulement un bouton global vers `projects.html`).
- Breakpoint 1440px non spécifié (seulement 1024px et 768px).

---

## 10. Technologies utilisées

- **HTML5** : Balises sémantiques, ancres, attributs ARIA de base.
- **CSS3** : Flexbox, Grid, variables CSS, dégradés, responsive design.
- **JavaScript** : Manipulation du DOM, validation de formulaire, feedback utilisateur.

---

## 11. Contact

- **Email** : `prosperaffoukou@outlook.com`
- **GitHub** : [github.com/Charmel7](https://github.com/Charmel7)
