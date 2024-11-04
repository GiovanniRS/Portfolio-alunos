import Project from "./Project"

function PortfolioSection() {
    return (
        <section id="portfolio" className="flex flex-col items-center bg-secondary-500">
            <div className="container py-8">
                <h1 className="text-4xl pb-4 text-white">Portfolio</h1>
                <div className="flex flex-wrap">
                    <Project title="Calculadora" description="Este projeto é uma calculadora desenvolvida em Python..." link="https://github.com/GiovanniRS/Calculador-em-Python" />
                    <Project title="Calculadora" description="Este projeto é uma calculadora desenvolvida em Python..." link="https://github.com/GiovanniRS/Calculador-em-Python" />
                    <Project title="Calculadora" description="Este projeto é uma calculadora desenvolvida em Python..." link="https://github.com/GiovanniRS/Calculador-em-Python" />
                </div>
            </div>
        </section>

    )
}

export default PortfolioSection;