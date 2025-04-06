import { Mail, Fingerprint, X } from "lucide-react";
import { Input } from "src/components/common/input";
import { Button } from "src/components/common/button";
import { useSetAtom } from "jotai";
import { userAtom } from "src/store";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const setuserAtom = useSetAtom(userAtom);
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side for desktop */}
            <div className="hidden md:flex w-1/2 bg-[#00AEEF] text-white flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-bold mb-4">OnlyFans</h1>
                <p className="text-xl">
                    Sign up to support your favorite creators
                </p>
            </div>

            {/* Right side form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10">
                <div className="w-full max-w-sm space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold">Log in</h2>
                    </div>
                    <Input label="Email" placeholder="Email" type="email" />
                    <Input
                        label="Password"
                        placeholder="Password"
                        type={"password"}
                        isPassword
                    />

                    <Button
                        className="w-full"
                        onClick={() => {
                            setuserAtom({ id: "1", name: "John Doe" });
                            navigate("/");
                        }}
                    >
                        Log In
                    </Button>

                    <p className="text-xs text-gray-500">
                        By logging in and using OnlyFans, you agree to our
                        <span className="text-blue-500 cursor-pointer">
                            {" "}
                            Terms of Service{" "}
                        </span>
                        and
                        <span className="text-blue-500 cursor-pointer">
                            {" "}
                            Privacy Policy
                        </span>
                        , and confirm that you are at least 18 years old.
                    </p>

                    <div className="text-sm text-center space-x-2">
                        <a href="#" className="text-blue-500">
                            Forgot password?
                        </a>
                        <span className="text-gray-400">·</span>
                        <a href="#" className="text-blue-500">
                            Sign up for OnlyFans
                        </a>
                    </div>

                    <Button
                        className="w-full bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
                        variant="secondary"
                    >
                        <X className="mr-2" size={18} /> Sign in with X
                    </Button>

                    <Button
                        className="w-full bg-[#4285F4] hover:bg-[#357ae8] text-white"
                        variant="secondary"
                    >
                        <Mail className="mr-2" size={18} /> Sign in with Google
                    </Button>

                    <Button
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800"
                        variant="secondary"
                    >
                        <Fingerprint className="mr-2" size={18} /> Passwordless
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}
