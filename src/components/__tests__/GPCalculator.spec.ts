import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPCalculator from '@/pages/GPCalculator.vue'


describe('GPHeader', () => {

    it('renders properly', () => {
        const wrapper = mount(GPCalculator)
        expect(wrapper.html).toMatchSnapshot()
    })
})