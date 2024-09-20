import {
  Box,
  Input,
  useDisclosure,
  InputProps,
  forwardRef,
} from "@chakra-ui/react";
import { useState, ChangeEvent, ElementRef, useRef } from "react";
import { useOuterClick } from "./hooks/useOuterClick";
type Option = { id: number; text: string };
type Props = {
  onChange: (value?: string) => void; // react-hook-form's onChange
  isDirty?: boolean;
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
  ({ onChange, onBlur, isDirty = false, ...rest }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
      const value = suggestion.text;

      setSuggestions(options.filter(({ text }) => text.startsWith(text)));
      onChange(value);
    };

    const handleFocus = () => {
      if (!isDirty) {
        setSuggestions(options);
      } else {
        setSuggestions(
          options.filter(({ text }) => text.startsWith(rest.value as string))
        );
      }
      onOpen();
    };

    useOuterClick([referenceRef], () => {
      onClose();
    });

    return (
      <Box position={"relative"}>
        <Box ref={referenceRef}>
          <Input
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            ref={ref}
            {...rest}
          />
        </Box>
        {isOpen && (
          <Box
            boxShadow="md"
            mt="8px"
            borderRadius="lg"
            position={"absolute"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            {suggestions?.map((suggestion, i) => (
              <Box
                as={"button"}
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
                key={i}
                p="8px"
                textAlign={"left"}
                onClick={() => handleClick(suggestion)}
              >
                {suggestion.text}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    );
  }
);
