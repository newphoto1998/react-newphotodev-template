import { useState, useEffect } from "react";
// import LoginLayout from "../../components/layouts/Login/LoginLayout";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import SrvLogin from "../../service/authentication/auth";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent } from "@mui/material";
import swal from "sweetalert";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let BASE = import.meta.env.VITE_PATH;

  const positionPermission: string[] = ["7510","4720"];

  useEffect(() => {
    // if (localStorage.get("Cost_Center")) {
    //   navigate("/backend/dashboard");
    // }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();



    if (username != "" && password != "") {
      SrvLogin.Login(username, password).then((res: any) => {
        try {
          if (res.data[0].EmpCode != null && positionPermission.includes(res.data[0].Cost_Center)) {
           

            localStorage.setItem("user_info", JSON.stringify(res.data));

            swal({
              title: "กำลังเข้าสู่ระบบ!",
              timer: 1000,
            }).then(() => {
             
              navigate(`/${BASE}/backend/dashboard`);
            });
          } else {
           
            swal({
              title: "เกิดข้อผิดพลาด",
              text: "คุณไม่มีสิทธิ์เข้าระบบ ต้องเป็นหน่วยงาน QC เท่านั้น",
              icon: "error",
              timer: 2000,
            });
          }
        } catch (error) {
          console.error(error); // You might send an exception to your error tracker like AppSignal
          return error;
        }
      });
    } else {
      swal({
        title: "LOGIN ไม่สำเร็จ",
        text: "กรุณากรอก username หรือ password ให้ครบ !!",
        icon: "error",
        timer: 2000,
      });
    }
  };

  return (
    <div
    id="MuiBox-root css-1v1qs4"
    style={{ backgroundColor: "papayawhip", height:'100%'}}
  >
   
      <Container component="main" maxWidth="xs" >
        <Card className="rounded-xl p-3 mt-3">
 
            <CardContent >
              <Box
                sx={{
                  marginTop: 5,
                  
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                src="assets/images/daikin2.png"
                  sx={{
                    m: 4,
                    // bgcolor: "secondary.main",
                    width: "300px",
                    height: "100px",
                  }}
                >
                  <LockOutlinedIcon
                    sx={{ width: "50px", height: "50px" }}
                  />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  newphotoDev
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Box
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      color: "red",
                      fontSize: "14px",
                    }}
                  >
                    * ใช้ username และ password อันเดียวกับที่เข้าเครื่องคอม
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 100 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </CardContent>
  
        </Card>
      </Container>
  </div>
  );
}

export default Login;
