
/***********  Solution #1    **************************************************************************************************/

function convertHTML(str) {
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

// Chaining of replace method with different arguments
function convertHTML2(str) {
    return str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");                  
}
convertHTM2L("Hamburgers < Pizza < Tacos"); // return "Hamburgers &​lt; Pizza &​lt; Tacos"



/***********  Solution #3    **************************************************************************************************/

function convertHTML(str){
    const htmlEntities = { // Use Object Lookup to declare HTML entities
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
