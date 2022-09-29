// Style
import './app/style/app.scss';

// Components
import Main from './app/components/Main';
import Presentation from './app/components/Presentation';
import WithInst from './app/components/WithInst';
import Items from './app/components/Items';
import TableImg from './app/components/TableImg';
import Footer from './app/components/Footer';

function App() {
    return (
        <div className='App'>
            <Main />
            <Items />
            <Presentation />
            <WithInst />
            <TableImg />
            <Footer />
        </div>
    );
}

export default App;
