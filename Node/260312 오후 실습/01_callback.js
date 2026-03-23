function sayWord(word){
    console.log('나는 외친다!! ${word}');

}
function callbacklog(word, cb){
    console.log("========callbacking 함수 호출 ========");
    cb(word);
}

callbacklog("무~~~야~~호~~~~~~~", sayWord);
callbacklog("러닝화", function(word){
    console.log('나는 사고싶다!!${word}');
});