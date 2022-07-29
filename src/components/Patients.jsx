
const Patients = ({ patient, setPatient, deletePatient }) => {

    const { namePet, owner, email, high, symptom, id } = patient;

    const handleDelete = () => {
        const respuesta = confirm('¿Are you sure?')

        if (respuesta) {
            deletePatient(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
                <span className="font-normal normal-case">{namePet}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">High Date: {''}
                <span className="font-normal normal-case">{high}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptom: {''}
                <span className="font-normal normal-case">{symptom}</span>
            </p>
            <div className="flex justify-between">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-10 rounded-lg uppercase" onClick={() => setPatient(patient)}>Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-lg uppercase" onClick={() => handleDelete()}>Delete</button>
            </div>
        </div>
    )
}

export default Patients