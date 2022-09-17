import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Page} from './index'
/*
No need to edit this file
*/
describe("React", ()=>{
    test("Can search Mullins and return Underwood Mullins in table", async()=>{
        render(<Page/>)
        const search = screen.getByRole("textbox", {name:/search/i})
        await userEvent.type(search, 'Mullins');

    })
})