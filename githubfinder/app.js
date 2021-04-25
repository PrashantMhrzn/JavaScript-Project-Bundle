// init github
let github = new gitHub();
// init ui
let ui = new UI();

// search & input
const user = document.querySelector('#username');
const search = document.querySelector('#search');

//add event listener
search.addEventListener('click', () => {
    const userInput = user.value;
    if(userInput != '') {
        //make http call
        github.getUser(userInput)
        .then(data => {
            if(data.profile.message === 'Not Found')  {
                //show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                //show profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
            }
        });
    } else {
        //clear the profile
        ui.clearProfile();
    }
})