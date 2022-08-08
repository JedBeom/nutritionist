// 단백질 기준은 단백질 총합에 x4

// isSuperb 함수는 참 잘했어요 기준을 충족하면 true를 반환한다.
// 총 칼로리: 900kcal (±3%): 873kcal ~ 927kcal 이내
// 단백질: 단백질 기준 충족: 63 ~ 180
// 선호도: 5합 3+3+4+4+5 = 19 이상
const isSuperb = (totalCal, totalProtein, totalLove) => {
    if (totalCal < 873 || totalCal > 927) {
        return false
    }

    if (totalProtein*4 < 63 || totalProtein*4 > 180) {
        return false
    }

    if (totalLove < 19) {
        return false
    }

    return true
}

// isOk 함수는 합격 기준을 충족하면 true를 반환한다.
// 총 칼로리: 900kcal (±10%): 810kcal ~ 990kcal 이내
// 단백질: 단백질 기준 충족: 63 ~ 180 
const isOk = (totalCal, totalProtein, totalLove) => {
    if (totalCal < 810 || totalCal > 990) {
        return false
    }

    if (totalProtein*4 < 63 || totalProtein*4 > 180) {
        return false
    }

    return true
}

// judge 함수는 2 = 참 잘했어요, 1 = 합격, 0 = 좀 더 열심히 값을 반환한다.
const judge = ({totalCal, totalProtein, totalLove}) => {
    if (isSuperb(totalCal, totalProtein, totalLove)) {
        return 2
    }

    if (isOk(totalCal, totalProtein, totalLove)) {
        return 1
    }

    return 0
}

// calScore 함수는 점수를 계산한다
// a = |900 - 칼로리합계| (절댓값)
// b = ( 단백질합계 - 63kcal )
// c = 선호도 합계
// 총 점수: (b+5c-a)점
const calScore = ({totalCal, totalProtein, totalLove}) => {
    const a = Math.abs(900 - totalCal)
    const b = totalProtein - 63
    const c = totalLove
    return b+5*c-a
}

export {judge, calScore}