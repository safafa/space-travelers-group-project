import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rocket from '../../components/Rocket';

describe('Rocket component', () => {
  test('renders Rocket component', () => {
    render(
      <Provider store={store}>
        <Rocket key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('Test test')).toBeInTheDocument();
  });
});
