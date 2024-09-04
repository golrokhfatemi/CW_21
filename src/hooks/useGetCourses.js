import { useQuery } from "@tanstack/react-query"
import { getCourses } from "../Pages/Home/-api/course-api"


export const useGetCourses =(page ,itemsPerPage) => {
    return useQuery({
        queryFn : () => getCourses(page ,itemsPerPage),
        queryKey : ["courses" , page ,itemsPerPage]
    })
}

