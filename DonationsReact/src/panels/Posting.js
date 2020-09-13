import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const Posting = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Матвей</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Пост</span><br/>
		</Div>
	</Panel>
);

Posting.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Posting;
