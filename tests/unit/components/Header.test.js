import { mount } from '@vue/test-utils'
import Header from '../../../src/components/header/Header.vue'

describe('Header.vue', () => {
  test('renders default title and subtitle', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: ['NavItem', 'Navbar']
      }
    })
    expect(wrapper.find('h1').text()).toContain('Pandemetrix')
    expect(wrapper.text()).toContain('pandemic predictive model')
  })

  test('renders custom props', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'Custom Title',
        subtitle: 'Custom Subtitle'
      },
      global: {
        stubs: ['NavItem', 'Navbar']
      }
    })
    expect(wrapper.text()).toContain('Custom Title')
    expect(wrapper.text()).toContain('Custom Subtitle')
  })
})