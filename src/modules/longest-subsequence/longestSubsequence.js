/*

Write a function that takes two strings s1 and s2 and
returns the longest common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"

*/

export const getCommonSubsequence = (s1, s2) => {
    let res = [];
    let index = -1;
    let found = false;
    for (let i = 0; i < s1.length; i++) {
        if (!found && res.length <= 1) {
            res = [];
            index = -1;
        }
        found = false;
        for (let j = 0; j < s2.length; j++) {
            if (s2[j] === s1[i] && j > index) {
                res.push(s2[j]);
                index = j;
                found = true;
                break;
            }
        }
    }
    return res.join('');
};
