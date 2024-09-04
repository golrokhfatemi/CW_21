import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import useCreateCourse from "../../hooks/useCreateCourse";


const options = [
  { value: "1", label: " 1" },
  { value: "2", label: " 2" },
];

export default function AddCourse() {
  const {mutate} = useCreateCourse()
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      teacher: "",
      title: "",
      duration: "",
      price: "",
      description: "",
      category: "",
      number_of_chapter:"",
      number_of_viewer:"",
      upload_images: "",
    },
  });

    // const handleSubmitForm = (values) => {
    //   console.log(values);
    //   dispatch(createContacts(values));
    //   navigate("/");
    // };
    const onSubmit = (values) => {
      console.log(values);

      const formData = new FormData()
      formData.append("teacher" , values.teacher)
      formData.append("title" , values.title)
      formData.append("duration" , values.duration)
      formData.append("price" , values.price)
      formData.append("description" , values.description)
      formData.append("category" , values.category)
      formData.append("number_of_chapter" , values.number_of_chapter)
      formData.append("number_of_viewer" , values.number_of_viewer)
      formData.append("upload_images" , values.upload_images[0])

      console.log(values.upload_images[0]);
      console.log(values.upload_images);
      console.log(formData.get("upload_images"));
      mutate(formData)
      
    }
  return (
    <div className="felx flex-col justify-center items-center bg-slate-200 m-5 rounded-lg p-4 ">
      <div>
        <div className="font-bold text-2xl text-center"> Application</div>
        <div className="font-bold text-lg text-center m-4"> Add Course Page </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              lable={"Teacher name"}
              name={"teacher"}
              register={register("teacher", {
                required: {
                  value: true,
                  message: "   Please Enter teacher name  ",
                },

                minLength: {
                  value: 3,
                  message: "At Least 3 characture",
                },
              })}
              errors={errors}
            />
            {/* <p className='text-red-600 '>{errors.name?.message}</p> */}

            <TextInput
              lable={" Course title"}
              name={"title"}
              register={register("title", {
                required: {
                  value: true,
                  message: " Please Enter course title",
                },

                minLength: {
                  value: 3,
                  message: "At Least 3 charactur ",
                },
              })}
              errors={errors}
            />

            <TextInput
              lable={" Period of courseم"}
              name={"duration"}
              register={register("duration", {
                required: {
                  value: true,
                  message: "Please enter the duration of course",
                },

                maxLength: {
                  value: 5,
                  message: "At last 5 characture",
                },
              })}
              errors={errors}
            />

            <SelectInput
              label={" Category of course"}
              name={"category"}
              register={register("category", {
                // required: {
                //   value: true,
                //   message: " Please enter the category of course ",
                // },
              })}
              options={options}
              errors={errors}
            />

            <TextInput
              lable={"  Price "}
              name={"price"}
              register={register("price", {
                required: {
                  value: true,
                  message: "Please enter price of the course",
                },
              })}
              errors={errors}
            />

            <TextInput
              lable={"  Course description "}
              name={"description"}
              register={register("description", {
                required: {
                  value: true,
                  message: "Please enter description of course",
                },
              })}
              errors={errors}
            />

          <TextInput
              lable={"number of chapter"}
              name={"number_of_chapter"}
              register={register("number_of_chapter", {
                required: {
                  value: true,
                  message: "Please enter the duration of course",
                },

                maxLength: {
                  value: 5,
                  message: "At last 5 characture",
                },
              })}
              errors={errors}
            />

          <TextInput
              lable={" number of veiwer"}
              name={"number_of_viewer"}
              register={register("number_of_viewer", {
                required: {
                  value: true,
                  message: "Please enter the duration of course",
                },

                maxLength: {
                  value: 5,
                  message: "At last 5 characture",
                },
              })}
              errors={errors}
            />

            <div className="m-5 w-full flex flex-row justify-center items-center ">
              <div className="px-8">
                <label
                  className="block text-gray-700 text-sm font-bold text-center  "
                  htmlFor="image"
                >
                 upload_images:{" "}
                </label>
              </div>

              <input
                type="file"
                name="upload_images"
                accept="image/*"
                {...register("upload_images")}
              />
              {errors.image && (
                <p className="text-red-600 text-sm  ">{errors.image.message}</p>
              )}
            </div>

            <div className="flex justify-around mt-10">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}
