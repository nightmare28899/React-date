import { useEffect, useState } from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";


function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const patientsLS = JSON.parse(localStorage.getItem('patients'))
    if (patientsLS) setPatients(patientsLS)
  }, [])

  useEffect(() => {
    if(patients?.length) {
      localStorage.setItem('patients', JSON.stringify(patients))
    }
  }, [patients])

  const deletePatient = (id) => {
    const patientsUpdate = patients.filter(patient => patient.id !== id)
    setPatients(patientsUpdate)
    localStorage.setItem('patients', JSON.stringify(patientsUpdate))
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
