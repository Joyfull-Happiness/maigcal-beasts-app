import CreatureCard from './CreatureCard.jsx';

function CreatureList({ creaturesData }) {
    return (
        <div style={{margin: '0 auto', itemalign: 'center' }}>
       {creaturesData.map((creature) => (
 <CreatureCard key={creature.id} creature={creature} />)
    
         ) }
                 
        </div>
        
    )
}
export default CreatureList;