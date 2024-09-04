import { useState } from "react";
import Pagination from "../../components/Pagination";

import { useGetCourses } from "../../hooks/useGetCourses";
import useDeleteCourse from "../../hooks/useDeleteCourse";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const qc = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { data, totalItems } = useGetCourses(currentPage, itemsPerPage);
  const { mutate } = useDeleteCourse();
  const [deleteVal, setDeleteVal] = useState({});
  console.log(data);

  // const {data , totalItems}  = data

  return (
    <div>
      Course List
      {/* <div className="grid grid-cols-3 gap-3"> 
      {
        
        data?.results.map((item) =>
           (
            
              <div key={item.id} className="bg-slate-300 rounded-lg p-3">
                <p>course name : {item.title}</p>
                <p>price : ${item.price}</p>
                <p>teacher : {item.teacher}</p>
                
               </div>


           ))

      }
      </div> */}
      <table className="w-full ">
        <tr className="bg-slate-700 h-16 text-slate-100">
          <th>title</th>
          <th>teacher</th>
          <th>price</th>

          <th>Action</th>
        </tr>
        {data?.data?.results.map((item) => (
          <tr key={item.id} className="border-2 h-12">
            <td>{item.title}</td>
            <td>{item.teacher}</td>
            <td>${item.price}</td>
            <td>
              <div className="flex justify-evenly">
                <button
                  onClick={() =>
                    {
                    setDeleteVal({id:item.id , title:item.title})
                    console.log(deleteVal)}
                    
                  }
                  // mutate(item.id, {
                  //   onSuccess: () =>
                  //     qc.invalidateQueries({ queryKey: ["courses"] }),
                  // })
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <div className="flex justify-between">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <button
          type="submit"
          className="bg-slate-700 text-slate-100 p-3 rounded-md m-3"
        >
          Add new Course
        </button>
      </div>
    </div>
  );
}
