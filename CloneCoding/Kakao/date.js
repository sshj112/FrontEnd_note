const dateContent = document.querySelector(".second_line");

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

function getToday() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    dateContent.innerText = `${month}월 ${date}일 ${getDayKor(day)}요일 소식입니다`;
}

function init() {
    getToday();
}

init();