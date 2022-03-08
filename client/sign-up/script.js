const username= document.querySelector(".username"),
    title = document.querySelector(".title"),
    institution = document.querySelector(".institution"),
    interest = document.querySelector(".interest"),
    email = document.querySelector(".email"),
    password = document.querySelector(".password"),
    confirmPassword = document.querySelector(".confirm-password");

    const signUp = document.querySelector(".form")
    signUp.addEventListener("submit", (e)=>{
        e.preventDefault();
        const userInfo = {
           username: username.value,
           title: title.value,
           password: password.value,
           institution: institution.value,
           research: interest.value,
           email: email.value
       }
       console.log(userInfo)

       if(confirmPassword.value == password.value){
           fetch("http://localhost:3000/create-user", {
               method: "POST", 
               mode:"cors",
               body: JSON.stringify({...userInfo}),
               headers: {
                   "Content-type": "application/json; charset=UTF-8"
               }
           }).then(res=>res.json()).then(
              ( res )=> {
                console.log(res)
                if(res.code == 200){
                    localStorage.setItem("authUser",res.newUser.email)
                    location.replace("/client/dashboard/")
                }else{
                    alert(res.status);
                }

              }
               )
           
       }
        
    })
    // fetch("localhost:3000/get-user").then(res=>res.json()).then(res=> console.log(res))