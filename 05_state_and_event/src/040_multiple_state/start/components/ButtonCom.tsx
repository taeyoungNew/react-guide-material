import { useState } from "react"

type propsType = {
    btnName: string
    firstNum: number
}

const ButtonCom = (props: propsType) => {
    const { btnName, firstNum } = props
    let [value, setValue ] = useState(firstNum);
    // let sumVal = value
    return (
        <>
            <h4>{`ボタン${btnName}を${value}回押しました！`}</h4>
            <button onClick={() => {
                setValue(++value)
            }}>ボタン{btnName}</button>
        </>
    )
}

export default ButtonCom