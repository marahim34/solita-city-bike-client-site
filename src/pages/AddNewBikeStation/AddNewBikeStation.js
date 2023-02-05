import React from 'react';
import { useState } from 'react';

const AddNewBikeStation = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [fid, setFid] = useState('');
    const [id, setId] = useState('');
    const [kaupunki, setKaupunki] = useState('');
    const [name, setName] = useState('');
    const [namnSwedish, setNamnSwedish] = useState('');
    const [nimiFinnish, setNimiFinnish] = useState('');
    const [operaattor, setOperaattor] = useState('');
    const [osite, setOsite] = useState('');
    const [stad, setStad] = useState('');
    const [address, setAddress] = useState('');
    const [kapasiteet, setKapasiteet] = useState('');
    const [notification, setNotification] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!x || !y || !fid || !id || !kaupunki || !name || !namnSwedish || !nimiFinnish || !operaattor || !osite || !stad || !address || !kapasiteet) {
            window.alert('Please fill all the required fields');
            return;
        }

        var numberInputs = [x, y, id, fid, kapasiteet];
        const numberInputsName = ['x', 'y', 'id', 'fid', 'kapasiteet'];
        for (let i = 0; i < numberInputs.length; i++) {
            if (isNaN(numberInputs[i])) {
                window.alert('Please input a number in the ' + numberInputsName[i] + ' field');
                return;
            }
        }

        const response = await fetch('https://city-bike-marahim34.vercel.app/new-station', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: parseInt(x),
                y: parseInt(y),
                fid: parseInt(fid),
                id: parseInt(id),
                kaupunki,
                name,
                namn_swedish: namnSwedish,
                nimi_finnish: nimiFinnish,
                operaattor,
                osite,
                stad,
                address,
                kapasiteet: parseInt(kapasiteet)
            })
        });

        if (response.ok) {
            console.log('Bike station added successfully');
            setNotification('Bike station added successfully');
            form.reset('');
            setTimeout(() => {
                setNotification('');
                window.location.href = "/";
            }, 2 * 60 * 1000);

        } else {
            console.error('Failed to add bike station');
            setNotification('Failed to add bike station');
        }

    };

    return (
        <div className="flex flex-col items-center p-4 md:p-8 lg:p-16">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="x">
                            Station ID
                        </label>
                        <input
                            className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="x"
                            type="text"
                            placeholder="ID (numbers only)"
                            onChange={e => setId(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="mb-6 mr-6">
                        <label className="block text-gray-500 font-medium mb-2" htmlFor="x">
                            X
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                            id="x"
                            type="text"
                            placeholder="X (numbers only)"
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
                            placeholder="Y (numbers only)"
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
                            placeholder="FID (numbers only)"
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
                            Swedish Name
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
                            Finnish Name
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
                            type="text"
                            placeholder="Kapasiteet (numbers only)"
                            onChange={e => setKapasiteet(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3 text-center">
                        <button type="submit" className="shadow bg-primary hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded">
                            Add Bike Station
                        </button>
                    </div>
                </div>
            </form>

            {notification && (
                <div className="text-black py-2 px-4 mt-6">
                    {notification}
                </div>
            )}
        </div>

    );
};

export default AddNewBikeStation;


