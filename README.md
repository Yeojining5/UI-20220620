# MVC 패턴 기반 주소록 관리 프로그램

> 📌 KH 정보교육원 첫 번째 프로젝트 (개인)
> 2022.05.23 ~ 2022.07.08

---

### 1. 프로젝트 개요

- **MVC**(모델-뷰-컨트롤러) 디자인 패턴을 기반으로 비즈니스 로직과 화면을 분리
- Java(Eclipse) - Oracle 연동과 **JDBC**를 활용한 주소록 데이터베이스 관리
- 오라클서버와 연계하여 회원 정보 관리를 위한 입력, 수정, 삭제, 상세조회, 전체조회 처리
- 로그인(회원가입) - 메인화면 - 다이얼로그 GUI 구현

<br>

### 2. 요구 사항

체크박스 만들기

<br>

### 3. 설계 과정

##### 1) Oracle DB 설계

  <img src=" " width="600">

##### 2) 클래스 설계

  <img src=" " width="600">

<br>

### 4. 주요 구현 기능 목록

| 구현 기능                               | 상세 기능 |
| --------------------------------------- | --------- |
| **로그인&회원가입**<br>(AddressLogin)   |           |
| **메인화면**<br>(AddressBook)           |           |
| **다이얼로그, 팝업**<br>(ModifyDialog)  |           |
| **읽기와 쓰기**<br>(AddressVO)          |           |
| **컨트롤러**<br>(AddressCtrl)           |           |
| **입력**<br>(RegisterAddrEty)           |           |
| **수정**<br>(ModifyAddrEty)             |           |
| **삭제**<br>(DeleteAddrEty)             |           |
| **전체, 상세조회**<br>(RetrieveAddrEty) |           |

- MVC패턴
- CRUD, 입력 수정 삭제
- JDBC
- JAVA 리스트 맵
- JFrame JDialog
- 로그인 회원가입 다이얼로그
- ID, 수정날짜 자동생성
- 모델 계층인 DAO클래스를 입력, 조회, 수정, 삭제 총 4개로 분리

<br>

### 5. GUI 화면

<br>

### 6. 사용 기술 및 개발 환경

`java` `Eclipse` `JDBC` `Oracle`
