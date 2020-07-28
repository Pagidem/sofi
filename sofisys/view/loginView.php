<?php include('includes/complements/head.php'); ?>

<body class="hold-transition login-page" style="background-color:#044cac">
  
  <div class="row">
    <div class="col-sm-5 col-md-6 col-lg-9">
      <img src="includes/logos/logo-login.png">
    </div>

    <div class="col-sm-7 col-md-6 col-lg-3">
      <div class="login-box">
    <div class="login-logo">
      <span ><b><strong style="color: #FFFFFF; ">Bienvenidos al Sistema SOFIA</strong></b></span>
    </div>

    <div class="login-box-body">
      <p class="login-box-msg"><b style="color: #FFFFFF; ">Ingrese sus datos</b></p>

      <div class="card">
        <div class="card-body login-card-body">
          <div role="form" onkeypress="fun_login(event)">
            <!-- campo de usuario -->
            <div class="form-group has-feedback">
              <input id="user_login" type="text" class="form-control" placeholder="Usuario">
            </div>
            <!-- Campo de contraseña -->
            <div class="form-group has-feedback">
              <input id="pass_login" type="password" class="form-control" placeholder="Contraseña">
            </div>
            <!-- Boton de envio de datos -->
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-block" onclick="goLogin()" >Ingresar</button>
              </div>
              
            </div>
          </div>
        </div>
      <br>

      <div id="_AJAX_LOGIN" ></div>

    </div>
  </div>
    </div>
  </div>





  <script src="includes/ajax/jquery.min.js"></script>
  <script src="includes/ajax/bootstrap.min.js"></script>
  <script type="text/javascript" src="includes/ajax/login.js"></script>
</body>
</html>
