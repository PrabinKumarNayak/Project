import Blogs from "../../components/Blogs/Blogs";
import Community from "../../components/Community/Community";
import CourseFeatures from "../../components/CourseFeatures/CourseFeatures";
import Courses from "../../components/Courses/Courses";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <Header />
      <Courses />
      <Blogs/>
      <Community/>
      <CourseFeatures/>
      <Newsletter/>
    </>
  );
}
