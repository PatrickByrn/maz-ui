import { shallowMount } from '@vue/test-utils'
import MazTransitionExpand from '@components/MazTransitionExpand.vue'

describe('components/MazTransitionExpand.vue', () => {
  expect(MazTransitionExpand).toBeTruthy()

  const wrapper = shallowMount(MazTransitionExpand)

  test('Should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
