import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Popup from './popup'

describe('Popup', () => {
  it('should render hello world message', () => {
    render(<Popup />)
    expect(screen.getByText(/hello twits!/i)).toBeInTheDocument()
  })
})