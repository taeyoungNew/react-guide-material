import { HStack, IconButton, StackDivider, VStack, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc" 

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
        // 종정렬
        <VStack 
            // border-color = 선 색깔
            divider={<StackDivider/>}
						width="80%"
						bgColor="white"
            // color={{ sm: "red.600", md: "blue.600", lg: "green.600", xl: "red.600", "2xl": "aqua.600"}}
            borderColor="blackAlpha.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5} // padding
            alignItems="start"
        > 
            {todos.map(todo => {
                return (
                    // 횡정렬
                    <HStack key={todo.id} spacing={5}>
                        {/* IconButton을 사용할 때 aria-label='Search database'를 정의해줘야함 */}
                        <IconButton 
													aria-label='Search database' 
													onClick={() => complete(todo.id)} 
													icon={<VscCheck />} 
													isRound={true}
													bgColor="cyan.100"
													opacity="0.5"
												>
                            完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;