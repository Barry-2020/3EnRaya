import { useEffect, useState } from "react";
import { Cuadrado } from "./Cuadrado";




export const Tablero = () => {
    const [ganador, setGanador] = useState(
        [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    );
    const [figura, setFigura] = useState(
        {
            figura: 'X',
            bool: true,
        }
    );
    const [jugador, setJugador] = useState({
        numero: 1,
        bool: false,   
    })
    let winner = false;
    const revisionGanador = (ganador, jugador) => {
        if (ganador[0][0]==jugador && ganador[0][1]==jugador && ganador[0][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[1][0]==jugador && ganador[1][1]==jugador && ganador[1][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[2][0]==jugador && ganador[2][1]==jugador && ganador[2][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[0][0]==jugador && ganador[1][0]==jugador && ganador[2][0]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[0][1]==jugador && ganador[1][1]==jugador && ganador[2][1]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[0][2]==jugador && ganador[1][2]==jugador && ganador[2][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[0][0]==jugador && ganador[1][1]==jugador && ganador[2][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        if (ganador[2][0]==jugador && ganador[1][1]==jugador && ganador[0][2]==jugador) {
            console.log('GANADOR JUGADOR: '+ jugador);
            return true;
        }
        return false;
    }

    useEffect( () => {

        let count = 0;
        for (let i = 0; i < ganador.length; i++) {
            for (let j = 0; j < ganador.length; j++) {
                if (ganador[i][j]=='0') {
                    count++;
                }
            }
        }
        if (count == 0) {
            alert('EMPATE');
            window.location = '/';
        }

        if (revisionGanador(ganador, jugador.numero)) {
            winner = true;
            alert('GANO EL JUGADOR '+ jugador.numero);
            window.location = '/';

        }else{
            if (jugador.bool) {
                setJugador({
                    numero: 2,
                    bool: false,   
                })
            }else{
                setJugador({
                    numero: 1,
                    bool: true,   
                })
            }
        }
        
    }, [figura]); //Dependencias por la que se debe re-renderizar

    return(
        <>
        <h2>TURNO de Jugador {jugador.numero}</h2>
        <div className="tablero">
            <div className="fila1">
                <Cuadrado x={0} y={0} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura} winner={winner}/>
                <Cuadrado x={0} y={1} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura} winner={winner}/>
                <Cuadrado x={0} y={2} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura} winner={winner}/>
            </div>
            <div className="fila2">
                <Cuadrado x={1} y={0} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
                <Cuadrado x={1} y={1} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
                <Cuadrado x={1} y={2} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
            </div>
            <div className="fila3">
                <Cuadrado x={2} y={0} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
                <Cuadrado x={2} y={1} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
                <Cuadrado x={2} y={2} ganador={ganador} setGanador={setGanador} figura={figura} setFigura={setFigura}/>
            </div>
        </div>
        <p>Jugador 1: <b>X</b></p>
        <p>Jugador 2: <b>O</b></p>
        </>
    );
}
