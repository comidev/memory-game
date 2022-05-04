import {
    Tabla,
    TablaBody,
    TablaBodyDato,
    TablaHead,
    TablaHeadDato,
    TablaItem,
} from "./styles";
import getTimeInMin from "services/getTimeInMin";

export default function Table({ list }) {
    return (
        <Tabla>
            <TablaHead>
                <TablaItem>
                    <TablaHeadDato colSpan={4}>Ranking 😎</TablaHeadDato>
                </TablaItem>
                <TablaItem>
                    <TablaHeadDato>Puesto 🏆</TablaHeadDato>
                    <TablaHeadDato>User 🤴</TablaHeadDato>
                    <TablaHeadDato>Errores ❌</TablaHeadDato>
                    <TablaHeadDato>Tiempo ⏱</TablaHeadDato>
                </TablaItem>
            </TablaHead>
            <TablaBody>
                {list.map((item, index) => (
                    <TablaItem key={index}>
                        <TablaBodyDato>{index + 1}</TablaBodyDato>
                        <TablaBodyDato>{item.username}</TablaBodyDato>
                        <TablaBodyDato>{item.errores}</TablaBodyDato>
                        <TablaBodyDato>{getTimeInMin(item.time)}</TablaBodyDato>
                    </TablaItem>
                ))}
            </TablaBody>
        </Tabla>
    );
}
