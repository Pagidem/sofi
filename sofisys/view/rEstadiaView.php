<?php include('includes/complements/head.php'); ?>

<body class="sidebar-mini layout-fixed sidebar-open" style="height: auto;">
	<div class="wrapper">
		
		<?php include('includes/complements/navbar.php'); ?>

		<?php include('includes/complements/sidebar.php'); ?>

		<!-- Cuerpo del wrapper -->

		<div class="content-wrapper" style="min-height: 542.493px;">
			<!-- Main content -->
			<div class="invoice p-3 mb-3">
				<!-- titulo -->
				

				<section class="content">
					<div class="row">
						<div class="col-md-2">
							
						</div>

						<div class="col-md-8">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title"><strong>Por favor ingresar los datos solicitados para registrar estadia </strong></h3>
									
									
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
									</div>
								</div>


								<div class="card-body">

									<div role="form">
										<div id="_div_restadia_"></div>
										
										<!-- /.Campos de Documento de identidad-->
										<label><strong>Datos de cliente</strong></label>
											<div class="row">
												<div class="col-5">
													<input type="number" class="form-control" placeholder="N° de Documento" id="eci2" value="">
												</div>
												<div class="col-2">
													<button type="button" class="btn btn-primary btn-block" onclick="existe()">Verificar</button>
												</div>
												<div class="col-5">
													<input type="hidden" id="iddoc1" value="">
													
												</div>
												
											</div>
											<br/>

											<div id="_div_ecliente1_" onclick="eliminarAlerta()"></div>

										<!-- SEPARADOR -->
										<hr style="border-color:blue;">

										<label><strong>Datos de habitación</strong></label>
										<br/>
										

										<div class="row">
											<div class="col-6">
												<label><strong>Tipo de registro</strong></label>
												<br/>
												<!-- /.Campo de tippo solicitud-->
												<div class="input-group mb-3">
													<select class="form-control select2bs4 select2-hidden-accessible" style="width: 100%;" data-select2-id="25" tabindex="-1" aria-hidden="true" id="tEstadia">
														<option selected="selected" data-select2-id="estadia" value="estadia">Estadia</option>
														
													</select>
												</div>
											</div>
											<div class="col-6">
												
												
											</div>
										</div>

										<label><strong>Tiempo de estadía</strong></label>

										<div class="row">
											<div class="col-1">
												<p>De :</p>
											</div>
											<div class="col-3">
												<input type="text" id="fecha1" class="form-control">
												<input type="hidden" id="f1" value="0">
											</div>
											<div class="col-2">
												<p>Hasta :</p>
											</div>
											<div class="col-3">
												<input type="text" id="fecha2" class="form-control">
												<input type="hidden" id="f2" value="0">
											</div>
											<div class="col-1">
												<p>Dias:</p>
											</div>
											<div class="col-2">
												<input type="text" id="dias" class="form-control" onclick="calcDias()">
											</div>
										</div>

										<div class="row">
											<div class="col-3">
												<label><strong id="nh2">N° de habitación</strong></label>
												<input type="number" class="form-control" value="" id="enh1">
											</div>
											<div class="col-3">
												<label><strong>Tipo</strong></label>
												<input type="text" class="form-control" value="" id="eth1">
											</div>
											<div class="col-3">
												<label><strong>Precio x día</strong></label>
												<input type="number" class="form-control" value="" id="eph1">
											</div>
											<div class="col-3">
												<label><strong>Precio x estadía</strong></label>
												<input type="number" class="form-control" placeholder="Elija fechas" id="peh1">
											</div>
										</div>
										<br/>
										<!-- SEPARADOR -->
										<hr style="border-color:blue;">

										<label><strong>Pagos realizados</strong></label>
										<br/>
										<div class="row">
											<div class="col-3">
												<label><strong>A cuenta</strong></label>
												<input type="number" class="form-control" placeholder="0" id="acu1">
											</div>
											<div class="col-3">
												<label><strong>Pagado</strong></label>
												<input type="number" class="form-control" placeholder="0" id="pag1"  onclick="restar()">
											</div>
											<div class="col-3">
												<label><strong>Por pagar</strong></label>
												<input type="number" class="form-control" placeholder="0" id="xpag1" disabled="on">
											</div>
											<div class="col-3">
												<label><strong>Total</strong></label>
												<input type="number" class="form-control" placeholder="0" id="total1">
											</div>
										</div>

										<br/>

										
										<!-- /.Campo de aceptar los terminos de la empresa-->
										<div class="row">
											<div class="col-3"></div>
											<!-- /.Boton de registro-->
											<div class="col-6">
												<button type="button" class="btn btn-primary btn-block" onclick="registrarEstadia()">Registrar</button>
											</div>
											<div class="col-3"></div>
											<!-- /.col -->
										</div>
										<hr style="border-color:blue;">
										<br/>
										<div id="_div_registroe_" onclick="eliminarAlerta()"></div>

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
	<script type="text/javascript" src="includes/ajax/estadia.js"></script>
	<script type="text/javascript" src="includes/jquery-ui.js"></script>

</body>
</html>