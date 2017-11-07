import {$} from '@/util/util'

const removeEvent = {
  data () {
    return {
      evListeners: {}
    }
  },
  methods: {
    removeDomEvent () {
      for (removeEv in this.evListeners) {
        removeEv();
      }
      this.evListeners = {}
    }
  },
  beforeDestory () {
    if ($.util.isFilledObject(this.evListeners)) {
      this.removeOnEvent()
    }
    if ($.util.isFunction(this.removeDomEvent)) {
      this.removeDomEvent()
    }
  }
}

export default removeEvent
