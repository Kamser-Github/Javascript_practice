//JSON
//javascript Object Notation
//

//Object
/**
{
    key1 : value1,
    key2 : value2,
    key3 : value3
}  

{
    meta : ?,
    document : ?
}
*/
let page = 1;
let is_end = false;

getData();
function getData(){

    $('.container').empty();//비우기
    // const container = document.querySelector(".container");
    //jQuery.ajax();
    //$. << 단축 표현식
    $.ajax({
        method:"GET",
        url :"https://dapi.kakao.com/v3/search/book",
        data : {
            query : '강아지똥',
            page : page
        },
        headers : {
            Authorization : `KakaoAK d8524bab2a80286742205dba83f1b85d`
        }
    }).done(response => {
        console.log("response : ",response);
        const list = response.documents;//10개의 오브젝트
        list.forEach(e => {
            const thumbnail = e.thumbnail;
            const url = e.url;
            const title = e.title;
            const contents = e.contents;
            const authors = e.authors[0];
            const publisher = e.publisher;
            const price = e.price;

            console.log(url);
            $('.container').append(
                `<tr>
                <td><a href=${url}><img src="${thumbnail}
                "></a></td>
                <td>${title}</td>
                <td>${contents}</td>
                <td>${authors}</td>
                <td>${publisher}</td>
                <td>${price}</td>
                </tr>`
            );
        });
        is_end = response.meta.is_end;
        if(is_end===true){
            $('.next_button').hide();
        }
        if(page === 1){
            $('.back_button').hide();
            $('.next_button').show();
        }
    });
}
function getDataBack(){
    if(page>1){
        page--;
        getData();
    }
}
function getDataNext(){
    if(is_end===false){
        page++;
        getData();
        $('.back_button').show();
    }
}