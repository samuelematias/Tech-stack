import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import styles from './styles/ListItemStyles';

class ListItem extends Component {
	render() {
		const { library, selectLibrary } = this.props;
		const { title, id } = library;
		const { titleStyle } = styles;

		return (
			<TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default connect(
	null,
	actions
)(ListItem);
