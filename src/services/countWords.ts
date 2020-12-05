
function countWords(text:string | undefined){
    const words = text?.trim()
    .toLocaleLowerCase()
    .split(/["\s.,?=&@#*-+!-'():;<>]/gmi);

    const filtredWords =  words?.filter(words => words !== "");

    const keys = filtredWords?.filter(
        (word, index) => filtredWords.indexOf(word) === index );

    let result: { [key: string]: number } = {};

    filtredWords?.forEach(word => {

       if(keys?.includes(word)){
         if(word in result){
            result[word] = result[word]+=1;
         }
         else{
            result= {...result,[word]:1}
         }
    
       }

    });

   return (result);
    

}




export default countWords;