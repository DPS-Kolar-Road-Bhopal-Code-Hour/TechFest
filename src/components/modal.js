let next = document.querySelector('.book-container-inner-next');
let inner = document.querySelector('.book-container-inner');
let package = document.querySelector('.book-container-inner-packages');
let form = document.createElement('div');
let header = document.querySelector('.book-container-header');
let innerHTM = '<div><input placeholder="email" id="email"><label for="email"><p>Email</p></label></div><div><input placeholder="First Name" id="first"><label for="first"><p>First Name</p></label></div><div><input placeholder="Last Name" id="last"><label for="last"><p>Last Name</p></label></div><div><input placeholder="Phone Number" type="number" id="ph"><label for="ph"><p>Phone Number</p></label></div>'
let email = "";
let Name = [];
let phoneNumber = '';
let step = 0;
next.addEventListener('click', () => {
    if (step === 0) {
        step = 1;
        header.innerHTML = 'Enter Your Contact Details'
        package.innerHTML = innerHTM;
        package.className = 'book-container-inner-form';
        document.querySelector('#email').addEventListener('change', (a) => {
            email = a.target.value
        });
        document.querySelector('#first').addEventListener('change', (a) => {
            Name = [a.target.value, Name[1]];
        });

        document.querySelector('#last').addEventListener('change', (a) => {
            Name = [Name[0], a.target.value];
        });
        document.querySelector('#ph').addEventListener('change', (a) => {
            phoneNumber = a.target.value;
        });
    }
    else{
        header.innerHTML = 'Request Submitted Successfully';
        package.className="book-container-inner-final"
        package.innerHTML = `<p>A request for a luxurious package has been uploaded for ${Name[0]} ${Name[1]}. You will be contacted shortly on either ${email} or ${phoneNumber}</p>`;
        inner.removeChild(next);
    }
})