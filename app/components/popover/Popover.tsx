import {
  Button,
  Center,
  Popover as RowPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import * as React from "react";

export function Popover() {
  return (
    <Center height={"100vh"} gap={"20px"}>
      <RowPopover>
        <PopoverTrigger>
          <Button>Default animation</Button>
        </PopoverTrigger>

        <PopoverContent motionProps={{}}>
          <PopoverArrow />
          <PopoverHeader>Default animation</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>Footer</PopoverFooter>
        </PopoverContent>
      </RowPopover>

      <RowPopover>
        <PopoverTrigger>
          <Button>No animation</Button>
        </PopoverTrigger>

        <PopoverContent
          // _open={
          //   animationStyle: "scale-fade-in",
          //   animationDuration: "fast",
          // }
          // _closed={
          //   animationStyle: "scale-fade-out",
          //   animationDuration: "faster",
          // }
          variants={{
            enter: {
              animationName: "scale-fade-in",
              animationDuration: "fast",
            },
            exit: {
              animationName: "scale-fade-out",
              animationDuration: "faster",
            },
          }}
        >
          <PopoverArrow />
          <PopoverHeader>No animation</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>Footer</PopoverFooter>
        </PopoverContent>
      </RowPopover>

      <RowPopover>
        <PopoverTrigger>
          <Button>Custom animation</Button>
        </PopoverTrigger>

        <PopoverContent
          variants={{
            // 要素があらわれるときのアニメーション
            enter: {
              transition: { duration: 1 },
              transitionEnd: { display: "none" },
            },
            // 要素が消えるときのアニメーション
            exit: {},
          }}
        >
          <PopoverArrow />
          <PopoverHeader>Custom animation</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>Footer</PopoverFooter>
        </PopoverContent>
      </RowPopover>
    </Center>
  );
}
