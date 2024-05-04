import MozzamelHuqueSritisoggo from "@/Components/MozzamelHuqueSritisoggo";
import Pagination from "@/Components/Pagination";
import SportingBlog from "@/Components/SportingBlog";
import React from "react";

export default function Home({ sports }) {
    return (
        <div className="pb-20">
            {/* <pre>{JSON.stringify(sports, undefined, 2)}</pre> */}
            <MozzamelHuqueSritisoggo />

            {/* <div className="bg-white pt-40 pb-20 space-y-24 md:space-y-40">
                {sports.data.map((data, i) => (
                    <SportingBlog {...data} key={i} />
                ))}
            </div> */}

            {/* <Pagination links={sports.meta.links} /> */}
        </div>
    );
}
