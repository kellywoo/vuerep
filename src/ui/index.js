import { DropBox, DropMenu, DropItem, DropBtn } from './dropdown';
import EventBus from './eventBus';
import { AutoScrollBody, AutoScrollMenu, AutoScrollSection } from './autoscrollbody'
import { FormSwitch, FormSelect } from './form'
import { Accordion, AccordionItem, AccordionDom, AccordionSub } from './accordion'
import { Dialogue } from './modal'
import MsgBox from './msgBox'
import Button from './button'
import {Slider, SliderItem} from './slider'

export default {
  install (Vue, params = {}){
    document.addEventListener('click', () => {
      EventBus.$emit('dropdown:close')
    })
    Vue.component('v-msg-box', MsgBox);
    Vue.component('v-drop-box', DropBox);
    Vue.component('v-drop-menu', DropMenu);
    Vue.component('v-drop-item', DropItem);
    Vue.component('v-drop-btn', DropBtn);
    Vue.component('v-autoscroll', AutoScrollBody);
    Vue.component('v-autoscroll-menu', AutoScrollMenu);
    Vue.component('v-autoscroll-section', AutoScrollSection);
    Vue.component('v-accordion', Accordion);
    Vue.component('v-accordion-item', AccordionItem);
    Vue.component('v-accordion-dom', AccordionDom);
    Vue.component('v-accordion-sub', AccordionSub);
    Vue.component('v-button', Button);
    Vue.component('v-switcher', FormSwitch);
    Vue.component('v-select', FormSelect);
    Vue.component('v-slider', Slider);
    Vue.component('v-slider-item', SliderItem);
    Vue.component('v-dialogue', Dialogue);
  }
}
