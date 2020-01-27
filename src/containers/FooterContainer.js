import {connect} from 'react-redux';
import footer from '../components/Footer';
import {filterTodo} from '../actions/index';

function mapStateToProps ({filter}) {
    return ({
        activeFilter: filter.activeFilter
    })
}

export const footerContainer = connect(mapStateToProps, {filterTodo})(footer);
