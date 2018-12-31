import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	//helper method/function
	_renderItem = library => {
		return <ListItem library={library.item} />;
	};

	render() {
		const { libraries } = this.props;
		return (
			<FlatList
				data={libraries}
				renderItem={this._renderItem}
				keyExtractor={library => library.id.toString()}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
