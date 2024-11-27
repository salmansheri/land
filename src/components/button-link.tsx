import { cn } from "@/lib/util";

interface ButtonLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}
export default function ButtonLink({
  label,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <button
      className={cn(
        " bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 text-black  border border-blue-100/20 ring-yellow-300 hover:from-yellow-800 hover:via-yellow-600 hover:to-yellow-500  transition-all duration-700 ease-in-out   inline-flex w-fit items-center justify-center px-5 py-3 rounded-full",
        className,
      )}
      {...props}
    >
      {label}
    </button>
  );
}
