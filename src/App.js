import './App.scss'
import NewNote from './Components/NewNote/NewNote'
import SavedNote from './Components/SavedNote/SavedNote'

export default function App() {
  return (
    <div className="App">
      <header><h1>The notes app</h1></header>
      <NewNote />
      <SavedNote />
    </div>
  )
}