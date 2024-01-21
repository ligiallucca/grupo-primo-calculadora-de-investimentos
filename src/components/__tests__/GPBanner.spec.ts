import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPBanner from '../GPBanner.vue'

describe('GPBanner', () => {
    it('renders properly', () => {
        const wrapper = mount(GPBanner)
        expect(wrapper.html).toMatchSnapshot()
        expect(wrapper.text()).toContain('investimento')
    })
})