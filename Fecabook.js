console.log("* WELCOME TO FECABOOK *")
const readlineSync=require("readline-sync")
var name=readlineSync.question("Enter Your Name : ")
if (name=="a" || "z"){
    console.log(name)
    var birth=readlineSync.question("Enter Your Birth_Date : ")
    if (birth>="1" && birth<="9"){
        console.log(birth)
        var gender=readlineSync.question("Enter Male/Female/Other : ")
        if (gender=="male" || "female" || "other"){
            console.log(gender)
            password=readlineSync.question("Creat Your password : ")
            if (password=="0" && "9" || password=="a" && "z" || password=="@" || "#"){
                console.log(password)
                confirm_password=readlineSync.question("Confirm Your Password : ")
                if (confirm_password==password){
                    console.log(password,"Correct Password \nSend OTP")
                    Otp=readlineSync.questionInt("Enter Your OTP : ")
                    if (Otp==3636 || 3621 || 1234 || 363636 || 231236){
                        console.log("Correct OTP \nLoading😒.......")
                        console.log("*🥳Congratulations Your Account Created Succefully_🥳🎉🎊*")
                    }else{
                        console.log("Wrong Password_😒")
                    }
                }else{
                    console.log("Wrong Password Try again_😒")
                }
            }else{
                console.log("Write valid password_😒😒")
            }
        }else{
            console.log("Select gender in list_😒")
        }
    }else{
        console.log("something wrong in date_😒😒")
    }
}else{
    console.log("Write propar name_😒")
}