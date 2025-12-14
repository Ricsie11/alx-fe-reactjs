import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoListTest from "../components/Testing"; // use the testing component

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoListTest />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoListTest />);
    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoListTest />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoListTest />);
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});