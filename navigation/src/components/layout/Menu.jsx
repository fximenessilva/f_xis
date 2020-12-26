import React from 'react';
import './Menu.css';

export default function Menu(props) {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}