// Style
import './app/style/app.scss';

// Components
import { Items } from './app/components/Items';
import { Footer } from './app/components/Footer';
import { Main } from './app/components/Main';
import { Presentation } from './app/components/Presentation';
import { TableImg } from './app/components/TableImg';
import { WithInst } from './app/components/WithInst';
import { ArrowUp } from './app/ui/ArrowUp';

function App() {
    return (
        <div className='App'>
            <Main />
            <Items />
            <Presentation />
            <WithInst />
            <TableImg />
            <Footer />
            <ArrowUp />
        </div>
    );
}

export default App;
