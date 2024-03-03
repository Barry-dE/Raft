import Companies from './components/Companies/Companies';
import Services from './components/Features/Features';
import Fees from './components/Fees/Fees';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Hero />
            <Companies />
            <Services />
            <Fees />
        </>
    );
}

export default App;
