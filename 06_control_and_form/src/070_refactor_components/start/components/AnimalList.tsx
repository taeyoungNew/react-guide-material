import AnimalItem from "./AnimalItem";

type animalType = {
    animals: string[]
}

const AnimalList = ({ animals }: animalType) => {
    if(animals.length === 0) {
        return <h3>애니멀이 없습니다.</h3>
    }
    return (
        <ul>
            {animals
                .map((animal) => {
                    return (
                    <AnimalItem key={animal} animal={animal} />
                    //   <li key={animal}>
                    //     {animal}
                    //     {animal === "Dog" && "★"}
                    //   </li>
                    );
            })}
        </ul>
    )
}

export default AnimalList