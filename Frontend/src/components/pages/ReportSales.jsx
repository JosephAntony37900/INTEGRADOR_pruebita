import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import CustomBarChart from '../organisms/BarChart';
import CustomLineChart from '../organisms/LineChart';
import CustomPieChart from '../organisms/PieChart';
import Footer from '../atoms/Footer';
import DownloadIcon from '../atoms/DownloadIcon';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/pages/ReportSales.css';

const ReportSales = () => {
    const handleDownload = async () => {
        const input = document.getElementById('report-sales-content');
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // Ancho del PDF en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const position = 10; // Espacio desde la parte superior del PDF
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save("Report-Sales.pdf");
    };

    return (
        <div className="report-container" id="report-sales-content">
            <header className="header-report">
                <div className="header-left">
                    <div className="arrow-button-container">
                        <Link to="/SalesHistory">
                            <i className="fa-solid fa-arrow-rotate-left"></i>
                        </Link>
                    </div>
                </div>
                <Logo className="LogoReport"/>
                <nav>
                    <Link to="/reportsales" className="report-link">REPORTE</Link>
                </nav>
                <div className="header-right">
                    <div className="header-download">
                        <DownloadIcon handleDownload={handleDownload} />
                    </div>
                </div>
            </header>
            <div className="report-content">
                <h1>REPORTE</h1>
                <h2>ENERO — MARZO</h2>
                <p className="paragrah1">Promedio de ganancia: 000000.00</p>
                <p className="paragrah2">Mes con más ganancia: Enero</p>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Inversión</th>
                            <th>Vendido</th>
                            <th>Ganancias Brutas</th>
                            <th>% Ganancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9999</td>
                            <td>9999</td>
                            <td>9999</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>9999</td>
                            <td>9999</td>
                            <td>-25%</td>
                        </tr>
                        <tr>
                            <td>9999</td>
                            <td>9999</td>
                            <td>9999</td>
                            <td>25%</td>
                        </tr>
                    </tbody>
                </table>
                <h2>GRÁFICAS</h2>
                <div className="charts-row">
                    <div className="chart-wrapper">
                        <CustomLineChart />
                    </div>
                    <div className="chart-wrapper">
                        <CustomPieChart />
                    </div>
                </div>
                <div className="chart-wrapper full-width">
                    <CustomBarChart />
                </div>
            </div>
            <div className="FooterReport">
                <Footer />
            </div>
        </div>
    );
}

export default ReportSales;
