//TO BE SHARED WITH CANDIDATES FOR TROUBLESHOOTING

import { SetStateAction, useState } from 'react'
import Child from '../components/child'
import Link from 'next/link'

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

            <Link href={'/dashboard'}>
                <a


                    className="inset-0 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-80"
                >
                    Users Dashboard
                </a>
            </Link>

        </div>
    )
}