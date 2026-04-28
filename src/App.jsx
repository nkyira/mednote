// import { useState } from 'react'
import React, { useState } from 'react'
import { buildCards } from './cards'
import { Card, CheckboxItem, RadioItem, TextInput, NumberInput, SelectInput } from './components'



// // Amnamnèse actuelle
//
// function buildCards() {
//
// const abPainCard = (
//   <Card>
// 		<NumberInput id="abPainJ" label="Depuis" placeholder="Jours" min={0} />
// 	  <SelectInput id="abPainL" label="Localisation" options={[
// 				"Fosse iliaque droite",
// 				"Fosse iliaque gauche",
// 				"Suprapubien",
// 				"Hypochondre droit",
// 				"Hypochondre gauche",
// 				"Épigastre"
// 			]} />
// 		<NumberInput id="abPainI" label="Intensité" placeholder="/10" min={0} max={10} />
// 	  <SelectInput id="abPainQ" label="Qualité" options={[
// 				"Coup de couteau",
// 				"Diffus",
// 				"Crampiforme",
// 				"Colique",
// 			]} />
// 	  <SelectInput id="abPainE" label="Evolution" options={[
// 				"En augmentation",
// 				"Constante",
// 				"En diminution",
// 			]} />
// 	  <SelectInput id="abPainS" label="Facteur soulageant" options={[
// 				"Pire avant les repas",
// 				"Pire après les repas",
// 				"Avant selles",
// 				"Après selles",
// 			]} />
//   </Card>
// )
//
// const constipCard = (
//   <Card>
// 		<NumberInput id="constipJ" label="Depuis" placeholder="Jours" min={0} />
// 		<NumberInput id="constipX" label="Selles habituellement tout les" placeholder="Jours" min={0} />
// 	  <SelectInput id="constipC" label="Consistance des selles" options={[
// 				"Dure",
// 				"Molle",
// 				"Diarrhées",
// 			]} />
// 	  <SelectInput id="constipV" label="Vomissement" options={[
// 				"Alimentaire",
// 				"Billeux",
// 				"Hématique",
// 				"Fécaloides",
// 			]} />
// 	  <SelectInput id="constipG" label="Gaz ?" options={[
// 				"Oui",
// 				"Non",
// 			]} />
// 	  <SelectInput id="constipS" label="Sang dans les selles ?" options={[
// 				"Oui",
// 				"Non",
// 			]} />
//   </Card>
// )
//
// const nauseaCard = (
//   <Card>
// 		<NumberInput id="nauseaJ" label="Depuis" placeholder="Jours" min={0} />
// 		<NumberInput id="nauseaF" label="Fréquance" placeholder="Heures" min={0} />
// 	  <SelectInput id="nauseaT" label="Type" options={[
// 				"Alimentaire",
// 				"Billeux",
// 				"Hématique",
// 				"Fécaloides",
// 			]} />
// 	  <SelectInput id="nauseaA" label="Associé à" options={[
// 				"Céphalée",
// 				"Photophobie",
// 				"Raideur de nuque",
// 				"Vertiges",
// 			]} />
// 	  <TextInput id="nauseaN" label="Nouveau traitement récent" />
// 	  <SelectInput id="nauseaR" label="Retard de règle" options={[
// 				"Oui",
// 				"Non",
// 			]} />
// 	  <SelectInput id="nauseaP" label="Possibilité de grossesse" options={[
// 				"Oui",
// 				"Non",
// 			]} />
// 	  <SelectInput id="nauseaC" label="Notion de contage" options={[
// 				"Oui",
// 				"Non",
// 			]} />
// 	  <SelectInput id="nauseaTox" label="Consommation de toxique" options={[
// 				"Alcool",
// 				"Drogue",
// 			]} />
//   </Card>
// )
//
// const rectoRrhCard = (
//   <Card>
// 		<NumberInput id="rectoRrhJ" label="Depuis" placeholder="Jours" min={0} />
// 	  <SelectInput id="rectoRrhQua" label="Qualité" options={[
// 				"Sang frais",
// 				"Méléna",
// 				"Caillot",
// 			]} />
// 	  <SelectInput id="rectoRrhT" label="Timing" options={[
// 				"Goutte sur la cuvette",
// 				"Mélangé aux selles",
// 			]} />
// 	  <SelectInput id="rectoRrhHemo" label="Hémodynamique" options={[
// 				"Stable",
// 				"Instable",
// 			]} />
// 	  <SelectInput id="rectoRrhSouv" label="Sensation de devoir aller à selle tout le temps" options={[
// 				"Oui",
// 				"Non",
// 			]} />
//   </Card>
// )
//
// const hematCard = (
//   <Card>
// 		<NumberInput id="hematJ" label="Depuis" placeholder="Jours" min={0} />
// 	  <SelectInput id="hematAbs" label="Absence de" options={[
// 				"Hémoptysie",
// 				"Épistaxis",
// 			]} />
// 	  <SelectInput id="hematQua" label="Qualité" options={[
// 				"Sang frais",
// 				"Marque de café",
// 			]} />
// 	  <SelectInput id="hematQuant" label="Quantité" options={[
// 				"Abondant",
// 				"Faible quantité",
// 			]} />
// 	  <SelectInput id="hematEp" label="Episode" options={[
// 				"Unique",
// 				"Multiple",
// 			]} />
// 	  <SelectInput id="hematVom" label="Effort de vomissement avant" options={[
// 				"Oui",
// 				"Non",
// 			]} />
// 	  <SelectInput id="hematSign" label="Signee associés" options={[
// 				"Brulure rétrosternale",
// 				"Méléna",
// 				"Réctorrhagie",
// 				"Dysphagie",
// 			]} />
// 	  <SelectInput id="hematDyn" label="Hemodynamiquement" options={[
// 				"Stable",
// 				"Instable",
// 			]} />
//   </Card>
// )
//
// const hernCard = (
//   <Card>
// 		<NumberInput id="hernJ" label="Depuis" placeholder="Jours" min={0} />
// 	  <SelectInput id="hernLoc" label="Localisation" options={[
// 				"Inguinale",
// 				"Ombilicale",
// 				"Cicatricielle",
// 			]} />
// 	  <SelectInput id="hernApp" label="Mode d'apparition" options={[
// 				"Progressif",
// 				"Brutal",
// 			]} />
// 	  <SelectInput id="hernEvo" label="Evolution" options={[
// 				"Augmente avec le temps",
// 				"Constant",
// 			]} />
// 	  <SelectInput id="hernVar" label="Variabilité" options={[
// 				"Augment à l'effort",
// 				"Toux",
// 				"Station debout",
// 				"Disparait à repos",
// 				"Couché",
// 			]} />
// 	  <SelectInput id="hernAss" label="Symptômes associés" options={[
// 				"Irréductible",
// 				"Douleure intense",
// 				"Rougeur",
// 				"Vomissement",
// 				"Constipation",
// 			]} />
// 	  <SelectInput id="hernSign" label="Signee associés" options={[
// 				"Brulure rétrosternale",
// 				"Méléna",
// 				"Réctorrhagie",
// 				"Dysphagie",
// 			]} />
//   </Card>
// )

