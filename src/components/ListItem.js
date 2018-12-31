import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import styles from './styles/ListItemStyles';
class ListItem extends Component {
	render() {
		const { library } = this.props;
		const { title } = library;
		const { titleStyle } = styles;
		return (
			<CardSection>
				<Text style={titleStyle}>{title}</Text>
			</CardSection>
		);
	}
}

export default ListItem;
