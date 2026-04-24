# 함께할 일 (home-collab) 프로젝트

## 기본 정보
- 앱 이름: 함께할 일
- 목적: 부부 2인 전용 집안일 협업 웹앱 (PWA)
- 배포: https://bmwyongjoon.github.io/home-collab/

## 기술 스택
- Frontend: React + Vite + Tailwind CSS
- Database: Firebase Firestore
- 인증: Firebase Authentication (이메일/비밀번호)
- 푸시 알림: Firebase Cloud Messaging (FCM)
- 배포: GitHub Pages

## 사용자 구조
- 2인 고정 (장용준 + 아내)
- 파트너 연결 기능 있음
- 파트너 미연결 상태에서도 모든 기능 작동해야 함

## 태스크 구조
- 유형: 루틴(반복) / 일회성
- 담당자: 나 / 아내 / 함께
- 카테고리: 청소 / 주방 / 장보기 / 집 관리 / 기타
- 마감: 날짜 + 시간 설정 가능 (시간 설정 안 함 옵션 포함)
- 루틴 반복 주기: 매일 / 매주 특정 요일 / 격주 / 매달 / 분기 / 매년

## 화면 구성
- 홈: 오늘의 할 일 탭 + 오늘의 루틴 탭
- 캘린더: 월별 달력, 담당자/완료 필터
- 태스크 목록: 전체 태스크 조회
- 태스크 추가/수정
- 설정: 알림 on/off, 프로필, 파트너 연결

## 알림
- 완료 처리 시 → 상대방에게 FCM 푸시 알림
- 새 태스크 생성 시 → 상대방에게 FCM 푸시 알림
- 마감 임박 알림은 1차 버전 미포함

## 현재까지 해결한 버그
- Firebase 연결 (.env 설정 완료)
- 회원가입/로그인 작동
- 자동 로그인 적용
- 앱 이름 홈콜라보 → 함께할 일 변경
- 앱 아이콘 변경 (따뜻한 주황빛 + 집+체크 심볼)

## 주요 파일 구조
- src/components/ : UI 컴포넌트
- src/pages/ : 각 화면 페이지
- src/firebase.js : Firebase 설정
- src/hooks/ : 커스텀 훅
- .env : Firebase 환경변수 (Git 미포함)

## 앞으로 추가할 기능 (2단계)
- AI 기반 일상 기록 → 자동 태스크/가계부 분류
