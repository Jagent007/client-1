import { useState, useEffect } from "react";
import { Page, TitleContainer, Title, Logo } from "./styles";
import api from "../../service/api";
import { UserData } from "../../types/userData";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";

export default function Informations() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/user");

        setData(response.data);
      } catch (error: any) {
        toast.error(
          `Erro ao buscar dados da API: ${error}` || "Erro inesperado",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <TitleContainer>
        <Logo src={logo} alt="Logo" />
      </TitleContainer>

      <TextField
        sx={{ width: 400, backgroundColor: "#ffffff", margin: 2 }}
        label="Pesquisar"
        value={search}
        onChange={handleSearchChange}
      />

      <TableContainer
        component={Paper}
        sx={{ maxHeight: 440, maxWidth: 1800, minWidth: 120 }}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Método de Pagamento</TableCell>
              <TableCell align="right">Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row: UserData) =>
                row.name.toLowerCase().includes(search.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: UserData) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.ip}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.cpf}</TableCell>
                  <TableCell align="right">{row.cellphone}</TableCell>
                  <TableCell align="right">R${row.value}</TableCell>
                  <TableCell align="center">{row.payment}</TableCell>
                  <TableCell align="right">
                    {row.type === "buy" ? "Comprar" : "Vender"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ backgroundColor: "#ffffff", overflow: "hidden" }}
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Page>
  );
}
