import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth";

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: "bryan@gmail.com",
    password: "123456",
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("Google sign in");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 item size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 item size={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 item size={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
