import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const AddTutorial = () => {
    const {user} = useContext(AuthContext);
    const categoryRef = useRef(null);
    const ratingRef = useRef(null);
    const processRef = useRef(null);
    const customizeRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
      const form = new FormData(e.target);
    const email = form.get('email');
    const name = form.get('name');
    const itemName = form.get('item');
    const image = form.get('image');
    const stockStatus = parseInt(form.get('Stock'));

    const categoryName = categoryRef.current.value;
    const rating = parseFloat(ratingRef.current.value);
    const processingTime = parseFloat(processRef.current.value);
    const customization = customizeRef.current.value;

    const description = form.get('description');
    const price = parseFloat(form.get('price')); 
    
    const urlRegex = /^https?:\/\/.*$/i;

    const Newequepment = {email, name, itemName, image, description, price, categoryName, rating, processingTime, stockStatus, customization};

    if (!urlRegex.test(image)) {
        Swal.fire({
            title: 'Please provide a valid image link',
            text: "Please enter a valid image link (must start with https://)! If you don't know how to submit an image, press the info button.",
            icon: 'error',
            confirmButtonText: 'Close',
            showCancelButton: true,
            cancelButtonText: 'Info',
          }).then((result) => {
            if (result.isConfirmed) {
              // console.log("Close button clicked");
            } else if (result.isDismissed) {
              // console.log("Info button clicked");
              window.open('https://www.google.com/search?q=image+hosting+sites+like+imgur&oq=image+host&gs_lcrp=EgZjaHJvbWUqBwgDEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg90gEIODAyM2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8', '_blank');
            }
      })
        return;
      }

      if(price < 0 || price === 0){
        Swal.fire({
            title: 'Please provide a valid price',
            icon: 'error',
            confirmButtonText: 'Close',
      })
        return;
      }

    if (isNaN(stockStatus) || stockStatus <= 0) {
    Swal.fire({
        title: 'Invalid Stock',
        text: 'Stock must be a positive number.',
        icon: 'error',
        confirmButtonText: 'Close'
    });
    return;
}
// console.log(Newequepment);

//* send data to backend

    fetch('https://ph-10-as-server-three.vercel.app/equipment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Newequepment)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            Swal.fire({
              title: 'submit success',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Close'
            })
        }
    })
    .catch(err => console.log('what is this', err));


} //!handleSubmit function end


    return (
        <>
        <div className="grid justify-items-center my-10">
            

            <div className="text-center my-10">
                <h2 className="font-bold text-4xl">Add your tutorial</h2>
            </div>


            <div className="border-2 rounded-3xl bg-[#ffd36d] shadow-xl md:w-2/4 p-5">

            <div className="text-center my-5 text-black">
                <h2 className="font-bold text-2xl">Become a tutor</h2>
                <p className="text-gray-600 text-sm">
                    Earn money sharing your expert knowledge with students.<br/>
                     Sign up to start tutoring online with Preply.</p>
            </div>

{/* Form start */}
            <form 
            onSubmit={handleSubmit}
            className="
            card-body backdrop-blur-xl rounded-2xl 
            lg:grid lg:grid-cols-2 md:w-full
            ">

{/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Your email</span>
          </label>
          <input name="email" type="email" value={user?.email} className="input input-bordered bg-white" readOnly />
        </div>

{/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Name</span>
          </label>
          <input name="name" type="text"  value={user?.displayName} className="input input-bordered bg-white" readOnly />
        </div>


{/* tutorial cover image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Image link</span>
          </label>
          <input name="image" type="text" placeholder="Item Name" className="input input-bordered bg-white" required />
          </div>

{/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Description</span>
          </label>
          <input name="description" type="text" placeholder="Description" className="input input-bordered bg-white" required />
        </div>


{/* language name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Language</span>
          </label>

 <select

ref={categoryRef}
    className="text-black py-3 rounded-lg"
>
    <option value="English">English</option>
    <option value="Spanish">Spanish</option>
    <option value="French">French</option>
    <option value="German">German</option>
    <option value="Italian">Italian</option>
    <option value="Chinese">Chinese</option>
    <option value="Arabic">Arabic</option>
    <option value="Japanese">Japanese</option>
    <option value="Portuguese">Portuguese</option>
</select>
        </div>



{/* Rating */}
<div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl ">Rating</span>
          </label>

<select

ref={ratingRef}
    className="text-black py-3  rounded-lg text-center"
>
  <option value="5">5</option>
  <option value="4.5">4.5</option>
  <option value="4">4</option>
  <option value="3.8">3.8</option>
  <option value="3.5">3.5</option>
  <option value="3">3</option>
  <option value="2">2</option>
  <option value="1">1</option>
</select>
</div>


{/* Price */}
<div className="form-control">
  <label className="label">
    <span className="label-text text-md text-black font-bold md:text-xl">Price</span>
  </label>
  <div className="relative">
    <input 
      name="price" 
      type="number" 
      placeholder="Price" 
      className="input input-bordered w-full pr-8 bg-white" 
      required 
    />
    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold pointer-events-none">
      $
    </span>
  </div>
</div>


{/*submit*/}
<div className="col-span-2">
    <input type="submit" className="btn hover:btn-outline"/>
</div>

      </form>
            </div>
        </div>
        </>
    );
};

export default AddTutorial;