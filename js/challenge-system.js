// État de l'application
let completedChallenges = new Set();
let currentChallenge = "web";

// Système de challenges
function showChallenge(challengeType) {
  currentChallenge = challengeType;

  // Mettre à jour la navbar
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");

  // Afficher le contenu du challenge
  const challenge = challenges[challengeType];
  if (challenge) {
    document.getElementById("challengeContent").innerHTML = `
            <div class="challenge-content">
                <h2 class="challenge-title">${challenge.title}</h2>
                
                <div class="challenge-description">
                    ${challenge.description}
                </div>
                
                <div class="tools-section">
                    ${challenge.tools}
                </div>
                
                <div class="challenge-description">
                    ${challenge.solution}
                </div>
                
                <button onclick="markCompleted('${challengeType}')">✅ Marquer comme terminé</button>
                <button onclick="revealFlag('${challengeType}')">🚩 Révéler le Flag</button>
                
                <div id="flag-${challengeType}" style="display: none;">
                    <div class="flag">
                        🚩 FLAG: ${challenge.flag}
                    </div>
                </div>
            </div>
        `;
  }
}

function markCompleted(challengeType) {
  completedChallenges.add(challengeType);
  updateProgress();

  // Animation de succès
  const button = event.target;
  button.innerHTML = "✅ Terminé!";
  button.style.background = "linear-gradient(45deg, #4CAF50, #45a049)";
  button.disabled = true;

  // Révéler automatiquement le flag
  revealFlag(challengeType);
}

function revealFlag(challengeType) {
  const flagDiv = document.getElementById(`flag-${challengeType}`);
  if (flagDiv) {
    flagDiv.style.display = "block";
    flagDiv.scrollIntoView({ behavior: "smooth" });
  }
}

function updateProgress() {
  const totalChallenges = Object.keys(challenges).length;
  const completed = completedChallenges.size;
  const percentage = (completed / totalChallenges) * 100;

  document.getElementById("progressBar").style.width = percentage + "%";
  document.getElementById(
    "progressText"
  ).textContent = `Progression: ${completed}/${totalChallenges} challenges complétés (${Math.round(
    percentage
  )}%)`;

  // Si tous les challenges sont terminés, débloquer la récompense
  if (completed === totalChallenges) {
    setTimeout(() => {
      alert(
        "🎉 Félicitations! Tous les challenges sont terminés! Consultez la section Récompense pour vos conseils CTF!"
      );
    }, 1000);
  }
}

