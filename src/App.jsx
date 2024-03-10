import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Players from './Players'
import Users from './Users'

function handleButton() {
  alert('frist btn')
}
const handleButton2 = () => {
  alert('btn2 call')
}
const handleButton3 = (num) => {
  alert(num + num)
}

function App() {

  return (

    <>
      <Friends></Friends>
      <Users></Users>
      <Players></Players>
      <h1>React Core Concepts</h1>
      <Counter></Counter>
      <button onClick={handleButton}>click me</button>
      <button onClick={handleButton2} >Click Me 2</button>
      <button onClick={() => { alert('click 3') }} >Click Me 3</button>
      {/* jamelar button  */}
      <button onClick={() => handleButton3(3)}>click me 4</button>
    </>
  )
}

export default App
