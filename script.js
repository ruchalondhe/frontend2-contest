/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arr2 = [
    { id: 4, name: "jake", age: "18", profession: "developer" },
    { id: 5, name: "pat", age: "20", profession: "developer" },
    { id: 6, name: "karan", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    function PrintDeveloperbyMap() {
        //Write your code here , just console.log
          arr.map((item) =>{
            if(item.profession === 'developer'){
              console.log(item);
            }
      
          });
   }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((value) =>{
        if(value.profession === 'developer'){
          console.log(value);
        }
      });
  }
  
  
  function addData() {
    //Write your code here, just console.log
    let a = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(a);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((value) =>{
        if(value.profession !== 'admin'){
          console.log(value);
        }
      })
    }
  
  function concatenateArray() {
    //Write your code here, just console.log
    
    let newArr = arr.concat(arr2);
    console.log(newArr);
  }
  