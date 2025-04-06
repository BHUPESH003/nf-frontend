// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export const Button = ({
    children,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "w-full py-2 rounded-md text-white font-medium transition-colors duration-200";
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    };

    return (
        <button {...props} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    );
};
