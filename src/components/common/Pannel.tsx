import { PropsWithChildren } from "react";
import cn from "classnames";

export default function Pannel({ className, children }: PropsWithChildren<Cn>) {
  return (
    <div
      className={cn("flex flex-col p-20 pt-26 bg-white rounded-20", className)}
    >
      {children}
    </div>
  );
}

export function PannelHeader({ className, children }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}

export function PannelBody({ className, children }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}

export function PannelFooter({ className, children }: PropsWithChildren<Cn>) {
  return (
    <>
      <hr className="border-gray-100" />
      <div className={className}>{children}</div>
    </>
  );
}

export function PannelCap({ children }: PropsWithChildren) {
  return (
    <div className="-mb-10 relative">
      <div className="inline-block px-14 pt-10 pb-6 bg-main text-white rounded-t-10 text-15">
        {children}
      </div>
      <div className="bg-main h-9" />
    </div>
  );
}
