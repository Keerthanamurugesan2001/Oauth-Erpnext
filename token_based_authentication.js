
fetch('http://s4.localhost:8000/api/method/frappe.auth.get_logged_user', {
    headers: {
        'Authorization': 'token 88439d22c623915:917db833d7b55De'
    }
})
.then(r => r.json())
.then(r => {
    console.log(r);
})