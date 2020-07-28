create database sofi;
use sofi;

create table documento(
	idd int not null primary key auto_increment,
	tipod varchar(50) not null,
	numerod varchar(30) not null,
	extension varchar(10) not null
);

INSERT INTO documento(idd,tipod,numerod,extension)
VALUES
(null,'ci',951357456852,'bol');

create table persona(
	idpe int not null primary key auto_increment,
	nombres varchar(60) not null,
	apellidos varchar(60)not null,
	celular varchar(30),
	estadoCivil varchar(25),
	ocupacion varchar(30),
	referencias varchar(30),
	edad int,
	doc int not null,
	foreign key(doc) references documento(idd)
);

INSERT INTO persona(idpe,nombres,apellidos,celular,estadoCivil,ocupacion,referencias,edad,doc)
VALUES
(null,'Administrador','Del sistema',70031940,'soltero','Informático',70031940,30,1);


create table usuario(
	idu int not null primary key auto_increment,
	nicku varchar(60) not null unique,
	passu varchar(60) not null,
	responsable int not null,
	foreign key(responsable) references persona(idpe)
);

INSERT INTO usuario(idu, nicku, passu, responsable)
VALUES
(null,'admin','Admin123',1);

create table habitacion(
	numeroh int not null primary key auto_increment,
	tipoh varchar(50) not null,
	precioh int not null,
	estadoOcupado varchar(20) not null,
	estadoLimpieza varchar(20) not null
);

INSERT INTO `habitacion` (`numeroh`, `tipoh`, `precioh`, `estadoOcupado`, `estadoLimpieza`) 
VALUES 
('1', 'simple', '80', 'libre', 'limpia'),
('2', 'simple', '80', 'libre', 'limpia'),
('3', 'simple', '80', 'libre', 'limpia'),
('4', 'simple', '80', 'libre', 'limpia'),
('5', 'simple', '80', 'libre', 'limpia'),
('6', 'simple', '80', 'libre', 'limpia'),
('7', 'simple', '80', 'libre', 'limpia'),
('8', 'simple', '80', 'libre', 'limpia'),
('9', 'simple', '80', 'libre', 'limpia'),
('10', 'doble', '120', 'libre', 'limpia'),
('11', 'doble', '120', 'libre', 'limpia'),
('12', 'doble', '120', 'libre', 'limpia'),
('13', 'doble', '120', 'libre', 'limpia'),
('14', 'doble', '120', 'libre', 'limpia'),
('15', 'doble', '120', 'libre', 'limpia'),
('16', 'doble', '120', 'libre', 'limpia'),
('17', 'doble', '120', 'libre', 'limpia'),
('18', 'doble', '120', 'libre', 'limpia'),
('19', 'familiar', '120', 'libre', 'limpia'),
('20', 'familiar', '120', 'libre', 'limpia'),
('21', 'familiar', '120', 'libre', 'limpia'),
('22', 'familiar', '120', 'libre', 'limpia'),
('23', 'familiar', '120', 'libre', 'limpia'),
('24', 'familiar', '120', 'libre', 'limpia');

create table cliente(
	idc int not null primary key auto_increment,
	origen_cliente varchar(50) not null,
	datos int not null,
	foreign key(datos) references persona(idpe)
);

create table pagos(
	idpa int not null primary key auto_increment,
	acuenta int not null,
	pagado int not null,
	porpagar int not null,
	total int not null
);

create table solicitud(
	ids int not null primary key auto_increment,
	tipo varchar(30) not null,
	fechaIni date not null,
	fechaFin date not null,
	dias int not null,
	pieza int not null,
	paga int not null,
	cliente int not null,
	foreign key(pieza) references habitacion(numeroh),
	foreign key(paga) references pagos(idpa),
	foreign key(cliente) references cliente(idc)
);
