## JWT 예제

### JWT ( JSON Web Token )

JWT는 이름에서 알 수 있듯이 Json으로 된 Token을 사용.
OAuth와 같이 Token 기반의 인증 방식이라는 것입니다.

### Token을 생성하고 요청하는 프로세스

- JSON 객체에 요구사항을 작성
- 어떠한 암호화 방식을 사용해서 문자열로 인코딩
- HTTP header에 추가함으로써 사용자 인증을 요청
- 서버에서는 Header에 추가된 Token을 디코딩하여 사용자를 인증.

### JWT 특징

- 정보가 담긴 데이터( JSON 객체 )를 암호화 하여, HTTP 헤더에 추가. (보안성 증가)
- 권한을 부여하기 위해 필요한 데이터가 JWT안에 모두 담겨있음
  - OAuth 처럼 인증 서버에서 토큰에 대한 정보를 찾을 필요가 없음

### 예제

```
# 토큰 생성
http://localhost:{PORT}/token/create

Method : GET
urlencoded , json 으로 데이터를 보내면 token 값을 반환한다.

# 토큰 확인
http://localhost:{PORT}/token/verify

Method : GET
인증타입 : Bearer

header key : bearer , value : 생성된 토큰
토큰생성시 반환된 값 및 추가적으로 보낸 urlencoded , json 데이터를 data로 반환한다.

```

### 참고

https://jwt.io/
