import { Link, Button, Icon, Tooltip } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";
import useMediaQuery from "../../hooks/useMediaQuery";

type CustomLinkProps = {
  url: string;
  name: string;
  icon: IconType;
};

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: any;
  children: React.ReactNode;
};

export default function CustomLink({ url, name, icon }: CustomLinkProps) {
  const isLgBreakpoint = useMediaQuery(1024);

  const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
  }: ConditionalWrapperProps) => {
    return condition ? wrapper(children) : children;
  };

  return (
    <ConditionalWrapper
      condition={name === "Email"}
      wrapper={(children: React.ReactNode) => (
        <Tooltip label={"contact@jeusto.com"} fontSize="display3">
          {children}
        </Tooltip>
      )}
    >
      <Link m="1.5" href={url} isExternal>
        <Button
          variant="ghost"
          fontSize={isLgBreakpoint ? "16px" : "14px"}
          size={isLgBreakpoint ? "md" : "sm"}
          leftIcon={<Icon as={icon} />}
        >
          {name}
        </Button>
      </Link>
    </ConditionalWrapper>
  );
}
