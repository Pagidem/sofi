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
						<div class="col-md-1">
							
						</div>

						<div class="col-md-10">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title"><strong>Editar los datos de habitación</strong></h3>
									
									
									<div class="card-tools">
										<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
											<i class="fas fa-minus"></i></button>
									</div>
								</div>


								<div class="card-body">

									

									<!-- SEPARADOR -->
									<hr style="border-color:blue;">

									<div role="form">
										<label><strong>Datos de habitación</strong></label>
										<br/>

										<div id="_div_estadolim_"></div>

										<div class="row">
											<div class="col-3">
												<label><strong id="nh2">Número</strong></label>
												<input type="number" class="form-control" value="" id="enh2" disabled="true">
											</div>
											<div class="col-3">
												<label><strong>Tipo</strong></label>
												<input type="text" class="form-control" value="" id="eth2">
											</div>
											<div class="col-3">
												<label><strong>Precio x día</strong></label>
												<input type="number" class="form-control" value="" id="eph2">
											</div>
											<div class="col-3">
												<label><strong>Estado limpieza</strong></label>
												<select class="form-control select2bs4 select2-hidden-accessible" style="width: 100%;" data-select2-id="25" tabindex="-1" aria-hidden="true" id="eeh2">
													<option selected="selected" data-select2-id="estadia" value="limpia">Limpia</option>
													<option data-select2-id="reserva" value="desordenada">Desordenada</option>
												</select>
											</div>
										</div>
										<br/>
										<!-- SEPARADOR -->
										<hr style="border-color:blue;">

										<!-- /.Campo de aceptar los terminos de la empresa-->
										<div class="row">
											<div class="col-3"></div>
											<!-- /.Boton de registro-->
											<div class="col-6">
												<button type="button" class="btn btn-primary btn-block" onclick="editarHab()"><strong>Editar</strong></button>
											</div>
											<div class="col-3"></div>
											<!-- /.col -->
										</div>
										<hr style="border-color:blue;">
										<br/>
										<div id="_div_editarh_" onclick="eliminarAlerta()"></div>

									</div>

								</div>
							</div>
						</div>

						<div class="col-md-1">
							
						</div>
					</div>
				</section>


				



			</div>

			
		</div>

	</div>
	


	<?php include('includes/complements/footer.php'); ?>
	<script type="text/javascript" src="includes/ajax/editarHab.js"></script>
	
	<script type="text/javascript" src="includes/jquery-ui.js"></script>

</body>
</html>