let melon=0, flo=0, genie=0, apple=0, 
vibe=0, youtube=0, spotify=0; 

function result_calculate() {
    for (let i=0; i<answerList.length; i++){
        // 몇번째 답안인지
        ashit = answerList[i];
        if(i==0){
            switch(ashit){
                case 1: 
                melon = melon +5;
                flo = flo + 5;
                break;
                case 2:
                genie = genie +5;
                break;
                case 3:
                genie = genie +5;
                break;

            }
        }


        if(i==1){
            switch(ashit){
                case 1: 
                melon = melon +5;
                genie = genie +5;
                flo = flo + 5;
                break;
                case 2:
                    // 전 플랫폼이 모두 5점이므로
                    break;
                case 3:
                melon = melon +5;
                genie = genie +5;
                apple = apple +5;
                break;
                case 4:
                melon = melon +5;
                genie = genie +5;
                flo = flo + 5;
                vibe = vibe +5;
                break;
            }
        }
        if(i==2){
            switch(ashit){
                case 1:
                    youtube = youtube + 35;
                    break;

                case 2:
                    melon = melon +35;
                    genie = genie +35;
                    flo = flo + 35;
                    vibe = vibe +35;
                    youtube = youtube + 35;
                    break;
                case 3:
                    melon = melon +35;
                    genie = genie +35;
                    flo = flo + 35;
                    vibe = vibe +35;
                    youtube = youtube + 35;
                    apple = apple +35;
                    break;
                case 4:
                    break;
            }
        }
        if(i==3){
            switch(ashit){
                case 1:
                    apple = apple +25;
                    youtube = youtube + 25;
                    break;
                case 2:
                    spotify = spotify + 20;
                    break;
                case 3:
                    melon = melon +15;
                    break;
                case 4:
                    genie = genie +10;
                    flo = flo + 10;
                    vibe = vibe + 10; 
                    break;
            }
        }
        if(i==4){
            switch(ashit){
                case 1:
                case 2:
                case 3:
              
            }
        }
        if(i==5){
            switch(ashit){
                case 1:
                    vibe = vibe +5;
                    youtube = youtube + 5;
                    break;
                case 2:
                    flo = flo + 5;
                    break;
                case 3:
                    melon = melon +5;
                    vibe = vibe +5;
                    flo = flo + 5;
                    spotify = spotify + 5;
                    apple = apple + 5;
                    break;

                case 4:
                    melon = melon +5;
                    genie = genie +5;
                    break;
                case 5:
                case 6:
                    break;
                case 7:
                    genie = genie +5;
                    vibe = vibe +5;
                    flo = flo + 5;
                    break;
            }
        }
    }

    let r_arr = [melon, genie, flo, vibe, youtube, apple, spotify];
    let re_element = getMaxOfArray(r_arr);
    let r_index = r_arr.indexOf(re_element);
 
    let recommand = 'result'
    let recommand_ment = '을(를) 추천드립니다!'
    switch(r_index){
        case 0: recommand = 'melon'; break;
        case 1: recommand = 'genie'; break;
        case 2: recommand = 'flo'; break;
        case 3: recommand = 'vibe'; break;
        case 4: recommand = 'youtube'; break;
        case 5: recommand = 'apple'; break;
        case 6: recommand = 'spotify'; break;

    }
    console.log(r_index, recommand);
    var result_txt = document.createElement('h1');
    var result_txt2 = document.createElement('h2');
    var resultWrap = document.querySelector('.result-wrap');
    resultWrap.appendChild(result_txt);
    result_txt.innerHTML = recommand;
    console.log(resultWrap);
    
    resultWrap.appendChild(result_txt2);
    result_txt2.innerHTML = recommand_ment;
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}