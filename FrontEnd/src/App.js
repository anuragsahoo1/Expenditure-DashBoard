import './App.css';
import Add from './components/add';
import Dash from './dashboard/dash'
function App() {
  return (
    <div className="App">
      <Add/>
      {/* <Expense/> */}
      <Dash/>
    </div>
  );
}

export default App;
