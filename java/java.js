// const mybtn = document.querySelector('#mybtn')
// const txtdiv = document.querySelector('#text')

// function loadtext(){
//     let xhr = new XMLHttpRequest() ; 
//     xhr.open("Get","https://api.githup.com/users")


//     xhr.onload = function(){
//         if(xhr.state )
//     }
// }




const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('GET /user', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  // Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('PATCH /user', {
    blog: 'https://github.com/blog',
    name: 'monalisa octocat',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })