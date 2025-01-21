import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardMyTutorial = ({ data }) => {
    const {name, image, description, language, price, review, _id} = data;
const handleDelete = id =>{
  // console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`${import.meta.env.VITE_SERVER_url}/delete/${id}`,{
        method: 'DELETE'
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(()=>{
            window.location.reload();
          })
          .catch((err) => console.error("Error deleting tutorial:", err));
      // console.log("delete confirm");
        }
      })
      // console.log('delete confirm');
    }
  });
}
  return (
  <div className="card card-side bg-base-100 shadow-xl max-w-[600px] max-h-[700px] min-h-[225px] border-2 p-2 grid grid-cols-5">
  <figure className="col-span-1">
    <img
    className="rounded-xl"
      src={image}
      alt="tutorial" />
  </figure>
  <div className="card-body col-span-4">

<div className="flex items-center justify-between">

{/* user name and language name */}
<div>
 <h2 className="card-title">{name}</h2>
 <p 
    className={`
    badge badge-secondary text-black
    ${language === 'English'? 'bg-[#fe938c]' : ''}
    ${language === 'Spanish'? 'bg-yellow-400' : ''}
    ${language === 'Japanese'? 'bg-orange-400' : ''}
    ${language === 'French'? 'bg-[#e4c1f9]' : ''}
    ${language === 'Chinese'? 'bg-[#fec5bb]' : ''}
    ${language === 'German'? 'bg-[#a9def9]' : ''}
    ${language === 'Italian'? 'bg-[#fec89a]' : ''}
    ${language === 'Arabic'? 'bg-[#99d98c]' : ''}
    ${language === 'Portuguese'? 'bg-[#f49cbb]' : ''}
    `}>

    {language}
</p>
</div>

{/* revew and price */}
<div className="flex gap-4 text-xl">
<p className="flex gap-3 items-center"><FaHeart />{review}</p>
<p>${price}</p>
</div>
</div>

    <p>{description}</p>
  </div>

 {/*updatae and delete butotn*/}
 <div className=" col-span-5 flex gap-4 items-baseline justify-end p-2 text-xl">
  <button
  onClick={()=>handleDelete(_id)}
  className="text-red-600"><IoTrashBin /></button>{/*delete button*/}
  <Link to={`/UpdateMyTutorial/${_id}`}><button className="text-lime-600"><BiEdit /></button></Link>{/*edit/update button*/}
 </div>
</div>
  );
};

CardMyTutorial.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    review: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};


export default CardMyTutorial;
