import { StackDivider, VStack } from "@chakra-ui/react";

type ListPropsType = {
    todos: {
        id: number;
        content: string;
    }[]
    deleteTodo: Function
}

const List = ({todos, deleteTodo}: ListPropsType) => {
    const complete = (id: number) => {
        deleteTodo(id)
    }
    return (
        // 
        <VStack 
            // border-color = 선 색깔
            divider={<StackDivider/>}
            // color={{ sm: "red.600", md: "blue.600", lg: "green.600", xl: "red.600", "2xl": "aqua.600"}}
            borderColor="black.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5} // padding
            alignItems="start"
        > 
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                    </div>
                )
            })}
        </VStack>
    );
}

export default List;