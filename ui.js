//CREATE THE CLASS AND SOME PROPERTY
class UI  {
    constructor(){
        this.profile = document.getElementById('profile')
    }
  

    //CREATE THE FUNCTION FOR DISPLAYING THE PROFILE
    showProfile(user){
      //with the help of template we need to add the data in profile

      this.profile.innerHTML = `
      <div class = "card card-body mb-3">
      <div class="row">
      <div class="col-md-3">
      <img class = "img-fluid mb-2" src="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success">Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br> <br>
      <ul class="list-group">
       <li class="list-group-item">Company:${user.company}</li>
       <li class="list-group-item">Website/Blog:${user.blog}</li>
       <li class="list-group-item">Location:${user.location}</li>
       <li class="list-group-item">Member Since:${user.created_at}</li>
      </ul>
      </div>
      </div>
      
      <h3 class="page-heading mb-3">Latest Repos</h3>
    
      <div id="repos"></div>
      
      `
    }

     //SHOW ALERT
    showAlert(message,className){
        //clearing alert
        this.clearAlert()
        //create div
        const div = document.createElement('div');
        //adding class
        div.className = className;
        //creating text
        div.appendChild(document.createTextNode(message));
        //getting parent
        const container = document.querySelector('.searchContainer')
        //getting search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div,search);

        //setting timeout
        setTimeout(() => {
            this.clearAlert();
        },3000)
    }

    //SHOW REPOS
    showRepo(repos){
        let output ="";
        repos.forEach(function(repo) {
            output += `

            
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.name}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
            </div>
            </div>`;
        

        })
        //output repo
        document.getElementById('repos').innerHTML = output;

    }

      //CLEAR PROFILE
      clearProfile(){
          this.profile.innerHTML = '';
      }

      //CLEAR ALERT
      clearAlert(){
          const currentAlert = document.querySelector('.alert');
          if(currentAlert){
              currentAlert.remove();
          }}


    
}