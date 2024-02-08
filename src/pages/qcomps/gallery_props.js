function Profile(props) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img className="avatar" src={props.image} alt={props.name} width={70} height={70} />
      <ul>
        <li><b>Profession: </b> {props.profession}</li>
        <li><b>Awards: {props.awardCount} </b> ({props.awards})</li>
        <li><b>Discovered: </b> {props.discovery}</li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        image="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awardCount={4}
        awards="Nobel Prizes in Physics and Chemistry, Davy Medal, Matteucci Medal"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        image="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awardCount={2}
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
