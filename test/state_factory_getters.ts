import Vuex, {Module as Mod} from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import {Action, Module, Mutation, MutationAction, VuexModule} from '../dist'
import {expect} from 'chai'

@Module({ stateFactory: true })
class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra) {
    this.wheels += extra
  }

  get axles() {
    return (this.wheels / 2)
  }

}

const store = new Vuex.Store({
  modules: {
    mm: MyModule
  }
})

describe('fetching via getters works', () => {
  it('should increase axles', function () {

    store.commit('incrWheels', 4)
    const axles = store.getters.axles
    expect(axles).to.equal(3)

  })
})
