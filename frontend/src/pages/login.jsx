import { useEffect } from "react";

function Login(){

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/hello`)
          .then(res => res.text())
          .then(console.log);
      }, []);
      

    return(
        <div>
            <h1>Página de Login</h1>
        </div>
    );
};

export default Login;