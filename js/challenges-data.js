// Système de challenges - Données complètes
const challenges = {
  web: {
    title: "🌐 Web Security Challenge",
    description: `
            <strong>Type:</strong> Sécurité Web - XSS, CSRF, Directory Traversal<br><br>
            
            <strong>Description:</strong><br>
            Les vulnérabilités web sont parmi les plus courantes dans les CTF. Elles incluent les injections (SQL, XSS), 
            les problèmes d'autorisation, et les failles de logique métier.<br><br>
            
            <strong>Techniques principales:</strong><br>
            • Cross-Site Scripting (XSS): Injection de code JavaScript<br>
            • SQL Injection: Manipulation des requêtes base de données<br>
            • CSRF: Cross-Site Request Forgery<br>
            • Directory Traversal: Accès non autorisé aux fichiers<br>
            • Authentication Bypass: Contournement d'authentification
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>Burp Suite:</strong> Proxy d'interception et scanner<br>
            • <strong>OWASP ZAP:</strong> Scanner de vulnérabilités web<br>
            • <strong>SQLmap:</strong> Outil d'injection SQL automatisé<br>
            • <strong>Nikto:</strong> Scanner de serveur web<br>
            • <strong>Dirbuster/Gobuster:</strong> Énumération de répertoires<br>
            • <strong>Browser DevTools:</strong> Inspection du code source
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Reconnaissance:
               - Examiner le code source
               - Identifier les points d'entrée
               - Tester les paramètres GET/POST
            
            2. Exploitation:
               - Tester les payloads XSS: &lt;script&gt;alert('XSS')&lt;/script&gt;
               - Injection SQL: ' OR 1=1 --
               - Directory traversal: ../../../etc/passwd
            
            3. Validation:
               - Confirmer l'exploitation
               - Récupérer le flag
            </div>
        `,
    flag: "CTF{w3b_h4ck1ng_m4st3r_2024}",
  },
  crypto: {
    title: "🔐 Cryptographie Challenge",
    description: `
            <strong>Type:</strong> Cryptanalyse et Chiffrement<br><br>
            
            <strong>Description:</strong><br>
            Les challenges de cryptographie impliquent souvent de casser des chiffrements faibles, 
            d'analyser des algorithmes cryptographiques ou de trouver des clés.<br><br>
            
            <strong>Types de challenges:</strong><br>
            • Chiffrement César et substitution<br>
            • RSA avec clés faibles<br>
            • Cryptanalyse fréquentielle<br>
            • Attaques sur les hash<br>
            • Chiffrement symétrique faible
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>CyberChef:</strong> Swiss Army knife pour la crypto<br>
            • <strong>John the Ripper:</strong> Casseur de mot de passe<br>
            • <strong>Hashcat:</strong> Craquage de hash avancé<br>
            • <strong>RsaCtfTool:</strong> Attaques RSA automatisées<br>
            • <strong>dCode:</strong> Décodeur universel en ligne<br>
            • <strong>Python + cryptography:</strong> Scripts personnalisés
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Identification:
               - Analyser le type de chiffrement
               - Identifier les patterns
               - Calculer les statistiques
            
            2. Cryptanalyse:
               - César: Tester tous les décalages (0-25)
               - RSA: Factoriser n si petit
               - Hash: Recherche dans les bases (rainbow tables)
            
            3. Automatisation:
               - Utiliser des scripts pour tester multiple clés
               - CyberChef pour les transformations rapides
            </div>
            
            <strong>Exemple de chiffrement César:</strong><br>
            <div class="code-block">FDHVDU → CAESAR (décalage de 3)</div>
        `,
    flag: "CTF{crypt0_n1nj4_d3c0d3r_2024}",
  },
  forensics: {
    title: "🔍 Forensics Challenge",
    description: `
            <strong>Type:</strong> Analyse médico-légale numérique<br><br>
            
            <strong>Description:</strong><br>
            Les challenges forensics consistent à analyser des données, récupérer des fichiers supprimés, 
            examiner la mémoire, et extraire des informations cachées.<br><br>
            
            <strong>Domaines d'analyse:</strong><br>
            • Analyse de fichiers (métadonnées, structure)<br>
            • Récupération de données supprimées<br>
            • Analyse mémoire (memory dumps)<br>
            • Analyse réseau (captures pcap)<br>
            • Analyse de logs système
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>Autopsy:</strong> Plateforme d'analyse forensics<br>
            • <strong>Volatility:</strong> Analyse de mémoire<br>
            • <strong>Wireshark:</strong> Analyse de trafic réseau<br>
            • <strong>Binwalk:</strong> Analyse de firmware<br>
            • <strong>ExifTool:</strong> Métadonnées de fichiers<br>
            • <strong>Foremost:</strong> Récupération de fichiers<br>
            • <strong>Strings:</strong> Extraction de chaînes
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Première inspection:
               file suspicious_file.bin
               strings suspicious_file.bin | grep -i flag
               exiftool image.jpg
            
            2. Analyse approfondie:
               binwalk -e firmware.bin
               volatility -f memory.dump imageinfo
               wireshark capture.pcap
            
            3. Récupération:
               foremost -t all -i disk.img
               photorec disk.img
            </div>
            
            <strong>Astuce:</strong> Toujours vérifier les métadonnées et les données cachées!
        `,
    flag: "CTF{f0r3ns1cs_d3t3ct1v3_2024}",
  },
  reverse: {
    title: "⚙️ Reverse Engineering",
    description: `
            <strong>Type:</strong> Rétro-ingénierie de programmes<br><br>
            
            <strong>Description:</strong><br>
            Le reverse engineering consiste à analyser des binaires pour comprendre leur fonctionnement, 
            contourner des protections ou extraire des secrets.<br><br>
            
            <strong>Techniques principales:</strong><br>
            • Analyse statique (désassemblage)<br>
            • Analyse dynamique (debugging)<br>
            • Déobfuscation de code<br>
            • Contournement d'anti-debug<br>
            • Extraction d'algorithmes
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>Ghidra:</strong> Désassembleur NSA (gratuit)<br>
            • <strong>IDA Pro:</strong> Désassembleur professionnel<br>
            • <strong>Radare2:</strong> Framework de reverse<br>
            • <strong>GDB:</strong> Debugger GNU<br>
            • <strong>x64dbg:</strong> Debugger Windows<br>
            • <strong>Ollydbg:</strong> Debugger classique<br>
            • <strong>Cutter:</strong> Interface GUI pour Radare2
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Analyse statique:
               file binary
               strings binary | grep -i flag
               objdump -d binary
            
            2. Analyse avec Ghidra:
               - Charger le binaire
               - Analyser automatiquement
               - Examiner la fonction main
               - Chercher les comparaisons
            
            3. Debugging dynamique:
               gdb binary
               break main
               run
               disas
               ni (next instruction)
            </div>
        `,
    flag: "CTF{r3v3rs3_3ng1n33r_pr0_2024}",
  },
  pwn: {
    title: "💥 Binary Exploitation (Pwn)",
    description: `
            <strong>Type:</strong> Exploitation de binaires<br><br>
            
            <strong>Description:</strong><br>
            Les challenges pwn impliquent l'exploitation de vulnérabilités dans des programmes 
            pour obtenir un shell ou exécuter du code arbitraire.<br><br>
            
            <strong>Vulnérabilités communes:</strong><br>
            • Buffer Overflow<br>
            • Format String bugs<br>
            • Use-after-free<br>
            • Integer overflow<br>
            • ROP (Return Oriented Programming)
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>GDB + PEDA:</strong> Debugger amélioré<br>
            • <strong>Pwntools:</strong> Framework d'exploitation Python<br>
            • <strong>ROPgadget:</strong> Recherche de gadgets ROP<br>
            • <strong>Checksec:</strong> Vérification des protections<br>
            • <strong>Radare2:</strong> Analyse et exploitation<br>
            • <strong>One_gadget:</strong> Gadgets pour libc
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Reconnaissance:
               checksec binary
               file binary
               ldd binary (voir les bibliothèques)
            
            2. Analyse des vulnérabilités:
               # Buffer overflow simple
               python -c "print('A' * 100)" | ./binary
               
            3. Exploitation avec pwntools:
               from pwn import *
               p = process('./binary')
               payload = b'A' * 72 + p64(0xdeadbeef)
               p.sendline(payload)
            </div>
        `,
    flag: "CTF{pwn_m4st3r_sh3ll_h4ck3r_2024}",
  },
  steganography: {
    title: "🖼️ Stéganographie",
    description: `
            <strong>Type:</strong> Données cachées dans des médias<br><br>
            
            <strong>Description:</strong><br>
            La stéganographie consiste à cacher des informations dans des images, sons, 
            ou autres fichiers médias sans altérer leur apparence.<br><br>
            
            <strong>Techniques courantes:</strong><br>
            • LSB (Least Significant Bit)<br>
            • Données dans les métadonnées<br>
            • Canaux de couleur modifiés<br>
            • Stéganographie audio<br>
            • Fichiers cachés dans des archives
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>Steghide:</strong> Cacheur/extracteur universel<br>
            • <strong>StegSolve:</strong> Analyseur d'images Java<br>
            • <strong>Zsteg:</strong> Détection stégano dans PNG/BMP<br>
            • <strong>Binwalk:</strong> Recherche de fichiers cachés<br>
            • <strong>ExifTool:</strong> Métadonnées<br>
            • <strong>Audacity:</strong> Analyse audio<br>
            • <strong>GIMP:</strong> Manipulation d'images
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Analyse basique:
               file image.png
               exiftool image.png
               strings image.png | grep -i flag
            
            2. Recherche de fichiers cachés:
               binwalk image.png
               foremost image.png
            
            3. Stéganographie LSB:
               zsteg image.png
               steghide extract -sf image.jpg
               
            4. Analyse avec StegSolve:
               - Charger l'image
               - Parcourir les plans de couleur
               - Rechercher des patterns
            </div>
        `,
    flag: "CTF{st3g4n0_h1dd3n_m3ss4g3_2024}",
  },
  osint: {
    title: "🕵️ OSINT (Open Source Intelligence)",
    description: `
            <strong>Type:</strong> Recherche d'informations publiques<br><br>
            
            <strong>Description:</strong><br>
            L'OSINT consiste à collecter et analyser des informations disponibles publiquement 
            pour résoudre des enquêtes ou trouver des indices.<br><br>
            
            <strong>Sources d'information:</strong><br>
            • Réseaux sociaux<br>
            • Métadonnées d'images<br>
            • Bases de données publiques<br>
            • Archives web<br>
            • Géolocalisation
        `,
    tools: `
            <strong>🛠️ Outils recommandés:</strong><br>
            • <strong>Maltego:</strong> Plateforme d'analyse de liens<br>
            • <strong>Shodan:</strong> Moteur de recherche IoT<br>
            • <strong>Google Dorking:</strong> Recherches avancées<br>
            • <strong>Wayback Machine:</strong> Archives web<br>
            • <strong>TinEye:</strong> Recherche d'images inversée<br>
            • <strong>Recon-ng:</strong> Framework de reconnaissance<br>
            • <strong>SpiderFoot:</strong> Automatisation OSINT
        `,
    solution: `
            <strong>🎯 Approche de résolution:</strong><br><br>
            
            <div class="code-block">
            1. Collecte d'informations:
               - Google dorking: site:target.com filetype:pdf
               - Recherche sur les réseaux sociaux
               - Vérification des métadonnées
            
            2. Géolocalisation:
               - Analyser les coordonnées GPS
               - Utiliser Google Street View
               - Rechercher des indices visuels
            
            3. Analyse temporelle:
               - Wayback Machine pour l'historique
               - Croiser les dates et événements
               - Timeline des activités
            </div>
            
            <strong>Exemple de Google Dork:</strong><br>
            <div class="code-block">site:pastebin.com "password" "email"</div>
        `,
    flag: "CTF{0s1nt_1nv3st1g4t0r_m4st3r_2024}",
  },
};
