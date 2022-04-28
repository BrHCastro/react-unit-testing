import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

import { List } from "./List";

describe("App component", () => {
  it("should render list items", () => {
    const { getByText, rerender } = render(
      <List initialItems={["Henrique", "João", "Gertrudes"]} />
    );

    expect(getByText("Henrique")).toBeInTheDocument();
    expect(getByText("João")).toBeInTheDocument();
    expect(getByText("Gertrudes")).toBeInTheDocument();

    rerender(<List initialItems={["Fulano"]} />);

    expect(screen.getByText("Fulano")).toBeInTheDocument();
    expect(screen.queryByText("Henrique")).not.toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List initialItems={[]} />
    );

    const input = getByPlaceholderText("Novo item");
    const button = getByText("Add");

    fireEvent.change(input, { target: { value: "Hello World" } });
    fireEvent.click(button);

    // expect(getByText("Hello World")).toBeInTheDocument();

    // expect(await findByText("Hello World")).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText("Hello World")).toBeInTheDocument();
    });
  });

  it("should be able to remove item to the list", async () => {
    const {
      getByText,
      getAllByText,
      getByPlaceholderText,
      findByText,
      queryByText,
    } = render(<List initialItems={["Henrique"]} />);

    const button = getAllByText("Remove");

    fireEvent.click(button[0]);

    // await waitForElementToBeRemoved(() => {
    //   return getByText("Henrique");
    // });

    await waitFor(() => {
      expect(queryByText("Henrique")).not.toBeInTheDocument();
    });
  });
});
