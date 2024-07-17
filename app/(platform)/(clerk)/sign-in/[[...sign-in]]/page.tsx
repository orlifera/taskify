import LogoComponent from "@/components/logo";
import { SignIn } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
    src: "../../../../../public/fonts/font.woff2",

})


export default function SignInPage() {
    return (
        <>
            <div className="flex items-center justify-center text-center flex-col">
                <LogoComponent />
                <h1 className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className,
                )}>Welcome Back!</h1>
                <p className="text-lg text-neutral-500 pb-3">Log In to resume your productivity streak</p>
                <SignIn />
            </div>
        </>
    )
}