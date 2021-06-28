import { Router } from '@reach/router';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <Router>
            <Home path='/' />
        </Router>
    );
};

export default Routes;