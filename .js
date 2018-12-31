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
convertHTML("Schindler's List"); // return Schindler&​apos;s List.
