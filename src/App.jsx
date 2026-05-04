// import { useState } from 'react'
import { initialState, } from './state'
import { useState } from 'react'
import { buildCards } from './cards'
import { Card, CheckboxItem, RadioItem, TextInput, NumberInput, SelectInput } from './components'
import { PatientInfo, MotifConsultation , AntecedantChir, AntecedantMed, Traitement, Recurences, SymptomesB, AnamneseUro, AnamneseGyno, AnamneseCardio, AbPainDetail, ConstipDetail, NauseaDetail, RectorrhDetail, HematDetail, HernDetail } from './sections'

function App() {
	// const { abPainCard, constipCard, nauseaCard, rectoRrhCard, hematCard, hernCard } = buildCards()
	const [output, setOutput] = useState('')
	const [state, setState] = useState(initialState)
	function upd(section, key, value) {
	setState(prev => ({
		...prev,
		[section]: { ...prev[section], [key]: value }
	}))
}
	// const upd = (section, key, val) => update(setState, section, key, val)
	console.log(state)


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

			<PatientInfo update={upd} />
			<MotifConsultation state={state} update={upd} />
			<AntecedantChir state={state} update={upd} />
			<AntecedantMed state={state} update={upd} />
			<Traitement state={state} update={upd} />
			<Recurences state={state} update={upd} />
			<SymptomesB state={state} update={upd} />
			<AnamneseUro state={state} update={upd} />
			<AnamneseGyno state={state} update={upd} />
			<AnamneseCardio state={state} update={upd} />
			<AbPainDetail state={state} update={upd} />
			<ConstipDetail state={state} update={upd} />
			<NauseaDetail state={state} update={upd} />
			<RectorrhDetail state={state} update={upd} />
			<HematDetail state={state} update={upd} />
			<HernDetail state={state} update={upd} />


			<button onClick={generateOutput}>Générer</button>
			<textarea value={output} readOnly rows={6} style={{width: '100%'}} />

    </div>
  )
}

export default App
