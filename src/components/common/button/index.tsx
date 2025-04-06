// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    className?: string;
}

export const Button = ({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) => {
    const baseStyles =
        "w-full py-2 text-white font-medium transition-colors duration-200 rounded-full";
    const variants = {
        primary: "bg-[var(--blue)] hover:bg-[var(--dp-blue)]",
        secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    };

    return (
        <button {...props} className={`${baseStyles} ${variants[variant]}`}>
            <div className={className}>{children}</div>
        </button>
    );
};
