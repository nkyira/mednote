import { NumberInput, SelectInput, TextInput, Card } from './components'

export function buildCards() {

  const abPainCard = (
    <Card>
      <NumberInput id="abPainJ" label="Depuis" placeholder="Jours" min={0} />
      <SelectInput id="abPainL" label="Localisation" options={[
        "Fosse iliaque droite", "Fosse iliaque gauche", "Suprapubien",
        "Hypochondre droit", "Hypochondre gauche", "Épigastre"
      ]} />
      <NumberInput id="abPainI" label="Intensité" placeholder="/10" min={0} max={10} />
      <SelectInput id="abPainQ" label="Qualité" options={[
        "Coup de couteau", "Diffus", "Crampiforme", "Colique"
      ]} />
      <SelectInput id="abPainE" label="Evolution" options={[
        "En augmentation", "Constante", "En diminution"
      ]} />
      <SelectInput id="abPainS" label="Facteur soulageant" options={[
        "Pire avant les repas", "Pire après les repas", "Avant selles", "Après selles"
      ]} />
    </Card>
  )

  const constipCard = (
    <Card>
      <NumberInput id="constipJ" label="Depuis" placeholder="Jours" min={0} />
      <NumberInput id="constipX" label="Selles habituellement tout les" placeholder="Jours" min={0} />
      <SelectInput id="constipC" label="Consistance des selles" options={[
        "Dure", "Molle", "Diarrhées"
      ]} />
      <SelectInput id="constipV" label="Vomissement" options={[
        "Alimentaire", "Billeux", "Hématique", "Fécaloides"
      ]} />
      <SelectInput id="constipG" label="Gaz ?" options={["Oui", "Non"]} />
      <SelectInput id="constipS" label="Sang dans les selles ?" options={["Oui", "Non"]} />
    </Card>
  )

  const nauseaCard = (
    <Card>
      <NumberInput id="nauseaJ" label="Depuis" placeholder="Jours" min={0} />
      <NumberInput id="nauseaF" label="Fréquence" placeholder="Heures" min={0} />
      <SelectInput id="nauseaT" label="Type" options={[
        "Alimentaire", "Billeux", "Hématique", "Fécaloides"
      ]} />
      <SelectInput id="nauseaA" label="Associé à" options={[
        "Céphalée", "Photophobie", "Raideur de nuque", "Vertiges"
      ]} />
      <TextInput id="nauseaN" label="Nouveau traitement récent" />
      <SelectInput id="nauseaR" label="Retard de règle" options={["Oui", "Non"]} />
      <SelectInput id="nauseaP" label="Possibilité de grossesse" options={["Oui", "Non"]} />
      <SelectInput id="nauseaC" label="Notion de contage" options={["Oui", "Non"]} />
      <SelectInput id="nauseaTox" label="Consommation de toxique" options={["Alcool", "Drogue"]} />
    </Card>
  )

  const rectoRrhCard = (
    <Card>
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

  const hematCard = (
    <Card>
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

  const hernCard = (
    <Card>
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

  return { abPainCard, constipCard, nauseaCard, rectoRrhCard, hematCard, hernCard }
}
