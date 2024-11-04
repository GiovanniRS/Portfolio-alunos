import Technology from "./Technology";

function AboutSection() {
    return(
        <section id="sobre" className="flex flex-col items-center">
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Sobre mim</h1>
                <p className="text-xl pb-3">Sou desenvolvedor com seis anos de experiência, especializado em Java, PHP, JavaScript e TypeScript. Tenho forte domínio em CSS, microserviços e Docker, permitindo a criação de soluções escaláveis e eficientes.</p>
                <p className="text-xl pb-3">Estou familiarizado com sistemas de mensageria e metodologias ágeis, o que facilita a colaboração em equipes e a entrega de resultados rápidos. Além disso, utilizo ferramentas de versionamento como Git para garantir a organização e a qualidade do código.</p>
                <p className="text-xl pb-3">Busco constantemente novos desafios para aprimorar minhas habilidades e contribuir com soluções que impactem positivamente a experiência do usuário.</p>
            </div>
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Tencnologias</h1>
                <div className="flex flex-wrap">
                    <Technology img="devicon-java-plain" name="Java" teste="./src/assets/imgHero.png"/>
                    <Technology img="devicon-python-plain" name="Python"/>
                    <Technology img="devicon-react-plain" name="React"/>
                    <Technology img="devicon-typescript-plain" name="Typescript"/>
                    <Technology img="devicon-javascript-plain" name="Javascript"/>
                    <Technology img="devicon-r-plain" name="R"/>
                    <Technology img="devicon-html5-plain" name="HTML"/>
                    <Technology img="devicon-css3-plain" name="CSS"/>
                    <Technology img="devicon-php-plain" name="PHP"/>
                    <Technology img="devicon-docker-plain" name="Docker"/>
                    <Technology img="devicon-git-plain" name="Git"/>
                    <Technology img="devicon-mysql-plain" name="MySQL"/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;