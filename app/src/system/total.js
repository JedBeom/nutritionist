// 선택한 메뉴의 인덱스 번호들은 [6]Int에 담긴다.
// [0]: 밥류
// [1]: 국류
// [2]: 주메뉴
// [3]: 부메뉴1
// [4]: 부메뉴2
// [5]: 후식
// ...순으로 담긴다.

// completeOrNot 함수는 선택하지 않은 메뉴가 있는지 판별합니다.
const completeOrNot = (selections) => {
    for (let i=0; i<selections.length; i++) {
        if (selections[i] === -1) return false
    }
    return true
}

// getTotals 함수는 선택한 메뉴들 ([6]Int)의 칼로리, 단백질, 선호도의 총합을 반환합니다.
const getTotals = (blocks, selections) => {
    let totalCal = 0
    let totalProtein = 0
    let totalLove = 0

    for (let i=0; i<selections.length; i++ ) {
        if (selections[i] === -1) continue

        const food = blocks[i].foods[selections[i]]
        totalCal += food.calorie
        totalProtein += food.protein 
        totalLove += food.love
    }

    return {totalCal, totalProtein, totalLove}
}

export {getTotals, completeOrNot}