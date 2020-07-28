<?php include('includes/complements/head.php'); ?>

<body class="sidebar-mini layout-fixed sidebar-open" style="height: auto;">
	<div class="wrapper">
		
		<?php include('includes/complements/navbar.php'); ?>

		<?php include('includes/complements/sidebar.php'); ?>

		<!-- Cuerpo del wrapper -->

		<div class="content-wrapper" style="min-height: 542.493px;">
			<!-- Main content -->
			<div class="invoice p-3 mb-3">

				<section class="content">
					<div class="row">
						<div class="col-md-2">
						</div>

						<div class="col-md-8">
							<div class="card card-primary">
								<div class="card-header">
									<h2 class="card-title"><strong>Por favor ingresar los datos solicitados para el registro de cliente</strong></h2>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
										</div>
									</div>

									
									
								</div>

								<div class="card-body">

										<div role="form" onkeypress="fun_registrar(event)">

											<label><strong>Datos de cliente</strong></label>
											<!-- /.Campos de Documento de identidad-->
											<div class="input-group mb-3">
												<div class="row">
													<div class="col-4">
														<input type="number" class="form-control" placeholder="N° de Doc" id="ndoc">
													</div>
													<div class="col-2">
														<input type="text" class="form-control" placeholder="Extensión" id="ext">
													</div>
													<div class="col-2">
														<select class="form-control select2bs4 select2-hidden-accessible" style="width: 100%;" data-select2-id="25" tabindex="-1" aria-hidden="true" id="tipodoc">
															<option selected="selected" data-select2-id="CI">CI</option>
															<option data-select2-id="Libreta">Libreta</option>
															<option data-select2-id="DNI">DNI</option>
															<option data-select2-id="FRI">FRI</option>
															<option data-select2-id="OTRO">OTRO</option>
														</select>
													</div>
													<div class="col-2">
														<input type="text" class="form-control" placeholder="Nacimiento" id="añoc1">
														<input type="hidden" id="nacimiento">
													</div>
													<div class="col-2">
														<input type="text" class="form-control" placeholder="Edad" id="edadc1" onclick="calcularEdad()">
													</div>
												</div>
											</div>

											<label><strong>Nacionalidad (Opcional)</strong></label>
											<!-- /.Campo de nacionalidad (opcional)-->
											<div class="input-group mb-3">
												<input type="text" class="form-control" placeholder="Bolivia" id="nacionalidad">
												<div class="input-group-append">
													<div class="input-group-text">
														<span class="fas fa-user"></span>
													</div>
												</div>
											</div>

											<!-- /.Campo de nombres-->
											<div class="input-group mb-3">
												<input type="text" class="form-control" placeholder="Nombres" id="nombres">
												<div class="input-group-append">
													<div class="input-group-text">
														<span class="fas fa-user"></span>
													</div>
												</div>
											</div>
											<!-- /.Campo de apellidos-->
											<div class="input-group mb-3">
												<input type="text" class="form-control" placeholder="Apellidos" id="apellidos">
												<div class="input-group-append">
													<div class="input-group-text">
														<span class="fas fa-user"></span>
													</div>
												</div>
											</div>
											<!-- /.Campo de celular-->
											<div class="input-group mb-3">
												<input type="number" class="form-control" placeholder="Celular" id="celular">
												<div class="input-group-append">
													<div class="input-group-text">
														<span class="fas fa-user"></span>
													</div>
												</div>
											</div>
											<!-- /.Campo de telefono-->
											<div class="input-group mb-3">
												<input type="number" class="form-control" placeholder="N° de Referencia" id="referencia">
												<div class="input-group-append">
													<div class="input-group-text">
														<span class="fas fa-user"></span>
													</div>
												</div>
											</div>

											<div class="row">
												<div class="col-6">
													<label><strong>Estado civil</strong></label>
													<br/>
													<!-- /.Campo de tippo solicitud-->
													<div class="input-group mb-3">
														<select class="form-control select2bs4 select2-hidden-accessible" style="width: 100%;" data-select2-id="25" tabindex="-1" aria-hidden="true" id="estadoCivil">
															<option selected="selected" data-select2-id="soltero">Soltero</option>
															<option data-select2-id="casado">Casado</option>
															<option data-select2-id="viudo">Viudo</option>
															<option data-select2-id="divorciado">Divorciado</option>
														</select>
													</div>
												</div>
												<div class="col-6">
													<label><strong>Ocupación</strong></label>
													<br/>
													<input type="text" class="form-control" placeholder="Ocupación" id="ocupacion">

												</div>
											</div>


											<!-- /.Campo de aceptar los terminos de la empresa-->
											<div class="row">
												<div class="col-3"></div>
												<!-- /.Boton de registro-->
												<div class="col-6">
													<button type="button" class="btn btn-primary btn-block" onclick="nuevoCliente()">Registrar</button>
												</div>
												<div class="col-3"></div>
												<!-- /.col -->
											</div>

											<br/>

											<div id="_AJAX_CLI_"></div>


											
										</div>
									</div>

							</div>
						</div>

						<div class="col-md-2">
						</div>
				</section>
			</div>
		</div>
	</div>



	<?php include('includes/complements/footer.php'); ?>
	<script type="text/javascript" src="includes/ajax/registros.js"></script>
	<script type="text/javascript" src="includes/jquery-ui.js"></script>

	</body>
	</html>