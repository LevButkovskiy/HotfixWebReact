import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';
import { Link } from 'react-router-dom'

import '../App.css';
import './CollectionType.css';

const CollectionType = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Тип сбора</PanelHeader>
		<Div className="content">
			<Link to='/type'>
				<Div className="typeBlock">
					<div id="title">Создать сбор</div>
					<div id="subtitle">Когда есть определённая цель</div>
				</Div>
			</Link>
			<Link to='/type'>
				<Div className="typeBlock">
					<div id="title">Регулярный сбор</div>
					<div id="subtitle">Если помощь нужна ежемесячно</div>
				</Div>
			</Link>
		</Div>
	</Panel>
);

CollectionType.propTypes = {
	id: PropTypes.string.isRequired,
};

export default CollectionType;
