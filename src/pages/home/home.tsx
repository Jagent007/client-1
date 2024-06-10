import { useState } from "react";
import InputMask from "react-input-mask";
import {
  FormContainer,
  Page,
  Logo,
  ImageContainer,
  FormGroup,
  SwitchContainer,
  Label,
  ContainerModal,
  ContentBox,
} from "./styles";
import logo from "../../assets/logo.png";
import api from "../../service/api";
import { toast } from "react-toastify";
import Button from "../../components/button/button";
import { Switch } from "@mui/material";
import Footer from "../../components/footer/footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModalId, setShowModalId] = useState(false);
  const [responseId, setResponseId] = useState("");
  const [form, setForm] = useState({
    value: "",
    payment: "",
    name: "",
    cpf: "",
    cellphone: "",
  });

  const [checked, setChecked] = useState<boolean>(false);

  const toggleFormColor = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const numericValue = parseFloat(form.value.replace(/[R$\.,]/g, ""));
    if (numericValue < 500) {
      toast.error(
        "O valor de comprar ou de venda não pode ser menor que R$500",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    try {
      const formData = {
        value: form.value,
        payment: form.payment,
        name: form.name,
        cpf: form.cpf,
        cellphone: form.cellphone,
        type: checked ? "sell" : "buy",
      };

      const response = await api.post("/sales", formData);

      if (response.status === 200) {
        setResponseId(response.data[0].id);
        setShowModalId(true);
        navigator.clipboard.writeText(response.data[0].id);
      }


    } catch (error: any) {
      toast.error(`${error.response.data.message}` || "Erro inesperado", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleClose = (open?: boolean) => {
    setShowModal(false);
    setShowModalId(false);

    if (open) {
      window.open("https://t.me/P2PIX_OFC", "_blank");
    }
  };

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <Page>
      <ImageContainer>
        <Logo src={logo} alt="Logo" />
      </ImageContainer>

      <SwitchContainer>
        <span className="saleType">Comprar USDT</span>
        <Switch
          checked={checked}
          onChange={toggleFormColor}
          sx={{
            width: 60,
            height: 50,
            color: "#61ce70",
            "& .MuiSwitch-thumb": {
              width: 30,
              height: 30,
            },
            "& .MuiSwitch-track": {
              borderRadius: 15, // Isso deve ser metade da altura do thumb
            },
          }}
        />
        <span className="saleType">Vender USDT</span>
      </SwitchContainer>

      <FormContainer checked={checked} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>valor</Label>
          <input
            required
            className="input-mask"
            name="value"
            value={form.value}
            type="text"
            onChange={handlerInputChange}
            placeholder="R$ (Mínimo R$500)"
          />
        </FormGroup>

        <FormGroup>
          <Label>Pagamento</Label>
          <input
            required
            className="input-mask"
            name="payment"
            value={form.payment}
            type="text"
            onChange={handlerInputChange}
            placeholder="Ex. Pix, Transferência Bancária, Criptos."
          />
        </FormGroup>

        <FormGroup>
          <Label>Nome</Label>
          <input
            required
            className="input-form"
            name="name"
            value={form.name}
            type="text"
            onChange={handlerInputChange}
            placeholder="Nome Completo"
          />
        </FormGroup>

        <FormGroup>
          <Label>CPF</Label>
          <InputMask
            required
            className="input-mask"
            mask="999.999.999-99"
            name="cpf"
            value={form.cpf}
            type="text"
            onChange={handlerInputChange}
            placeholder="999.999.999-99"
          />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <InputMask
            required
            className="input-mask"
            mask="(99)99999-9999"
            name="cellphone"
            value={form.cellphone}
            type="text"
            onChange={handlerInputChange}
            placeholder="(99)99999-9999"
          />
        </FormGroup>

        <Button
          text={checked ? "Confirmar Venda" : "Confirmar Compra"}
          color={checked ? "#9c4d4d" : "#23742f"}
        />
      </FormContainer>

      <ContainerModal
        open={showModalId}
        onClose={() => handleClose(true)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ContentBox>
          <h2 id="simple-modal-title">
            {checked ? "Confirmar Venda" : "Confirmar Compra"}
          </h2>
          <p id="simple-modal-description">
            ID copiado na sua área de transferência, cole no chat do telegram ao
            fechar.
            <br />
            ID: {responseId}
          </p>
          <Button
            type="button"
            text="Fechar"
            color="#23742f"
            onClick={handleClose}
          />
        </ContentBox>
      </ContainerModal>
      <Footer />
    </Page>
  );
}
