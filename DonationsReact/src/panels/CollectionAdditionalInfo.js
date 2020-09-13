import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const CollectionAdditionalInfo = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Дополнительно</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Настройки сбора</span><br/>
		</Div>
	</Panel>
);

CollectionAdditionalInfo.propTypes = {
	id: PropTypes.string.isRequired,
};

export default CollectionAdditionalInfo;
