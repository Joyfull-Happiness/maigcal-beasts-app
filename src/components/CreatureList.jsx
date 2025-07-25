function CreatureList({creature}){
creatureData.map((item, index) => (
    <CreatureCard key={index} creaturesData={item} ></CreatureCard>) )
}
export default CreatureList;