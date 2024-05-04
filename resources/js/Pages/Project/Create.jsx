import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create({ auth, name }) {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        description: "",
        paragraph: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route("mozzamel_huque.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-4xl text-emerald-500 leading-tight">
                        {name}
                    </h2>
                </div>
            }
        >
            <Head title="Add New Project" />

            <div className="py-12 dark:bg-gray-800 min-h-screen">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-4 ">
                    <div className="bg-white overflow-hidden dark:bg-gray-700 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-300">
                            <h1 className="text-center text-gray-800 font-medium text-3xl py-8 transform">
                                Add New Post.
                            </h1>

                            <form className="space-y-6" onSubmit={onSubmit}>
                                {/* Create a new Project from Name */}
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Project Name"
                                    />

                                    <TextInput
                                        id="name"
                                        name="Name"
                                        type="text"
                                        placeholder="Project Name"
                                        value={data.name}
                                        isFocused="true"
                                        className="mt-1 block w-full text-gray-900"
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Create a new Project from Description */}
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Project Description"
                                    />

                                    <TextAreaInput
                                        id="description"
                                        name="description"
                                        type="text"
                                        rows="04"
                                        placeholder="Project Description"
                                        isFocused="true"
                                        value={data.description}
                                        className="mt-1 block w-full text-gray-900"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                {/*  Create a new project from image */}
                                <div>
                                    <InputLabel
                                        className="text-white text-lg font-medium"
                                        htmlFor="project_image_path"
                                        value="Project Image"
                                    />

                                    <TextInput
                                        id="project_image_path"
                                        name="image"
                                        type="file"
                                        isFocused="true"
                                        className="mt-1 py-1.5 px-2 block w-full bg-gray-400 border-black"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Create a new Project from Description */}
                                <div>
                                    <InputLabel
                                        htmlFor="paragraph"
                                        value="Project Paragraph"
                                    />

                                    <TextAreaInput
                                        id="paragraph"
                                        name="paragraph"
                                        type="text"
                                        rows="03"
                                        placeholder="Project Paragraph"
                                        isFocused="true"
                                        value={data.paragraph}
                                        className="mt-1 block w-full text-gray-900"
                                        onChange={(e) =>
                                            setData("paragraph", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.paragraph}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Submit or Cancel Button */}
                                <div className="flex justify-end gap-5">
                                    <Link
                                        // href={route("project.index")}
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Cancel
                                    </Link>
                                    <SecondaryButton
                                        type="submit"
                                        className="bg-emerald-600 border-emerald-600 hover:bg-emerald-500"
                                    >
                                        Submit
                                    </SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
