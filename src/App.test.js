import { render, screen } from '@testing-library/react';
import BookingForm from './booking/BookingForm';
import Main, { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}}/>)
  const headingElement = screen.getByText("Reservations")
  expect(headingElement).toBeInTheDocument()
})

test('Initializes the times', () => {
  expect(initializeTimes()).toStrictEqual(["5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm"])
})

test('Update the times', () => {
  expect(updateTimes([], null)).toStrictEqual([])
})
