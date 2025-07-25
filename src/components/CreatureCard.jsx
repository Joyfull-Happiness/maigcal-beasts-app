
// 
function CreaturesCard({creaturesData}){
    console.log('Data:', creaturesData);
    
    return (
    
    <div style={{border: '2px solid black', padding:'3rem', borderRadius: '.5rem',backgroundColor: '#1c1f2a', // deep navy
        border: '2px solid #e23636', // heroic red outline
        borderRadius: '12px',
        padding: '20px',
        margin: '20px auto',
        width: '300px',
        textAlign: 'center',
        fontFamily: 'Helvetica Neue, sans-serif',
        color: '#f5f5f5', // off-white text
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
    
        <h3>{creaturesData.name}</h3>
        <h4>{creaturesData.habitat}</h4>
        <h4>{creaturesData.decription}</h4>
       

          <p>Level: {creaturesData.level.toFixed(2)}</p>{' '}
          {/* .toFixed(2) for nice currency format */}
          <p>language: {creaturesData.language}</p>
          <p>Super Power: {creaturesData.superPower}</p>
       
          {/* Conditional rendering for flight stutus */}
          {creaturesData.canFly ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>OMG they have WINGS</p>
          ) : (
            <p style={{ color: 'red', fontWeight: 'bold' }}>Lame.... they can't fly!?</p>
          )}
        
        
        
        
        </div>
    )
    }
    



export default CreatureCard;