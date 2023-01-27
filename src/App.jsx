import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Tablero } from './Tablero'


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='mesa'>
            <Tablero/>
        </div>
    )
}

export default App
