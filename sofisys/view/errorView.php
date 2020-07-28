<?php include('includes/complements/head.php'); ?>

<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  <?php include('includes/complements/navbar.php');
  include('includes/complements/sidebar.php'); ?>

  <div class="content-wrapper">

    <section class="content-header">
      <h1>
        Error
        <small>Página no encontrada</small>
      </h1>
    </section>

    <section class="content container-fluid">

      <div class="error-page">
        <h2 class="headline text-yellow"> 404</h2>

        <div class="error-content">
          <h3><i class="fa fa-warning text-yellow"></i> Oops! Ha ocurrido un error, por favor contacte al administrador.</h3>

          <p>
            No hemos encontrado la página solicitada.
            Puedes volver al menú principal <a href="?view=principal">Aquí</a>.
          </p>
        </div>
      </div>

    </section>

  </div>

  <?php include('view/complements/footer.php'); ?>

</div>

</body>
</html>
