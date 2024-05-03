import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { MdInfo } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { FaShoppingCart } from 'react-icons/fa';
import { RiClosedCaptioningFill } from 'react-icons/ri';
import { BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useCoursesContext } from '../context/courses_context';
import { useCartContext } from '../context/cart_context';

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, []);

  const {
    id: courseID,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = single_course;

  return (
    <div className="bg-dark text-white">
      <div className="max-w-screen-md mx-auto p-8 grid md:grid-cols-2 gap-8">
        <div className="course-img">
          <img src={image} alt={course_name} />
        </div>
        <div className="course-details">
          <div className="bg-white text-dark text-capitalize font-semibold text-sm inline-block py-1 px-2 rounded">
            {category}
          </div>
          <div className="course-head">
            <h5 className="text-3xl mt-3">{course_name}</h5>
          </div>
          <div className="course-body">
            <p className="text-lg py-3">{description}</p>
            <div className="flex items-center">
              <span className="font-bold text-orange-500 mr-1">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="text-sm ml-2 text-purple-300">({rating_count})</span>
              <span className="text-sm ml-2">{students}</span>
            </div>

            <ul className="mt-4">
              <li className="flex items-center text-sm">
                <MdInfo className="mr-1" />
                Created by <span className="font-semibold opacity-75">{creator}</span>
              </li>
              <li className="flex items-center text-sm">
                <TbWorld className="mr-1" />
                Last updated {updated_date}
              </li>
              <li className="flex items-center text-sm">
                <RiClosedCaptioningFill className="mr-1" />
                {lang}
              </li>
            </ul>
          </div>

          <div className="course-foot">
            <div className="course-price mt-4">
              <span className="text-2xl font-bold text-purple-400 mr-2">${discounted_price}</span>
              <span className="text-2xl font-semibold text-yellow-400">${actual_price}</span>
            </div>
          </div>

          <div className="course-btn mt-4">
            <Link
              to="/cart"
              className="inline-block bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700"
              onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}
            >
              <FaShoppingCart className="inline-block mr-2" />
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white text-dark mt-8 mx-auto max-w-screen-md p-8">
        <div className="course-learn">
          <div className="text-xl font-semibold mb-4">What you'll learn</div>
          <ul className="grid gap-2">
            {learnItems &&
              learnItems.map((learnItem, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <BiCheck className="mr-2" />
                  <span className="opacity-75">{learnItem}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="course-content mt-8">
          <div className="text-xl font-semibold mb-4">Course content</div>
          <ul>
            {content &&
              content.map((contentItem, idx) => (
                <li key={idx} className="text-base font-semibold bg-gray-100 p-3 mb-2">
                  {contentItem}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
