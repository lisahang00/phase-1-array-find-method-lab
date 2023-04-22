function superbowlWin(record) {
    let findWinner = record.find(({result}) => result === "W");
        if (findWinner) {
            return findWinner["year"];
        }
}
