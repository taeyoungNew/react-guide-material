import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react"



type FormPropsType = {
  createTodo: Function
}

const Form = ({ createTodo }: FormPropsType) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast()

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if(!enteredTodo) {
      toast({
        title: "새로운 테스트를 입력해주세요",
        status: "error", // "info" 는 파랑색
        duration: 2000,  // 노출시간
        isClosable: true
      })
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <HStack>
          <Input
            placeholder="새로운 테스크"
            // placeholder의 디자인을 바꾸려면 앞에_를 붙인다
            _placeholder={{opacity: "0.3", color: "grey.500", padding: "1rem"}}
            size="lg"
            padding={3}
            variant="flushed"
            type="text"
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
            bgColor="white"
          />
          <Button
            colorScheme="blue"
            size="md"
            bgColor="white"
            variant={"outline"}
            px={7}
            type="submit"
          >
            追加
          </Button>
        </HStack>
      </form>
    </div>
  );
};

export default Form;
