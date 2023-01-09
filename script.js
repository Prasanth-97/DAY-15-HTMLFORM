function getData(e){
     e.preventDefault();     
        var firstname = document.getElementById("fname").value;
        var lastname = document.getElementById("lname").value;
        var address = document.getElementById("addr").value;
        var pincode = document.getElementById("pincode").value;

        var ele = document.getElementsByName('gridRadios');
        let Gender=""; 
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) 
            {
                
            Gender = Gender + ele[i].value;   
              
            }        
        } ;
        var ele1= document.getElementsByName("Cuisine");
        let result1=[]; 
        let foodcuisine;     
        for(i = 0; i < ele1.length; i++)
         {
            if(ele1[i].checked)          
            {
            result1.push(ele1[i].value);           
                foodcuisine = result1.join("");   
            }                      
        };

    var state = document.getElementById("validationDefault04").value;
    var country = document.getElementById("validationCustom04").value;
    console.log(firstname,lastname,address,pincode,state,country,Gender,)
    var table_content = document.getElementById("list").insertRow();;
    table_content.innerHTML = `
    <tr>          
    <th scope="col">${firstname}</th>
    <th scope="col">${lastname}</th>
    <th scope="col">${address}</th>
    <th scope="col">${pincode}</th>
    <th scope="col">${Gender}</th>
    <th scope="col">${foodcuisine}</th>
    <th scope="col">${state}</th>
    <th scope="col">${country}</th>
    </tr> 
    `   
    document.getElementById('userDetails').reset();
    
    };
