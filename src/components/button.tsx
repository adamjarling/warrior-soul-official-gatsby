import { Button } from "@radix-ui/themes";

export default function WButton({
  children,
  ...restProps
}: {
  children: React.ReactNode;
  restProps?: any;
}) {
  return (
    <Button
      size={{
        initial: "4",
        md: "4",
      }}
      className="uppercase font-semibold"
      {...restProps}
    >
      {children}
    </Button>
  );
}
