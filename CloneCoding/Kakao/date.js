const dateContent = document.querySelector(".second_line");
const timeContent = document.querySelector(".Stock_hashtag");

function getDayKor(day) {
    if (day === 0) {
        return "일";
    } else if (day == 1){
        return "월";
    } else if (day == 2){
        return "화";
    } else if (day == 3){
        return "수";
    } else if (day == 4){
        return "목";
    } else if (day == 5){
        return "금";
    } else if (day == 6){
        return "토";
    } else {
        return "wrong";
    }
}

function getTime() {
    const time = new Date();
    const year = time.getYear()-100+2000;
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();
    dateContent.innerText = `${month}월 ${date}일 ${getDayKor(day)}요일 소식입니다`;
    timeContent.innerText = `${year}.0${month}.${date}.0${hour}.${minute}AM`;
}

function init() {
    getTime();
}

init();