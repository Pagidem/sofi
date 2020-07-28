<?php include('includes/complements/head.php'); ?>

<body class="hold-transition register-page" style="background-color:#044cac">

<div class="register-box">
  <br/>
  <div class="login-logo">
    <b><strong style="color: #FFFFFF; ">Nuevo Registro de Usuario</strong></b>
  </div>

  <!-- /.Cuerpo del formulario -->
  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Ingresar los datos del responsable(nuevo empleado)</p>

      <div role="form">
        <!-- /.Campos de Documento de identidad-->
        <div class="input-group mb-3">
          <div class="row">
            <div class="col-6">
              <input type="number" class="form-control" placeholder="N° de Doc" id
              ="num_doc">
            </div>
            <div class="col-3">
              <input type="text" class="form-control" placeholder="Ext." id="ext_doc">
            </div>
            <div class="col-3">
              <select class="form-control select2bs4 select2-hidden-accessible" id="tipod" style="width: 100%;" data-select2-id="tipod" tabindex="-1" aria-hidden="true">
                <option selected="selected" data-select2-id="CI">CI</option>
                <option data-select2-id="Libreta">Libreta</option>
                <option data-select2-id="DNI">DNI</option>
                <option data-select2-id="FRI">FRI</option>
                <option data-select2-id="OTRO">OTRO</option>
              </select>
            </div>
          </div>
        </div>
        <!-- /.Campo de nombres-->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Nombres" id="nombres1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <!-- /.Campo de apellidos-->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Apellidos" id="apellidos1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <!-- /.Campo de celular-->
        <div class="input-group mb-3">
          <input type="number" class="form-control" placeholder="Celular" id="celular1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <!-- /.Campo de referencias personasles-->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="N° de referencia" id="referencia1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <!-- /.Campo de usuario-->
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Usuario" id="usuario1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <!-- /.Campo de clave-->
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Clave" id="clave1">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-3">

          </div>
          <!-- /.Boton de registro-->
          <div class="col-6">
            <button type="button" class="btn btn-primary btn-block" onclick="nuevoUsuario()">Registrar Usuario</button>
          </div>
          <div class="col-3">

          </div>
          <!-- /.col -->
        </div>
      </div>
    
      <a href="?view=principal" class="text-center">Volver</a>

      <br/>
      <div id="_AJAX_USU_"></div>

    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->


</div>
<!-- /.register-box -->

<?php include('includes/complements/footer.php'); ?>
<script type="text/javascript" src="includes/ajax/registros.js"></script>

</body>
</html>