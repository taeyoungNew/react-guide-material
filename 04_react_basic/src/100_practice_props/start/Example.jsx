import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
  // { name: "John Doe", age: "??", "country": "Japen"}
];

const Example = () => {
  return (
    <div>
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      <Profile {...profile[1]} />
      <Profile {...profile[2]}/>
    </div>
  );
};

export default Example;
