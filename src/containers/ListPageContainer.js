import ListPage from '../components/ListPage';
import {connect} from 'react-redux';
import {getLists, updateList, removeList} from '../actions/index';
function mapStateToProps({lists, error}) {
    return ({
        lists,
        error
    });
}

export const ListPageContainer = connect(mapStateToProps,{getLists, updateList, removeList})(ListPage);