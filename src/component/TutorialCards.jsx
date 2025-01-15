const TutorialCards = ({data}) => {
    console.log(data);
    const {name, image, description, } = data;
    return (
        <>
  <div className="card card-side bg-base-100 shadow-xl max-w-[620px] border-2 p-2 grid grid-cols-5">
  <figure className="col-span-1">
    <img
    className="rounded-xl"
      src={image}
      alt="profile pic" />
  </figure>
  <div className="card-body col-span-4">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </>
    );
};

export default TutorialCards;