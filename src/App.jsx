import './App.css';
import Active from './components/Active';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {


    return (
        <div className="app">
            <Active />
            <Loading />
            <Error />
        </div>
    )
}

export default App;