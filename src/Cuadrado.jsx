import { useState } from "react"

export const Cuadrado = ({x, y, ganador, setGanador, figura, setFigura}) => {

    const [asd, setAsd] = useState();
    const [mostrar, setMostrar] = useState(false);

    const cambio = () => {
        // console.log(ganador[0][1]);

        console.log(figura.bool);
        if (figura.bool) {
            setGanador(() => {
                ganador[x][y] = 1;
                return ganador;
            })
            setAsd(figura.figura);
            setFigura({
                figura: 'O',
                bool: false,
            })
        }else{
            setGanador(() => {
                ganador[x][y] = 2;
                return ganador;
            })
            setAsd(figura.figura);
            setFigura({
                figura: 'X',
                bool: true,
            });
        }

        setMostrar(true);
        // let prueba = ganador;
        // console.log(ganador);
        // prueba[x][y] = 1;
        // console.log(prueba);
    }

    return(
        <button className="cuadrado" onClick={cambio} disabled={mostrar}>
            {asd}
        </button>
    )
}
