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
  const s = state
  let text = ''

  // Patient line
  text += `Patient ${s.patient.sex} de ${s.patient.age} ans`

  // Antecedants
  const antChir = Object.values(s.antChir).filter(v => v).join(', ')
  const antMed = Object.values(s.antMed).filter(v => v).join(', ')
  if (antChir || antMed) text += `, connu pour ${[antChir, antMed].filter(v => v).join(', ')}`

  // Traitement
  const trait = Object.values(s.traitement).filter(v => v).join(', ')
  if (trait) text += `, traité par ${trait}`

  // Motif + recurrence
  const motif = Object.values(s.motif).filter(v => v).join(', ')
  if (s.recurrence.recurrence) text += `, consulte pour ${s.recurrence.recurrence} de ${motif}`
  else text += `, consulte pour ${motif}`
  text += '.\n\n'

  // Douleur abdominale
  if (s.motif.abPain) {
    text += `Douleur abdominale depuis ${s.abPainDet.depuis} jours`
    if (s.abPainDet.localisation.length) text += `, localisée en ${s.abPainDet.localisation.join(', ')}`
    if (s.abPainDet.intensite) text += `, d'intensité ${s.abPainDet.intensite}/10`
    if (s.abPainDet.qualite.length) text += `, de qualité ${s.abPainDet.qualite.join(', ')}`
    if (s.abPainDet.evolution) text += `, évolution ${s.abPainDet.evolution}`
    if (s.abPainDet.facteurSoulageant.length) text += `, facteur soulageant: ${s.abPainDet.facteurSoulageant.join(', ')}`
    text += '.\n'
  }

  // Constipation
  if (s.motif.constip) {
    text += `Constipation depuis ${s.constipDet.depuis} jours`
    if (s.constipDet.frequence) text += `, selles habituellement tous les ${s.constipDet.frequence} jours`
    if (s.constipDet.consistance.length) text += `, consistance ${s.constipDet.consistance.join(', ')}`
    if (s.constipDet.gaz) text += `, gaz: ${s.constipDet.gaz}`
    if (s.constipDet.vomissement.length) text += `, vomissement: ${s.constipDet.vomissement.join(', ')}`
    if (s.constipDet.sang) text += `, sang dans les selles: ${s.constipDet.sang}`
    text += '.\n'
  }

  // Nausée
  if (s.motif.nausea) {
    text += `Nausées/vomissements depuis ${s.nauseaDet.depuis} jours`
    if (s.nauseaDet.frequence) text += `, fréquence toutes les ${s.nauseaDet.frequence} heures`
    if (s.nauseaDet.type.length) text += `, type: ${s.nauseaDet.type.join(', ')}`
    if (s.nauseaDet.associe.length) text += `, associé à: ${s.nauseaDet.associe.join(', ')}`
    if (s.nauseaDet.traitement) text += `, nouveau traitement récent: ${s.nauseaDet.traitement}`
    if (s.nauseaDet.retardRegle) text += `, retard de règle: ${s.nauseaDet.retardRegle}`
    if (s.nauseaDet.grossesse) text += `, possibilité de grossesse: ${s.nauseaDet.grossesse}`
    if (s.nauseaDet.contage) text += `, notion de contage: ${s.nauseaDet.contage}`
    if (s.nauseaDet.consommation.length) text += `, consommation de toxique: ${s.nauseaDet.consommation.join(', ')}`
    text += '.\n'
  }

  // Rectorrhagie
  if (s.motif.rectorrh) {
    text += `Rectorrhagies depuis ${s.rectorrhDet.depuis} jours`
    if (s.rectorrhDet.qualite.length) text += `, qualité: ${s.rectorrhDet.qualite.join(', ')}`
    if (s.rectorrhDet.timing.length) text += `, timing: ${s.rectorrhDet.timing.join(', ')}`
    if (s.rectorrhDet.hemodynamique) text += `, hémodynamiquement ${s.rectorrhDet.hemodynamique}`
    if (s.rectorrhDet.souvent) text += `, sensation de devoir aller à selle tout le temps: ${s.rectorrhDet.souvent}`
    text += '.\n'
  }

  // Hématémèse
  if (s.motif.hemat) {
    text += `Hématémèse depuis ${s.hematDet.depuis} jours`
    if (s.hematDet.absence.length) text += `, absence de: ${s.hematDet.absence.join(', ')}`
    if (s.hematDet.qualite.length) text += `, qualité: ${s.hematDet.qualite.join(', ')}`
    if (s.hematDet.quantite) text += `, quantité: ${s.hematDet.quantite}`
    if (s.hematDet.episode) text += `, épisode: ${s.hematDet.episode}`
    if (s.hematDet.vomissement) text += `, effort de vomissement avant: ${s.hematDet.vomissement}`
    if (s.hematDet.signes.length) text += `, signes associés: ${s.hematDet.signes.join(', ')}`
    if (s.hematDet.hemodynamique) text += `, hémodynamiquement ${s.hematDet.hemodynamique}`
    text += '.\n'
  }

  // Hernie
  if (s.motif.hern) {
    text += `Hernie abdominale depuis ${s.hernDet.depuis} jours`
    if (s.hernDet.localisation.length) text += `, localisation: ${s.hernDet.localisation.join(', ')}`
    if (s.hernDet.mode) text += `, mode d'apparition: ${s.hernDet.mode}`
    if (s.hernDet.evolution) text += `, évolution: ${s.hernDet.evolution}`
    if (s.hernDet.variabilite.length) text += `, variabilité: ${s.hernDet.variabilite.join(', ')}`
    if (s.hernDet.symptome.length) text += `, symptômes associés: ${s.hernDet.symptome.join(', ')}`
    text += '.\n'
  }

  // Symptomes B
  const sympB = Object.values(s.symptomesB).filter(v => v).join(', ')
  if (sympB) text += `\nSymptômes B: ${sympB}.\n`

  // Anamnese uro
  const uro = Object.values(s.anamUro).filter(v => v).join(', ')
  if (uro) text += `Anamnèse urologique: ${uro}.\n`

  // Anamnese gyno
  if (s.patient.sex === 'femme') {
    const gyno = Object.values(s.anamGyn).filter(v => v).join(', ')
    if (gyno) text += `Anamnèse gynécologique: ${gyno}.\n`
  }

  // Anamnese cardio
  const cardio = Object.values(s.anamCardio).filter(v => v).join(', ')
  if (cardio) text += `Anamnèse cardiopulmonaire: ${cardio}.\n`

  setOutput(text)
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
