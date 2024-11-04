function Header() {
    return (
        <header className="bg-secondary-900 flex justify-center py-5">
            <div className="container flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary-900 shadow-teste">Gio</h1>

                <nav className="font-semibold text-slate-400 ">
                    <a href="#sobre" className="p-4 hover:text-white">Sobre</a>
                    <a href="#portfolio" className="p-4 hover:text-white">Portfolio</a>
                    <a href="#contato" className="p-4 hover:text-white transi">Contato</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;