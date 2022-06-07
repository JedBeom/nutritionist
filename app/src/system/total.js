// 선택한 메뉴들은 [6]Object에 담긴다.
// [0]: 밥류
// [1]: 국류
// [2]: 주메뉴
// [3]: 부메뉴1
// [4]: 부메뉴2
// [5]: 후식
// ...순으로 담긴다.

// getTotals 함수는 선택한 메뉴들 ([6]Object)의 칼로리, 단백질, 선호도의 총합을 반환합니다.
const getTotals = (menuSelected) => {
    let totalCal = 0
    let totalProtein = 0
    let totalLove = 0

    for (let i=0; i<menuSelected.length; i++ ) {
        totalCal += menuSelected[i].calorie
        totalProtein += menuSelected[i].protein 
        totalLove += menuSelected[i].love
    }

    return (totalCal, totalProtein, totalLove)
}

export {getTotals}