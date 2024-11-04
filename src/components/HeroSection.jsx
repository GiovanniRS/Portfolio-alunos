import Button from "./Button";
import mussum from "../assets/mussum.png"

function HeroSection() {
    return (
        <section className="bg-secondary-700 flex justify-center h-hvm">
            <div className="container flex items-center">
                <div className="w-1/2 text-white font-semibold">
                    <h1 className="text-4xl mb-2">Olá, eu sou o <span className="text-primary-900 font-bold text-5xl">Giovanni</span></h1>
                    <h2 className="text-3xl mb-8">Desenvolvedor FullStack e Professor</h2>
                    <Button link="#contato" content="Fale Comigo" target="_parent"/>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={mussum} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;