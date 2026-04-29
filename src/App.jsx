// import { useState } from 'react'
import React, { useState } from 'react'
import { buildCards } from './cards'
import { Card, CheckboxItem, RadioItem, TextInput, NumberInput, SelectInput } from './components'
import { PatientInfo, MotifConsultation , AntecedantChir, AntecedantMed, Traitement, Recurences, SymptomesB, AnamneseUro, AnamneseGyno, AnamneseCardio } from './sections'

function App() {
	  const { abPainCard, constipCard, nauseaCard, rectoRrhCard, hematCard, hernCard } = buildCards()
		const [output, setOutput] = useState('')
		const [state, setState] = useState({
			patient: { age: '', sex: '' },
			motif: { abPain: '', constip: '', nausea: '', rectoRrh: '', hematCard: '', hern: '', pertedApp: ''},
			antChir: {},
			antMed: {},
			traitement: {},
			recurrence: '',
			symptomesB: {},
			anamUro: {},
			anamGyn: {},
			anamCardio: {},
		})
		console.log(state)

		function update(section, key, value) {
			setState(prev => ({
				...prev,
				[section]: { ...prev[section], [key]: value }
			}))
		}

		function generateOutput() {
			const values = []
			
			// checkboxes and radios
			document.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked')
				.forEach(el => { if (el.value) values.push(el.value) })
			
			// text and number inputs
			document.querySelectorAll('input[type="text"], input[type="number"], select')
				.forEach(el => { if (el.value && el.value !== '--') values.push(el.value) })

			setOutput(values.join(' '))
		}
  return (
    <div className="layout">

			<PatientInfo update={update} />
			<MotifConsultation state={state} update={update} />
			<AntecedantChir state={state} update={update} />
			<AntecedantMed state={state} update={update} />
			<Traitement state={state} update={update} />
			<Recurences state={state} update={update} />
			<SymptomesB state={state} update={update} />
			<AnamneseUro state={state} update={update} />
			<AnamneseGyno state={state} update={update} />
			<AnamneseCardio state={state} update={update} />


			<button onClick={generateOutput}>Générer</button>
			<textarea value={output} readOnly rows={6} style={{width: '100%'}} />

    </div>
  )
}

export default App
