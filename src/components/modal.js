let next = document.querySelector('.book-container-inner-next');
let inner = document.querySelector('.book-container-inner');
let package = document.querySelector('.book-container-inner-packages');
let form = document.createElement('div');
let header = document.querySelector('.book-container-header');
let innerHTM = `<div><input placeholder="email" id="email"><label for="email"><p>Email</p></label></div><div><input placeholder="First Name" id="first"><label for="first"><p>First Name</p></label></div><div><input placeholder="Last Name" id="last"><label for="last"><p>Last Name</p></label></div><div><input placeholder="Phone Number" type="number" id="ph"><label for="ph"><p>Phone Number</p></label></div><div>
<select id="city" name="city">
<option value="San Francisco" selected>San Francisco</option>
<option value="Seattle">Seattle</option>
<option value="Las Vegas">Las Vegas</option>
<option value="Portland">Portland</option>
<option value="Los Angeles">Los Angeles</option>
<option value="New York">New York</option>
<option value="Boston">Boston</option>
<option value="Vancouver">Vancouver</option>
<option value="Toronto">Toronto</option>
<option value="London">London</option>
<option value="Dublin">Dublin</option>
<option value="Paris">Paris</option>
<option value="Berlin">Berlin</option>
<option value="Oslo">Oslo</option>
<option value="Sydney">Sydney</option>
<option value="Tokyo">Tokyo</option>
<option value="Seoul">Seoul</option>
<option value="Honk Kong">Honk Kong</option>


</select></div> </option></select><label for="city"><p>City</p></label></div>`
let email = "";
let Name = [];
let phoneNumber = '';
let step = 0;
let city = 'San Francisco';
let pkg = "basic"
document.querySelectorAll('.book-container-inner-packages-input').forEach(a => a.addEventListener('change', (a) => {
    console.log(a)
    pkg = a.target.value;
}));
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
        document.querySelector('#city').addEventListener('change', (a) => {
            city = a.target.value
        });
    } else {
        if (ph.toString().length < 10 || !Name[0] || !Name[1]) {
            return;
        }
        header.innerHTML = 'Request Submitted Successfully';
        package.className = "book-container-inner-final"
        package.innerHTML = `<p>A request for a ${pkg} package, in the city of ${city}, has been uploaded for ${Name[0]} ${Name[1]}. You will be contacted shortly at either ${email} or ${phoneNumber}</p><div><h4>You'll hear back from us in</h4>
        <p class="book-container-inner-final-para"></p>
        </div>`;
        let para1 = document.querySelector('.book-container-inner-final-para');
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setInterval(() => {
            let today = new Date()
            let time = new Date(tomorrow - today);
            para1.innerHTML = `${time.getHours()} hours, ${time.getMinutes()} minutes, and ${time.getSeconds()} seconds`;

        }, 500)
        inner.removeChild(next);
    }
})