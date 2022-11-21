// function superbowlWin(record, finder) {
//     let result = null
//     for(let team of record) {
//         if(finder(team) === true){
//             result = team
//             break
//         }
//     }
//     return result
// }
// const result = record.find(result => result === "W");

function superbowlWin(record) {
    const winner = record.find(item => item.result === "W");
    console.log(winner);
    if(winner) {
        return winner.year 
    }
}
