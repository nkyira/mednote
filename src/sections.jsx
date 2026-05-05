import { Card, CheckboxItem, NumberInput, RadioItem, SelectInput, CheckboxRow, RadioRow, TextInput } from './components'
import { buildCards } from './cards'
import React, { useState } from 'react'

export function PatientInfo({ update }) {
  return (
    <Card title="Information du·de la patient·e">
      <NumberInput id="age" label="Age" placeholder="Ans" min={0}
        onChange={(val) => update('patient', 'age', val)} />
      <RadioItem name="sex" id="male" value="homme" label="Homme"
        onChange={(val) => update('patient', 'sex', val)} />
      <RadioItem name="sex" id="female" value="femme" label="Femme"
        onChange={(val) => update('patient', 'sex', val)} />
    </Card>
  )
}

export function MotifConsultation({ state, update }) {
  return (
    <Card title="Motif de consultation">
      <CheckboxItem id="abPain" value="douleur abdominale" label="Douleur abdominale"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="constip" value="constipation" label="Constipation"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="nausea" value="nausée/vomissement" label="Nausée / Vomissement"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="rectorrh" value="rectorrhgies/méléna" label="Rectorrhgies / Méléna"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="hemat" value="hématémèse" label="Hématémèse"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="hern" value="hernie abdominale" label="Hernie abdominale"
				onChange={(key, val) => update('motif', key, val)} />
      <CheckboxItem id="pertedApp" value="perte d'appéti" label="Perte d'appéti"
				onChange={(key, val) => update('motif', key, val)} />
    </Card>
  )
}

export function AbPainDetail({ state, update }) {
	if (!state.motif.abPain) return null
  return (
    <Card title="Douleur abdominale - détails">
      <NumberInput id="abPainJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('abPainDet', 'depuis', val)} />
			<CheckboxRow label="Localisation:" 
				options={["Fosse iliaque droite", "Fosse iliaque gauche", "Épigastre", "Suprapubien", "Hypochondre droit", "Hypochondre gauche"]}
				onChange={(val) => update('abPainDet', 'localisation', val)} />
      <NumberInput id="abPainI" label="Intensité" placeholder="/10" min={0} max={10}
        onChange={(val) => update('abPainDet', 'intensite', val)} />
			<CheckboxRow label="Qualité:"
				options={["Coup de couteau", "Diffus", "Crampiforme", "Colique"]}
				onChange={(val) => update('abPainDet', 'qualite', val)} />
			<RadioRow label="Evolution:"
				options={["En augmentation", "Constante", "En diminution"]}
				onChange={(val) => update('abPainDet', 'evolution', val)} />
			<CheckboxRow label="Facteur soulageant:"
				options={["Pire avant les repas", "Pire après les repas", "Avant selles", "Après selles"]}
				onChange={(val) => update('abPainDet', 'facteurSoulageant', val)} />
    </Card>
  )
}

export function ConstipDetail({ state, update }) {
	if (!state.motif.constip) return null
  return (
    <Card title="Constipation - détails">
      <NumberInput id="constipJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('constipDet', 'depuis', val)} />
      <NumberInput id="constipX" label="Selles habituellement tout les" placeholder="Jours" min={0}
        onChange={(val) => update('constipDet', 'frequence', val)} />
			<CheckboxRow label="Consistance des selles:" options={["Dure", "Molle", "Diarrhées"]}
				onChange={(val) => update('constipDet', 'consistance', val)} />
			<CheckboxRow label="Vomissement:" options={["Alimentaire", "Billeux", "Hématique", "Fécaloides"]}
				onChange={(val) => update('constipDet', 'vomissement', val)} />
			<RadioRow label="Gazs?" options={["Oui", "Non"]}
				onChange={(val) => update('constipDet', 'gaz', val)} />
			<RadioRow label="Sang dans les selles?" options={["Oui", "Non"]}
				onChange={(val) => update('constipDet', 'sang', val)} />
    </Card>
  )
}

