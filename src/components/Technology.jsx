function Technology({ img, name }) {
    return (
        <div className="flex flex-col items-center w-1/4 p-4">
            <div
            className="
                border-2
                border-secondary-500
                hover:bg-secondary-900
                rounded-2xl
                w-full
                flex
                flex-col
                items-center
                text-secondary-500
                hover:text-white
                p-4
                ease-in
                duration-200
            ">
                <i className={img + " text-9xl"}></i>
                <h2 className="text-2xl mt-4">{name}</h2>
            </div>
        </div>
    )
}

export default Technology;