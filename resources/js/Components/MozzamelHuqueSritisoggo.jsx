import clsx from "clsx";
import { useState } from "react";
import { Head } from "@inertiajs/react";

export default function MozzamelHuqueSritisoggo() {
    const [readMore, setReadMore] = useState(true);

    return (
        <>
            <Head title="home" />
            <div className="bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3')]">
                <div className="bg-gray-900 pt-48 md:pt-60 lg:pt-72 pb-28 md:pb-40 bg-opacity-65">
                    <div className="max-w-7xl mx-auto px-5">
                        <div>
                            <h1 className="flex gap-5 items-center">
                                <img className="h-20 w-20" src={""} alt="" />
                                <span className="sr-only"> - </span>
                                <span className="mt-4 block max-w-7xl text-4xl sm:text-7xl font-playfair font-semibold tracking-wide text-white [text-wrap:balance]">
                                    Md.Mozzamel Huque Sriti soggo
                                </span>
                            </h1>
                            <div
                                className={clsx(
                                    "pt-20 max-w-5xl text text-xl space-y-8 text-gray-50 leading-8",
                                    readMore
                                        ? "line-clamp-6"
                                        : "line-clamp-none"
                                )}
                            >
                                <p>
                                    Sun Sporting Club is a premier sports
                                    organization dedicated to fostering a
                                    culture of athleticism, teamwork, and
                                    community engagement. Established with the
                                    vision of promoting sports excellence and
                                    providing a platform for aspiring athletes,
                                    we strive to empower individuals of all ages
                                    and abilities to pursue their passion for
                                    sports.
                                </p>
                                <p>
                                    <span className="font-bold">
                                        Our Mission: <br />
                                    </span>
                                    At Sun Sporting Club, our mission is to
                                    promote physical fitness, mental wellness,
                                    and personal development through sports. We
                                    aim to inspire and support individuals in
                                    achieving their athletic goals while
                                    instilling values of sportsmanship,
                                    discipline, and camaraderie.
                                </p>

                                <p>What Sets Us Apart:</p>
                                <ul className="pl-6 space-y-5 text-lg">
                                    <li>
                                        <strong>
                                            1. Comprehensive Sports Programs:
                                        </strong>{" "}
                                        We offer a wide range of sports programs
                                        for athletes of all ages and skill
                                        levels, including soccer, basketball,
                                        volleyball, tennis, swimming, and more.
                                        Whether you're a beginner looking to
                                        learn the basics or a seasoned athlete
                                        aiming for elite competition, we have
                                        programs tailored to your needs.
                                    </li>
                                    <li>
                                        <strong>
                                            2. Professional Coaching:{" "}
                                        </strong>
                                        Our experienced coaches are dedicated to
                                        helping athletes reach their full
                                        potential. With a focus on skill
                                        development, tactical understanding, and
                                        physical conditioning, our coaches
                                        provide personalized training and
                                        guidance to help athletes excel in their
                                        chosen sport.
                                    </li>
                                    <li>
                                        <strong>
                                            3. State-of-the-Art Facilities:{" "}
                                        </strong>
                                        Sun Sporting Club boasts top-notch
                                        facilities equipped with modern
                                        amenities and training equipment. From
                                        well-maintained fields and courts to
                                        Olympic-sized swimming pools, our
                                        facilities provide the perfect
                                        environment for athletes to train and
                                        compete at their best.
                                    </li>
                                    <li>
                                        <strong>
                                            4. Community Engagement:{" "}
                                        </strong>
                                        Beyond sports, Sun Sporting Club is
                                        committed to making a positive impact in
                                        the community. Through outreach
                                        programs, charity events, and
                                        partnerships with local organizations,
                                        we strive to give back and support the
                                        communities we serve.
                                    </li>
                                </ul>

                                <p>Join Us:</p>
                                <p>
                                    Whether you're a young athlete with dreams
                                    of becoming a champion or an adult looking
                                    to stay active and meet new friends, Sun
                                    Sporting Club welcomes you to join our
                                    community. Experience the thrill of sports,
                                    the camaraderie of teamwork, and the joy of
                                    personal growth at Sun Sporting Club.
                                </p>
                            </div>
                            {readMore ? (
                                <button
                                    className="bg-primary hover:bg-muted px-8 py-3 rounded-md ease-in-out duration-300 mt-20"
                                    onClick={() => setReadMore(!readMore)}
                                >
                                    Read more...
                                </button>
                            ) : (
                                <button
                                    className="bg-primary hover:bg-muted px-8 py-3 rounded-md ease-in-out duration-300 mt-20"
                                    onClick={() => setReadMore(!readMore)}
                                >
                                    Read less
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
