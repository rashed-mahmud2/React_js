import BioData from "./components/BioData";
const bioDataInfo = [
  {
    name: "Rashed Mahmud",
    age: "24",
    phone: "+880154652112",
    email: "mahamud456@gmil.com",
    linkedin: "linkedin/in/rashed2071",
    skills: [
      "React",
      "Node",
      "JavaScript",
      "TypeScript",
      "MondoDB",
      "REST Api",
      "Tailwind CSS",
      "Bootstrap",
    ],
    interests: ["Football", "Cricket", "Coding", "Designing", "Video Editing"],
  },
  {
    name: "Selina Khatun",
    age: "18",
    phone: "+8801565252112",
    email: "selinaloveyou@gmail.com",
    linkedin: "linkedin/in/sleina2071",
    skills: ["Coocking", "Dancing", "Loving", "Serving", "Caring"],
    interests: [
      "Mobile game",
      "Ludo",
      "Cocking",
      "Reading Quran",
      "Sleeping",
      "Eating",
    ],
  },

  {
    name : "Abdullah Mahmud",
        age : "0",
        phone : "+880124435",
        email : "abdullah@gmail.com",
        linkedin : "linkedin/in/abdullah2071",
        skills : [
          "Fighting",
          "Reading Holly Quran",
          "Wise",
          "Language: Arbic, Bangla, English, Hindi, Urdu",
        ],
        interests : [
          "Jihad Fih Sabilillah.",
          "Fojorer Namaj sheshe",
          "Prostut hoye nambo mathe",
          "Tasbih hate iman buke",
          "Kalema mukhe kalbe kitab",
        ],
  }
];

function App() {
  return (
    <>
      <h1>Bio Data of our teams</h1>
      {bioDataInfo.map((bioData) => (
        <BioData
          name= {bioData.name}
          age= {bioData.age}
          phone= {bioData.phone}
          email={bioData.email}
          linkedin= {bioData.linkedin}
          skills={bioData.skills}
          interests={bioData.interests}
        />
      ))}
    </>
  );
}

export default App;
