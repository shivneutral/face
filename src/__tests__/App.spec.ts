import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the login form by default', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Log in')
    expect(wrapper.text()).toContain('Email address')
    expect(wrapper.text()).toContain('Password')
  })

  it('switches to the signup form when the tab is clicked', async () => {
    const wrapper = mount(App)
    await wrapper.get('.tab:nth-of-type(2)').trigger('click')
    expect(wrapper.text()).toContain('Create account')
    expect(wrapper.text()).toContain('Full name')
  })
})
