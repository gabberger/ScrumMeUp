(async function fetchAPI(){
    const usersJson = await fetch('https://5f839b726b97440016f4e795.mockapi.io/travel');
    const users = await usersJson.json(); 
    users.forEach(user => {
        document.getElementById("container-home").innerHTML += `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">    
                <div class="mdl-card__title"
                    style="background: url('${user.avatar}') center / cover"
                >
                </div>
                <div class="mdl-card__supporting-text">
                    Country: ${user.country}
                    <br/>
                    Lastname: ${user.lastname}
                    <br/>
                    Firstname: ${user.firstname}
                    <br/>
                    Title: ${user.title}
                    <br/>
                    JobTitle: ${user.jobtitle}
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    More Info
                    </a>
                </div>
                <div class="mdl-card__menu">
                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                        <i class="material-icons">add</i>
                    </button>
                </div>
            </div>
        `  
    });
})()




