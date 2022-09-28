// Style
import './app/style/app.scss';

// Components
import Main from './app/components/Main';
import Presentation from './app/components/Presentation';
import WithInst from './app/components/WithInst';
import Items from './app/components/Items';

function App() {
    return (
        <div className='App'>
            <Main />
            <Items />
            <Presentation />
            <WithInst />
        </div>
    );
}

export default App;
