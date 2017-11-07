const $com = {
  title: '<Contact Info/>',
  email: 'help@newlinkcorp.co.kr'
}
const $ko = {
  name: '(주)뉴링크',
  address: '서울시 강남구 선릉로 636 키스톤빌딩 402',
  phone: '02.3442.7982',
  info: '※ 고객응대는 유선 및 이메일로만 진행합니다.'
}
const $en = {
  name: 'NEW LINK CORP',
  address: '서울시 강남구 선릉로 636 키스톤빌딩 402',
  phone: '02.3442.7982',
  info: '※ 고객응대는 유선 및 이메일로만 진행합니다.'
}

export default {
  '$ko': {...$com, $ko},
  '$en': {...$com, $en}
}
