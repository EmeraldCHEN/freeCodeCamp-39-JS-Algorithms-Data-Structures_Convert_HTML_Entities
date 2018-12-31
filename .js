
/***********  Solution #1    **************************************************************************************************/

function convertHTML(str) {
     // Split str into an array of characters
     let arr = str.split('');
     for(let i = 0; i < arr.length; i++){    
          if(arr[i] == '&'){
               str = str.replace(arr[i],"&​amp;");        
          }
          if(arr[i] == '<'){
               str = str.replace(arr[i],'&​lt;');         
          }
          if(arr[i] == '>'){
               str = str.replace(arr[i],'&​gt;');         
          }
          if(arr[i] == '"'){
               str = str.replace(arr[i],'&​quot;');          
          }
          if(arr[i] == "'"){
               str = str.replace(arr[i],'&apos;');        
          }
      }
      return str;    
    }
convertHTML("Schindler's List"); // return "Schindler&​apos;s List"



/***********  Solution #2    **************************************************************************************************/

function convertHTML2(str){
    let tempStr = str.split(''); 
    for(let i = 0; i < tempStr.length; i++){
        // Use switch to check for HTML entities since its number is small
         switch(tempStr[i]){  
            case'<':
                tempStr[i] = '&lt;';
                break;
            case '&':
                tempStr[i] = '&amp;';
                break;
            case '>':
                tempStr[i] = '&gt;';
                break;
            case '"':
                tempStr[i] = '&quot;';
                break;
            case "'":
                tempStr[i] = "&apos;";
                break;
        }
    }
    return tempStr.join('');  
}



/***********  Solution #3    **************************************************************************************************/

// Chaining of replace method with different arguments
function convertHTML3(str) {
    return str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");                  
}
convertHTM2L("Hamburgers < Pizza < Tacos"); // return "Hamburgers &​lt; Pizza &​lt; Tacos"



/***********  Solution #4    **************************************************************************************************/

function convertHTML4(str){
    // Use Object Lookup to declare HTML entities
     const htmlEntities = { 
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&apos;'
    };
    // Split the original string by characters and use map to check for the changed HTML entity or use the same character
    return str.split('').map(element => htmlEntities[element] || element).join('');
}






// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities/
