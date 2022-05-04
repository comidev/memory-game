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
import getListRandom from "../services/getListRandom";

const listSimbolos = [
    { img: img01, id: 1, show: false },
    { img: img02, id: 2, show: false },
    { img: img03, id: 3, show: false },
    { img: img04, id: 4, show: false },
    { img: img05, id: 5, show: false },
    { img: img06, id: 6, show: false },
    { img: img07, id: 7, show: false },
    { img: img08, id: 8, show: false },
    { img: img09, id: 9, show: false },
    { img: img10, id: 10, show: false },
    { img: img01, id: 11, show: false },
    { img: img02, id: 12, show: false },
    { img: img03, id: 13, show: false },
    { img: img04, id: 14, show: false },
    { img: img05, id: 15, show: false },
    { img: img06, id: 16, show: false },
    { img: img07, id: 17, show: false },
    { img: img08, id: 18, show: false },
    { img: img09, id: 19, show: false },
    { img: img10, id: 20, show: false },
];

export const SIMBOLOS = getListRandom(listSimbolos);
