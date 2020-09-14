import { createElement, Component, render } from "./toy-react.js";
class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>my componenttext</div>
        {this.children}
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
