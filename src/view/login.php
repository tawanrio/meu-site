<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/login.css">
    <title>Login</title>
    
</head>
<body class="pagelogin">
    <form class="form-login" action="#" method="post" autocomplete="off">
        <div class="login-card card">
            <div class="card-header">
               <span>Login</span>
            </div>
            <div class="card-body">
                <?php echo $invalid ?? ''; ?>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email"
                        class="form-control ?>"
                        value=""
                        placeholder="Informe o e-mail" autofocus>
                    <div class="invalid-feedback">
                    </div>
                </div>
                <div class="form-group">
                    <label for="pass">Senha</label>
                    <input type="pass"  id="pass" name="pass"
                        class="form-control  ?>"
                        placeholder="Informe a senha">
                    <div class="invalid-feedback">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-lg btn-primary">Entrar</button>
            </div>
        </div>
    </form>
</body>
</html>