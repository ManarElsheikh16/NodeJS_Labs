var info=require("./Personal_Info");

try
{
    console.log(info.getAge("Manar",'2024-06-16'))
}
catch
{
   console.log("Your BirthDate Year Is Not Valid") 
}