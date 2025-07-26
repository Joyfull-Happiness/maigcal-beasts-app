import React, { useState } from 'react';
import CreatureList from './components/CreatureList.jsx';

// import AbilitiesList from './components/AbilitiesList.jsx';

function App() {
  const creaturesData = [
    {
      id: 1,
      name: 'Glimmerwing Dragon',
      habitat: 'Cloud Peaks',
      abilities: ['Fire Breath', 'Flight', 'Illusion Weaving'],
      description:
        'A majestic dragon known for its shimmering scales and deceptive illusions.',
    },
    {
      id: 2,
      name: 'Whisperwood Dryad',
      habitat: 'Ancient Forests',
      abilities: ["Nature's Embrace", 'Camouflage', 'Root Control'],
      description:
        'Guardians of old forests, capable of merging with trees and controlling plant life.',
    },
    {
      id: 3,
      name: 'Deep-Sea Leviathan',
      habitat: 'Abyssal Trenches',
      abilities: ['Crushing Pressure', 'Bioluminescence', 'Sonic Shriek'],
      description:
        'Giant creatures of the deep, adapted to extreme pressures and emitting blinding light.',
    },
  ];
  const [showCreatures, setShowCreatures] = useState(false);


  function handleClick() {
    setShowCreatures(!showCreatures)
  }

  return (
    <>
      <div>
        {showCreatures ? (
          <>
            <h3>Creatures of Elodria</h3>
            <h4>The best creatures the world has ever seen</h4>
            <CreatureList creaturesData={creaturesData} />
          </>
        ) : (
          <button onClick={handleClick}>Click here to see the Creatures!</button>
        )}
      </div>
    </>
  );

}

export default App;
