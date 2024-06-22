// coursesData.ts

export const courses = [
  { id: 1, name: "React Crash Course" },
  { id: 2, name: "Next.js Fundamentals" },
  { id: 3, name: "Advanced CSS Techniques" },
  // tambahkan kursus lainnya
];
// pages/app/courses/page.tsx
import React from "react";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">List of Courses</h1>
      <ul className="grid gap-4">
        {courses.map((course) => (
          <li
            key={course.id}
            className="rounded-lg overflow-hidden p-4 shadow-md"
          >
            <Link href={`/courses/details/${course.id}`} passHref>
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
