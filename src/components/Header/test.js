import { screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })

    test('renders a heading with correct text content', () => {
        let heading = screen.getByRole("heading")
        expect(heading.textContent).toBe('Rolling Stone - Top 10 greatest albums')
    })
})