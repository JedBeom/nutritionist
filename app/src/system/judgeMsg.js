const judgeMsg = ({totalCal, totalProtein, totalLove}) => {
    let msg = ""
    if (873 <= totalCal && totalCal <= 927) {
        msg += "칼로리가 아주 적절합니다."
    } else if (810 <= totalCal && totalCal <= 990) {
        msg += "칼로리, 이 정도면 괜찮네요."
    } else if (990 < totalCal) {
        msg += "칼로리가 너무 과합니다!"
    } else {
        msg += "칼로리가 너무 부족합니다."
    }

    msg += "\n"

    if (63 <= totalProtein*4 && totalProtein*4 <= 180) {
        msg += "단백질 구성이 완벽하군요." 
    } else if (180 < totalProtein*4) {
        msg += "단백질이 너무 많습니다."
    } else {
        msg += "단백질 손실이 일어날 지경입니다."
    }

    msg += "\n"

    if (totalLove >= 19) {
        msg += "학생들이 매우 좋아할만한 식단이네요."
    } else if (totalLove < 6) {
        msg += "학생들이 급식을 안 먹는 이유를 알 것 같습니다."
    } 

    return msg
}

export {judgeMsg}