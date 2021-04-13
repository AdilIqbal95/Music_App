import { screen } from '@testing-library/react';
import Main from '.';

describe("Main", () => {
  beforeEach(() => {
    render(<Main />);
  });

  test("renders a list of Cards ", () => {
    let cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(11);
  });

  describe("Submit form and render new card", () => {
    test("there is a submit button ", () => {
        let submitButton = screen.getByRole("button", { name: "submit" });
      expect(submitButton).toBeInTheDocument;
    });
    test("on submit renders a new card ", () => {
        let submitButton = screen.getByRole("button", { name: "submit" });

      userEvent.click(submitButton);
      let cards = screen.getAllByRole("listitem");
      expect(cards).toHaveLength(12);
      expect(cards[cards.length-2].innerHTML).toBe('<h2></h2><h3></h3><img src=\"\"><small> | </small><small id=\"like\"><button>Like</button></small>')
    });
  });
});