import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import Loding from "../component/Loding";

const AddTutorial = () => {
    const {user} = useContext(AuthContext);
    const languageRef = useRef(null);
    const ratingRef = useRef(null);


    if(!user){
      return <Loding/>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      const form = new FormData(e.target);
    const email = form.get('email');
    const name = form.get('name');
    const image = form.get('image');

    const language = languageRef.current.value;
    const rating = parseFloat(ratingRef.current.value);

    const description = form.get('description');
    const price = parseFloat(form.get('price')); 
    
    const urlRegex = /^https?:\/\/.*$/i;

    const tutorialData = {email, name, image, description, price, language, rating};

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

//* send data to backend

const saveOnDatabase = async() => {
  try{
    const res = await fetch(`${import.meta.env.VITE_SERVER_url}/addTutorial`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(tutorialData)
      
  });

  if (!res.ok) {
    throw new Error("Failed to update review");
  }
     const data = await res.json();

     if(data){
      Swal.fire({
        title: 'submit success',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Close'
      })
  }}
  catch (err) {
    console.error("Error saveOnDatabase:", err);
  }
  }
saveOnDatabase();

} //!handleSubmit function end


    return (
        <>
        <div className="flex items-center flex-col hero min-h-screen bg-[url('/addTutorBG.jpg')] bg-opacity-30">
            

            <div className="z-40">
                <h2 className="font-bold text-4xl p-10">Add your tutorial</h2>
            </div>


            <div className="border-2 rounded-3xl bg-[#ffd36d] bg-opacity-20 shadow-xl md:w-2/4 p-5">

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
            card-body backdrop-blur-2xl rounded-2xl 
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

ref={languageRef}
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
  <option value="0">0</option>
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