"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface FormularioProps {
  numero: string;
  setNumero: Dispatch<SetStateAction<string>>;
}

export default function Formulario({ numero, setNumero }: FormularioProps) {
  const [warningNotification, setwarningNotification] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value.trim();
    setNumero(inputValue);
    if (!/^\d*$/.test(inputValue)) {
      return setwarningNotification(
        "Por favor introduzca solo numeros o numeros enteros"
      );
    } else {
      setwarningNotification("");
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-center text-xl font-semibold mb-4">
        Calculadora de Series Numéricas
      </h2>
      <form className="flex flex-col items-center">
        <label
          htmlFor="number"
          className="text-sm font-medium text-gray-900 mb-2"
        >
          Ingresa un número (n):
        </label>
        <input
          type="text"
          id="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ej. 1"
          required
          value={numero}
          onChange={handleChange}
        />
        {warningNotification && (
          <p className="text-red-500 text-sm mb-2">{warningNotification}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-medium uppercase rounded-full px-6 pb-2 pt-2.5 shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
