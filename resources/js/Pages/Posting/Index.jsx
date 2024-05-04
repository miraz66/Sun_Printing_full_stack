import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const postingData = [
    {
        name: "Mozzamel Huque Sritisoggo",
        link: "mozzamel_huque/create",
    },
    { name: "Sun Football Academic", link: "" },
    { name: "Sun Sporting Club", link: "" },
    { name: "Young SunSpoting Club", link: "" },
];

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                    Add Your New Post.
                </h2>
            }
        >
            <Head title="Posting" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 py-10 text-gray-900">
                            <ul className="space-y-3">
                                {postingData.map((posting) => (
                                    <li key={posting.name}>
                                        <div className="flex justify-between items-center px-4 py-4 text-lg font-medium bg-slate-500 text-gray-100">
                                            <p>{posting.name}</p>
                                            <Link
                                                className="bg-emerald-600 px-4 py-2 text-sm rounded font-medium hover:bg-emerald-500 ease-in-out duration-200"
                                                href={posting.link}
                                            >
                                                New Post
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
