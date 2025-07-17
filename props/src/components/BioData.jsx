
export default function BioData({name, age, phone, email, linkedin, skills, interests}) {
  return (
    <div>
      <h2>Bio Data of {name}</h2>
      <div>
        <h3>Personal Info</h3>
        <p>Age: {age}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Linkedin: {linkedin}</p>
      </div>
      <div>
        <h3>My skills</h3>
        <ul>
          {skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>My Interest</h3>
        <ul>
          {interests?.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
}
