import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, boolean, number } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const DefaultButton = () => {
  return (
    <Button onClick={action('onClick')}>{text('Children', 'Click me')}</Button>
  )
}

export const WithColor = () => {
  return (
    <Button onClick={action('onClick')} color={color('Color', 'hotpink')}>
      {text('Children', 'Click me')}
    </Button>
  )
}
