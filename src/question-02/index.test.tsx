import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Page} from './index';
/*
No need to edit this file
*/
describe('Question-02', () => {
    test('Can search Mullins and return Underwood Mullins in table', async () => {
        // eslint-disable-next-line no-console
        console.log('Question-02 : Task 1');

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

    test('Render correct average', () => {
        // eslint-disable-next-line no-console
        console.log('Question-02 : Task 2');

        render(<Page />);
        const average = screen.getByText(/average/i);
        expect(average).toHaveTextContent('Average : 22970.7');
    });
});
