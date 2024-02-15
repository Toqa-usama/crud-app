import React, { Component } from "react";
import CourseForm from "./Component/CourseForm/CourseForm";
import CourseList from "./Component/CourseList/CourseList";
class App extends Component {
  state = {
    Courses: [{ name: "Html" }, { name: "Css" }, { name: "Js" }],
    Current: "",
  };
  updateCourse = (e) => {
    this.setState({
      Current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    let Current = this.state.Current;
    let Courses = this.state.Courses;
    if (Current) {
      Courses.push({ name: Current });

      // Courses.push({ name: Current });
      this.setState({
        Courses,
        Current: "",
      });
    }
  };

  deleteCourse = (index) => {
    let Courses = this.state.Courses;
    Courses.splice(index, 1);
    this.setState({ Courses });
  };

  editCourse = (index, value) => {
    let Courses = this.state.Courses;
    let Course = Courses[index];
    Course["name"] = value;
    this.setState({
      Courses,
    });
  };
  render() {
    const { Courses } = this.state;
    const CourseListItem = Courses.map((Course, index) => {
      return (
        <CourseList
          deleteCourse={this.deleteCourse}
          index={index}
          details={Course}
          key={index}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2> Add Course</h2>
        <CourseForm
          Current={this.state.Current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
        />

        <ul>
          {this.state.Courses.length > 0 ? (
            CourseListItem
          ) : (
            <p className="p">No Courses To Show! Please Add New Course.</p>
          )}
        </ul>
      </section>
    );
  }
}

export default App;
