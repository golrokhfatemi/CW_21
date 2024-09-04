import { useMutation } from "@tanstack/react-query"
import { createCourse} from "../Pages/Home/-api/course-api"

export default function useCreateCourse() {
   return useMutation({
     mutationFn : (newCourse) => createCourse(newCourse),
     mutationKey :["create"]
   })
 }