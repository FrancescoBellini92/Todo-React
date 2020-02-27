import ListPage from '../components/ListPage';
import {connect} from 'react-redux';
import {removeList} from '../actions/index';
function mapStateToProps({lists, error}) {
    return ({
        lists,
        error
    });
}

export const ListPageContainer = connect(mapStateToProps,{removeList})(ListPage);