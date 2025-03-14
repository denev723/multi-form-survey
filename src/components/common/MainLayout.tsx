import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="w-full min-h-full flex justify-center bg-bg overflow-scroll [&::-webkit-scrollbar]:hidden py-60"
    >
      <main className="max-w-[655px] w-full relative">{children}</main>
    </div>
  );
}
