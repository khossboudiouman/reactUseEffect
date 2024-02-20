import { useState, useEffect } from 'react';

function Clock() {
  // Déclaration de l'état pour stocker l'heure actuelle
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Création d'un intervalle qui se déclenche toutes les secondes
    const interval = setInterval(() => {
      // Mettre à jour l'heure à chaque déclenchement de l'intervalle
      setTime(new Date());
    }, 1000); // La valeur 1000 représente une seconde en millisecondes

    // Nettoyage de l'intervalle lorsque le composant est démonté pour éviter les fuites de mémoire
    return () => clearInterval(interval);
  }, []); // La liste vide indique que ce useEffect s'exécute uniquement lors du montage initial

  return (
    <div>
      <h2>Horloge en temps réel</h2>
      {/* Affichage de l'heure actuelle dans un paragraphe */}
      <p>Il est actuellement {time.toLocaleTimeString()}.</p>
    </div>
  );
}

export default Clock;
