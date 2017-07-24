/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.indexOf(ransomNote)>-1){
        return true;
    }
    return false;
};
var a=canConstruct("fffbfg","effjfggbffjdgbjjhhdegh");
console.log(a);
