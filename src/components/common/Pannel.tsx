import { PropsWithChildren } from "react";

export default function Pannel({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col p-20 pt-26 bg-white rounded-20">
      {children}
    </div>
  );
}

export function PannelHeader({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PannelBody({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function PannelFooter({ children }: PropsWithChildren) {
  return (
    <>
      <hr className="border-gray-100 mb-20" />
      <div>{children}</div>
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
