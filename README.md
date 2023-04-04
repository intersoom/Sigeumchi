## ✏️ 인트로
> 해당 프로젝트는 나랑 기획자 단 둘이서 교내 동아리에서 진행하는 `천하제일창작대회`라는 대회에 참여하기 위해서 제작한 서비스이다.

이는 1월 22일부터 시작해서 2월 20일에 마감된 프로젝트로, 기획 시작부터 개발 완료까지 1달이 되지 않는 시간 동안 진행된 프로젝트이다!

나는 백엔드를 다룰 수 있는 것도 아닐 뿐더러 프론트엔드도 혼자서 개발을 하다보니까 완성도가 높은 결과물을 내지는 못해서 조금은 아쉽게 남은 프로젝트이다. 결과물도 미완성이기도 하다. 그래서 시간이 날 때마다 조금씩 수정을 해보려고 한다.

함께 프로젝트를 진행한 나만의 소듕한 영원한 기획자 조은이에게 감사를.. 🤍

해당 프로젝트가 어떻게 진행되었고 어떻게 개발을 하였고 내가 어떤 점을 프로젝트를 진행하면서 배웠는지, 그리고 어떤게 아쉬웠는지에 대해서 작성해보겠다.

## 🥬 시금치란?

해당 대회의 주제는 `시간`이었다. 어쩌면 굉장히 흔한 주제였다. 그래서 어떻게 하면 특이한 방식으로 접근을 할 수 있을까 우리는 열심히 고민해보았지만 도저히 기발한 생각이 나지 않았다. 그래서 처음에는 시간에 대한 내용을 공유할 수 있는 커뮤니티를 조은이가 생각해냈고 거기에 조금 더 살을 붙여서 그러면 챌린지를 모집할 수 있는 서비스를 제작해보자는 이야기를 시작으로 해당 프로젝트를 기획하게 되었다.

![](https://images.velog.io/images/intersoom/post/97eedfb4-22e9-47c3-87e3-2cd743a673b5/%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2_%E1%84%8B%E1%85%B5%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%AB_%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A7%E1%86%BC.png)

위의 이미지에서의 설명처럼 챌린지를 만들 수도, 참여할 수도, 인증할 수도 있는 서비스이다. 해당 서비스를 이용해서 본인의 시간을 다른 사람들과 함께 조금 더 유의미하게 사용할 수 있도록 도와주는 서비스이다.

> 한마디로 **갓생** 살기를 도와주는 서비스이다.

시간의 한계가 존재하기 때문에 굉장히 디테일하게 서비스를 기획하지는 못하고 큼지막한 기능들만을 기획하고 구현하였다.

## 🛠 제작기 (아쉬운 점, 잘한 점, 배운 점 등)

해당 프로젝트의 협업 툴로는 `Figma`를 사용하였고
개발 라이브러리는 `React`를 사용하였다.

최근에 리액트를 사용한 프로젝트를 많이 진행중이다. 그래서 리액트의 공부를 열심히 하고 있는데.. 정말 하면 할 수록 어려운 친구다.. 🤒

### 👿 아쉬운점

![](https://images.velog.io/images/intersoom/post/db4f1c24-0c7a-4abf-ac66-8e5c272af9d8/image.png)

이 짤을 아는 사람이 있을까나..?

> 내가 이 프로젝트를 하면서 가장 크게 느낀점은 `상태 관리 라이브러리`를 공부해야겠다!였다...

이게 한 군데에서 관리가 안되고 이리 넘어가고 저리 넘어가고 하다보니까 변수명도 확실하게 정리가 안되고 코드가 더러워지고 난해해지는 느낌을 받았다 😢

그래서 이번 기회에 `Redux`를 확실하게 공부해서 프로젝트에도 적용시켜보아야겠다.

또 다른 아쉬운 점은.. 내가 `React`의 기초에 대한 지식이 아직은 많이 부족하구나를 느꼈다..! 

Hooks 관련된 지식도 아직은 많이 부족하다는 생각이 들었다. 이제 `useState`와 `useEffect`의 기초적인 사용법만 익힌 느낌..? 이에 대한 더 깊은 이해와 이용할 때 발생할 수 있는 문제점들에 대해서도 더 많은 공부가 필요할 것 같다.

그리고 이 외의 다른 Hook들은 아직도 잘 모른다..ㅋㅋ쿠ㅜㅜㅜ

해당 페이지가 나에게는 큰 도움이 됐다! 그래서 Hooks 관련해서 모르는 부분이 있으면 자주 들어가서 보고는 한다!

나와 비슷한 어려움이 있는 사람들도 보면서 도움을 얻기를 바라며 [사이트 링크를 첨부한다.](https://velog.io/@velopert/react-hooks)

그리고 이번에 v6로 업데이트 되면서 `react-router` 관련된 내용들이 많이 변경이 되었는데.. 이로 인해서 또 어려움을 겪기도 했다!

업데이트가 상대적으로 최신 내용이기에 반영이 안된 포스팅들이 많았어서 해당 방식으로 코드를 작성하면 오류가 났기 때문이다.. 이가 처음에는 파악이 안돼서 헤맸지만 다른 분의 도움을 받아서 이를 해결할 수 있었다. 업데이트 관련된 오류인 것을 알고서는 열심히 `v6`를 포함시켜서 구글링하였다 ㅎㅎ..

### 😇 잘한점 및 배운점

이번 프로젝트에서 이전 프로젝트들을 진행하면서 UI와 Page를 나눠서 정리하는 것의 중요성을 느껴서 다음과 같이 폴더를 분류하여서 사용하였다.
![](https://images.velog.io/images/intersoom/post/599b40e4-8c9b-448f-a10d-5ef37c232315/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.42.10.png)

이렇게 분리해서 사용하니까 훨씬 용이하였다. UI도 재사용성을 높일 수 있어서 좋았다. 다만, `props`와 `state`를 혼돈해서 사용하다보니 변수명을 짓는 것도 혼란스럽고 정보를 계속해서 넘기고 처리하는 것도 힘들었다.

## 📍 마무리

아직까지 혼자서 하나의 서비스를 완성하기에 실력이 부족하다는 생각이 듦과 동시에 도전해볼만 하다는 생각이 들었다. 굉장히 모순적인 말이지만 공부 자극과 자신감을 동시에 느꼈다고 하면 말이 될 것 같다.

![](https://images.velog.io/images/intersoom/post/0c7d504d-9b6b-4897-9c9b-0afacf78131e/image.png)

결론적으로 대회에서 👑 **1등** 👑이라는 성과를 나아서 나는 매우 기뻤다!
이 대회에 출전할 때마다 특별상 (개발상)만 수상했었는데 처음으로 순위권에 들었다..! 다음 번에는 더 열심히 만들어서 스스로 만족할 수 있는 결과물을 낳을 수 있으면 좋을 것 같다.

조은아 수고했당 😍
