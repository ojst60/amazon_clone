import { ChangeEvent, FormEvent, useState } from "react";

type UseSignUpReturn = {
  name: string;
  password: string;
  emailOrNumber: string;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isPendingSubmit: boolean;
  verifyPassword: string;
};

function useSignUp(): UseSignUpReturn {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    emailOrNumber: "",
    verifyPassword: "",
  });

  const [isPendingSubmit, setIsPendingSubmit] = useState<boolean>(false);

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onSubmit(event: FormEvent): void {
    event.preventDefault();
    console.log({ formData });
  }

  const { name, password, emailOrNumber, verifyPassword } = formData;

  return {
    name,
    emailOrNumber,
    password,
    onChange: onInputChange,
    onSubmit,
    isPendingSubmit,
    verifyPassword,
  };
}

export default useSignUp;
