import Lists from '../components/lists';
import {connect} from 'react-redux';
import {removeList} from '../actions/index';
function mapStateToProps({lists, error}) {
    return ({
        lists,
        error
    });
}

export const listsContainer = connect(mapStateToProps,{removeList})(Lists);