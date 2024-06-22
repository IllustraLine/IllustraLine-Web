// pages/app/courses/detail/[slug]/page.tsx
import React from "react";
import { useRouter } from "next/router";

const CourseDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Misalnya, Anda dapat mengambil data kursus dari backend atau menggunakan data statis
  // Ini hanya contoh, Anda bisa menyesuaikan sesuai dengan logika pengambilan data Anda
  const courseData = {
    name: slug,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
    duration: "6 weeks",
    instructor: "John Doe",
    level: "Intermediate",
    price: "$99",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{courseData.name}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-lg mb-4">{courseData.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Duration:</strong> {courseData.duration}
            </p>
            <p>
              <strong>Instructor:</strong> {courseData.instructor}
            </p>
            <p>
              <strong>Level:</strong> {courseData.level}
            </p>
            <p>
              <strong>Price:</strong> {courseData.price}
            </p>
          </div>
          <div className="text-right">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
