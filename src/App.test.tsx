import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<App />);
  });

  it('renders with Hello World message', () => {
    expect(component.container).toHaveTextContent('Hello World');
  });
});