export default function getListRandom(list) {
    const LENGTH = list.length;
    const randomList = [];
    while (randomList.length !== LENGTH) {
        const random = Math.random();
        const NEW_LENGTH = LENGTH - randomList.length;
        let added = false;
        for (let index = 0; index < NEW_LENGTH && !added; index++) {
            const prob = (index + 1) / NEW_LENGTH;
            if (random <= prob) {
                randomList.push(list[index]);
                list.splice(index, 1);
                added = true;
            }
        }
    }
    return randomList;
}
