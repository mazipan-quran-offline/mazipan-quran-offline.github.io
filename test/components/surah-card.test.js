/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/Surah.vue'

import { Types } from '~/store/types'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)

const mockActionAddToFavorite = jest.fn()
const mockActionRemoveFromFavorite = jest.fn()
const mockActionShowNotification = jest.fn()

const store = new Vuex.Store({
  state: {
    surahFavorite: []
  },
  mutations: {
    [Types.SET_FAVORITE] (state, data) {
      state.surahFavorite = data
    }
  },
  actions: {
    addToFavorite: mockActionAddToFavorite,
    removeFromFavorite: mockActionRemoveFromFavorite,
    showNotification: mockActionShowNotification
  }
})

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,

    localVue
  })
}

describe('component SurahCard.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })

  test('getSurahDetailUrl should return correct url', (done) => {
    const wrapper = createWrapper()
    const res = wrapper.vm.getSurahDetailUrl(2)
    expect(res).toBe('/2/')
    done()
  })

  test('goToSurahDetail should change route', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.goToSurahDetail(2)
    expect(wrapper.vm.$route.path).toBe('/2/')
    done()
  })

  test('doAddToFavorite should trigger action in vuex', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.doAddToFavorite({ latin: 'Al-Fatihah' })
    expect(mockActionAddToFavorite).toHaveBeenCalled()
    expect(mockActionShowNotification).toHaveBeenCalled()
    done()
  })

  test('doRemoveFromfavorite should trigger action in vuex', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.doRemoveFromfavorite({ latin: 'Al-Fatihah' })
    expect(mockActionRemoveFromFavorite).toHaveBeenCalled()
    expect(mockActionShowNotification).toHaveBeenCalled()
    done()
  })

  test('findInFavorite should return false', (done) => {
    const wrapper = createWrapper()
    const res = wrapper.vm.findInFavorite()
    expect(res).toBe(false)
    done()
  })

  test('findInFavorite should return false because null state', (done) => {
    const storeLocal = new Vuex.Store({
      state: {
        surahFavorite: []
      },
      mutations: {},
      actions: {}
    })
    const wrapper = shallowMount(Component, {
      sync: false,
      store: storeLocal,
      router,

      localVue
    })
    const res = wrapper.vm.findInFavorite()
    expect(res).toBe(false)
    done()
  })

  test('findInFavorite should not return undefined', (done) => {
    const storeLocal = new Vuex.Store({
      state: {
        surahFavorite: [{
          index: 1
        }, {
          index: 2
        }]
      },
      mutations: {},
      actions: {}
    })
    const wrapper = shallowMount(Component, {
      sync: false,
      store: storeLocal,
      router,

      localVue
    })
    const res = wrapper.vm.findInFavorite({
      index: 2
    })
    expect(res).not.toBeUndefined()
    done()
  })
})
