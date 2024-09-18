import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`
    return (
        <>
            {/* 
                boolは値を代入しなくても真偽の値が入っている default = true
                特に定義されてない場合はfalseが値になる
            */}
            <Child fn={hello} num={123} bool obj={{ name: "Tom", age: 123}}></Child>
            {/* <Child color="red"/> */}

        </>
    )
}

export default Example;