export function NauseaDetail({ state, update }) {
	if (!state.motif.nausea) return null
  return (
    <Card title="Nausées/Vomissement Détails">
      <NumberInput id="nauseaJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('nauseaDet', 'depuis', val)} />
      <NumberInput id="nauseaF" label="Fréquence" placeholder="Heures" min={0}
        onChange={(val) => update('nauseaDet', 'frequence', val)} />
			<CheckboxRow  label="Type:" options={["Alimentaire", "Billeux", "Hématique", "Fécaloides"]}
				onChange={(val) => update('nauseaDet', 'type', val)} />
			<CheckboxRow  label="Associée à:" options={["Céphalée", "Photophobie", "Raideur de nuque", "Vertiges"]}
				onChange={(val) => update('nauseaDet', 'associe', val)} />
      <TextInput id="nauseaN" label="Nouveau traitement récent"
        onChange={(val) => update('nauseaDet', 'traitement', val)} />
			{state.patient.sex === "femme" && (
				<>
					<RadioRow label="Retard de règle?" options={["Oui", "Non"]}
						onChange={(val) => update('nauseaDet', 'retardRegle', val)} />
					<RadioRow label="Possibilité de grossesse?" options={["Oui", "Non"]}
						onChange={(val) => update('nauseaDet', 'grossesse', val)} />
				</>
			)}
			<RadioRow label="Notion de contage:" options={["Oui", "Non"]}
				onChange={(val) => update('nauseaDet', 'contage', val)} />
			<CheckboxRow label="Consommation de toxique:" options={["Alcool", "Drogue"]}
				onChange={(val) => update('nauseaDet', 'consommation', val)} />
    </Card>
  )
}

export function RectorrhDetail({ state, update }) {
	if (!state.motif.rectorrh) return null
  return (
    <Card title="Rectorrhagie - détails">
      <NumberInput id="rectoRrhJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('rectorrhDet', 'depuis', val)} />
			<CheckboxRow  label="Qualité:" options={["Sang frais", "Méléna", "Caillot"]}
				onChange={(val) => update('rectorrhDet', 'qualite', val)} />
			<CheckboxRow label="Timing:" options={["Gouttes sur la cuvette", "Mélangé aux selles"]}
				onChange={(val) => update('rectorrhDet', 'timing', val)} />
			<RadioRow label="Hémodynamique:" options={["Stable", "Instable"]}
				onChange={(val) => update('rectorrhDet', 'hemodynamique', val)} />
			<RadioRow label="Sensation de devoir aller à selle tout le temps?" options={["Oui", "Non"]}
				onChange={(val) => update('rectorrhDet', 'souvent', val)} />
    </Card>
  )
}

export function HematDetail({ state, update }) {
	if (!state.motif.hemat) return null
  return (
    <Card title="Hématèse - détails">
      <NumberInput id="hematJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('hematDet', 'depuis', val)} />
			<CheckboxRow label="Absence de:" options={["Hémoptysie", "Épistaxis"]}
				onChange={(val) => update('hematDet', 'absence', val)} />
			<CheckboxRow label="Qualité:" options={["Sang frais", "Marque de café"]}
				onChange={(val) => update('hematDet', 'qualite', val)} />
			<RadioRow label="Quantité:" options={["Abondant", "Faible quantité"]}
				onChange={(val) => update('hematDet', 'quantite', val)} />
			<RadioRow label="Épisode:" options={["Unique", "Multiple"]}
				onChange={(val) => update('hematDet', 'episode', val)} />
			<RadioRow label="Effort de vomissement avant:" options={["Oui", "Non"]}
				onChange={(val) => update('hematDet', 'vomissement', val)} />
			<CheckboxRow label="Signes associés:" options={["Brulure rétrosternale", "Méléna", "Réctorrhagie", "Dysphagie"]}
				onChange={(val) => update('hematDet', 'signes', val)} />
			<RadioRow label="Hémodynamiquement" options={["Stable", "Instable"]}
				onChange={(val) => update('hematDet', 'hemodynamique', val)} />
    </Card>
  )
}

