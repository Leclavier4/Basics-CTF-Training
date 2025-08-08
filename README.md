# Basics-CTF-Training
# CTF Training Lab

 Description
Plateforme d'entraînement interactive pour apprendre les techniques de Capture The Flag (CTF). Cette application web simule différents types de challenges CTF avec des guides détaillés, des outils recommandés, et des conseils d'experts.

 Fonctionnalités

 🚨 Système de Login Vulnérable
- Challenge d'injection SQL intégré
- Détection de payloads SQL classiques
- Interface d'apprentissage avec indices

 🏆 7 Catégories de Challenges CTF
1. **Web Security** - XSS, SQL Injection, CSRF
2. **Cryptographie** - Chiffrement, cryptanalyse
3. **Forensics** - Analyse médico-légale numérique
4. **Reverse Engineering** - Rétro-ingénierie
5. **Binary Exploitation (Pwn)** - Exploitation de binaires
6. **Stéganographie** - Données cachées
7. **OSINT** - Renseignement open source

 ✨ Fonctionnalités Spéciales
- Animation Matrix en arrière-plan
- Système de progression
- Guide d'expert CTF complet
- Easter egg Konami Code
- Interface responsive

 Structure des Fichiers

```
ctf-training-lab/
├── index.html              # Structure HTML principale
├── styles.css              # Styles CSS
├── matrix-animation.js     # Animation Matrix background
├── challenges-data.js      # Données des challenges
├── login-system.js         # Système de connexion vulnérable
├── challenge-system.js     # Logique des challenges
├── main.js                 # Script principal et Easter eggs
└── README.md               # Ce fichier
```

 Installation

 Installation Simple
1. Téléchargez tous les fichiers dans un dossier
2. Ouvrez `index.html` dans votre navigateur web
3. C'est tout ! L'application fonctionne localement

 Installation avec Serveur Web (Recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

 Utilisation

 1. Page de Login
- **Login normal :** `admin` / `secret123`
- **Challenge SQL :** Essayez des payloads comme `' OR '1'='1`
- Utilisez le bouton "💡 Indice SQL" pour plus d'aide

 2. Dashboard CTF
- Naviguez entre les différents challenges
- Cliquez sur "✅ Marquer comme terminé" pour progresser
- Révélez les flags de chaque challenge
- Débloquez la récompense finale en terminant tous les challenges

 3. Easter Eggs
- **Konami Code :** ↑↑↓↓←→←→BA pour un flag bonus
- **Console Debug :** Utilisez `debugInfo()`, `resetProgress()`, `completeAllChallenges()`

 Fonctions de Debug (Console)

```javascript
// Voir l'état actuel
debugInfo()

// Reset la progression
resetProgress()

// Marquer tous les challenges comme terminés
completeAllChallenges()
```

 Personnalisation

 Ajouter un Nouveau Challenge
1. Ouvrez `challenges-data.js`
2. Ajoutez une nouvelle entrée dans l'objet `challenges`
3. Mettez à jour la navbar dans `index.html`

Exemple :
```javascript
newchallenge: {
    title: "🔥 Nouveau Challenge",
    description: "Description du challenge...",
    tools: "Outils recommandés...",
    solution: "Approche de résolution...",
    flag: "CTF{nouveau_flag_2024}"
}
```

 Modifier les Styles
- Éditez `styles.css` pour changer l'apparence
- Couleurs principales : `#00ff41` (vert), `#ff6b6b` (rouge), `#0c0c0c` (noir)

 Personnaliser l'Animation Matrix
- Modifiez les paramètres dans `matrix-animation.js`
- Changez les caractères, vitesse, ou couleurs

 Compatibilité
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Fonctionne hors ligne
- ✅ Responsive (mobile/tablette)

 Technologies Utilisées
- HTML5 / CSS3
- JavaScript Vanilla (ES6+)
- Canvas API (pour l'animation Matrix)
- CSS Grid/Flexbox

 Sécurité et Avertissements

⚠️ **Important :** Cette application contient volontairement des vulnérabilités à des fins éducatives :
- Injection SQL simulée
- Code JavaScript non obfusqué
- Flags en clair dans le code source

🔒 **Ne pas utiliser en production** - Cette application est uniquement destinée à l'apprentissage et à l'entraînement CTF.

 Contribution
Pour contribuer au projet :
1. Forkez le repository
2. Créez une branche feature
3. Commitez vos changements
4. Soumettez une pull request

 Licence
MIT License - Libre d'utilisation pour l'éducation et l'entraînement.

 Support
Pour des questions ou des problèmes :
- Ouvrez un issue sur GitHub
- Consultez la console du navigateur pour les erreurs
- Utilisez les fonctions de debug intégrées

---

🎯 **Chabmane - Bon entraînement CTF !** 🚀
