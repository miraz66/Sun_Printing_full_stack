import Pagination from "@/Components/Pagination";

export default function SportingBlog({
    name,
    description,
    paragraph,
    location,
    image_path,
    created_by,
}) {
    return (
        <div className="max-md:mt-20 max-w-4xl mx-5 xl:mx-auto space-y-10 md:space-y-12">
            <div>
                <h1 className="pb-3 text-4xl font-bold text-neutral-700">
                    {name}
                </h1>
                <div className="flex gap-4">
                    <p>{location}</p>
                    <dd>{created_by}</dd>
                </div>
            </div>
            <p>{description}</p>
            <img
                className="mx-auto w-full rounded-md"
                src={image_path}
                alt=""
            />
            <p>{paragraph}</p>
        </div>
    );
}
