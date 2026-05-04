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
			<CheckboxRow  label="Consommation de toxique:" options={["Alcool", "Drogue"]}
				onChange={(val) => update('nauseaDet', 'consommation', val)} />
    </Card>
  )
}

export function RectorrhDetail({ state, update }) {
	if (!state.motif.rectorrh) return null
  return (
    <Card title="Rectorrhagie - détails">
      <NumberInput id="rectoRrhJ" label="Depuis" placeholder="Jours" min={0} />
      <SelectInput id="rectoRrhQua" label="Qualité" options={[
        "Sang frais", "Méléna", "Caillot"
      ]} />
      <SelectInput id="rectoRrhT" label="Timing" options={[
        "Goutte sur la cuvette", "Mélangé aux selles"
      ]} />
      <SelectInput id="rectoRrhHemo" label="Hémodynamique" options={["Stable", "Instable"]} />
      <SelectInput id="rectoRrhSouv" label="Sensation de devoir aller à selle tout le temps" options={["Oui", "Non"]} />
    </Card>
  )
}

export function HematDetail({ state, update }) {
	if (!state.motif.hemat) return null
  return (
    <Card title="Hématèse - détails">
      <NumberInput id="hematJ" label="Depuis" placeholder="Jours" min={0} />
      <SelectInput id="hematAbs" label="Absence de" options={["Hémoptysie", "Épistaxis"]} />
      <SelectInput id="hematQua" label="Qualité" options={["Sang frais", "Marque de café"]} />
      <SelectInput id="hematQuant" label="Quantité" options={["Abondant", "Faible quantité"]} />
      <SelectInput id="hematEp" label="Episode" options={["Unique", "Multiple"]} />
      <SelectInput id="hematVom" label="Effort de vomissement avant" options={["Oui", "Non"]} />
      <SelectInput id="hematSign" label="Signes associés" options={[
        "Brulure rétrosternale", "Méléna", "Réctorrhagie", "Dysphagie"
      ]} />
      <SelectInput id="hematDyn" label="Hémodynamiquement" options={["Stable", "Instable"]} />
    </Card>
  )
}

export function HernDetail({ state, update }) {
	if (!state.motif.hern) return null
  return (
    <Card title="Hernie abdominale - détails">
      <NumberInput id="hernJ" label="Depuis" placeholder="Jours" min={0} />
      <SelectInput id="hernLoc" label="Localisation" options={[
        "Inguinale", "Ombilicale", "Cicatricielle"
      ]} />
      <SelectInput id="hernApp" label="Mode d'apparition" options={["Progressif", "Brutal"]} />
      <SelectInput id="hernEvo" label="Evolution" options={[
        "Augmente avec le temps", "Constant"
      ]} />
      <SelectInput id="hernVar" label="Variabilité" options={[
        "Augmente à l'effort", "Toux", "Station debout", "Disparait à repos", "Couché"
      ]} />
      <SelectInput id="hernAss" label="Symptômes associés" options={[
        "Irréductible", "Douleur intense", "Rougeur", "Vomissement", "Constipation"
      ]} />
    </Card>
  )
}


export function AntecedantChir({ state, update }) {
  return (
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
  )
}

export function AntecedantMed({ state, update }) {
  return (
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
  )
}

export function Traitement({ state, update }) {
  return (
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
  )
}

export function Recurences({ state, update }) {
  return (
		<Card title="Récurences">
			<RadioItem name="rec" id="premier" value="premier épisode" label="Premier épisode" />
			<RadioItem name="rec" id="deuxieme" value="deuxieme épisode" label="Deuxieme épisode" />
			<RadioItem name="rec" id="mult" value="épisode multiples" label="Épisodes multiples" />
			<RadioItem name="rec" id="recidive" value="récidive" label="Récidive" />
		</Card>
  )
}

export function SymptomesB({ state, update }) {
  return (
		<Card title="Symptômes B">
			<CheckboxItem id="fievre" value="fièvre/frisson" label="Fièvre/frisson" />
			<CheckboxItem id="fatig" value="fatigue" label="Fatigue" />
			<CheckboxItem id="pertePds" value="perte de poids" label="Perde de poids" />
			<CheckboxItem id="sudNoct" value="sudation nocturne" label="Sudation nocturne" />
			<CheckboxItem id="malaise" value="malaise" label="Malaise" />
		</Card>
  )
}

export function AnamneseUro({ state, update }) {
  return (
		<Card title="Anamnèse urologique">
			<CheckboxItem id="dysur" value="dysurie" label="Dysurie" />
			<CheckboxItem id="pollak" value="pollakiurie" label="Pollakiurie" />
			<CheckboxItem id="hematu" value="hématurie" label="Hématurie" />
		</Card>
  )
}

export function AnamneseGyno({ state, update }) {
  return (
		<Card title="Anamnèse gynocologique">
			<NumberInput id="detRegl" label="Dernière règle depuis" placeholder="Jours" min={0} />
			<CheckboxItem id="retRegl" value="retard de règle" label="Retard de Règle" />
			<CheckboxItem id="metroRrh" value="métrorrhagies" label="Métrorrhagies" />
			<CheckboxItem id="doulPelv" value="douleur pelvienne" label="Douleur pelvienne" />
		</Card>
  )
}

export function AnamneseCardio({ state, update }) {
  return (
		<Card title="Anamnèse cardiopulmonaire">
			<CheckboxItem id="doulThor" value="douleur thoracique" label="Douleur Thoracique" />
			<CheckboxItem id="dysp" value="dispnée" label="Dyspnée" />
			<CheckboxItem id="palp" value="palpitations" label="Palpitations" />
		</Card>
  )
}
