import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	UIManager,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import styles from './styles/ListItemStyles';

class ListItem extends Component {
	componentDidUpdate() {
		//to the animation work on android
		UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	_renderDescription() {
		const { library, expanded } = this.props;
		const { description } = library;
		const { descriptionStyle } = styles;
		if (expanded) {
			return (
				<CardSection>
					<Text style={descriptionStyle}>{description}</Text>
				</CardSection>
			);
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
