import './App.css'
import Card from './components/Card';

function App() {
  // const [count,setCount] = useState(0);
  let myObj ={
    username : "Priyanshu",
    age : 20
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 class="bg-amber-300 text-black">Hello ji</h1> <br/>
      <Card userName ="chaiAurCode" btntext = "Hello Ji"/>
      <Card userName = "Priyanshu Pandey" btntext = "Kaise ho ? "/>
    </>
  )
}

export default App
