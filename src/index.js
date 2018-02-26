module.exports = function check(str, bracketsConfig) {
        var i, j, k;
        var a, b;

        if (str.length % 2 > 0) return false;
        for (i = 0; i < bracketsConfig.length; i++) {
            a = str.split(bracketsConfig[i][0]).length;
            b = str.split(bracketsConfig[i][1]).length;
            if (a != b) return false;
        }

        return true;
};
