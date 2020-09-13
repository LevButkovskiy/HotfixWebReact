import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const Collection = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Просмотр сбора</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Сбор</span><br/>
		</Div>
	</Panel>
);

Collection.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Collection;
