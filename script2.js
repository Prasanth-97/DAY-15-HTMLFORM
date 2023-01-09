function myfunc(check){  
    var check = document.getElementsByName("Cuisine");         
     var count;
     var initial = 0;
     for( count= 0 ; count < check.length ; count++)
     {
        if(check[count].checked == true)
        {
            initial = initial + 1; 
        }                         
    }
    if(initial > 2)
    {
        return false;
    }

};
