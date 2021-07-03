import { Router } from '@reach/router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const Routes = () => {
    return (
        <Router>
            <Home path='/' />
            <Shop path='/shop' />
        </Router>
    );
};

export default Routes;