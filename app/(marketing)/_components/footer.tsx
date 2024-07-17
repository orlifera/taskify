import LogoComponent from "@/components/logo"
import { Button } from "@/components/ui/button"

export const Footer = () => {
    return (
        <div className="fixed bottom-0 p-4  w-full border-t  bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <LogoComponent />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="ghost" >
                        Privacy Policy
                    </Button>

                    <Button size="sm" variant="ghost" >
                        Terms Of Service
                    </Button>

                </div>
            </div>
        </div>
    )
}