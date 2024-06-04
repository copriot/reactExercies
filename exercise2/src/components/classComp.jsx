import { Component } from "react";

class Sayac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //bileşenin ekrana basılma anını izle
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }
  //bileşenin güncellenme olayını izler
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("componentDidUpdate çalıştı");
  }
  //bileşenin ekrandan ayrılma olayını inceler
  componentWillUnmount() {
    console.log("componenWillUnmount çalıştı");
  }
  //state i güncelleme
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="d-flex justify-content-center gap-4 mt-5 align-items-center">
        <button
          className="btn btn-warning"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Azalt
        </button>
        <span>{this.state.count}</span>
        <button
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Arttır
        </button>
      </div>
    );
  }
}
export default Sayac;
