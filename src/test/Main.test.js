import Header from '../components/Header.js';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })
})

test("renders heading", () => {
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe("");
  });