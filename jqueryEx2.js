let page = 1;
let searchResult = document.querySelector('#search');
console.log(searchResult);
// getData();
function getData(){
    $('.container').empty();

    $.ajax({
        method : "GET",
        url : "https://dapi.kakao.com/v2/search/vclip",
        data : {
            query : searchResult.value,
            page : page,
            size : 30
        },
        headers : {
            Authorization: `KakaoAK 76af1c3e1fa97ff93bbe858cb5597672`
        }
    }).done(response=>{
        console.log("결과값 :",response);
        const list = response.documents;
        list.forEach(element => {
            const author = element.author;
            // const datetime  = element.datetime;
            // const play_time = element.play_time;
            const thumbnail = element.thumbnail;
            const title = element.title;
            const url = element.url;

            $('.container').append(
                `
                <div>
                    <a href=${url}><img src=${thumbnail}></a>
                    <p>${title}</p>
                    <p>${author}</p>
                </div>
                `
            );
        });
    });
}

function enterkey(){
    
}