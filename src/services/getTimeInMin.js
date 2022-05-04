export default function getTimeInMin(time) {
    const minutosTiempo = (time / 60).toFixed(1);
    const newMinutosTiempo = minutosTiempo.substring(0, minutosTiempo.length - 2);
    const segundosTiempo = (time % 60).toFixed(0);

    const minutos =
        newMinutosTiempo < 10 ? `0${newMinutosTiempo}` : newMinutosTiempo;
    const segundos = segundosTiempo < 10 ? `0${segundosTiempo}` : segundosTiempo;

    return `${minutos}:${segundos}`;
}
