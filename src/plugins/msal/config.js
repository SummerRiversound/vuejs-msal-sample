const msalConfig = {
    auth: {
        clientId: "dcd399da-a750-4ad5-ac45-78c670ef6817",
        authority: "https://login.microsoftonline.com/consumers",
        redirectUri: "http://localhost:8080"
    },
    cache: {
        cacheLocation: "sessionStorage", // 해당 설정은 내 캐시에 저장됨
        storeAuthStateInCookie: true // IE 11이나 Edge 브라우저에서 문제가 생길경우 true로 설정
    }
}
export default msalConfig