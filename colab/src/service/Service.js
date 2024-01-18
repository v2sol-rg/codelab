export async function getAllUsers() {

    try{
        const response = await fetch('http://localhost:8080/api/users');
        return await response.json();
    } catch(error) {
        return [];
    }
    
}

export async function postAllUsers(form) {
    try{
        fetch('http://localhost:8080/api/user', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(form)
         })
          .then((res) => {
            console.log("post success: ", res);
          });
    } catch(error) {
        return []
    }
}

export async function deleteAUser(id) {
    try{
        fetch(`http://localhost:8080/api/user/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type':'application/json'}
         })
          .then((res) => {
            console.log("post success: ", res);
          });
    } catch(error) {
        return []
    }
}


