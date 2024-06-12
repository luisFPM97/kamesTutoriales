import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = ({ showRegister, setShowRegister }) => {
  function regfalse() {
    setShowRegister(false);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // Destructure formState for errors

  const { registerUser } = useAuth();

  const submit = (data) => {
      data.terms=true
      registerUser(data);
      alert("Usuario Registrado Correctamete");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
        image: "",
        terms: false, // Reset terms to unchecked state (optional)
      });
    
  };

  return (
    <div className={showRegister ? "registerP" : "registerP modalF"}>
      <div className="modal">
        <div className="img">
          <img src="/img/logoalfa.png" alt="" />
        </div>
        <form onSubmit={handleSubmit(submit)} className="form">
          <h1>Únete hoy</h1>
          <input
            type="text"
            placeholder="Nombre"
            {...register("firstName", { required: true })}
          />{" "}
          {/* Add validation using register */}
          {errors.firstName && (
            <span className="error">Nombre es obligatorio</span>
          )}{" "}
          {/* Display error if applicable */}
          <input
            type="text"
            placeholder="Apellido"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="error">Apellido es obligatorio</span>
          )}
          <input type="text" placeholder="País" {...register("country")} />
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">Correo electrónico es obligatorio</span>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">Contraseña es obligatoria</span>
          )}
          <input type="text" placeholder="imageUrl" {...register("image")} />
          <div className="terms">
            <input
              type="checkbox"
              id="miCheckbox"
              name="terms"
              {...register("terms", { required: true })}
            />{" "}
            {/* Use 'terms' for the name */}
            <p>
              Acepto los Términos, Condiciones y Políticas de Tutoriales Kames
            </p>
          </div>
          <button>EMPEZAR AHORA</button>
        </form>
        <i className="bx bx-x" onClick={regfalse}></i>
      </div>
    </div>
  );
};

export default Register;
