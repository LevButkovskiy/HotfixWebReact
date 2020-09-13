import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const CollectionType = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Выбор типа</span><br/>

		</Div>
	</Panel>
);

CollectionType.propTypes = {
	id: PropTypes.string.isRequired,
};

export default CollectionType;
