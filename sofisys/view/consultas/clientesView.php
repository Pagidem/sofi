<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>SOFIA</title>

  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Font Awesome -->
  <link rel="stylesheet" href="includes/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="includes/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="includes/dist/css/adminlte.min.css">
  <!-- Style para datepicker -->
  <link rel="stylesheet" type="text/css" href="includes/tabla.css">
  

</head>

<body class="sidebar-mini sidebar-collapse sidebar-closed" style="height: auto;">
	<div class="wrapper">
		
		<?php include('includes/complements/navbar.php'); ?>

		<?php include('includes/complements/sidebar.php'); ?>

		<!-- Cuerpo del wrapper -->

		<div class="content-wrapper" style="min-height: 542.493px;">
			<!-- Main content -->
			<div class="invoice p-3 mb-3">

				<section class="content">
					<div class="row">
						

						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="card card-primary">
								<div class="card-header">
									<h2 class="card-title" ><strong>Clientes Registrados</strong></h2>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
										</div>
									</div>


									<div class="card-body">
										<div class="row">
											<div class="col-sm-12 col-md-12 col-lg-12">
												<table class="table table-bordered table-hover">
													<thead>
														<tr>
															<th>ID</th>
															<th>Nombres</th>
															<th>Apellidos</th>
															<th>N° de Documento</th>
															<th>Nacionalidad</th>
															<th>Celular</th>
															<th>N° de Referencia</th>
															<th>Edad</th>
														</tr>
													</thead>
													<tbody id="clientesreg1">
														
														
													</tbody>
												</table>
												<br/>
												<div id="_div_clientesreg1">
													
												</div>
											</div>
									</div>
								</div>
							</div>


						</div>
					</section>

			</div>

			
		</div>

	</div>
	


	<footer class="footer">
  <strong>Genesys</strong> Todos los derechos reservados.

	</footer>

	<!-- jQuery -->
	<script src="includes/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script src="includes/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="includes/ajax/jquery.min.js"></script>
	<script src="includes/ajax/bootstrap.min.js"></script>
	<!-- AdminLTE App -->
	<script src="includes/dist/js/adminlte.min.js"></script>
	<!-- Datatables -->
	<script type="text/javascript" src="includes/ajax/consultas.js"></script>


</body>
</html>