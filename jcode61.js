function calculateAge(){
    var date = document.querySelector(".date").value;
    var dob = new Date(date);
    var diff = new Date() - dob;
    var age_date = new Date(diff);
    alert("Age is " + (age_date.getFullYear() - 1970));
}