import {connect} from 'react-redux';
import Footer from '../components/footer';
import {filterTodo} from '../actions/index';
import {withRouter} from 'react-router-dom';

function mapStateToProps ({filter}) {
    return ({
        activeFilter: filter.activeFilter
    })
}

export const footerContainer = withRouter(connect(mapStateToProps, {filterTodo})(Footer));
