import React, { useState } from 'react'

function Sidebar() {
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        { name: 'Dashboard', icon: 'fa-home' },
        { name: 'My Reviews', icon: 'fa-film' },
        { name: 'TV Shows', icon: 'fa-tv' },
        { name: 'Watchlist', icon: 'fa-bookmark' }
    ];

    return (
        <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
            <div className="p-3">
                <h5>##</h5>
                <ul className="list-unstyled">
                    {menuItems.map((item) => (
                        <li key={item.name} className="mb-2">
                            <a
                                href="#"
                                className={`text-decoration-none d-block p-2 rounded ${activeItem === item.name ? 'bg-primary text-white' : 'text-dark'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveItem(item.name);
                                }}
                            >
                                <i className={`fas ${item.icon} me-2`}></i>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <hr />

                {/* <h6>Genres</h6>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Action</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Comedy</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Drama</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Horror</a></li>
                </ul> */}
            </div>
        </div>
    )
}

export default Sidebar