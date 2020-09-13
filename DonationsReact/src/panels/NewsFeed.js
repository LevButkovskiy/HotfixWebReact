import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import '../App.css';

const NewsFeed = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Новости</PanelHeader>
		<Div className = "content">
				<span id="textHeadline">Новостная лента</span><br/>
		</Div>
	</Panel>
);

NewsFeed.propTypes = {
	id: PropTypes.string.isRequired,
};

export default NewsFeed;
