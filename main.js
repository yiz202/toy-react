import { createElement, Component, render } from "./toy-react.js";
class MyComponent extends Component {
    constructor(){
        super();
        this.state = {
            a:1,
            b:2
        }
    }
  render() {
    return (
      <div>
        <div>my componenttext</div>
        <button onclick={()=>{this.setState({a:this.state.a+1})}}>add</button>
    <span>{this.state.a.toString()}</span>
    <span>{this.state.b.toString()}</span>
      </div>
    );
  }
}

window.a = (
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>
);
render(window.a, document.body);
