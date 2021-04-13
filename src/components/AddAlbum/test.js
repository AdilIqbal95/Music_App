import { screen } from "@testing-library/react";
import AddAlbum from ".";


const stubSubmit = jest.fn()

describe("AddAlbum", () => {
  beforeEach(() => {
    render(<AddAlbum upDateAlbumList={stubSubmit} />);
  });

  test("renders a card with header and form ", () => {
    let formCont = screen.getByRole("listitem");
    expect(formCont.innerHTML).toBe(
      '<h2>Add your own!</h2><form><label for="album">Album:</label><input type="text" name="album" id="album" value=""><label for="artist">Artist:</label><input type="text" name="artist" id="artist" value=""><label for="image">Cover image url:</label><input type="text" name="image" id="image" value=""><label for="producer">Producer:</label><input type="text" name="producer" id="producer" value=""><label for="year">Year:</label><input type="number" name="year" id="year" value=""><input type="submit" name="submit" id="submit" value="submit"></form>'
    );
  });

  test("calls the submit function", () => {
    let submitButton = screen.getByRole("button");
    userEvent.click(submitButton)
    expect(stubSubmit.mock.calls.length).toBe(1);
    })
});
