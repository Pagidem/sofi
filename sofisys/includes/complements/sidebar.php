<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Iitulo y logo de sidebar -->
  <a href="?view=principal" class="brand-link">
    <!-- Ubicacion de png para el logo -->
    <img src="includes/dist/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" >
    <span class="brand-text font-weight-light">Hotel Sofía</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Nombre de usuario logeado e imagen-->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <!-- Ubicacion de png para el usuario-->
        <img src="includes/dist/img/user.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a  class="d-block">Bienvenido <?php echo $_SESSION['app_id'] ?></a>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <!-- Arbol desplegable para opciones de registros-->
        <li class="nav-item has-treeview menu-open">
          <a href="eHabitacion.php" class="nav-link active">
            <i class="nav-icon fas fa fa-registered"></i>
            <p>
              Check-in
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview" style="display: block;">

            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=res" class="nav-link">
                <i class="nav-icon fas fa fa-home"></i>
                <p>Registrar Reserva</p>
              </a>
            </li>

            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=ocu" class="nav-link">
                <i class="nav-icon fas fa fa-home"></i>
                <p>Registrar Estadía</p>
              </a>
            </li>

            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=conf" class="nav-link">
                <i class="nav-icon fas fa fa-home"></i>
                <p>Confirmar Reserva</p>
              </a>
            </li>

            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=ncli" class="nav-link">
                <i class="nav-icon fas fa fa-id-card"></i>
                <p>Registrar Cliente</p>
              </a>
            </li>

            
          </ul>
        </li>

        <!-- Arbol desplegable para opciones de consultas-->
        <li class="nav-item has-treeview ">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa fa-door-open"></i>
            <p>
              Check-out
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">


            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=lib" class="nav-link">
                <i class="nav-icon fas fa fa-home"></i>
                <p>Liberar Habitación</p>
              </a>
            </li>

            <!-- Boton para registrar clientes-->
            <li class="nav-item">
              <a href="?view=menus&tipo=edi" class="nav-link">
                <i class="nav-icon fas fa fa-home"></i>
                <p>Estado de Habitación</p>
              </a>
            </li>
          </ul>
        </li>

        <!-- Arbol desplegable para opciones de consultas-->
        <li class="nav-item has-treeview ">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa fa-search"></i>
            <p>
              Consultas
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">


            <!-- Boton para consulta reservas realizadas-->
            <li class="nav-item">
              <a href="?view=menus&tipo=estreg" class="nav-link">
                <i class="nav-icon fas fa-tv"></i>
                <p>Estadías registradas</p>
              </a>
            </li>

            <!-- Boton para visualizar clientes registrados-->
            <li class="nav-item">
              <a href="?view=menus&tipo=creg" class="nav-link">
                <i class="nav-icon fas fa fa-book"></i>
                <p>Clientes registrados</p>
              </a>
            </li>

            <!-- Boton para consulta de ingresos monetarios-->
            <li class="nav-item">
              <a href="?view=menus&tipo=pagos" class="nav-link">
                <i class="nav-icon fas fa fa-book"></i>
                <p>Ingresos</p>
              </a>
            </li>
          </ul>
        </li>

        <!-- Arbol desplegable para opciones de consultas-->
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa fa-users"></i>
            <p>
              Usuarios
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">


            <!-- Boton para consulta reservas realizadas-->
            <li class="nav-item">
              <a href="?view=menus&tipo=nusu" class="nav-link">
                <i class="nav-icon fas fa-tv"></i>
                <p>Registrar Usuario</p>
              </a>
            </li>
          </ul>
        </li>

        <!-- Arbol desplegable para opciones de consultas-->
        <li class="nav-item">
          <a href="?view=logout" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt text-danger"></i>
            <p><strong>Salir</strong></p>
          </a>
        </li>


      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>