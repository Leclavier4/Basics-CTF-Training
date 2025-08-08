// Système de connexion vulnérable
function attemptLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("loginMessage");

  // Simulation de requête SQL vulnérable
  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

  // Détection d'injections SQL basiques
  const sqlInjectionPatterns = [
    "' OR '1'='1",
    "' OR 1=1",
    "admin' --",
    "' OR 'a'='a",
    "' UNION SELECT",
    "'; DROP TABLE",
    "' OR true",
    "1' OR '1'='1",
  ];

  let injectionDetected = false;
  for (let pattern of sqlInjectionPatterns) {
    if (
      username.toLowerCase().includes(pattern.toLowerCase()) ||
      password.toLowerCase().includes(pattern.toLowerCase())
    ) {
      injectionDetected = true;
      break;
    }
  }

  if (injectionDetected) {
    messageDiv.innerHTML =
      '<div class="success-message">🎉 Injection SQL réussie! Connexion bypass détectée. Accès autorisé!</div>';
    setTimeout(() => {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      initMatrix();
      showChallenge("web");
    }, 2000);
  } else if (username === "admin" && password === "secret123") {
    messageDiv.innerHTML =
      '<div class="success-message">Connexion normale réussie!</div>';
    setTimeout(() => {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      initMatrix();
      showChallenge("web");
    }, 2000);
  } else {
    messageDiv.innerHTML =
      '<div class="error-message">❌ Échec de la connexion. Essayez une injection SQL!</div>';
  }
}

function showHint() {
  alert(`💡 Indices pour l'injection SQL:
    
1. Recherche sur google, les payloads classique. Il en a parmis qui passeront. 
 Comme == OR '1'='1 || admin' - ||  OR 1=1 --

Le but est de contourner la vérification du mot de passe!`);
}
