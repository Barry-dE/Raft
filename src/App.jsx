import Benefits from './components/Benefits/Benefits';
import Companies from './components/Companies/Companies';
import Services from './components/Features/Features';
import Fees from './components/Fees/Fees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <div className="raft__wrapper">
            <Header>
                <Nav />
            </Header>
            <Hero />
            <Companies />
            <Services />
            <Fees />
            <Benefits />
            <Footer />
        </div>
    );
}

export default App;
