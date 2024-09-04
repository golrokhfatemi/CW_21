import httpRequest from "../../../Services/Http-request"


export const getCourses = async(page = 1 ,itemsPerPage = 2) => {
    const url = `/api/course-list/?page=${page}&limit=${itemsPerPage}`
const res = await httpRequest.get(url)
// console.log(res.data);
const totalItems = res.data.count;
// console.log(totalItems);

// console.log(res.data.results);

return {data : res.data , totalItems}
}


export const deleteCourse = async(id) => {
    console.log(id);
    
try{
    
 const res = await httpRequest.delete(`/api/course-list/${id}/`)
 return res
}catch(e){
console.log(e.message);

}
}

export const createCourse = async (values) => {
    Array.from(values.entries())
.map((entry, index) => {
console.log(`${index}: ${entry}`)
});
    
try{
    const res = await httpRequest.post(`/api/course-list/` , values)
    return res
}catch(e){
    console.log(e.message);
    
}
}