
import './App.css';
import Events from './components/Events';
import Marks from './components/Marks';

function App() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-around"}}>
   <Events></Events>
   
   <Marks></Marks>
   </div>
    </div>
  );
}

export default App;
