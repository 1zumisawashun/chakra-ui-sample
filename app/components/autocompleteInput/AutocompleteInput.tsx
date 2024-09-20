import {
  Box,
  Input,
  Text,
  useDisclosure,
  InputProps,
  forwardRef,
} from "@chakra-ui/react";
import { useState, ChangeEvent, ElementRef, useRef } from "react";
import { useOuterClick } from "./hooks/useOuterClick";
type Option = { id: number; text: string };
type Props = {
  onChange: (value?: string) => void; // react-hook-form's onChange
} & Omit<InputProps, "onChange">;

const options = [
  { id: 1, text: "React" },
  { id: 2, text: "Ruby on Rails" },
  { id: 3, text: "JavaScript" },
  { id: 4, text: "TypeScript" },
  { id: 5, text: "Go" },
  { id: 6, text: "HTML" },
  { id: 7, text: "CSS" },
] satisfies Option[];

// onBlurは捨てる
export const AutocompleteInput = forwardRef<Props, "input">(
  ({ name, onChange, onBlur, ...rest }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const floatingRef = useRef<ElementRef<"div">>(null);
    const referenceRef = useRef<ElementRef<"div">>(null);

    const [suggestions, setSuggestions] = useState<Option[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 0) {
        setSuggestions(options.filter(({ text }) => text.startsWith(value)));
        onOpen();
      } else {
        setSuggestions(options.filter(({ text }) => text.startsWith(value)));
        onClose();
      }

      onChange(value);
    };

    const handleClick = (suggestion: Option) => {
      onChange(suggestion.text);
      onClose();
    };

    useOuterClick([floatingRef, referenceRef], () => {
      console.log("outer-click");
      onClose();
    });

    return (
      <Box>
        <Box ref={referenceRef}>
          <Input
            type="text"
            onChange={handleChange}
            onFocus={onOpen}
            ref={ref}
            {...rest}
          />
        </Box>
        {isOpen && (
          <Box boxShadow="md" mt="8px" borderRadius="lg" ref={floatingRef}>
            {suggestions?.map((suggestion, i) => (
              <Text
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
                key={i}
                p="8px"
                onClick={() => handleClick(suggestion)}
              >
                {suggestion.text}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    );
  }
);
