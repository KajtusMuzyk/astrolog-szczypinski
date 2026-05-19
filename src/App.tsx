import { useState } from 'react'
import CatalogList from './components/CatalogList'
import ObjectDetails from './components/ObjectDetails'
import DiscoveryForm from './components/DiscoveryForm'
import './App.css'

export interface ObjectInfo {
  id: number;
  name: string;
  type: string;
  distance: string;
  image: string;
}

const InitialObjects: ObjectInfo[] = [
  {id: 1, name:"Mgławica Orion (M42)",type: "Mgławica emisyjna",distance: "1344 lata świetlne",image:"https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=800"},
  {id: 2, name:"Sagittarius A*",type: "Supermasywna czarna dziura",distance: "26 673 lata świetlne",image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800"},
  {id: 3, name:"Andromeda (M31)",type: "Galaktyka spiralna",distance: "2.537 miliona lat świetlnych",image:"https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800"},
  {id: 4, name:"Trappist-1e",type: "Egzoplaneta (strefa zamieszkiwalna)",distance: "40 lat świetlnych",image:"https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800"},
  {id: 5, name:"Plejady (M45)",type: "Gromada otwarta gwiazd",distance: "444 lata świetlne",image:"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800"}
]

function App() {

  const [objects,setObjects] = useState<ObjectInfo[]>(InitialObjects)
  const [selectedObject, setSelectedObject] = useState<ObjectInfo | null>(null)
  const handleAddObject = (newObject: ObjectInfo)=> {
    setObjects((prevObjects) => [newObject,...prevObjects])
  }
  return (
    <>
      <div className={"app-container"}>
        <header>
          <h1>🌌 AstroLog — Panel Obserwacyjny</h1>
        </header>

        <main className={"main-container"}>
          <CatalogList objects={objects} onSelectObject={setSelectedObject}/>
          <ObjectDetails object={selectedObject}/>
          <DiscoveryForm onAddObject={handleAddObject}/>
        </main>
      </div>
    </>
  )
}

export default App
