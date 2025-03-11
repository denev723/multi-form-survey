import classNames from "classnames";

interface Props {
  direction?: "horizontal" | "vertical";
}

export default function Divider({
  direction = "horizontal",
  className,
}: Cn<Props>) {
  if (direction === "horizontal") {
    return (
      <hr
        className={classNames("border-t-1 border-gray100 w-full", className)}
      />
    );
  }
  return (
    <hr className={classNames("border-l-1 border-gray100 h-full", className)} />
  );
}
