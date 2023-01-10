import { request } from 'http';
import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import MyDialog from '../components/MyDialog'

function Dashboard() {
    const [datas, setData] = useState();
    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        generatePeople()
    }, [])


    async function getRandomUser() {
        try {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            console.log(data)
            return data.results;

        }
        catch (err) {
            console.log(err);
        }
    }

    const generatePeople = async () => {
        const people = []
        for (let i = 0; i < 10; i++) {
            people.push(getRandomUser());

        }
        const users = await Promise.all(people)
        setData(users);
    }

    function handleClick(user) {
        if (user) {
            console.log(user)
        }


    }





    return (
        <div className='w-full h-full bg-white p-6'>
            <div className="flex flex-col">
                <div className="overflow-x-auto ">
                    <div className=" inline-block min-w-full sm:px-4 lg:px-10">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border border-slate-500">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Phone
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Photo
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Show
                                        </th>
                                    </tr>
                                </thead>





                                {datas && datas.map(d => d.map((dd) => (
                                    <tbody className='border border-slate-500' key={dd && dd.email}>
                                        <tr className="p-2">
                                            <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dd && dd.name.first}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {dd && dd.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {dd && dd.phone}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <img src={dd && dd.picture.thumbnail} className='' />
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <MyDialog user={dd} />

                                            </td>
                                        </tr>


                                    </tbody>
                                )))}





                            </table>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Dashboard