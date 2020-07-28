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
	<!-- Style para datepicker -->
  <link rel="stylesheet" type="text/css" href="includes/jquery-ui.css">


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
						<div class="col-lg-8 col-md-8 col-sm-8">

							<div class="card card-primary">
								<div class="card-header">
									<h2 class="card-title" ><strong>Pagos Registrados Por Estadías</strong></h2>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
										</div>
									</div>


									<div class="card-body">
										<div class="row">
											<div class="col-sm-12 col-md-12 col-lg-12">
												<table id="tblreg" class="table table-bordered table-hover table-sm table-striped table-responsive table-bordered desplazable1">
													<thead>
														<tr>
															<th>ID</th>
															<th>Tipo de Atención</th>
															<th>Fecha de Ingreso</th>
															<th>Fecha de Salida</th>
															<th>A Cuenta</th>
															<th>Pagado</th>
															<th>Deuda</th>
															<th>Total A Pagar</th>
															<th>Detalles</th>
														</tr>
													</thead>
													<tbody id="pagosreg1" >
														

														
													</tbody>
												</table>
												<br/>
												<div id="_div_pagosreg1">
													
												</div>
												<br/>
												<div class="row">
													<div class="col-sm-4 col-md-4 col-lg-4">
														<label>Total Pagado</label>
														<input type="text" class="form-control" disabled="true" id="tpagado1">
													</div>
													<div class="col-sm-4 col-md-4 col-lg-4">
														<label>Total Deudas</label>
														<input type="text" class="form-control" disabled="true" id="tdeuda1">
													</div>
													<div class="col-sm-4 col-md-4 col-lg-4">
														<label>Total Ingresos</label>
														<input type="text" class="form-control" disabled="true" id="ttotal1">
													</div>
												</div>
												
											</div>

										</div>
									</div>
								</div>


							</div>

							<div class="col-sm-4 col-md-4 col-lg-4">
								<div class="card card-primary">

								<div class="card-header">
									<h2 class="card-title" ><strong>Filtros para ingresos</strong></h2>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
										</div>
									</div>


									<div class="card-body">
										<div class="row">
											<div class="col-sm-12 col-md-12 col-lg-12">
												<div class="card-primary">
													<hr style="border-color:blue;">
													<div class="card-body">
														<label >Fecha de ingreso</label>
														<input type="text" id="deingreso1" class="form-control" placeholder="AAAA/MM/DD">
														<input type="hidden" id="ingreso1">
														<label>Fecha de salida</label>
														<input type="text" id="desalida1" class="form-control" placeholder="AAAA/MM/DD">
														<input type="hidden" id="salida1" >

													</div>
													<hr style="border-color:blue;">
													<button type="button" class="btn btn-primary" id="btnPagos">Mostrar</button>
													<br/>
													
													
												</div>
												<br>
												<div id="fec1"></div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</section>

					


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
			<script type="text/javascript" src="includes/jquery-ui.js"></script>


		</body>
		</html>