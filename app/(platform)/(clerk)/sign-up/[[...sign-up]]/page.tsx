
import { SignUp } from "@clerk/nextjs";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import LogoComponent from "@/components/logo";

const headingFont = localFont({
    src: "../../../../../public/fonts/font.woff2",

})


export default function SignUpPage() {
    return (
        <>
            <div className="flex items-center justify-center text-center flex-col">
                <LogoComponent />
                <h1 className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className,
                )}>Welcome to Taskify</h1>
                <p className="text-lg text-neutral-500 pb-3">Please sign up to start using our product</p>
                <SignUp />
            </div>
        </>
    );
}