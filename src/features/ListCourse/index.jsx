import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { deleteCourse } from "./listCourseSlice";

ListCourseFeature.propTypes = {};

function ListCourseFeature(props) {
  const courses = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const handleClickCourse = (idx) => {
    const action = deleteCourse(idx);
    dispatch(action);
  };

  return (
    <div>
      <h1>Course</h1>

      <ul className="list-course">
        {courses.map((course, idx) => (
          <li key={idx} onClick={() => handleClickCourse(idx)}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCourseFeature;
