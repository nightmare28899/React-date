import { useState, useEffect } from "react"
import Error from "./Error"
import Success from "./Success"

const Form = ({ patients, setPatients, patient, setPatient }) => {

  const [namePet, setNamePet] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [high, setHigh] = useState('')
  const [symptom, setSymptom] = useState('')

  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setNamePet(patient.namePet)
      setOwner(patient.owner)
      setEmail(patient.email)
      setHigh(patient.high)
      setSymptom(patient.symptom)

      setMessage(false)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validating form
    if ([namePet, owner, email, high, symptom].includes('')) {
      setError(true)
    } else {
      //object that we need to send all the data of the form
      const newPatient = {
        namePet, owner, email, high, symptom,
      }

      if (patient.id) {
        
        //if we are editing a patient
        newPatient.id = patient.id
        setPatients(patients.map(patientState => patientState.id === patient.id ? newPatient : patientState))
        setPatient({})
        
      } else {
        //if we are creating a new patient
        newPatient.id = generateId()
        setPatients([...patients, newPatient])
      }

      //clean the form
      setNamePet('')
      setOwner('')
      setEmail('')
      setHigh('')
      setSymptom('')

      setError(false)
      setMessage(true)
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Follow</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        { error ? (<Error message={'¡All fields are required!'} />) : message && (<Success> <p>¡Succesfully added!</p> </Success>) }

        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Name Pet</label>

          <input
            id="pet"
            type="text"
            placeholder="Name of the pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={namePet}
            onChange={(e) => setNamePet(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's Name</label>

          <input
            id="owner"
            type="text"
            placeholder="Owner's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email contact owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="high" className="block text-gray-700 uppercase font-bold">High</label>

          <input
            id="high"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Symptom</label>

          <textarea id="symptom" rows="4" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe the symptom"
            value={symptom} onChange={(e) => setSymptom(e.target.value)} />
        </div>
        <button className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors text-center">
          {Object.keys(patient).length > 0 ? ('Update Patient') : ('Add Patient')}
        </button>
      </form>
    </div>
  )
}

export default Form