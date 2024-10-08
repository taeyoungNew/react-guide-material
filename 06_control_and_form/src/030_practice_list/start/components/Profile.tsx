type profileType = {
  name: string
  age: number
  hobbies: string[]
}

const Profile = ({ name, age, hobbies }: profileType) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
