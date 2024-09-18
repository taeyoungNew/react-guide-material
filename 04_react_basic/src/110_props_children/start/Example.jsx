import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" >
        <Profile {...profile[0]} />
        <Profile {...profile[1]} /> 
      </Container>
      <Container title="個別で渡す" children={
        [
          // 유니크키로 설정
          <Profile key={profile[1].name} {...profile[1]} />,
          <Profile key={profile[0].name} {...profile[0]} /> 
        ]
      } 
      first={<Profile key={profile[1].name} {...profile[1]} />} 
      second={<Profile key={profile[0].name} {...profile[0]} />}
      >
      </Container>
    </div>
  );
};

export default Example;
