const $com = {
  title: '<Skills/>',
  s_title1: 'Javascript',
  s_title2: 'Markup',
  s_title3: 'Css',
  s_title4: 'Accessibility'

}

const $ko = {
  desc: `P2P 기반 기술을 바탕으로 블록 체인 솔루션을 개발하여<br />거래소 이용자들이 최대한 편리하게 거래를 할 수 있는 플랫폼과 고객서비스를 제공합니다.`,
  s_desc1: '고객 중심 서비스와 앞선 기술로 비트코인 트레이딩 마켓을 선도합니다.',
  s_desc2: '하드웨어지갑을 통한 백업으로 코인을 안전하게 보관하고 있습니다.',
  s_desc3: '안전한 거래소를 위해 다양한 안전장치로 철저한 보안을 약속드립니다.',
  s_desc4: '최저 거래 수수료로 최상의 거래를 할 수 있도록 하겠습니다.'
}
const $en = {
  desc: `dddddd`,
  s_desc1: 'ddddd',
  s_desc2: 'ddddd',
  s_desc3: 'ddddd',
  s_desc4: 'dddd'
}
export default {
  '$ko': { ...$com, ...$ko },
  '$en': { ...$com, ...$en }
}
