# 환율 계산
![Vue](https://img.shields.io/badge/Vue-3.0-brightgreen.svg)
![Vue_CLI](https://img.shields.io/badge/Vue_CLI-yellow.svg)
![Build](https://img.shields.io/badge/npm-green.svg)
<br/>
<br/>
## [데모 페이지](https://cli.vuejs.org/config/) 확인
<br />

## 빌드 환경 구성
### nodejs, npm 설치 확인

```bash
node -v
npm -v
```

### Git Clone
```bash
git clone http://123123123
```

### 프로젝트에 포함된 패키지 설치
```bash
cd exchange-rate
npm install
```
<br />

<!--
### VueX 설치
```bash
$ npm install vuex@next
```

### Vue Router 설치
```bash
$ npm install vue-router@next
```

### Axios 설치
```bash
$ npm install axios
``` -->

## 실행 방법
``` Bash
npm run serve
```
<br />

## 요구사항
- 송금국가는 미국으로 고정입니다. 통화는 미국달러(USD)입니다.
- 수취국가는 한국, 일본, 필리핀 세 군데 중 하나를 select box로 선택합니다. 각각 통화는 KRW, JPY, PHP 입니다.
- 수취국가를 선택하면 아래 환율이 바뀌어나타나야 합니다. 환율은 1 USD 기준으로 각각 KRW, JPY, PHP의 대응 금액입니다.
- 송금액을 USD로 입력하고 Submit을 누르면 아래 다음과 같이 수취금액이 KRW, JPY, PHP 중 하나로 계산되어서 나와야 합니다.
- 환율과 수취금액은 소숫점 2째자리까지, 3자리 이상 되면 콤마를 가운데 찍어 보여줍니다. 예를 들어 1234라면 1,234.00으로 나타냅니다.
- 환율정보는 https://currencylayer.com/ 의 무료 서비스를 이용해서 실시간으로 가져와야 합니다. 
- 환율을 미리 계산해서 저장하고 수취국가를 변경할 때마다 이를 가져와서 보여줘도 좋고,
혹은 매번 수취국가를 선택/변경할 때마다 API로 서버에 요청을 해서 환율정보를 가져오게 해도 좋습니다.
- Submit을 누르면 선택된 수취국가와 그 환율, 그리고 송금액을 가지고 수취금액을 계산해서 하단에 보여주면 됩니다.
- 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 보여줍니다. 메시지는 팝업, 혹은 하단에 빨간 글씨로 나타나면 됩니다.