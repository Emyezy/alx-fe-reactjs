import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo/i)).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/todo/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass("completed");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/delete/i)[0];
  fireEvent.click(deleteButton);
  // After deleting, the element should no longer exist
  expect(screen.queryByText(/todo/i)).not.toBeInTheDocument();
});
