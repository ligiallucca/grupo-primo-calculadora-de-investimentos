import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPForm from '../GPForm.vue'

describe('GPForm', () => {
    it('renders properly', () => {
        const wrapper = mount(GPForm)
        expect(wrapper.text()).toContain('Quanto')
    })
})