import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rocket from '../../components/Rocket';

describe('Rocket component', () => {
  test('snapshot test', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket key="0" id="0" name="test" type="Test test" image="test" reserved />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Rocket component', () => {
    render(
      <Provider store={store}>
        <Rocket key="0" id="0" name="test" type="Test test" image="test" />
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('Test test')).toBeInTheDocument();
  });

  test('Reserved badge in Rocket component', () => {
    render(
      <Provider store={store}>
        <Rocket key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });

  test('Cancel Rocket button', () => {
    render(
      <Provider store={store}>
        <Rocket key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('Cancel Rocket')).toBeInTheDocument();
  });

  test('Reserve Rocket button', () => {
    render(
      <Provider store={store}>
        <Rocket key="0" id="0" name="test" type="Test test" image="test" />
      </Provider>,
    );
    screen.getByText('test');
    fireEvent.click(screen.getByRole('button'));
    screen.debug();
  });
});
