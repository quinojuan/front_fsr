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
import axios from "axios";
import "/node_modules/primeflex/primeflex.css";
import { useForm } from "react-hook-form";

enum RolEnum {
  ADMIN = "ADMIN",
  SECRETARY = "SECRETARY",
  CUSTOMER = "CUSTOMER",
}

interface Roles {
  rol: RolEnum;
}

const NewUser = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    axios.post("http://localhost:3000/newuser", data)
    console.log("Enviado exitosamente!")
  };

  return (
    <form className="w-9" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label className="w-5 inline-block text-right mr-2">DNI</label>
        <input {...register("dni")} placeholder="DNI" />
      </div>

      <div className="mb-2">
        <label className="w-5 inline-block text-right mr-2">NAME</label>
        <input {...register("name")} placeholder="NAME" />
      </div>
      <div className="mb-2">
        <label className="w-5 inline-block text-right mr-2">SURNAME</label>
        <input {...register("surname")} placeholder="SURNAME" />
      </div>
      <div className="mb-2">
        <label className="w-5 inline-block text-right mr-2">PHONE</label>
        <input {...register("phone")} placeholder="PHONE" />
      </div>
      {/* <div className="">
        <select className="text-right inline-block w-5" {...register("grupo")}>
          <option value={""}>Seleccione un grupo</option>
          <option value={"g1"}>grupo1</option>
          <option value={"g2"}>grupo2</option>
          <option value={"g3"}>grupo3</option>
        </select>
      </div> */}
      <div>
        <label className="w-5 inline-block text-right mr-2">Rol</label>
        <select {...register("role")}>
          <option value="">Seleccione una opcion</option>
          <option value="CUSTOMER">CUSTOMER</option>
          <option value="ADMIN">ADMIN</option>
          <option value="SECRETARY">SECRETARY</option>
        </select>
      </div>
      <div className="flex justify-content-end">
        <input className="w-5 mt-2" type="submit" />
      </div>
    </form>
  );
};

export default NewUser;
