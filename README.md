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
- [설치](#설치)
- [브랜치 전략](#브랜치-전략)
- [프론트엔드 설계](#프론트엔드-설계)
- [프론트엔드 컴포넌트](#프론트엔드-컴포넌트)
- [데이터베이스와 Prisma](#데이터베이스와-prisma)
- [데이터베이스 설계](#데이터베이스-설계)

## 개발 환경 및 기술 스택

운영체제 : `Window 11 64bit WSL2(Ubuntu 22.04.03)` or `MacOs`
 
- [Next.js를 선택한 이유](#nextjs를-선택한-이유)
- [Tailwind CSS를 선택한 이유](#tailwind-css를-선택한-이유)
- [Zustand를 사용하는 이유](#zustand를-선택한-이유)
- [Supabase를 선택한 이유](#supabase를-선택한-이유)

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

|Supabase Free|
|:---|
|프로젝트 2개로 제한|
|무제한 API 요청|
|소셜 OAuth 제공업체|
|최대 500MB 데이터베이스 공간|
|최대 1GB 파일 저장 공간|
|최대 5GB 대역폭|
|최대 50MB 파일 업로드|
|월간 활성 사용자 최대 50,000명|
|최대 500K Edge 함수 호출|
|최대 200개의 동시 실시간 연결|
|최대 200만 개의 실시간 메시지|
|1일 로그 보관|
|커뮤니티 지원|


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

> [supabase with prisma](https://supabase.com/partners/integrations/prisma)

## 설치

- [Nextjs + Supabase + Prisma](#nextjs--supabase--prisma)
- [문제 해결 방법](#문제-해결-방법)

### Nextjs + Supabase + Prisma

**Next.js + typescript + Supabase설정**

`.env` 설정 `https://supabase.com/dashboard/project/[project_url]/settings/api` 접속

- API 메뉴 -> API Settings -> Project URL -> URL 링크(SUPABASE_URL)  
- API 메뉴 -> API Settings -> Project API keys -> anon public(SUPABASE_ANON_KEY)  

> [nextjs quickstarts](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

```bash
# 기본적인 설치
npx create-next-app@latest . --ts -e with-supabase
# .env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
```

**Prisma 설정**

`.env` 설정 `https://supabase.com/dashboard/project/[project_url]/settings/database` 접속

- Database 메뉴 -> Connection string -> Nodejs 탭 -> 링크 copy(DIRECT_URL)
- Database 메뉴 -> Connection Pooling -> Connection string -> 링크 copy(DATABASE_URL)

### Connection pooling(연결 폴링)

데이터베이스의 연결을 매번 새롭게 만들기 보다는 이미 생성된 연결을 **재사용**하는 것이 효율적이며  
연결 풀링은 데이터베이스 연결을 미리 만들어 놓고 필요할때 마다 제공하며 사용이 끝난 연결은  
다시 풀에 반환되어 재사용됩니다.

> [supabase + prisma](https://supabase.com/partners/integrations/prisma)

```bash
# prisma 설치
yarn add -D prisma
# .env
DIRECT_URL="postgresql://postgres:[data-password]@db.[your-project-ref].supabase.co:5432/postgres"
DATABASE_URL="postgres://postgres.[your-project-ref]:[data-password]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

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

1차적으로 이미지 생성 이후 추가 될 수 있습니다.

<img width="650" alt="frontend flowchat image" src="https://github.com/codingjwp/Memories-with-Animals/assets/113403155/216d29bd-4948-4918-9ee3-4d905af492cf">

### 화면 UI

해당 이미지 이후 수정 될 수 있습니다.

**테마 색상(Light & Dark)**

|테마 색상(Light & Dark)|모바일 UI(Light & Dark)|
|:---:|:---:|
|<img width="300" alt="ThemaColor" src="https://github.com/codingjwp/Memories-with-Animals/assets/113403155/e5eaa0bd-091b-4ffa-96e1-bad19ef2d480">|<img width="600" alt="mobile_ui" src="https://github.com/codingjwp/Memories-with-Animals/assets/113403155/b83b22fa-b2a1-42ea-a593-6542c0cb78fd">|

## 프론트엔드 컴포넌트

### TailwindCss 사용시 몰라던 부분

**@layer base를 쓰는 이유**

프로젝트 기본 스타일을 설정하는데 사용합니다. 저는 기본적인 시스템으로 작동하는 `light`, `dark` 모드때 색상을 변경하기 위해 `:root`에 색상을 지정하였습니다.

```css
@layer base {
  :root {
   --web-page-bgcolor: #F5F5DC;
   --base-dark-color: #654321;
   --base-light-color: #D2893F;
   --special-dark-color: #6DC35C;
   --special-light-color: #69DF81;
 }
 @media (prefers-color-scheme: dark) {
   :root {
     --web-page-bgcolor: #2F4F4F;
     --base-dark-color: #20B2AA;
     --base-light-color: #57FAC3;
     --special-dark-color: #5793FA;
     --special-light-color: #5760FA;
    }
  }
}
```

**tailwind.config.js에서 theme -> extend -> colors와 theme -> colors의 차이점**

`extend`가 없이 사용되는 방법은 `tailwindCSS`의 기본 색상 팔레트를 완전히 덮어쓰고  
`extend`를 사용한 방법은 새로운 색상을 추가하거나 기본 색상 팔레트도 덮어씌울 수 있습니다.

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pageBgcolor: 'var(--web-page-bgcolor)',
        baseDarkColor: 'var(--base-dark-color)',
        baseLightColor: 'var(--base-light-color)',
        specialDarkColor: 'var(--special-dark-color)',
        specialLightColor: 'var(--special-light-color)',
      }
    }
  },
  plugins: [],
}
```

## 데이터베이스와 Prisma

- [prisma 설치](#prisma-설치)
- [Prisma 테이블 관련 내용](#prisma-테이블-관련-내용)
- [관련 예시 코드](#관련-예시-코드)

### prisma 설치

- **Prisma CLI** : 데이터베이스 마이그레이션, 데이터 모델링, 스키마 관리 등 작업을 위해 사용합니다.
- **Prisma Client** : 데이터베이스 접근 및 쿼리를 실행하기 위한 라이브러리 입니다.

```bash
# Prisma CLI 설치
yarn add -D prisma
# Prisma Client 라이브러리 설치
yarn add @prisma/client
```
**Prisma 초기화**

`.env` 파일과 prisma 디렉토리와 `schema.prisma` 파일이 생성 됩니다.

```bash
npx prisma init
```

**Data sources(데이터 소스)**

Prisma가 데이터베이스를 연결하는 방법을 결정하는 `datasource` 블록으로 표시합니다.  
Prisma 스키마에는 하나의 **Data sources**만 있을 수 있습니다.  
하지만 [PrismaClient](https://www.prisma.io/docs/orm/reference/prisma-client-reference#programmatically-override-a-datasource-url)를 생성할 때 **Data sources URL**을 재정의 할 수 있습니다.

```bash
datasource db {
  # sql 종류
  provider = "postgresql"
  # .env 파일에 적용된 데이터베이스 URL 변수를 적용
  url      = env("DATABASE_URL")
  # 연결 폴링 용 URL .env
  directUrl = env("DIRECT_URL")
}

# prisma example
# datasource db {
#   provider = "postgresql"
#   url      = "postgresql://johndoe:mypassword@localhost:5432/mydb?schema=public"
# }
```

**Generators**

`generators` 블록은 하나이상을 가질 수 있습니다.  
`generators`는 prisma 생성 명령을 실행할 때 생성되는 자산을 결정합니다.  
현재는 `prisma-client-js`만 사용할 수 있습니다.
- `previewFeatures` : 스키마 미리보기
- `binaryTargets` : `prisma-client-js`에 대한 엔진 바이너리 타겟(예: `Ubuntu 18+`에 배포하는 경우 `debian-openssl-1.1.x`, 로컬에서 작업하는 경우 `native`).

기본적으로 **binaryTargets**의 기본은 `native` 입니다.

```bash
# schema.prisma file
generator client {
  # 현재는 prisma-client-js만 사용할 수 있습니다.
  provider = "prisma-client-js"
}

# prisma example
# generator client {
#   provider        = "prisma-client-js"
#   previewFeatures = ["sample-preview-feature"]
#   binaryTargets   = ["linux-musl"]
# }
```

### Prisma 테이블 관련 내용

데이터 모델 정의

- 모델 간의 관계를 포함하여 여러 필드를 정의하는 모델
- 열거형(커넥터가 열거형을 지원하는 경우)
- 필드 및 모델의 동작을 변경하는 속성 및 함수

> PostgerSQL 관계형 데이터베이스에서는 model은 table에 매핑 됩니다.  
> MongoDB인 NoSql은 컬렉션에 매핑 됩니다.

**스키마 모델 예시 필드**

|Name|Type|Scalar vs Relation|Type modifier|Attributes|
|:---:|:---:|:---:|:---:|:---|
|id|Int|Scalar|-|@id and @default(autoincrement())|
|email|String|Scalar|-|@unique|
|name|String|Scalar|?|-|
|role|Role|Scalar(enum)|-|@default(USER)|
|posts|Post|Relation(Prisma-level field)|[]|-|
|profile|Profile|Relation(Prisma-level field)|?|-|


**모델 및 타입**  
PostgreSQL 기준으로 매핑되는 필드 비교

|Prisma 필드|PostgreSQL 필드|
|:---|:---|
|`String`|`text`|
|`Boolean`|`boolean`|
|`Int`|`integer`|
|`Big Int`|`bigint`|
|`Float`|`double prcision`|
|`Decimal`|`decimal(65, 30)`|
|`Date Time`|`timestamp(3)`|
|`Json`|`jsonb`|
|`Byte`|`bytea`|
|`Unsupported`|prisma에서 지원하지 않는 유형 필드|
|`[]`|필드를 목록으로 만듭니다. `?`선택 사항일 수 없습니다.<br>ex) `Post[]` : Post 모델과 1 : n 관계|
|`?`|필드를 선택 사항으로 만듭니다<br>`Profile?` : Profile 모델과 1: 1 관계|

> Prisma 필드를 데이터베이스에 맞는 native 필드로 `@da.Text` 같이 변경이 가능합니다.  
> [native 필드](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types)

**속성(데코레이터)**  
필드에 제약(규칙)을 적용합니다.

- 필드 속성 앞에 `@` 접두사 사용합니다. 
- 블록 속성 앞에 `@@` 접두사 사용합니다.

|속성|내용|
|:---|:---|
|`@id`|기본키 primary key|
|`@default`|기본적으로 들어가는 값을 표시 합니다 `autoincrement()`경우 자동적 숫자 증가|
|`@unique`|필드에서 유일한 값을 표시합니다.|
|`@relation`|모델간의 관계를 나타냅니다.<br> - `user User @relation(fields: [userId], references: [id])`<br>&ensp;- `userId`필드가 **User**라는 모델에 있는 `id` 필드를 참조합니다.<br>userId는 외래키(foreign key) 입니다|
|`@updateAt`|데이터베이스 업데이트 시 자동 날짜 갱신|

**@@ 접두사를 사용한 예시**

```typescript
model User {  
  firstName String  
  lastName  String  
  email     String  @unique  
  isAdmin   Boolean @default(false)  
  
  @@id([firstName, lastName])  
}  
```

### 관련 예시 코드

**테이블 생성 예시 코드 입니다.**

```typescript

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  posts   Post[]
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}

model Post {
  id         Int        @id @default(autoincrement())
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  title      String
  published  Boolean    @default(false)
  author     User       @relation(fields: [authorId], references: [id])
  authorId   Int
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

enum Role {
  USER
  ADMIN
}
```

**데이터 생성 예시 코드 입니다.**

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

// 비동기 async/await 사용이 필요합니다.
async function main() {
  // 생성 user, posts, and categories
  const user = await prisma.user.create({
    data: {
      email: 'ariadne@prisma.io',
      name: 'Ariadne',
      posts: {
        create: [
          {
            title: 'My first day at Prisma',
            categories: {
              create: {
                name: 'Office',
              },
            },
          },
          {
            title: 'How to connect to a SQLite database',
            categories: {
              create: [{ name: 'Databases' }, { name: 'Tutorials' }],
            },
          },
        ],
      },
    },
  })

  // 리턴 user, and posts, and categories
  const returnUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
    },
  })
}
```

## 데이터베이스 설계

데이터베이스 및 API 엔드포인트는 추가 및 수정 될 수 있습니다.

User : 사용자 정보

- **id** String @id @default(uuid()) #user id
- **email** String @unique  #user 이메일
- **username** String @unique #user 유니크한 이름
- **createdAt** DateTime @default(now()) #생성 날짜
- **userAuth** Auth @relation(fields: [], references: [id]) #인증정보 관련 테이블

Auth : 인증 정보

- **id** String @id #인증 id
- **password** String #패스워드
- **accessToken** String @unique #access token 
- **refreshToken** String @unique #refresh token
- **tokenExpiry** DateTime #token 만료시간
- **failedLoginAttempt** Int @defulat(0) #로그인 실패 정보
- **lastLogin** DateTime @default(now()) #마지막 로그인 시간
- **userInfo** User @relation(fields: [id], references: []) #사용자 정보 테이블

데이터 베이스 테이블 이름
- LOGINS_INFO : 로그인 정보
  - UUID : 사용자 UUID 정보 (유니크)
  - ACCESS_TOKEN : 에세스 토큰
  - REFRESH_TOKEN : 리플레시 토큰
  - ACCESS_TIME : 에세스 시간
  - REFRESH_TIME : 리플레시 시간
- USERS_INFO : 사용자 정보
  - UUID : 사용자 UUID 정보(유니크)
  - EMAIL : 사용자 이메일 정보
  - PASSWORD : 사용자 패스워드(암호화)
  - COUNTRY : 국가
  - NICKNAME : 닉네임
  - USERNAME : 핸들(유니크)
  - CREATE_TIME : 생성일자
  - AVATA: 이미지 파일주소
  - 글내용
- FLLOWS_INFO :  팔로우들 정보
  - UUID : 사용자 UUID 정보(유니크)
  - FLLOWS_UUID : 팔로우들 UUID 정보
- POSTS_INFO: 게시글들 정보
- COMMENTS_INFO: 게시글의 댓글들 정보