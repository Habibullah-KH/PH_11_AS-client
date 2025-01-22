import { IoStarSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect, useState } from "react";

const Stat = () => {
  const [userCount, setUserCount] = useState(0);
  const [bookUserCount, setBookUserCount] = useState(0);
  const [totalUser, setTotalUser] = useState(0)
  const [reviewCount, setReviewCount] = useState(0);
  const [languageCount, setLanguageCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_url}/countUsers`);
        const data = await response.json();

        const Bookdataresponse = await fetch(`${import.meta.env.VITE_SERVER_url}/allMyBookedData`);
        const Bookeddata = await Bookdataresponse.json();

        //*get user email
       const uniqueEmail = [...new Set(data.map(user => user.email))]
       const emailCount = uniqueEmail.length;
       setUserCount(emailCount);

        //*get bookdata user email
       const BookuniqueEmail = [...new Set(Bookeddata.map(user => user.email))]
       const BookemailCount = BookuniqueEmail.length;
       setBookUserCount(BookemailCount);

       //!!! total user
       setTotalUser(bookUserCount + userCount);

       //*get user review
       const userReview = data.reduce((acc, rev)=>acc+(rev.review||0), 0);
       setReviewCount(userReview);

       //*get language
       const allLanguage = [...new Set(data.map(lang => lang.language))];
       const allLangCount = allLanguage.length;
       setLanguageCount(allLangCount);

      } catch (err) {
        console.error('Error fetching user count:', err);
      }
    };
    fetchData();
  }, [userCount]);

  // userCount?.map(data => console.log(data.email))

    return (
        <>
         <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary text-2xl">
    <FaChalkboardTeacher />
    </div>
    <div className="stat-title">All our tutors</div>
    <div className="stat-value">{userCount}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary text-2xl">
      <IoStarSharp />
    </div>
    <div className="stat-title">learner reviews</div>
    <div className="stat-value">{reviewCount}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">All languages</div>
    <div className="stat-value">{languageCount}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title">All users</div>
    <div className="stat-value">{totalUser}</div>
  </div>
</div>   
        </>
    );
};

export default Stat;