function App() {
	  const { abPainCard, constipCard, nauseaCard, rectoRrhCard, hematCard, hernCard } = buildCards()
		const [output, setOutput] = useState('')

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

			<Card title="Information du·de la patient·e">
				<NumberInput id="age" label="Age" placeholder="Jours" min={0} />
				<RadioItem name="sex" id="male" value="Homme" label="Homme" />
				<RadioItem name="sex" id="female" value="Femme" label="Femme" />
			</Card>

      <Card title="Motif de consultation">
        <CheckboxItem id="abPain" value="douleur abdominale" label="Douleur abdominale"
					extraCard={abPainCard} />
        <CheckboxItem id="constip" value="constipation" label="Constipation"
					extraCard={constipCard} />
        <CheckboxItem id="nausea" value="nausée/vomissement" label="Nausée / Vomissement"
					extraCard={nauseaCard} />
        <CheckboxItem id="rectoRrh" value="rectorrhgies/méléna" label="Rectorrhgies / Méléna"
					extraCard={rectoRrhCard} />
        <CheckboxItem id="hemat" value="hématémèse" label="Hématémèse"
					extraCard={hematCard} />
        <CheckboxItem id="hern" value="hernie abdominale" label="Hernie abdominale"
					extraCard={hernCard} />
        <CheckboxItem id="pertedApp" value="perte d'appéti" label="Perte d'appéti" />
      </Card>

      <Card title="Antécédants chirurgicaux">
        <CheckboxItem id="appendix" value="appendicectomie" label="Appendicectomie" />
        <CheckboxItem id="cholex" value="cholecystectomie" label="Cholecystectomie" />
        <CheckboxItem id="cureHern" value="cure d'hernie" label="Cure d'hernie" />
        <CheckboxItem id="chirGyn" value="chirurgie gynécologique" label="Chirurgie gynécologique"
          extraInput={<input type="text" placeholder="Préciser..." />} />
        <CheckboxItem id="chirUro" value="chirurgie urologique" label="Chirurgie urologique"
          extraInput={<input type="text" placeholder="Préciser..." />} />
        <CheckboxItem id="chirOrtho" value="chirurgie orthopédique" label="Chirurgie Orthopédique"
          extraInput={<input type="text" placeholder="Préciser..." />} />
      </Card>

      <Card title="Antécédants médicaux">
        <CheckboxItem id="lithBil" value="lithiase biliaire" label="Lithiase biliaire" />
        <CheckboxItem id="ulcGas" value="ulcère gastrique/duodénal" label="Ulcère gastrique/duodénal" />
        <CheckboxItem id="cancer" value="cancer" label="Cancer"
          extraInput={<input type="text" placeholder="Préciser..." />} />
        <CheckboxItem id="mici" value="MICI" label="MICI" />
        <CheckboxItem id="diabet1" value="diabète type 1" label="Diabète type 1" />
        <CheckboxItem id="diabet2" value="diabète type 2" label="Diabète type 2" />
        <CheckboxItem id="hta" value="HTA" label="HTA" />
        <CheckboxItem id="arythm" value="trouble du rythme cardiaque" label="Trouble du rythme" />
        <CheckboxItem id="insCardio" value="insuffisance cardiaque" label="Insuffisance cardiaque" />
        <CheckboxItem id="cirrhose" value="cirrhose" label="Cirrhose" />
        <CheckboxItem id="insRen" value="insuffisance rénale" label="Insuffisance rénale" />
        <CheckboxItem id="tabac" value="tabagisme" label="Tabagisme"
          extraInput={<input type="number" placeholder="Nb de cigarettes/jour" min="0" />} />
        <CheckboxItem id="coh" value="consommation d'alcool" label="Consommation d'alcool"
          extraInput={<input type="number" placeholder="Nb de verres/jour" min="0" />} />
      </Card>

      <Card title="Traitement">
        <CheckboxItem id="doac" value="DOAC" label="DOAC" />
        <CheckboxItem id="avk" value="AVK" label="AVK" />
        <CheckboxItem id="antiAgr" value="antiagrégant" label="Antiagrégant" />
        <CheckboxItem id="immSupr" value="immunosuppresseur" label="Immunosuppresseur" />
        <CheckboxItem id="betaB" value="bétabloquant" label="Bétabloquant" />
        <CheckboxItem id="antiHyp" value="antihypertenseur" label="Antihypertenseur" />
        <CheckboxItem id="diur" value="diurétique" label="Diurétique" />
        <CheckboxItem id="antiArry" value="antiarrythmique" label="Antiarrythmique" />
        <CheckboxItem id="insul" value="insuline" label="Insuline" />
        <CheckboxItem id="metform" value="metformine" label="Metformine" />
        <CheckboxItem id="antiEpi" value="antiépileptique" label="Antiépileptique" />
        <CheckboxItem id="aller" value="allergie" label="Allergie"
					extraInput={<input type="text" placeholder="Préciser..." />}/>
        <CheckboxItem id="opio" value="opiodes" label="Opiodes" />
        <CheckboxItem id="ains" value="AINS" label="AINS" />
      </Card>

			<Card title="Récurences">
				<RadioItem name="rec" id="premier" value="premier épisode" label="Premier épisode" />
				<RadioItem name="rec" id="deuxieme" value="deuxieme épisode" label="Deuxieme épisode" />
				<RadioItem name="rec" id="mult" value="épisode multiples" label="Épisodes multiples" />
				<RadioItem name="rec" id="recidive" value="récidive" label="Récidive" />
			</Card>

      <Card title="Symptômes B">
        <CheckboxItem id="fievre" value="fièvre/frisson" label="Fièvre/frisson" />
        <CheckboxItem id="fatig" value="fatigue" label="Fatigue" />
        <CheckboxItem id="pertePds" value="perte de poids" label="Perde de poids" />
        <CheckboxItem id="sudNoct" value="sudation nocturne" label="Sudation nocturne" />
        <CheckboxItem id="malaise" value="malaise" label="Malaise" />
			</Card>

      <Card title="Anamnèse uro">
        <CheckboxItem id="dysur" value="dysurie" label="Dysurie" />
        <CheckboxItem id="pollak" value="pollakiurie" label="Pollakiurie" />
        <CheckboxItem id="hematu" value="hématurie" label="Hématurie" />
			</Card>

      <Card title="Anamnèse uro">
				<NumberInput id="detRegl" label="Dernière règle depuis" placeholder="Jours" min={0} />
        <CheckboxItem id="retRegl" value="retard de règle" label="Retard de Règle" />
        <CheckboxItem id="metroRrh" value="métrorrhagies" label="Métrorrhagies" />
        <CheckboxItem id="doulPelv" value="douleur pelvienne" label="Douleur pelvienne" />
			</Card>

      <Card title="Anamnèse uro">
        <CheckboxItem id="doulThor" value="douleur thoracique" label="Douleur Thoracique" />
        <CheckboxItem id="dysp" value="dispnée" label="Dyspnée" />
        <CheckboxItem id="palp" value="palpitations" label="Palpitations" />
			</Card>

			<button onClick={generateOutput}>Générer</button>
			<textarea value={output} readOnly rows={6} style={{width: '100%'}} />

    </div>
  )
}

export default App
