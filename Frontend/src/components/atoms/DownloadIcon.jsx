import React from 'react';
import { FaDownload } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/atoms/DownloadIcon.css';

const DownloadIcon = ({ handleDownload }) => {
    return (
        <div className="download-icon" onClick={handleDownload}>
            <FaDownload className="download-icon" />
        </div>
    );
};

DownloadIcon.propTypes = {
    handleDownload: PropTypes.func.isRequired,
};

export default DownloadIcon;