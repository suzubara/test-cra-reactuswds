import {
  Alert,
  ComboBox,
  Form,
  FormGroup,
  Label,
  TextInput,
  GridContainer,
  GovBanner,
} from '@trussworks/react-uswds'

import logo from './logo.svg'
import './App.css'
import styles from './Test.module.scss'

function App() {
  const fruits = {
    apple: 'Apple',
    apricot: 'Apricot',
    avocado: 'Avocado',
    banana: 'Banana',
    blackberry: 'Blackberry',
    'blood orange': 'Blood orange',
    blueberry: 'Blueberry',
    boysenberry: 'Boysenberry',
    breadfruit: 'Breadfruit',
    'buddhas hand citron': "Buddha's hand citron",
    cantaloupe: 'Cantaloupe',
    clementine: 'Clementine',
    'crab apple': 'Crab apple',
    currant: 'Currant',
    cherry: 'Cherry',
    'custard apple': 'Custard apple',
    coconut: 'Coconut',
    cranberry: 'Cranberry',
    date: 'Date',
    dragonfruit: 'Dragonfruit',
    durian: 'Durian',
    elderberry: 'Elderberry',
    fig: 'Fig',
    gooseberry: 'Gooseberry',
    grape: 'Grape',
    grapefruit: 'Grapefruit',
    guava: 'Guava',
    'honeydew melon': 'Honeydew melon',
    jackfruit: 'Jackfruit',
    kiwifruit: 'Kiwifruit',
    kumquat: 'Kumquat',
    lemon: 'Lemon',
    lime: 'Lime',
    lychee: 'Lychee',
    mandarine: 'Mandarine',
    mango: 'Mango',
    mangosteen: 'Mangosteen',
    marionberry: 'Marionberry',
    nectarine: 'Nectarine',
    orange: 'Orange',
    papaya: 'Papaya',
    passionfruit: 'Passionfruit',
    peach: 'Peach',
    pear: 'Pear',
    persimmon: 'Persimmon',
    plantain: 'Plantain',
    plum: 'Plum',
    pineapple: 'Pineapple',
    pluot: 'Pluot',
    pomegranate: 'Pomegranate',
    pomelo: 'Pomelo',
    quince: 'Quince',
    raspberry: 'Raspberry',
    rambutan: 'Rambutan',
    soursop: 'Soursop',
    starfruit: 'Starfruit',
    strawberry: 'Strawberry',
    tamarind: 'Tamarind',
    tangelo: 'Tangelo',
    tangerine: 'Tangerine',
    'ugli fruit': 'Ugli fruit',
    watermelon: 'Watermelon',
    'white currant': 'White currant',
    yuzu: 'Yuzu',
  }

  const fruitList = Object.entries(fruits).map(([key, value]) => ({
    value: key,
    label: value,
  }))

  const onSubmit = (values) => {
    console.log('SUBMIT!', values)
  }

  return (
    <>
      <GovBanner />
      <main>
        <GridContainer>
          <div>
            <Alert type="success">TEST</Alert>

            <div className={styles.Test}>Test div!</div>

            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label htmlFor="otherInput">Another unrelated input</Label>
                <TextInput id="otherInput" name="otherInput" type="text" />
                <Label htmlFor="input-ComboBox">Pick a fruit</Label>

                <ComboBox
                  id="input-ComboBox"
                  name="input-ComboBox"
                  options={fruitList}
                  onChange={() => {}}
                />
              </FormGroup>
            </Form>
          </div>
        </GridContainer>
      </main>
    </>
  )
}

export default App
