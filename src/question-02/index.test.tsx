import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Page} from './index';
/*
No need to edit this file
*/
describe('React', () => {
    test('Can search Mullins and return Underwood Mullins in table', async () => {
        render(<Page />);

        const andyMurry = screen.getByText(/Andy Murry/i);
        const underwoodMullins = screen.getByText(/Underwood Mullins/i);

        const search = screen.getByRole('textbox', {name: /search/i});
        userEvent.type(search, 'mu');

        expect(underwoodMullins).toBeInTheDocument();
        expect(andyMurry).toBeInTheDocument();

        userEvent.type(search, 'mullins');
        expect(andyMurry).not.toBeInTheDocument();
    });
});
