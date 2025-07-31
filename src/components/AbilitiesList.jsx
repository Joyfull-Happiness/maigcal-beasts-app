function AbilitiesList({ abilities }) {

    return (

        <div>

            <h4>Abilities List</h4>
            <ul>
                {abilities.map((item, index) => (
                     
                     <li key={index}>
                        {item}
                     </li>
                ))}

            </ul>
                
          </div>

    )
}
export default AbilitiesList;