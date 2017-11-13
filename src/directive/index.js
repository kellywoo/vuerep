/**
 * Created by kelly on 2017-11-12.
 */
var alignHeight = {};
export default {
  'align-height': {
    bind: function (el, args) {
      alignHeight[args.arguments] = alignHeight[args.arguments] || [];
      alignHeight[args.arguments].push(el);
    }
  }
}

export var alignItemsArray = alignHeight;