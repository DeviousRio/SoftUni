import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer() {
    return <footer className="Footer">
        <ul>
            <Link url="#">
                <img id="logo" src="logo192.png" alt="my-app-logo" />
            </Link>
            <Link url="#">Going to 1</Link>
            <Link url="#">Going to 2</Link>
            <Link url="#">Going to 3</Link>
            <Link url="#">Going to 4</Link>
            <Link url="#">Going to 5</Link>
        </ul>
    </footer>
}

export default Footer;