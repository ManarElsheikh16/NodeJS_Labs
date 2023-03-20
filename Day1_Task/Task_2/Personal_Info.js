function GetAge(Name,BirthDate)
{
    var BirthDate_Year=new Date(BirthDate).getFullYear();
    var Current_Year=new Date().getFullYear();

    if(BirthDate_Year > Current_Year)
    {
          throw new Error("Your BirthDate Year Is Not Valid");
    }
    else
    {
        var age=Current_Year-BirthDate_Year;
        return "Hello Your Name Is:" + " " + Name +" "+", Your Age Is: " + age;
    }
}

module.exports=
{
    getAge:GetAge
}