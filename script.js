function submitForm(event) {
    event.preventDefault(); 

    let age = document.querySelector("#age").value.trim();
    let name = document.querySelector("#name").value.trim();

    if (age === '' || name === '') {
        alert("Please enter valid details.");
        return; 
    }

    age = parseInt(age);

    let ageCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    ageCheck
        .then(message => {
            alert(message);
            form.submit(); 
        })
        .catch(error => alert(error));
}
