

  let p = document.createElement("p")
  document.body.appendChild(p)
function showData(obj) {
   p.textContent = obj
}

 function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };
    return fetch('http://localhost:3000/users',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'accept': 'application/json'
         },
         body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => showData(data.id))
        .catch(error => showData(error))
      }