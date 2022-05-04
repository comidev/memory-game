import styled from "@emotion/styled";

export const COLOR = {
    PRIMARY: "#08b2e3",
    PRIMARY_1: "#A14EBF",
    PRIMARY_2: "#A14EBF",

    RED: "#F93943",
    GOLD: "#efb810",
    BLUE: "#48e",
    ERROR: "#F24C00",
    WARNING: "#FC7A1E",
    SUCCESS: "#43B929",

    RANDOMS: ["#ff3f00", "#ff7f11", "#6AB547", "#7692FF", "#58355e", "#00a6a6"],

    WHITE: "#FFF",
    WHITE_1: "#F9F4F5",
    WHITE_2: "#F0F0F0",
    WHITE_3: "#E9E9E9",
    WHITE_4: "#E0E0E0",

    BLACK: "#000",
    BLACK_1: "#171717",
    BLACK_2: "#222",
    BLACK_3: "#343434",
    BLACK_4: "#666",
};

export const BG_COLOR = {
    NAVBAR: "linear-gradient(90deg, #A14EBF, #E71D36)",
    FOOTER: "linear-gradient(to bottom,rgba(20,26,50,0) 0%,rgba(20,26,50,0.01) 1%,rgba(20,26,50,1) 100%)",
    G01: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
    G02: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
    G03: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
    G04: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
    G05: "linear-gradient(to bottom,rgb(238,238,238,0.7) 0%,#F9F4F5 100%)",
    G06: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
    G07: "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
    G08: "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
    G09: "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
    G10: "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
    G11: "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
    G12: "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
};

export const MAX_WIDTH = {
    LG: "1540px",
    MD: "1140px",
    SM: "100%",
};

export const BREAK_POINTS = {
    MOBILE: "991px",
    DESKTOP: "1600px",
};

export const CONTAINER = `
    max-width: ${MAX_WIDTH.LG};
    margin: 0 auto;
    padding: 0 1.5rem;
    @media screen and (max-width: ${BREAK_POINTS.DESKTOP}) {
        max-width: ${MAX_WIDTH.MD};
    }
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        max-width: ${MAX_WIDTH.SM};
    }
    @media screen and (max-width: 360px) {
        padding: 0 0.5rem;
    }
`;

export const Main = styled.main`
    padding-top: 1rem;
`;

export const Section = styled.section`
    margin-bottom: 6rem;
`;

const TITLE = (fontWeight, vp, rem) => `
    ${({ color }) => color && `color: ${color}`};
    font-weight: ${fontWeight};
    font-size: calc(${vp}vw + ${vp}vh + ${rem}rem);
`;

export const H1 = styled.h1`
    ${TITLE(800, 1.25, 1.8)}
    text-align: ${({ align }) => align || "center"};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const H2 = styled.h2`
    ${TITLE(700, 1, 1.5)}
    text-align: ${({ align }) => align || "center"};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;
export const H3 = styled.h3`
    ${TITLE(600, 0.8, 1.2)}
    text-align: ${({ align }) => align || "center"};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;
export const H4 = styled.h4`
    ${TITLE(500, 0.6, 0.9)}
    text-align: ${({ align }) => align || "center"};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const P = styled.p`
    line-height: 1.7rem;
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
    font-size: ${({ size }) => size || "17px"};
`;
