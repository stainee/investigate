
const main = document.querySelector("#main");
const question = document.querySelector("#question");
const result_page = document.querySelector("#result");

let qIdx = 0;  // qIdx 는 일단 전역 변수화

function result(){
    console.log("result", qIdx);
    question.style.display = "none";
    result_page.style.display = "block";
    result_calculate();
}

function renew(){ //qIdx
    console.log("renew", qIdx);
    console.log(answerList);
   /* 질의 부분*/ 
    var question = document.querySelector('.question-wrap');
    question.innerHTML = questionList[qIdx].q; // question 변경

   /* 답변 부분*/
    
    for(let i in questionList[qIdx].a){ 
        renewA = questionList[qIdx].a[i].answer;
        var answer = document.querySelector('.answer-wrap').querySelectorAll('button'); //nodelist 중 하나를 반환
        answer[i].innerHTML = renewA;
    }
    
}


function start(){
    main.style.display = "none";
    question.style.display = "block";

    /* 질의, 답변 항목을 생성한다 */
    var q = document.querySelector('.question-wrap');
    q.innerHTML = questionList[qIdx].q;
    
    var answerWrap = document.querySelector('.answer-wrap');

    for (let i in questionList[qIdx].a){  //i는 선택답안의 요소들
        var answer = document.createElement('Button');
        answer.addEventListener('click', function(){
            answerList[qIdx] = Number(i)+1; // i는 index 값이므로 value를 넣기 위해서는 1 더 높게
            if(qIdx>=5){
                result();
            }
            else{ next();}

        });
        answerWrap.appendChild(answer); //answer가 a 에 소속될수 있도록. div tag 내부에 버튼이 만들어진다
        answer.innerHTML = questionList[qIdx].a[i].answer;
    }

}


function next(){
    qIdx += 1;
    console.log("next", qIdx);
    renew();
}

function back(){
    qIdx -=1;
    console.log("back", qIdx);
    renew();
}
