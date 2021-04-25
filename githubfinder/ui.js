class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target='_blank' class="btn btn-info btn-block">View Profile</a>
                </div>
                <div class="col-md-9 mx-auto">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br>
                    <ul class="list-group pb-2 pt-2">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/ Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>        
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepo(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6 mt-3 mb-3">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-warning">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                </div>
            </div>
            </div>
            `;
        });

        //output repos
        document.querySelector('#repos').innerHTML = output;
    }

    showAlert(msg, cls) {
        this.checkAlert();
        const div = document.createElement('div');
        div.className = cls;
        div.appendChild(document.createTextNode(msg));
        const conatiner = document.querySelector('#search-container');
        const element = document.querySelector('#alertplaceholder');
        conatiner.insertBefore(div, element);
        setTimeout(() => {
            this.checkAlert();
        }, 2000);
    }

    checkAlert() {
        const current = document.querySelector('.alert');
        if (current) {
            current.remove();
        } 
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}