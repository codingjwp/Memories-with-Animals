# Memories-with-Animals(MwA)

키우고 있는 동물관련들의 자료를 올리며 서로 정보를 공유하는 SNS 프로젝트

**실행 방법**

```bash
# Run the Git clone first
npm install

npm run dev
```

## 목차

- [개발 환경 및 기술 스택](#개발-환경-및-기술-스택)
- [브랜치 전략](#브랜치-전략)
- [프론트엔드 설계](#프론트엔드-설계)

## 개발 환경 및 기술 스택

운영체제 : `Window 11 64bit WSL2(Ubuntu 22.04.03)` or `MacOs`
 
- [Next.js를 선택한 이유](#nextjs를-선택한-이유)
- [Tailwind CSS를 선택한 이유](#tailwind-css를-선택한-이유)
- [Zustand를 사용하는 이유](#zustand를-선택한-이유)
- [Supabase를 선택한 이유](#supabase를-선택한-이유)
- [문제 해결 방법](#문제-해결-방법)

### Next.js를 선택한 이유

**Next.js** vs **React.js**

만들려고 하는 SNS경우 사용자 경험 **(UX)** 와 성능 최적화가 핵심적인 요소이며  
자랑과 정보 공유가 주가 되는 경우 검색엔진 최적화 **(SEO)** 가 필요하다고 판단하였습니다.  
그와 동시에 **Backend** 부분이 가능한 **FullStack Next.js를 선택하였습니다**

|렌더링|정의|
|:---:|:---|
|SSR(서버사이드 렌더링)|서버에서 모든 렌더링처리 후 최종 HTML을 브라우저로 전송|
|CSR(클라이언트사이드 렌더링)|브라우저에서 Javascript를 사용하여 페이지를 동적으로 렌더링하는 방식|
|SSG(정적 사이트 생성)|build 시간에 미리 화면에 대한 HTML을 미리 생성하여 사용자에게 미리 만들어진 화면 제공|
|ISR(점진적 정적 생성?)|build 타임 렌더링 방식에서 주기적으로 페이지 변화를 주는 방식| 


### Tailwind CSS를 선택한 이유

**CSS Module** vs **SCSS** vs **Styled-components** vs **Tailwind CSS**

아래와 같은 이유로 `Styled-components`와 `Tailwind CSS`를 생각 하였으나 Styled-components는 javascript에서 실행되어 런타임이 길어지는 것과 소규모 프로젝트이므로 **Tailwind CSS**를 선택하였습니다.

- 동적인 스타일
- 컴포넌트 기반
- 성능 부분
- 학습 곡선(SCSS 경우)

|CSS|장점|단점|
|:---:|:---|:---|
|CSS Module|로컬 스코프<br>명명 충돌 방지<br>커스텀 스타일링|재사용성 제한<br>모듈 번들러 추가적 설정<br>전역 스타일 적용을 위한 별도 방식 필요|
|SCSS|변수 사용<br>중첩 규칙<br>상속 및 모듈화|오베헤드<br>런타임 성능|
|Styled-components|컴포넌트 기반<br>동적 스타일링<br>SSR 지원|추가적 번들 크기<br>런타임 성능|
|Tailwind CSS|커스트마이징 용이<br>빌드 시 최적화|클래스명 과다<br>스타일 커스마이징 한계|

### Zustand를 선택한 이유

**Recoil** vs **Zustand**

가벼운 전역상태관리 라이브러리로 두 가지의 상태 라이브러리를 골랐으며  
`Recoil`은 아직 버전(0.7.7)로 실험적 단계여서 자체가 간결하고 직관적인 **Zustand를 선택하였습니다** 

|status|버전|장점|
|:---:|:---:|:---|
|Recoil|`0.7.7`|Facebook에서 개발<br>Hooks 패턴과 잘 통합<br>세밀한 상태 관리 가능|
|Zuustand|`4.4.7`|미니멀한 상태관리<br>구독기반이 아닌 훅을 사용|

### Supabase를 선택한 이유

**Firebase** vs **Supabase**

해당 부분에 대해서는 서로 지원하는 부분을 보긴했지만 데이터베이스를 보고 결정하기도 하였습니다.  
**Supabase와 prisma를 선택하였습니다.**

|DB|장점|
|:---:|:---|
|RDBMS(관계형)|고정 스키마<br>SQL<br>수직적 확장<br>ACID 속성 지원<br>복잡한 조인 지원<br>쓰기 읽기 성능 안정적 하지만 큰 데이터에서는 제한적|
|NoSQL(비관계형)|유현한 스키마<br>다양한 쿼리 언어<br>수평적 확장<br>일부 ACID지원 또는 BASE모델<br>조인 제한적 또는 다른 방식으로 데이터 결합<br>빠르고 확장 가능한 읽기/쓰기 성능|

**ACID 속성, BASE 모델(트랜잭션)**  
- 트랜잭션 : 데이터베이스의 상태를 변화시키기위해 수행하는 작업 단위
- ACID 속성 : 데이터베이스 트랜잭션이 안정적으로 수행되어야 함을 나타내는 4가지 주요속성
  - **원자성 (Atomicity)** : 연산이 전부 실행되거나 전부 실행 안되거나 해야합니다.(분할할 수 없는 단위)
  - **일관성 (Consistency)** : 실행되기 전 후 상태가 일관되어야 합니다.
  - **격리성 (Isolation)** : 동시에 여러개 작업이 실행될 때 각각의 작업이 다른 연산에 영향을 받지 않아야 합니다.달라집니다.
  - **지속성 (Durability)** : 완료되면 영구적으로 DB에 반영되어야 합니다.
- BASE 모델 : 분산시스템에 고가용성을 제공하기위해 ACID를 완화한 속성
  - **기본적 가용성 (Basically Available)** : 시스템의 일부가 실패해도 시스템 전체가 다운되지 않고 기본적인 기능을 계속 제공합니다.
  - **소프트 상태 (Soft State)** : 시스템의 상태가 시간에 따라 변경될 수 있으며, 일정 시간이 지나면 동기화되어 일관성이 유지됩니다.
  - **최종 일관성 (Eventually Consistent)** : 모든 트랜잭션이 완료된 후에는, 데이터가 어느 시점에서는 일관된 상태에 도달할 것임을 보장합니다.

|BaaS|장점|
|:---:|:---|
|Firebase|NoSQL 클라우드 데이터베이스<br>인증, 호스팅, 클라우드 함수, 스토리지<br>통합된 애널리틱스	Google Analytics|
|Supabase|관계형 데이터베이스 PostgreSQL을 기반으로 구축<br>인증 및 사용자 관리<br>실시간 구독<br>AWS Lambda 제공하는 서버리스 기능을 통합|

**typeORM** vs **Prisma**

**ORM**  
객체지향 프로그래밍 언어를 사용하여 호환되지 않는 유형의 시스템 간에 데이터를 변환하는 프로그래밍 기법

|ORM|장점|
|:---:|:---|
|typeORM|다양한 SQL 데이터베이스 지원<br>데코레이터를 사용한 직관적인 모델 정의<br>TypeScript와의 깊은 통합|
|prisma|강력하고 타입 안전한 쿼리 빌더<br>자동 생성되는 마이그레이션 파일<br>직관적인 데이터 모델링 도구|

[supabase with prisma](https://supabase.com/partners/integrations/prisma)

### 문제 해결 방법


[설치방법](https://www.youtube.com/watch?v=BgifvZIRPPA)


## 브랜치 전략

- `main(master)`: 안정적으로 완료된 코드만 적용
- `dev(Develop)` : 개발 관련 브랜치 개발 관련 내용이 모이는 브랜치
- `feat(Feature)` : 개발 관련 브랜치 기능 한개 한개 적용하여 완성되면 dev로 이동
  - ex ) `feat/login`, `feat/button` 등
- `bugfix`: 버그 관련 내용이 모이는 브랜치

## 프론트엔드 설계

- [화면 흐름도](#화면-흐름도)
- [화면 UI](#화면-ui)

### 화면 흐름도

<img width="650" alt="frontend flowchat image" src="https://github.com/codingjwp/Memories-with-Animals/assets/113403155/216d29bd-4948-4918-9ee3-4d905af492cf">

### 화면 UI

**색상(Light & Dark)**

## API 및 데이터베이스 설계