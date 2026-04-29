import { Card, CheckboxItem, NumberInput, RadioItem } from './components'
import { buildCards } from './cards'
import React, { useState } from 'react'

export function PatientInfo({ update }) {
  return (
    <Card title="Information du·de la patient·e">
      <NumberInput id="age" label="Age" placeholder="Ans" min={0}
        onChange={(val) => update('patient', 'age', val)} />
      <RadioItem name="sex" id="male" value="Homme" label="Homme"
        onChange={(val) => update('patient', 'sex', val)} />
      <RadioItem name="sex" id="female" value="Femme" label="Femme"
        onChange={(val) => update('patient', 'sex', val)} />
    </Card>
  )
}

export function MotifConsultation({ state, update }) {
  const { abPainCard, constipCard, nauseaCard, rectoRrhCard, hematCard, hernCard } = buildCards()
  return (
    <Card title="Motif de consultation">
      <CheckboxItem id="abPain" value="douleur abdominale" label="Douleur abdominale" extraCard={abPainCard} />
      <CheckboxItem id="constip" value="constipation" label="Constipation" extraCard={constipCard} />
      <CheckboxItem id="nausea" value="nausée/vomissement" label="Nausée / Vomissement" extraCard={nauseaCard} />
      <CheckboxItem id="rectoRrh" value="rectorrhgies/méléna" label="Rectorrhgies / Méléna" extraCard={rectoRrhCard} />
      <CheckboxItem id="hemat" value="hématémèse" label="Hématémèse" extraCard={hematCard} />
      <CheckboxItem id="hern" value="hernie abdominale" label="Hernie abdominale" extraCard={hernCard} />
      <CheckboxItem id="pertedApp" value="perte d'appéti" label="Perte d'appéti" />
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
