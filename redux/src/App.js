 
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from "./actions/index"

function App() {

  const MyState = useSelector((state)=>state.changeTheNumber)
  const dispatch =useDispatch();


  return (
        <>
            <div className="App">
                  <h1>Increment /Decrement Counter</h1>
                  <h4>Using React-redux</h4>

                  <div className="quantity">
                    
                    <a className="quantity_minus" title="Decrement " onClick={()=>dispatch(decNumber())}><span> - </span></a>
                    <input name="quantity type="text className="quantity_input" value={MyState} />
                    <a className="quantity_plus" title="decrement " onClick={()=>dispatch(incNumber())}><span> + </span></a>


                    </div> 

            </div>

       
        
        </> 
  );
}

export default App;
