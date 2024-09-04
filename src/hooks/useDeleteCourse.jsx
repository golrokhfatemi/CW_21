import { useMutation } from "@tanstack/react-query";
import { deleteCourse } from "../Pages/Home/-api/course-api";


export default function useDeleteCourse() {
  return useMutation({
    mutationFn : (id) => deleteCourse(id),
    mutationKey :["delete"]
  })
}
