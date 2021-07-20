import { Link } from '@reach/router';
const Tags = () => {
    return (
        <div className="tags__wrapper">
            <Link to="/">vegetable</Link>
            <Link to="/">fruits</Link>
            <Link to="/">grapes</Link>
            <Link to="/">apple</Link>
        </div>
    );
};

export default Tags;