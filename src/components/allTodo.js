import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import {todoAdderContainer as TodoAdderContainer} from  '../containers/adderContainer';

export default class AllToDo extends React.Component {
  constructor (props) {
    super(props);
    if (props.hasError) {
      throw new Error(props.error.errorMessage)
    }
  }

  componentWillMount() {
    this.props.getTodo(this.props.match.params.list)
  }

  componentDidUpdate(prevProps) {
    if(this.props.list !== prevProps.list) {
      this.props.getTodo(this.props.list);
    }
  }
  
  render () {
    const listId = this.props.match.params.list || 0;
    const listName = this.props.location.state ? this.props.location.state.name : null;
    return (
      <div className="container">
        <h3 className="text-center"> {listName}</h3>
        <TodoAdderContainer list={listId} />
        <ul className="list-group">
             {this.props.items.map( (item, index) => <Item onComplete={() => {this.props.completeTodo(item)}} 
            onRemove={ () => {this.props.removeTodo(item.id)}} key={item.id} item={item}/>)}
        </ul>
    </div>);
  }
}
  
AllToDo.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool,
      errorMessage: PropTypes.string
    })
  };