
// props가 배열형식으로 넘어왔을 때는 type도 배열형식으로 
// 요소 하나하나에 타입을 지정해주면 된다.
type propsType = {
    filterState: [
        filterVal: string,
        setFilterVal: React.Dispatch<React.SetStateAction<string>>
    ]
    
}

const AnimalFilter = ({ filterState }: propsType) => {
    const [filterVal, setFilterVal] = filterState
    return (
        <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
    )
}

export default AnimalFilter