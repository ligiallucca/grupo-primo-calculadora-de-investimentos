import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GPInputVue from '../GPInput.vue'

describe('GPInput', () => {
    it('renders properly', () => {
        const wrapper = mount(GPInputVue, {
            modelValue: {
                type: String,
                default: "",
            },
        })
        expect(wrapper.html).toMatchSnapshot();
    })
})