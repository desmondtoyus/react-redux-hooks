import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HelmetProvider } from 'react-helmet-async';
import 'jest-canvas-mock';

Enzyme.configure({ adapter: new Adapter() });
function checkValidityPolyfill() {
    return true;
  }
  
  global.HTMLFormElement.prototype.checkValidity = checkValidityPolyfill;
  global.HTMLInputElement.prototype.checkValidity = checkValidityPolyfill;
  global.HTMLSelectElement.prototype.checkValidity = checkValidityPolyfill;
// jest.setup.js timeout
jest.setTimeout(30000)
export { HelmetProvider, shallow, mount, render };
export default Enzyme;