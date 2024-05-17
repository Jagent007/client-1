import { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import logo from "../../assets/logo.png";
import {
  Page,
  ImageContainer,
  Logo,
  FormContainer,
  FormGroup,
  Label,
} from "./styles";
import { toast } from "react-toastify";
import api from "../../service/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = {
        email: form.email,
        password: form.password,
      };

      const response = await api.post("/login", formData);

      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/informations");
    } catch (error: any) {
      setToken("");
      localStorage.removeItem("token");
      console.log(error.response.data);
      toast.error(`${error.response.data.message}` || "Erro inesperado", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Page>
      <ImageContainer>
        <Logo src={logo} alt="Logo" />
      </ImageContainer>

      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <input
            required
            className="input-mask"
            name="email"
            value={form.email}
            type="email"
            onChange={handlerInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <input
            required
            className="input-mask"
            name="password"
            value={form.password}
            type="password"
            onChange={handlerInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Button text="Entrar" color="#23742f" />
        </FormGroup>
      </FormContainer>
    </Page>
  );
}
