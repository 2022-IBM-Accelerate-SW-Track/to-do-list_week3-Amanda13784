import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name:/Add New Item/i})
  const due = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i})
  const dueDate = "05/13/2023"
  fireEvent.change(inputTask, {target: {value: "Go for a walk"}})
  fireEvent.change(due, {target: {value: dueDate}})
  fireEvent.click(element)
  fireEvent.change(inputTask, {target: {value: "Go for a walk"}})
  fireEvent.change(due, {target: {value: dueDate}})
  fireEvent.click(element)
  const check = screen.getAllByText(/Go for a walk/i)
  expect(check.length).toBe(1);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const due = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/13/2023";
  fireEvent.change(due, {target: {value: dueDate}})
  fireEvent.click(element)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const element = screen.getByRole('button', {name: /Add/i});
  fireEvent.change(inputTask, {target: {value: /Go for a walk/i}})
  fireEvent.click(element)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();

 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const element = screen.getByRole('button', {name: /Add/i});
  const due = screen.getByPlaceholderText("mm/dd/yyyy")
  const dueDate = "07/13/2023";
  fireEvent.change(inputTask, {target: {value: "Go for a walk"}})
  fireEvent.change(due, {target: {value: dueDate}});
  fireEvent.click(element)
  const checkInput = screen.getByText(/Go for a walk/i);
  expect(checkInput).toBeInTheDocument();
  const checkTask = screen.getByRole('checkbox')
  fireEvent.click(checkTask)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const inputDueDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "03/22/2022";
  fireEvent.change(inputTask, {target: {value: "Go for a walk"}})
  fireEvent.change(inputDueDate, {target: {value: dueDate}});
  fireEvent.click(element)
  const colorCheck = screen.getByTestId(/Go for a walk/i).style.background;
  expect(colorCheck).toBe("red");
  
 });
