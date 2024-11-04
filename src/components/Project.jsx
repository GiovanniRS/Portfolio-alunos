import Button from "./Button";

function Project({title, description, link}) {
    return(
        <div className="flex flex-col items-center w-1/3 p-4">
            <div className="bg-white w-full flex flex-col items-center p-8">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
                <Button content="Veja mais" link={link} target="_blank"/>
            </div>
        </div>
    )
}

export default Project;