//initialize class github
const github = new GitHub

//inti class ui
const ui = new UI

//storing input bar
const searchUser = document.getElementById('searchUser');

//adding eventlistner

searchUser.addEventListener('keyup', (e) => {
 const userText = e.target.value;

 if( userText !== ''){
      github.getUser(userText)
      .then( data => {
       if(data.profile.message === 'Not Found'){
           //show alert
                 ui.showAlert('user not found' , 'alert alert-danger')
        }else{
            //show profile
            ui.showProfile(data.profile)
            //show repos
            ui.showRepo(data.repo)
        }
          
      })
 }else{
     //clear profile
     ui.clearProfile()
 }
})