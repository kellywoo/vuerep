export default function () {
  let agent = navigator.userAgent.toLowerCase()
  let name = navigator.appName
  let browser = ''
  let support = true

  // MS 계열 브라우저를 구분하기 위함.
  if (name === 'Microsoft Internet Explorer' || ~agent.indexOf('trident') || ~agent.indexOf('edge/')) {
    browser = 'ie'
    if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
      agent = /msie (\d?\d{1,1})/.exec(agent)
      browser += parseInt(agent[1])
      support = parseInt(agent[1]) >= 9
    } else { // IE 11+
      if (~agent.indexOf('trident')) { // IE 11
        browser += 11
      } else if (~agent.indexOf('edge/')) { // Edge
        browser = 'edge'
      }
    }
  } else if (~agent.indexOf('safari')) { // Chrome or Safari
    if (~agent.indexOf('opr')) { // Opera
      browser = 'opera'
    } else if (~agent.indexOf('chrome')) { // Chrome
      browser = 'chrome'
    } else { // Safari
      browser = 'safari'
    }
  } else if (~agent.indexOf('firefox')) { // Firefox
    browser = 'firefox'
  }

  return {vendor: browser, support: support}
  // IE: ie7~ie11, Edge: edge, Chrome: chrome, Firefox: firefox, Safari: safari, Opera: opera
}
