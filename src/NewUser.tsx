// model User {
//     id        String    @id @default(cuid())
//     createdAt DateTime  @default(now())
//     updatedAt DateTime  @updatedAt
//     dni       Int       @unique
//     phone     Int
//     name      String
//     surname   String
//     Payment   Payment[]
//     services  Service[] @relation("CustomerServices")
//     role      Role      @default(CUSTOMER)
import "/node_modules/primeflex/primeflex.css";
import { useForm } from "react-hook-form";

const NewUser = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form className="w-7" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-content-between mb-3 p-1">
        <label>DNI</label>
        <input {...register("dni")} placeholder="DNI" />
      </div>

      <div className="flex justify-content-between mb-3 p-1">
        <label>NAME</label>
        <input {...register("name")} placeholder="NAME" />
      </div>
      <div className="flex justify-content-between mb-3 p-1">
        <label>SURNAME</label>
        <input {...register("surname")} placeholder="SURNAME" />
      </div>
      <div className="flex justify-content-between mb-3 p-1">
        <label>PHONE</label>
        <input {...register("phone")} placeholder="PHONE" />
      </div>
      <div className="flex justify-content-between mb-3 p-1">
        <select {...register("grupo")}>
          <option value={"g1"}>grupo1</option>
          <option value={"g2"}>grupo2</option>
          <option value={"g3"}>grupo3</option>
        </select>
      </div>
      <input type="submit" />
    </form>
  );
};

export default NewUser;
