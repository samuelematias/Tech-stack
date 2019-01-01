import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import styles from './styles/ListItemStyles';

class ListItem extends Component {
	_renderDescription() {
		const { library, expanded } = this.props;
		const { description } = library;
		const {} = styles;
		if (expanded) {
			return <Text>{description}</Text>;
		}
	}

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
					{this._renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(
	mapStateToProps,
	actions
)(ListItem);
