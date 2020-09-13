import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';
import '../App.css';
import './Home.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Div className = "content">
			<Div className = "textContent">
				<div id="textHeadline">У вас пока нет сборов.</div>
				<div id="textHeadline">Начните доброе дело.</div>
				<span></span>
					<Div className="button">
						<Link to='/type'>Создать сбор</Link>
					</Div>
				</Div>
		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
