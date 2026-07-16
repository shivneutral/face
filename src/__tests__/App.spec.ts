import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the signup form', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Create account')
    expect(wrapper.text()).toContain('Full name')
    expect(wrapper.text()).toContain('Password')
  })
})