export function HernDetail({ state, update }) {
	if (!state.motif.hern) return null
  return (
    <Card title="Hernie abdominale - détails">
      <NumberInput id="hernJ" label="Depuis" placeholder="Jours" min={0}
        onChange={(val) => update('hernDet', 'depuis', val)} />
			<CheckboxRow label="Localisation:" options={["Inguinale", "Ombilicale", "Cicatricielle"]}
				onChange={(val) => update('hernDet', 'localisation', val)} />
			<RadioRow label="Mode d'apparation:" options={["Progressif", "Brutal"]}
				onChange={(val) => update('hernDet', 'mode', val)} />
			<RadioRow label="Évolution:" options={["Augmente avec le temps", "Constant"]}
				onChange={(val) => update('hernDet', 'evolution', val)} />
			<CheckboxRow label="Variabilité:" options={["Augmente à l'effort", "Toux", "Station debout", "Disparait à repos", "Couché"]}
				onChange={(val) => update('hernDet', 'variabilite', val)} />
			<CheckboxRow label="Symptômes associés:" options={["Irréductible", "Douleur intense", "Rougeur", "Vomissement", "Constipation"]}
				onChange={(val) => update('hernDet', 'symptome', val)} />
    </Card>
  )
}


export function AntecedantChir({ state, update }) {
  return (
		<Card title="Antécédants chirurgicaux">
			<CheckboxItem id="appendix" value="appendicectomie" label="Appendicectomie"
				onChange={(key, val) => update('antChir', key, val)} />
			<CheckboxItem id="cholex" value="cholecystectomie" label="Cholecystectomie"
				onChange={(key, val) => update('antChir', key, val)} />
			<CheckboxItem id="cureHern" value="cure d'hernie" label="Cure d'hernie"
				onChange={(key, val) => update('antChir', key, val)} />
			<CheckboxItem id="chirGyn" value="chirurgie gynécologique" label="Chirurgie gynécologique"
				extraInput={<input type="text" placeholder="Préciser..." />}
				onChange={(key, val) => update('antChir', key, val)} />
			<CheckboxItem id="chirUro" value="chirurgie urologique" label="Chirurgie urologique"
				extraInput={<input type="text" placeholder="Préciser..." />}
				onChange={(key, val) => update('antChir', key, val)} />
			<CheckboxItem id="chirOrtho" value="chirurgie orthopédique" label="Chirurgie Orthopédique"
				extraInput={<input type="text" placeholder="Préciser..." />}
				onChange={(key, val) => update('antChir', key, val)} />
		</Card>
  )
}

export function AntecedantMed({ state, update }) {
  return (
		<Card title="Antécédants médicaux">
			<CheckboxItem id="lithBil" value="lithiase biliaire" label="Lithiase biliaire"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="ulcGas" value="ulcère gastrique/duodénal" label="Ulcère gastrique/duodénal"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="cancer" value="cancer" label="Cancer"
				extraInput={<input type="text" placeholder="Préciser..." />}
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="mici" value="MICI" label="MICI"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="diabet1" value="diabète type 1" label="Diabète type 1"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="diabet2" value="diabète type 2" label="Diabète type 2"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="hta" value="HTA" label="HTA"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="arythm" value="trouble du rythme cardiaque" label="Trouble du rythme"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="insCardio" value="insuffisance cardiaque" label="Insuffisance cardiaque"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="cirrhose" value="cirrhose" label="Cirrhose"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="insRen" value="insuffisance rénale" label="Insuffisance rénale"
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="tabac" value="tabagisme" label="Tabagisme"
				extraInput={<input type="number" placeholder="Nb de cigarettes/jour" min="0" />}
				onChange={(key, val) => update('antMed', key, val)} />
			<CheckboxItem id="coh" value="consommation d'alcool" label="Consommation d'alcool"
				extraInput={<input type="number" placeholder="Nb de verres/jour" min="0" />}
				onChange={(key, val) => update('antMed', key, val)} />
		</Card>
  )
}

export function Traitement({ state, update }) {
  return (
		<Card title="Traitement">
			<CheckboxItem id="doac" value="DOAC" label="DOAC"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="avk" value="AVK" label="AVK"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="antiAgr" value="antiagrégant" label="Antiagrégant"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="immSupr" value="immunosuppresseur" label="Immunosuppresseur"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="betaB" value="bétabloquant" label="Bétabloquant"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="antiHyp" value="antihypertenseur" label="Antihypertenseur"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="diur" value="diurétique" label="Diurétique"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="antiArry" value="antiarrythmique" label="Antiarrythmique"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="insul" value="insuline" label="Insuline"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="metform" value="metformine" label="Metformine"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="antiEpi" value="antiépileptique" label="Antiépileptique"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="aller" value="allergie" label="Allergie"
				extraInput={<input type="text" placeholder="Préciser..." />}
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="opio" value="opiodes" label="Opiodes"
				onChange={(key, val) => update('traitement', key, val)} />
			<CheckboxItem id="ains" value="AINS" label="AINS"
				onChange={(key, val) => update('traitement', key, val)} />
		</Card>
  )
}

