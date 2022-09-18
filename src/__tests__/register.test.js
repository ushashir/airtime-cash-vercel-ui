import { render, screen } from "@testing-library/react";
import Signup from "../pages/signup"

test("renders learn react link", () => {
  render(<Signup />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
