import { Router } from '@reach/router';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const Routes = () => {
    return (
        <Router>
            <Home path='/' />
            <Shop path='/shop' />
            <Contact path='/contact' />
        </Router>
    );
};

export default Routes;