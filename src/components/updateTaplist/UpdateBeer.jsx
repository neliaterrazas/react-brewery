import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class UpdateBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['beer 1', 'beer2', 'beer3']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(){
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i){
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        <h3>{item}</h3>
      </div>
    ));
    return(
      <div>
        <style jsx>{`
          .example-enter {
            opacity: 0.01;
          }

          .example-enter.example-enter-active {
            opacity: 1;
            transition: opacity 500ms ease-in;
          }

          .example-leave {
            opacity: 1;
          }

          .example-leave.example-leave-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
          }

                `}
        </style>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <h3 className="example-leave">{items}</h3>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default UpdateBeer;