export function Recurences({ state, update }) {
  return (
		<Card title="Récurences">
			<RadioItem name="rec" id="premier" value="premier épisode" label="Premier épisode"
        onChange={(val) => update('recurrence', 'recurrence', val)} />
			<RadioItem name="rec" id="deuxieme" value="deuxieme épisode" label="Deuxieme épisode"
        onChange={(val) => update('recurrence', 'recurrence', val)} />
			<RadioItem name="rec" id="mult" value="épisode multiples" label="Épisodes multiples"
        onChange={(val) => update('recurrence', 'recurrence', val)} />
			<RadioItem name="rec" id="recidive" value="récidive" label="Récidive"
        onChange={(val) => update('recurrence', 'recurrence', val)} />
		</Card>
  )
}

export function SymptomesB({ state, update }) {
  return (
		<Card title="Symptômes B">
			<CheckboxItem id="fievre" value="fièvre/frisson" label="Fièvre/frisson"
        onChange={(key, val) => update('symptomesB', key, val)} />
			<CheckboxItem id="fatig" value="fatigue" label="Fatigue"
        onChange={(key, val) => update('symptomesB', key, val)} />
			<CheckboxItem id="pertePds" value="perte de poids" label="Perde de poids"
        onChange={(key, val) => update('symptomesB', key, val)} />
			<CheckboxItem id="sudNoct" value="sudation nocturne" label="Sudation nocturne"
        onChange={(key, val) => update('symptomesB', key, val)} />
			<CheckboxItem id="malaise" value="malaise" label="Malaise"
        onChange={(key, val) => update('symptomesB', key, val)} />
		</Card>
  )
}

export function AnamneseUro({ state, update }) {
	if (state.patient.sex !== "homme") return null
  return (
		<Card title="Anamnèse urologique">
			<CheckboxItem id="dysur" value="dysurie" label="Dysurie"
        onChange={(key, val) => update('anamUro', key, val)} />
			<CheckboxItem id="pollak" value="pollakiurie" label="Pollakiurie"
        onChange={(key, val) => update('anamUro', key, val)} />
			<CheckboxItem id="hematu" value="hématurie" label="Hématurie"
        onChange={(key, val) => update('anamUro', key, val)} />
		</Card>
  )
}

export function AnamneseGyno({ state, update }) {
	if (state.patient.sex !== "femme") return null
  return (
		<Card title="Anamnèse gynocologique">
			<NumberInput id="detRegl" label="Dernière règle depuis" placeholder="Jours" min={0}
        onChange={(key, val) => update('anamGyno', key, val)} />
			<CheckboxItem id="retRegl" value="retard de règle" label="Retard de Règle"
        onChange={(key, val) => update('anamGyno', key, val)} />
			<CheckboxItem id="metroRrh" value="métrorrhagies" label="Métrorrhagies"
        onChange={(key, val) => update('anamGyno', key, val)} />
			<CheckboxItem id="doulPelv" value="douleur pelvienne" label="Douleur pelvienne"
        onChange={(key, val) => update('anamGyno', key, val)} />
		</Card>
  )
}

export function AnamneseCardio({ state, update }) {
  return (
		<Card title="Anamnèse cardiopulmonaire">
			<CheckboxItem id="doulThor" value="douleur thoracique" label="Douleur Thoracique"
        onChange={(key, val) => update('anamCardio', key, val)} />
			<CheckboxItem id="dysp" value="dispnée" label="Dyspnée"
        onChange={(key, val) => update('anamCardio', key, val)} />
			<CheckboxItem id="palp" value="palpitations" label="Palpitations"
        onChange={(key, val) => update('anamCardio', key, val)} />
		</Card>
  )
}
