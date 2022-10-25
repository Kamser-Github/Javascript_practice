$('.container').empty();
$.ajax({
    method:"GET",
    url : "https://dapi.kakao.com/v2/search/vclip",
    data : {
        query : '자바스크립트',
        
    }
})