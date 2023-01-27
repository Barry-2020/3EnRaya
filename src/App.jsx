import { useState } from 'react'
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
