import {AnimationMenu, AnimationQrcode} from "@/components/layout/Sections/Hero/Animation";

export default function Hero() {
    return (
        <section className="w-full text-center flex flex-col gap-2 items-center justify-center">
            <div className="text-center flex flex-col gap-5 lg:w-[40%]">
                <h1 className="text-5xl font-bold">Facilite o acesso dos clientes ao seu cardápio!!</h1>
                <h2 className="text-2xl">
                    Ofereça os seus produtos de forma rápida e descomplicada utilizando o nosso aplicativo!!
                </h2>
            </div>
            <div className="lg:w-[70%] lg:mt-[-150px] gap-10 opacity-50 flex flex-row items-center justify-between">
                <div className="w-14 h-14 lg:w-28 lg:h-28 shadow-xl relative bg-primary rounded-full animate-fade-up animate-delay-700">
                    <AnimationQrcode/>
                </div>
                <div
                    className="w-14 h-14 lg:w-28 lg:h-28 shadow-xl relative bg-primary rounded-full animate-fade-up animate-delay-1000">
                    <AnimationMenu/>
                </div>
            </div>
        </section>
    )
}
