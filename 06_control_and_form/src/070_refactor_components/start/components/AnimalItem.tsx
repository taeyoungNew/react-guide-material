type ItemType = {
  animal: string
}

const AnimalItem = ({animal}: ItemType) => {
    return (
        <li key={animal}>
        {animal}
        {animal === "Dog" && "★"}
      </li>
    )
}

export default AnimalItem