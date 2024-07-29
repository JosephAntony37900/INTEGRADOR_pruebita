// src/components/menu/IconUserMenu.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/organisms/UserMenu.css';

const IconUserMenu = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e) => {
        if (e && e.target.closest('.user-menu')) return;
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', closeMenu);
        } else {
            document.removeEventListener('click', closeMenu);
        }

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isOpen]);

    return (
        <div className="navbar-right">
            <div className="profile-circle" onClick={toggleMenu}>
                <i className={`fas fa-${name}`}></i>
            </div>
            {isOpen && (
                <div className="user-menu">
                    <div className="user-menu-header">
                        <div className="user-menu-avatar"></div>
                        <div className="user-menu-username">Username</div>
                    </div>
                    <div className="user-menu-options">
                        <button className="user-menu-option">Cambiar de cuenta</button>
                        <button className="user-menu-logout" onClick={closeMenu}>Cerrar sesión</button>
                    </div>
                </div>
            )}
        </div>
    );
};

IconUserMenu.propTypes = {
    name: PropTypes.string.isRequired,
};

export default IconUserMenu;
