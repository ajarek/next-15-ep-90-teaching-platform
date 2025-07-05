import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Cta = () => {
    return (
        <section className="bg-primary text-background px-4 py-8 flex flex-col items-center justify-center rounded-2xl gap-4 ml-1">
            <div className="bg-amber-400 text-black px-4 py-2 rounded-lg">Start learning your way.</div>
            <h2 className="text-3xl font-bold text-center">
                Build and Personalize Learning Companion
            </h2>
            <p className="text-center">Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <Button variant={'destructive'} className="flex items-center gap-2">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Build a New Companion</p>
                </Link>
            </Button>
        </section>
    )
}
export default Cta
