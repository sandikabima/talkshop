import React from "react";
import { cn } from "@/shared/lib/utils";
import Icon from "./Icon";

const IconButton = React.forwardRef(
  (
    {
      icon,
      size = 5,
      children,
      className,
      iconClassName,
      ...props
    },
    ref
  ) => {
    const isIconOnly = !children;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition",
          isIconOnly
            ? "p-2"                         
            : "gap-2 px-4 py-2",           
          "hover:bg-gray-100",
          className
        )}
        {...props}
      >
        {icon && <Icon icon={icon} size={size} className={iconClassName} />}
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;