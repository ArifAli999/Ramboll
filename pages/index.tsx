//TO BE SHARED WITH CANDIDATES FOR TROUBLESHOOTING

import { SetStateAction, useState } from 'react'
import Child from '../components/child'

export default function Home() {
    const [output, setState] = useState('')
    const callblack = '👋'

    const callback = (payload: string) => {
        setState(payload)
    }

    return (
        <div className='h-screen flex flex-col flex-center items-center justify-center bg-gray-300'>
            <h1>Got: {output ? output : ''} from child component</h1>
            <Child callback={callback} />
        </div>
    )
}