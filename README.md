# Memories-with-Animals(MwA)

키우고 있는 동물관련들의 자료를 올리며 서로 정보를 공유하는 SNS 프로젝트

**실행 방법**

```bash
# Run the Git clone first
npm install

npm run dev
```

## 목차

- [개발 환경](#개발-환경)
- [기술 스택](#기술-스택)
- [문제 해결 방법](#문제-해결-방법)

## 개발 환경

1. Window 11 64bit WSL2(Ubuntu 22.04.03)
2. MacOs
3. Node.js

## 기술 스택

- [Next.js를 선택한 이유](#Next.js를-선택한-이유)
- [Tailwind CSS를 선택한 이유](#Tailwind-CSS를-선택한-이유)
- [Recoil](#Recoil)
- [DB 추가적 사용]

### Next.js를 선택한 이유

**Next.js** vs **React.js**

만들려고 하는 SNS경우 사용자 경험 **(UX)** 와 성능 최적화가 핵심적인 요소이며  
자랑과 정보 공유가 주가 되는 경우 검색엔진 최적화 **(SEO)** 가 필요하다고 판단하였습니다.  
그와 동시에 **Backend** 부분이 가능한 **FullStack Next.js를 선택하였습니다**

|렌더링|정의|
|:---:|:---:|
|SSR(서버사이드 렌더링)|서버에서 모든 렌더링처리 후 최종 HTML을 브라우저로 전송|
|CSR(클라이언트사이드 렌더링)|브라우저에서 Javascript를 사용하여 페이지를 동적으로 렌더링하는 방식|
|SSG(정적 사이트 생성)|build 시간에 미리 화면에 대한 HTML을 미리 생성하여 사용자에게 미리 만들어진 화면 제공|
|ISR(점진적 정적 생성?)|build 타임 렌더링 방식에서 주기적으로 페이지 변화를 주는 방식| 

### Tailwind CSS를 선택한 이유

**CSS Module** vs **SCSS** vs **Styled-components** vs **Tailwind CSS**

아래와 같은 이유로 `Styled-components`와 `Tailwind CSS`를 생각 하였으나 Styled-components는 javascript에서 실행되어 런타임이 길어지는 것과 소규모 프로젝트이므로 **Tailwind CSS**를 선택하였습니다.

|CSS|장점|단점|
|:---:|:---:|:---:|
|CSS Module|로컬 스코프<br>명명 충돌 방지<br>커스텀 스타일링|재사용성 제한<br>모듈 번들러 추가적 설정<br>전역 스타일 적용을 위한 별도 방식 필요|
|SCSS|변수 사용<br>중첩 규칙<br>상속 및 모듈화|오베헤드<br>런타임 성능|
|Styled-components|컴포넌트 기반<br>동적 스타일링<br>SSR 지원|추가적 번들 크기<br>런타임 성능|
|Tailwind CSS|커스트마이징 용이<br>빌드 시 최적화|클래스명 과다<br>스타일 커스마이징 한계|

- 동적인 스타일
- 컴포넌트 기반
- 성능 부분
- 학습 곡선

### Recoil?? Zustand??

### supabase??

## 문제 해결 방법

