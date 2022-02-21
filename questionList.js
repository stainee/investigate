let answerList = [0,0,0,0,0,0]

const questionList = [
    {
      q: 'Q1. 사용하는 통신사는?',
      a: [
        { answer: '1. SKT', value: 1},
        { answer: '2. KT', value: 2},
        { answer: '3. LG U+', value: 3}
      ]
    },
    {
      q: 'Q2. 음원 스트리밍 플랫폼 사용 시 선호 이용법은?',
      a: [
        { answer: '1. 모바일 단독 재생', value: 1},
        { answer: '2. 기기 제한 없이 재생', value: 2},
        { answer: '3. 고음질 음원 재생(Flac 등)', value: 3},
        { answer: '4. N회 재생', value: 4}
      ]
    },
    {
      q: 'Q3. 음원 스트리밍 플랫폼을 이용하고자 할 때 지불 가능한 금액은?',
      a: [
        { answer: '1. 무료', value: 1},
        { answer: '2. 5천원 미만', value: 2},
        { answer: '3. 5천원 이상 1만원 미만', value: 3},
        { answer: '4. 1만원 이상', value: 4}
      ]
    },
    {
      q: 'Q4. 원하는 음원 수량을 선택해주세요.',
      a: [
        { answer: '1. 8000만곡 이상', value: 1},
        { answer: '2. 7000만곡 이상', value: 2},
        { answer: '2. 4000만곡 이상', value: 3},
        { answer: '2. 2000만곡 이상', value: 4},
      ]
    },
    
    {
      q: 'Q5. 앱의 편의성이 서비스를 선택하는데 영향이 있나요?',
      a : [
        { answer: '1. 매우 있다.', value: 1},
        { answer: '2. 조금 있다.', value: 2},
        { answer: '3. 없다', value :3}
      ]
    },

    {
      q: 'Q6. 선호하는 추가 서비스는 어떤 게 있나요?',
      a : [
        { answer: '1. 뮤직비디오 재생', value: 1},
        { answer: '2. 오디오북', value: 2},
        { answer: '3. 에디터/DJ/PD 추천', value: 3},
        { answer: '4. 공연 / 콘서트 소식', value: 4},
        { answer: '5. 곡 추천 기능', value: 5},
        { answer: '6. 차트 기능', value: 6},
        { answer: '7. VOD 제공', value: 7},


      ]
    },
]

