import { useForm } from "react-hook-form";
import { useContactsData, useCreateContact } from "../hooks/useContactsData";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import SpinLoader from "../components/loaders/SpinLoader";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  phoneNo: z.number().min(1).positive(),
  address: z.string().min(1, { message: "Please enter your address" }),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

const Home = () => {
  const { data } = useContactsData(3, 4);
  const { mutate, isLoading } = useCreateContact();
  console.log(data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });

  const handleAddContact: SubmitHandler<ContactSchemaType> = (data) => {
    mutate(data);
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div></div>
        <form onSubmit={handleSubmit(handleAddContact)}>
          <div className="space-y-1">
            <label htmlFor="name">Name</label>
            <input
              className="input-form"
              type="text"
              id="name"
              {...register("name")}
              placeholder=""
            />
            {errors.name?.message && (
              <p className="error-message">{errors.name?.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              className="input-form"
              type="text"
              id="phoneNo"
              {...register("phoneNo", { valueAsNumber: true })}
              placeholder=""
            />
            {errors.phoneNo?.message && (
              <p className="error-message">{errors.phoneNo?.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label htmlFor="address">Address</label>
            <input
              className="input-form"
              type="text"
              id="address"
              {...register("address")}
              placeholder=""
            />
            {errors.address?.message && (
              <p className="error-message">{errors.address?.message}</p>
            )}
          </div>
          <button
            className="auth-button grid place-items-center mt-3"
            type="submit"
          >
            {isLoading ? <SpinLoader /> : "Add Contact"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
