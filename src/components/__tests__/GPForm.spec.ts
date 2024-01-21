import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPFormVue from '../GPForm.vue'

describe('GPForm', () => {
    it('renders properly', () => {
        const wrapper = mount(GPFormVue)
        expect(wrapper.text()).toContain('Quanto')
    })
})