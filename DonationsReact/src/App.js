import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge';
import { Root, View } from '@vkontakte/vkui';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import CollectionType from './panels/CollectionType';
import CollectionSettings from './panels/CollectionSettings';
import CollectionAdditionalInfo from './panels/CollectionAdditionalInfo'
import Posting from './panels/Posting'
import NewsFeed from './panels/NewsFeed'
import Collection from './panels/Collection'
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/type' component={CollectionType}/>
			<Route path='/settings' component={CollectionSettings}/>
			<Route path='/additionalInfo' component={CollectionAdditionalInfo}/>
			<Route path='/post' component={Posting}/>
			<Route path='/feed' component={NewsFeed}/>
			<Route path='/collection' component={Collection}/>
		</Switch>



	);
}

export default App;
