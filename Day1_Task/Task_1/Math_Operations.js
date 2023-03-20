function Add(num_1,num_2)
{
   if( isNaN(num_1) || isNaN(num_2))
   {
      return "You must enter number!"
   }
   
    return num_1+num_2 + " Is The Sum Of Two Numbers "
}

function Sub(num_1,num_2)
{
   if( isNaN(num_1) || isNaN(num_2))
   {
      return "You must enter number!"
   }
    return  num_1-num_2 +" Is The Sub Of Two Numbers"
}

function Muliply(num_1,num_2)
{
   if( isNaN(num_1) || isNaN(num_2))
   {
      return "You must enter number!"
   }
    return "The Multiply Of Two Numbers Is:"+ num_1*num_2
}

function Divion(num_1,num_2)
{
   if( isNaN(num_1) || isNaN(num_2))
   {
      return "You must enter number!"
   }
   else{
       if(num_2!=0)
        {
           return "The Multiply Of Two Numbers Is:"+ num_1/num_2
        }
        else
        {
            return "you must not divide by zero"
        }
   }
}

module.exports=
{
   Add:Add,
   Sub:Sub,
   muliply:Muliply,
   Divide:Divion,
}