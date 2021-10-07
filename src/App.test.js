import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    screen.getByText('Rockets');
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
});
