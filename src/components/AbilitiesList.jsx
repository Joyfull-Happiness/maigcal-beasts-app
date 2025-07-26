

function AbilitiesList({ creaturesData }) {
   
    return (

        <div >

<h4>Abilities List</h4>
    <ol>
        
    </ol>
       {creaturesData.map((creature) => (
 <CreatureCard key={creature.abilities} />)
    
         ) }
                 
        </div>
        
    )
}
export default AbilitiesList; 



function AbilitiesList({ creaturesData }) {
   
    return (

        <div >

<h4>Abilities List</h4>
    <ol>
        
    </ol>
       {creaturesData.map((creature) => (
 <CreatureCard key={creature.abilities} />)
    
         ) }
                 
        </div>