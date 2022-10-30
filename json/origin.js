/*
// 1. 파라미터로 넘어온 id, pw를 활용 -> 
// 2. UserDao.getUserById(id) -> UserDto 객체를 얻어옴 (데이터베이스 테이블) 
// 3. 얻어온 객체 user가  == null / != null
// 3-1) null -> null 메세지 반환 
// 3-2) Object -> JSON 데이터 반환 & session에 log값 저장

String id = request.getParameter("id");
String pw = request.getParameter("pw");
		
if(id != null & pw != null) {
//UserDao dao = UserDao.getInstance();
//UserDto user = dao.getUserById(id); // SELECT * FROM users WHERE id = ?
//UserDto user = new UserDto(id, pw, "김지연");
//Dao로 해
UserDto user = null;
			
        if(user == null) {
        // 로그인 실패 
        response.getWriter().append("null");
        }
        else {
/           / 로그인 성공 
//          UserDto 객체를 -> JSON 타입으로 데이터 반환 
            HttpSession session = request.getSession();
            session.setAttribute("log", user.getId());  
            JSONObject data = new JSONObject(user);	
            response.setCharacterEncoding("utf-8");
            response.getWriter().append(data.toString());
        }
    }
    else {
        // index.jsp OR joinForm.jsp
//			response.sendRedirect();
		}
*/

/*
 function checkForm(form) { // form element 전체 요소를 들고 와줌 
    console.log(form);
    console.log(form.id);
    console.log(form.id.value);

    if(form.id.value === ""){
        alert('id를 입력하세요!')
    }
    else if(form.pw.value === ""){
        alert('password 를 입력하세요!')
    }
    else {
		// id, pw를 가지고 -> ajax 호출 (http://localhost:8080/myRentalCar/LoginAction)


		// 서블릿 페이지를 통한 response 얻기 (JSON)
        ?



		// 반환값 : user 객체에 대한 json 데이터 
		
		// null -> location.href = 'loginForm.jsp'
		// json -> location.href = 'mypage' 
		
        form.submit();
    }
}
*/