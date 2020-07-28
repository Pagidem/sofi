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
									<h2 class="card-title"><strong>Detalles de Pago Registrado por Estadía</strong></h2>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
									</div>
								</div>

								<div class="row">
									<div class="col-8">

									</div>
									<div class="col-2">
										<label>Registro N°:</label>
									</div>
									<div class="col-2">
										<label id="detEst2">0000</label>
									</div>
								</div>
								<div class="card-body">
									
										<label><strong>Datos de cliente</strong></label>
										<!-- /.Campos de Documento de cliente-->
										<div class="input-group mb-3">
											<div class="row">
												<div class="col-3">
													<label>Nombres</label>
													<input type="text" class="form-control" placeholder="Nombres" id="denombre2" disabled="true">
												</div>
												<div class="col-3">
													<label>Apellidos</label>
													<input type="text" class="form-control" placeholder="Apellidos" id="deapellido2" disabled="true">
												</div>
												<div class="col-3">
													<label>N° de Documento</label>
													<input type="text" class="form-control" placeholder="CI" id="dedocumento2" disabled="true">
												</div>
												<div class="col-3">
													<label>Celular</label>
													<input type="text" class="form-control" placeholder="Telefono" id="decelular2" disabled="true">
												</div>
											</div>
										</div>
										<!-- /.Campos calculo de estadia-->
										<div class="row">
											<div class="col-2">
												<label><strong>Habitación</strong></label>
												<input type="number" class="form-control" placeholder="1" id="dehabitacion2" disabled="true">
											</div>
											<div class="col-2">
												<label><strong>Tipo</strong></label>
												<input type="text" class="form-control" placeholder="Simple" id="detipo2" disabled="true">
											</div>
											<div class="col-3">
												<label><strong>Fecha de ingreso</strong></label>
												<input type="text" class="form-control" placeholder="aaaa-mm-dd" id="deingreso2" disabled="true">
											</div>
											<div class="col-2">
												<label><strong>Días</strong></label>
												<input type="number" class="form-control" placeholder="80" id="dedias2" disabled="true">
											</div>
											<div class="col-3">
												<label><strong>Precio de estadia</strong></label>
												<input type="number" class="form-control" placeholder="Días x Precio" id="deprecio2" disabled="true">
											</div>
										</div>
										<br/>


										<!-- /.Campos registrar pagos-->
										<label><strong>Pago registrado</strong></label>
										<br/>
										<div class="row">
											<div class="col-3">
												<label><strong>A cuenta</strong></label>
												<input type="number" class="form-control" placeholder="0" id="deacuenta2" disabled="false">
											</div>
											<div class="col-3">
												<label><strong>Pagado</strong></label>
												<input type="number" class="form-control" placeholder="0" id="depagado2" onclick="ediPago()">
											</div>
											<div class="col-3">
												<label><strong>Por pagar</strong></label>
												<input type="number" class="form-control" placeholder="0" id="dedeuda2" disabled="true">
											</div>
											<div class="col-3">
												<label><strong>Total a Pagar</strong></label>
												<input type="number" class="form-control" placeholder="0" id="detotal2">
											</div>
										</div>

										<br/>
										<div id="_div_dpag2"></div>
										<br/>

										
										<!-- /.Campo de aceptar los terminos de la empresa-->
										<div class="row">
											<div class="col-3"></div>
											<!-- /.Boton de registro-->
											<div class="col-6">
												<button class="btn btn-primary" onclick="editarPago()">Registrar</button>
											</div>
											<div class="col-3"></div>
											<!-- /.col -->
										</div>
									
								</div>
							</div>
						</div>

						<div class="col-md-2">
							
						</div>
					</div>
				</section>


				



			</div>

			
		</div>

	</div>
	


	<?php include('includes/complements/footer.php'); ?>
	<script type="text/javascript" src="includes/ajax/detallEst.js"></script>
	<script type="text/javascript" src="includes/jquery-ui.js"></script>

</body>
</html>