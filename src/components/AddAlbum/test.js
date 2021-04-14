import { screen } from "@testing-library/react";
import AddAlbum from ".";


const stubSubmit = jest.fn()

describe("AddAlbum", () => {
  beforeEach(() => {
    render(<AddAlbum upDateAlbumList={stubSubmit} />);
  });

  test("renders a card with header and form ", () => {
    let formCont = screen.getByRole("listitem");
    expect(formCont.innerHTML).toContain('<h2>Add your own!</h2><form>')
  });

  test("updates state of text input with user input", () => {
    let textInput = screen.getAllByRole("textbox")[0];
    userEvent.type(textInput, "Testing")
    expect(textInput.value).toBe("Testing")
  });

  test("updates state of number input with user input", () => {
    let numInput = screen.getAllByRole("spinbutton")[0];
    userEvent.type(numInput, '1234')
    expect(numInput.value).toBe('1234')
  });

  test("calls the submit function", () => {
    let submitButton = screen.getByRole("button");
    userEvent.click(submitButton)
    expect(stubSubmit.mock.calls.length).toBe(1);
    })
});
