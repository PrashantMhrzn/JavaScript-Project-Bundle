class gitHub {
    constructor() {
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        const reporesponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}`);
        
        const profile = await profileResponse.json();
        const repo = await reporesponse.json();

        return {
            profile: profile,
            repo: repo
        }
    }
}