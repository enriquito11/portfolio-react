import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Projects from './Projects'

// Simple smoke test for closing overlay with Escape
it('closes overlay with Escape key press', async () => {
  render(<Projects />)
  const screenshot = screen.getAllByAltText(/Captura de pantalla/)[0]
  await userEvent.click(screenshot)

  // verify overlay visible and scrolling disabled
  expect(screen.getByAltText('Vista ampliada del proyecto')).toBeInTheDocument()
  expect(document.body.style.overflow).toBe('hidden')

  await userEvent.keyboard('{Escape}')

  expect(screen.queryByAltText('Vista ampliada del proyecto')).not.toBeInTheDocument()
  expect(document.body.style.overflow).toBe('auto')
})
