import { getCommonSubsequence } from '../longestSubsequence';
import expect from 'expect';

describe('getCommonSubsequence() test', () => {
    it('should return a string', () => {
        const s1 = 'aaaa';
        const s2 = 'aa';
        expect(typeof getCommonSubsequence(s1, s2)).toBe('string');  
    });

    it('should return aa', () => {
        const s1 = 'aaaa';
        const s2 = 'aa';
        expect(getCommonSubsequence(s1, s2)).toBe('aa');  
    });

    it('should return ABAD', () => {
        const s1 = 'ABAZDC';
        const s2 = 'BACBAD';
        expect(getCommonSubsequence(s1, s2)).toBe('ABAD');  
    });

    it('should return GTAB', () => {
        const s1 = 'AGGTAB';
        const s2 = 'GXTXAYB';
        expect(getCommonSubsequence(s1, s2)).toBe('GTAB');  
    });
    
    it('should return BAABA', () => {
        const s1 = 'BBBAABA';
        const s2 = 'AABAABBA';
        expect(getCommonSubsequence(s1, s2)).toBe('BBBA');  
    });
});