function showReward() {
  // Mettre à jour la navbar
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");

  const allCompleted =
    completedChallenges.size === Object.keys(challenges).length;

  if (allCompleted) {
    document.getElementById("challengeContent").innerHTML = `
            <div class="final-reward">
                <h2>🏆 FÉLICITATIONS! EXPERT CTF 🏆</h2>
                <p>Vous avez terminé tous les challenges de cette plateforme d'entraînement!</p>
            </div>
            
            <div class="challenge-content">
                <h2 class="challenge-title">🎯 Guide pour Réussir les Compétitions CTF</h2>
                
                <div class="challenge-description">
                    <h3>💪 Compétences Techniques à Développer</h3>
                    
                    <h4>🔧 Maîtrise des Outils</h4>
                    • <strong>Automatisation:</strong> Créez des scripts Python pour les tâches répétitives<br>
                    • <strong>Environment Setup:</strong> Préparez une VM avec tous vos outils favoris<br>
                    • <strong>Cheat Sheets:</strong> Maintenez des aide-mémoires pour chaque catégorie<br><br>
                    
                    <h4>🧠 Méthodologie d'Approche</h4>
                    • <strong>Read First:</strong> Lisez TOUJOURS le challenge entièrement avant de commencer<br>
                    • <strong>Low Hanging Fruits:</strong> Commencez par les challenges les plus faciles<br>
                    • <strong>Time Management:</strong> Ne restez pas bloqué plus de 30min sur un challenge<br>
                    • <strong>Team Communication:</strong> Partagez vos découvertes avec votre équipe<br><br>
                    
                    <h4>🔍 Techniques de Reconnaissance</h4>
                    • Toujours examiner le code source des pages web<br>
                    • Utiliser 'file' et 'strings' sur tous les fichiers inconnus<br>
                    • Vérifier les métadonnées (exiftool)<br>
                    • Tester plusieurs encodings (base64, hex, rot13, etc.)<br><br>
                    
                    <h3>🏃‍♂️ Stratégies de Competition</h3>
                    
                    <h4>⏱️ Gestion du Temps</h4>
                    • <strong>Quick Wins:</strong> Cherchez les flags dans les commentaires HTML, robots.txt<br>
                    • <strong>Parallel Work:</strong> Travaillez sur plusieurs challenges en parallèle<br>
                    • <strong>Hints Strategy:</strong> N'hésitez pas à utiliser les indices après 20-30min<br><br>
                    
                    <h4>👥 Travail d'Équipe</h4>
                    • <strong>Spécialisation:</strong> Chaque membre se concentre sur ses domaines forts<br>
                    • <strong>Communication:</strong> Utilisez Discord/Slack pour coordonner<br>
                    • <strong>Knowledge Sharing:</strong> Expliquez vos solutions aux autres<br><br>
                    
                    <h4>📈 Optimisation des Points</h4>
                    • Les challenges perdent de la valeur avec le temps<br>
                    • Priorisez les catégories où vous êtes fort<br>
                    • Ne négligez pas les challenges "Misc" souvent faciles<br><br>
                    
                    <h3>🎓 Développement Continu</h3>
                    
                    <h4>📚 Resources d'Apprentissage</h4>
                    • <strong>Practice Platforms:</strong> HackTheBox, TryHackMe, PicoCTF<br>
                    • <strong>YouTube Channels:</strong> LiveOverflow, John Hammond, IppSec<br>
                    • <strong>Books:</strong> "The Web Application Hacker's Handbook"<br>
                    • <strong>Writeups:</strong> Lisez les writeups des CTF précédents<br><br>
                    
                    <h4>🛠️ Setup de Développement</h4>
                    <div class="code-block">
                    # VM recommandée: Kali Linux
                    # Outils essentiels à installer:
                    
                    apt update && apt install -y \\
                        burpsuite gobuster nikto sqlmap \\
                        steghide binwalk foremost \\
                        gdb radare2 ghidra \\
                        volatility3 wireshark
                    
                    # Python packages utiles:
                    pip3 install pwntools requests beautifulsoup4 \\
                                cryptography pillow numpy
                    </div>
                    
                    <h4>🏆 Mindset de Compétiteur</h4>
                    • <strong>Stay Calm:</strong> Le stress réduit les performances<br>
                    • <strong>Think Outside the Box:</strong> Les solutions simples sont souvent les bonnes<br>
                    • <strong>Never Give Up:</strong> Parfois la solution arrive au dernier moment<br>
                    • <strong>Learn from Failures:</strong> Chaque échec est une leçon<br><br>
                    
                    <h3>🎯 Conseils Spécifiques par Catégorie</h3>
                    
                    <div class="tools-section">
                        <h4>Web:</h4> Toujours vérifier robots.txt, .git/, backup files (.bak, ~)<br>
                        <h4>Crypto:</h4> Commencer par les chiffrements simples (Caesar, Vigenère)<br>
                        <h4>Forensics:</h4> strings, file, et binwalk sont vos meilleurs amis<br>
                        <h4>Rev:</h4> Cherchez les strings avant de désassembler<br>
                        <h4>Pwn:</h4> Vérifiez les protections avec checksec<br>
                        <h4>Steganography:</h4> Essayez toujours zsteg et steghide sans mot de passe<br>
                        <h4>OSINT:</h4> Google Dorking est votre super-pouvoir
                    </div>
                    
                    <h3>🔥 Derniers Conseils d'Expert</h3>
                    
                    <div class="code-block">
                    ⚡ GOLDEN RULES ⚡
                    
                    1. "If it looks too easy, it probably is" - mais vérifiez quand même
                    2. "When in doubt, Google it" - mais adaptez à votre contexte
                    3. "Every character matters" - attention aux espaces, majuscules, etc.
                    4. "Document everything" - vous pourriez en avoir besoin plus tard
                    5. "Sleep is overrated during CTF" - mais restez lucide
                    </div>
                </div>
                
                <div class="flag">
                    🏆 MASTER FLAG: CTF{m4st3r_h4ck3r_r34dy_f0r_c0mp3t1t10n_2024} 🏆
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <p>🎉 Vous êtes maintenant prêt(e) pour les compétitions CTF réelles!</p>
                    <p>Continuez à pratiquer et bonne chance dans vos futures compétitions! 🚀</p>
                </div>
            </div>
        `;
  } else {
    document.getElementById("challengeContent").innerHTML = `
            <div class="challenge-content">
                <h2 class="challenge-title">🔒 Récompense Verrouillée</h2>
                <p>Terminez tous les challenges pour débloquer les conseils d'expert CTF!</p>
                <p>Progression actuelle: ${completedChallenges.size}/${
      Object.keys(challenges).length
    } challenges</p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <div style="font-size: 4em;">🔐</div>
                    <p>Continuez vos efforts, la récompense vous attend!</p>
                </div>
            </div>
        `;
  }
}
