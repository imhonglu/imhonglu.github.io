---
title: '소개'
description: '8년 차 소프트웨어 개발자 정범구입니다. TypeScript와 테스트 주도 개발에 관심이 많습니다.'
createdAt: 2025-02-04
publishedAt: 2025-02-04
updatedAt: 2025-02-14
---

안녕하세요, 개발자 정범구입니다. 8년 동안 소프트웨어를 개발해왔습니다.

군 복무 중 체계운용담당관으로 근무하며 PHP 기반의 부대 홈페이지와 이발소 예약 시스템을 개발했습니다.  
스마트폰으로 독학하며 개발을 시작했고, 문제 해결의 즐거움을 느끼면서 프로그래밍의 매력에 빠졌습니다.

전역 후 국비지원 자바 교육을 수료하고 스타트업에서 실무 경험을 쌓으며 개발자 커리어를 시작했습니다.  
현재는 TypeScript를 주력으로 사용하며, **타입 추론과 테스트 자동화를 활용해 개발자 경험을 개선하는 데 집중하고 있습니다.**

## 프로젝트

### [@imhonglu/new-wheels](https://github.com/imhonglu/new-wheels/blob/main/README_KR.md)

_"내 취향의 타입 안전한 라이브러리를 만들어보자"_ 라는 생각으로 시작한 프로젝트입니다.  
불필요한 의존성을 줄이고, 높은 테스트 커버리지를 유지하는 것을 목표로 하며, **TypeScript의 타입 시스템을 적극 활용하여, 안전하고 직관적인 라이브러리를 설계하는 데 집중하고 있습니다.**

현재 개발 중인 라이브러리는 다음과 같습니다.

- [@imhonglu/json-schema](https://github.com/imhonglu/new-wheels/tree/main/libs/json-schema)  
  JSON Schema 2020-12 Draft 사양을 준수하며, JSON-Schema-test-suite로 검증된 구현체입니다.  
  **스키마 기반 정적 타입 추론을 지원하여, 선언형 방식으로 안전한 데이터 구조를 정의할 수 있습니다.**
- [@imhonglu/format](https://github.com/imhonglu/new-wheels/tree/main/libs/format)  
  RFC 표준을 준수하는 강타입 문자열 포맷팅 라이브러리입니다.  
  **네이티브 JSON API와 유사한 API를 제공하여 직관적인 사용성을 지향합니다.**
- [@imhonglu/pattern-builder](https://github.com/imhonglu/new-wheels/tree/main/libs/pattern-builder)  
  복잡한 정규 표현식을 더 쉽게 구성할 수 있도록 도와주는 RegExp 빌더입니다.  
  **가독성을 높이고, 유지보수를 용이하게 만드는 것이 목표입니다.**
- [@imhonglu/toolkit](https://github.com/imhonglu/new-wheels/tree/main/libs/toolkit)  
  반복적으로 사용되는 유틸리티 함수와 타입을 모아, 더욱 효율적인 개발을 돕는 라이브러리입니다.  
  **TypeScript 환경에서 반복되는 코드 작성을 줄이고, 일관된 패턴을 유지하는 데 도움을 줍니다.**
- [@imhonglu/type-guard](https://github.com/imhonglu/new-wheels/tree/main/libs/type-guard)  
  Jest Matcher 패턴에서 영감을 받아 체이닝 방식의 API를 제공합니다.  
  **Proxy 기반으로 동작하여 오버헤드를 최소화하면서도 강력한 타입 안전성을 제공합니다.**
- [@imhonglu/type-object](https://github.com/imhonglu/new-wheels/tree/main/libs/type-object)  
  타입 안전한 Object API Wrapper를 제공하며, 네이티브 동작에 가까운 타입을 제공합니다.  
  **`Object.keys`, `entries`, `fromEntries`, `hasOwn` 등의 API를 TypeScript 환경에서 더 안전하게 활용할 수 있습니다.**
