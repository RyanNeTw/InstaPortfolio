import { useState } from "react";
import { useForm } from "react-hook-form";
import SendMail from "../../api/MailApi";
import CheckSvg from "../../assets/check";

function Form() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newdata = {
      myMail: "ezzerqtiryan@gmail.com",
      otherMail: data.email,
      subject: data.subject,
      text: data.object,
    };

    SendMail(newdata).then((data) => setStatus(data));
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-full flex flex-col gap-2 justify-center items-center rounded-3xl"
      >
        {status == "200" ? (
          <div className="flex flex-row gap-2 items-center">
            <CheckSvg />
            <h3 className="text-xs font-bold uppercase tracking-wide text-white">
              E-mail sent with success
            </h3>
          </div>
        ) : null}
        <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
          <div className="flex flex-col w-full md:w-2/4">
            <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-white">
              Email
            </h3>
            <input
              placeholder="E-mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
            <span>
              {errors.email && (
                <span className="text-yellow-400 text-xs italic">
                  *Please fill out this field
                </span>
              )}
            </span>
          </div>

          <div className="flex flex-col w-full md:w-2/4">
            <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-white">
              Subject
            </h3>
            <input
              placeholder="Subject"
              {...register("subject", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
            <span className="text-white">
              {errors.subject && (
                <span className="text-yellow-400 text-xs italic">
                  *Please fill out this field
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-white">
            Object
          </h3>
          <textarea
            placeholder="Text"
            {...register("object", { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          />
          <span className="text-white">
            {errors.object && (
              <span className="text-yellow-400 text-xs italic">
                *Please fill out this field
              </span>
            )}
          </span>
        </div>

        <input
          type="submit"
          className="bg-gray-200 text-gray-700 border border  w-full appearance-none cursor-pointer rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-300 hover:bg-gray-300"
        />
      </form>
    </>
  );
}

export default Form;
