export interface Project{
    id: Number,
    title: string,
    tecnologies: string[],
    thumbnail: string,
    url: string,
}

export const skills = {
    frontend: [
        "React",
        "Typescript",
        "Tailwind",
        "HTML",
        "CSS",
        "JS",
        "SASS"
    ],
    backend: [
        "NodeJs",
        "Express",
        "MySql",
    ],
    other: [
        "c#",
        "Unity",
        "Python",
        "Figma",
    ]
}

export const projects = [
    {
        id: 1,
        title: "Find Your Morty",
        tecnologies: ["react", "JS", "Tailwind", "Axios", "radix"],
        thumbnail: "https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br",
        url: "https://github.com/h3nrey/FindYourMorty"
    },
    {
        id: 2,
        title: "Find Your dup",
        tecnologies: ["react", "JS", "Tailwind", "Axios", "radix"],
        thumbnail: "https://static.wikia.nocookie.net/liberproeliis/images/2/28/JoJo%E2%80%99s-Bizarre-04.jpg/revision/latest?cb=20161128222812&path-prefix=pt-br",
        url: "https://github.com/h3nrey/FindYourMorty"
    }
]
// export const skills = {
//     frontend: [
//         {
//             id: 1,
//             name: "React",
//         },
//         {
//             id: 2,
//             name: "Typescript",
//         },

//     ],
//     backend: [
//         {
//             id: 3,
//             name: "Nodejs",
//         },
//         {
//             id: 4,
//             name: "express",
//         }
//     ],
//     other: [
//         {
//             id: 3,
//             name: "Nodejs",
//         },
//         {
//             id: 4,
//             name: "express",
//         }
//     ],

// }

// export const skills = ["Jonathan", "Joseph", "Jotaro"]