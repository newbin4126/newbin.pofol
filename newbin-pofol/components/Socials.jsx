"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
    {
        path: "/",
        name: <RiLinkedinFill />,
    },
    {
        path: "https://github.com/newbin4126",
        name: <RiGithubFill />,
    },

    {
        path: "https://www.instagram.com/o_o_yb",
        name: <RiInstagramFill />,
    },
];

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
