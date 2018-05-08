const wrap = (str, col) => {
    if(str.length <= col) {
        return str;
    }

    const indexOfBlank = str.lastIndexOf(' ', col);
    let split;
    let offset;
    if(indexOfBlank > -1) {
        split = indexOfBlank;
        offset = 1;
    } else {
        split = col;
        offset = 0;
    }

    return str.substring(0, split) + '\n' + wrap(str.substring(split+ offset), col);
};

module.exports = wrap;