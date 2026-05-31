const btn = document.getElementById('btn-surprise');
const coeur = document.getElementById('coeur');

btn.addEventListener('click', () => {
    // Affiche ou cache le coeur
    coeur.classList.toggle('hidden');
    
    // Change le texte du bouton
    btn.textContent = "Je t'aime très fort !";
    
    // Désactive le bouton après le clic
    btn.style.backgroundColor = "#ccc";
    btn.style.cursor = "default";
});