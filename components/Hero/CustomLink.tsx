import { Link, Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import useMediaQuery from "../../hooks/useMediaQuery";

type CustomLinkProps = {
  isFirst: boolean;
  url: string;
  name: string;
  icon: IconType;
};

export default function CustomLink({
  url,
  name,
  icon,
}: CustomLinkProps) {
  const isLgBreakpoint = useMediaQuery(1024);

  return (
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
  );
}
