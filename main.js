(function(){
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users"
    const client_id = "9d71a8c4106f4ea74ef9"//itens necessarios para autenticação e acesso ao end point da API
    const client_secret = "f9ff9a14fad8c26a809624c6bd2007690311b4af"  //itens necessarios para autenticação e acesso ao end point da API
    const count = 7; //qtd de repositorios
    const sort = "created: ascs" //order by

    async function getUser(user){
        const profileResponse = await fetch (
            `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        )

        const reposrResponse = await fetch(
            `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}` 
            )

            function showProfile(user){
                profile.innerHTM = `<div class="row">
                    <div class = "card mt-3" style="width: 18rem;">
                    <ul class = "list-group list-group-flush">
                        <li class "list-group-item">Repositórios: <span class="badge badge-sucess">${user.public_repos}</span></li>
                        <li class "list-group-item">Repositórios: <span class="badge badge-sucess">${user.followers}</span></li>
                        <li class="list-group-item">Seguindo: <span class="badge badge-info">${user.following}</span></li>
                    </ul>

                    <div class = "card-body">
                        <a href= "${user.html_url}"  target"_blank" class="btn btn-warning btn-block">Ver Perfil</a>
                    </div>
                    
                    <div class="col-md-8">
                        <div id= "repos"></div>
                    </div>
                </div>


                    `
            }

            function showRepos(repos){
                let output = ''


                
                repos.forEach(repo => {
                    output += `
                    <div class= "col-md-6"><a href="${repo.html_url}" target="_blank">${}
                    
                    
                    
                    
                    `

                    

                })


            }






    }
}
)()
