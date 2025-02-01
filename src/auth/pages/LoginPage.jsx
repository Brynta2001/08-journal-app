import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid2 container>
          <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@email.com"
              fullWidth
            />
          </Grid2>

          <Grid2 item size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 item size={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 item size={6}>
              <Button variant="contained" fullWidth>
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
