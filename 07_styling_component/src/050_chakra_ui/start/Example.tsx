import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
      {/* style을 적용하고 싶은 곳을 ChakraProvider로 감싼다.  */}
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
