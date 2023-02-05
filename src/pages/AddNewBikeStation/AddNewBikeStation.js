import React from 'react';
import { useState } from 'react';

const AddNewBikeStation = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [fid, setFid] = useState('');
    const [kaupunki, setKaupunki] = useState('');
    const [name, setName] = useState('');
    const [namnSwedish, setNamnSwedish] = useState('');
    const [nimiFinnish, setNimiFinnish] = useState('');
    const [operaattor, setOperaattor] = useState('');
    const [osite, setOsite] = useState('');
    const [stad, setStad] = useState('');
    const [address, setAddress] = useState('');
    const [kapasiteet, setKapasiteet] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/new-station', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x,
                y,
                fid,
                kaupunki,
                name,
                namn_swedish: namnSwedish,
                nimi_finnish: nimiFinnish,
                operaattor,
                osite,
                stad,
                address,
                kapasiteet
            })
        });

        if (response.ok) {
            console.log('Bike station added successfully');
        } else {
            console.error('Failed to add bike station');
        }
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-8 lg:p-16">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="x">
                            X
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="x"
                            type="text"
                            placeholder="X"
                            onChange={e => setX(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="y">
                            Y
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="y"
                            type="text"
                            placeholder="Y"
                            onChange={e => setY(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="fid">
                            FID
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="fid"
                            type="text"
                            placeholder="FID"
                            onChange={e => setFid(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="kaupunki">
                            Kaupunki
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="kaupunki"
                            type="text"
                            placeholder="Kaupunki"
                            onChange={e => setKaupunki(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="name"
                            type="text"
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="namn_swedish">
                            Namn Swedish
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="namn_swedish"
                            type="text"
                            placeholder="Namn Swedish"
                            onChange={e => setNamnSwedish(e.target.value)}
                        />
                    </div>
                </div>


                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="nimi_finnish">
                            Nimi Finnish
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="nimi_finnish"
                            type="text"
                            placeholder="Nimi Finnish"
                            onChange={e => setNimiFinnish(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="operaattor">
                            Operaattor
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="operaattor"
                            type="text"
                            placeholder="Operaattor"
                            onChange={e => setOperaattor(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="osite">
                            Osite
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="osite"
                            type="text"
                            placeholder="Osite"
                            onChange={e => setOsite(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="stad">
                            Stad
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="stad"
                            type="text"
                            placeholder="Stad"
                            onChange={e => setStad(e.target.value)}
                        />
                    </div>
                </div>



                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="address"
                            type="text"
                            placeholder="Address"
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="kapasiteet">
                            Kapasiteet
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="kapasiteet"
                            type="number"
                            placeholder="Kapasiteet"
                            onChange={e => setKapasiteet(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3 text-center">
                        <button type="submit" className="shadow bg-primary hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded">
                            Add Bike Station
                        </button>
                    </div>
                </div>

            </form>
        </div>

    );
};

export default AddNewBikeStation;


