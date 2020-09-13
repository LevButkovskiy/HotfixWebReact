import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const CollectionSettings = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Настройки сбора</span><br/>
		</Div>
	</Panel>
);

CollectionSettings.propTypes = {
	id: PropTypes.string.isRequired,
};

export default CollectionSettings;
