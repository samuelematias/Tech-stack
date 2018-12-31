import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
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

export default connect(
	null,
	actions
)(ListItem);
