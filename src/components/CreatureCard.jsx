import AbilitiesList from './AbilitiesList.jsx'; 
function CreatureCard({ creature }) {
    console.log('Data:', creature);

    return (
        <>

            <div style={{
                backgroundColor: '#ffffff', // deep navy
                border: '2px solid #e23636', // heroic red outline
                borderRadius: '12px',
                padding: '20px',
                margin: '2rem',
                width: '300px',
                textAlign: 'center',
                fontFamily: 'Helvetica Neue, sans-serif',
                color: '#000000', // off-white text
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}>
<img
src={creature.image}
style={{
    width: '300px', // sets image width
          height: 'auto', // keeps aspect ratio
          borderRadius: '10px', // optional rounded corners
          border: '2px solid #ccc', // optional border
}

}/> 
                <h3>{creature.name}</h3>
                <h4>{creature.habitat}</h4>
                <h4>{creature.description}</h4>
                <AbilitiesList abilities={creature.abilities} />       

            </div>
        </>
    );
}


export default CreatureCard; 