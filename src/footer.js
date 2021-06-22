import React from "react";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
	return (
		<div className="foot">
			<Row>
				<h5 className="foot-title">Recipie is a react based Web-App for searching recipes.</h5>
			</Row>
			<Row>
				<Col>

				</Col>
				<Col>

				</Col>
				<Col>
				</Col>
				<Col>

				</Col>
			</Row>
			<Row>
				<h4 className="copyr"><span className="lighter"> &copy; {new Date().getFullYear()} Copyright:</span> recipie.com</h4>
			</Row>
		</div>
	);
};
export default Footer;
