function validEmail(str) {
    //your JS code here.
      if(str.startsWith('@') || str.endsWith('@') || str.indexOf('@')==str.length-2)
          return false;
      
      if(!(str.lastIndexOf('.') > str.indexOf('@')) || (str.lastIndexOf('.')-str.indexOf('@') == 1) || (str.endsWith('.')) || str.startsWith('.'))
          return false;
  
      return true;
  }
  
  // // Do not change the code below.
  const str = prompt("Enter an email address.");
  alert(validEmail(str));