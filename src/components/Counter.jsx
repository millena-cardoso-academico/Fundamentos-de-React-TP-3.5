import '../styles/Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2 className="counter-display">Contador: {this.state.count}</h2>
        <button className="counter-button" onClick={this.incrementCount}>
          Incrementar
        </button>
        <button className="counter-button reset" onClick={this.resetCount}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;