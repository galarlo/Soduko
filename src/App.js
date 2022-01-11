import './App.css';
import SodukoBoard from './SodukoBoard';

function App() {
  return (
    <div className="App">
      <SodukoBoard rowsCount={9} columnsCount={9} />
    </div>
  );
}

export default App;
