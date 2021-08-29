import { render, screen } from '@testing-library/react';
import { Window } from '../components/Window';
import emitter from "../ev";

test('renders learn react link', () => {
  render(<Window />);

  emitter.emit("show_window", {
    "title":"Test",
    "component": {
        "name": "Text",
        "content": "Kontakt Text ..."
    }
  });
  
  /**
   * @todo richtigen Test mit jest schreiben
   */
  const modalTitle = screen.getByText(/Test/i);
  expect(modalTitle).toBeInTheDocument();
});

