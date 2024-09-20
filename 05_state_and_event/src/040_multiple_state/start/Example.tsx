import ButtonCom from "./components/ButtonCom";

const Example = () => {
    console.log(<Example/>);
    
    return (
        <>
            <ButtonCom btnName={"A"} firstNum={0}/>
            <ButtonCom btnName={"B"} firstNum={10}/>
            <ButtonCom btnName={"C"} firstNum={100}/>
        </>
    )
};

export default Example;
