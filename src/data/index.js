import img01 from "images/img01.webp";
import img02 from "images/img02.webp";
import img03 from "images/img03.webp";
import img04 from "images/img04.webp";
import img05 from "images/img05.webp";
import img06 from "images/img06.webp";
import img07 from "images/img07.webp";
import img08 from "images/img08.webp";
import img09 from "images/img09.webp";
import img10 from "images/img10.webp";

const listSimbolos = [
    { img: img01, id: 1 },
    { img: img02, id: 2 },
    { img: img03, id: 3 },
    { img: img04, id: 4 },
    { img: img05, id: 5 },
    { img: img06, id: 6 },
    { img: img07, id: 7 },
    { img: img08, id: 8 },
    { img: img09, id: 9 },
    { img: img10, id: 10 },
];
listSimbolos.push(...listSimbolos);
export const SIMBOLOS = listSimbolos.sort(() => Math.random() - 0.5);
