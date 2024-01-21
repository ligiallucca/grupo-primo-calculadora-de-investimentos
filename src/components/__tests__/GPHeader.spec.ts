import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPHeader from '../GPHeader.vue'

describe('GPHeader', () => {

    it('renders properly', () => {
        const wrapper = mount(GPHeader)
        expect(wrapper.html).toMatchSnapshot()
    })
})