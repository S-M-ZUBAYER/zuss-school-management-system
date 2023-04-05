import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { globalVariable } from '../../App';

const MainAdmin = () => {
    const { setSchoolName } = useContext(AuthContext)

    const [schools, setSchools] = useState([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [address, setAddress] = useState('');
    const [about, setAbout] = useState('');
    const [number, setNumber] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, code, address, about);
        const newSchool = {
            name,
            code,
            address,
            about
        }

        const newSchools = [...schools, newSchool];
        setSchools(newSchools)

        console.log(schools)
        // Do something with the form values, e.g. send them to a server or display them on the page
    };

    return (
        <div>
            This is the page for main admin....
            <h1 className="text-center text-lg font-bold">Please input the School information</h1>
            <form className="mt-10 text-start w-96 mx-auto bg-fuchsia-300 p-4" onSubmit={handleSubmit} >
                <label htmlFor="name">School Name:</label>
                <input type="text" className="my-3" id="name" value={name} onChange={(event) => setName(event.target.value)} /><br />

                <label htmlFor="email">School Email:</label>
                <input type="email" className="my-3" id="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />

                <label htmlFor="code">School code:</label>
                <input type="digit" className="my-3" id="code" value={code} onChange={(event) => setCode(event.target.value)} /><br />

                <label htmlFor="name">School Address:</label>
                <input type="text" className="my-3" id="name" value={address} onChange={(event) => setAddress(event.target.value)} /><br />

                <label htmlFor="message">About:</label>
                <textarea id="message" value={about} onChange={(event) => setAbout(event.target.value)}></textarea><br />

                <button className="bg-yellow-200 py-2 px-5 rounded-lg ml-32 my-5" type="submit">Submit</button>
            </form>



            <h1 className="text-2xl text-center text-lime-600 font-bold mt-12">Available School sites</h1>
            <div>

            </div>
            {
                schools?.map((element, index) => {
                    // globalVariable = element;
                    return <Link

                        to={`/${element?.name}`} onClick={() => setSchoolName(element?.name)} key={index} > <h1 className="bg-red-300 w-2/3 mx-auto mt-5 py-2 text-xl font-semibold rounded-lg" >{element?.name}</h1></Link>
                })

            }

        </div >
    );
};

export default MainAdmin;



// import React, { useState } from 'react';

// function App() {
//     const [schools, setSchools] = useState([]);

//     const handleClick = () => {
//         const newItems = [...schools, newSchool];
//         setSchools(newItems);
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Add Item</button>
//             <ul>
//                 {schools.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;
