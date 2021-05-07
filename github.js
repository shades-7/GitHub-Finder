//MAKE THE CLASS
class GitHub{
    constructor(){
        this.client_id = '868547610cce9560ca1c' ;
        this.client_secret = 'ac4e438d83ed76437b649726249a2d5550c17328';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
   
    //GETUSER FUNCTION
    async getUser(user){
   
       //returning user profile
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
       //returning repos
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
   
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

   
        return {
            profile: profileData,
            repo: repoData
        }
    }
   
   
   } 