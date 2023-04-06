import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';
import { store } from '@/store';
import { render } from './index';

test('renders a heading', () => {
	render(<Home />, { store });
	const heading = screen.getByRole('heading', {
		name: 'TES',
	});

	expect(heading).toBeInTheDocument();
});
