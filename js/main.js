// Initialisation
window.onload = function () {
  // Commencer sur la page de login
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("dashboard").style.display = "none";
};

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    alert(
      "🎉 KONAMI CODE ACTIVATED! 🎉\nBonus Flag: CTF{k0n4m1_c0d3_34st3r_3gg_2024}"
    );
    konamiCode = [];
  }
});

// Fonction utilitaire pour gérer les événements de navigation
document.addEventListener("DOMContentLoaded", function () {
  // Initialiser l'animation matrix si canvas existe
  const canvas = document.getElementById("matrix");
  if (canvas) {
    initMatrix();
  }
});

// Fonctions utilitaires pour le débogage
function debugInfo() {
  console.log("Current challenge:", currentChallenge);
  console.log("Completed challenges:", Array.from(completedChallenges));
  console.log("Total challenges:", Object.keys(challenges).length);
}

// Fonction pour reset l'application (utile pour le développement)
function resetProgress() {
  completedChallenges.clear();
  updateProgress();
  console.log("Progress reset!");
}

// Fonction pour marquer tous les challenges comme terminés (pour tester)
function completeAllChallenges() {
  for (let challengeType in challenges) {
    completedChallenges.add(challengeType);
  }
  updateProgress();
  console.log("All challenges marked as completed!");
}

// Export des fonctions pour utilisation dans la console
window.debugInfo = debugInfo;
window.resetProgress = resetProgress;
window.completeAllChallenges = completeAllChallenges;
