/*Para seleccionar todos los registros de estadias*/

SELECT s.ids,h.tipoh,s.tipo,s.fechaIni,s.fechaFin,s.dias,p.nombres,p.apellidos,pa.total
FROM
solicitud as s
INNER JOIN habitacion as h
ON
s.pieza=h.numeroh
INNER JOIN pagos as pa
ON
s.paga=pa.idpa
INNER JOIN cliente as c
ON
s.cliente=c.idc
INNER JOIN persona as p
ON
c.datos=p.idpe
INNER JOIN documento as d
ON
p.doc=d.idd
ORDER by h.numeroh ASC


/*Para seleccionar todos los clientes registrados en la base de datos*/
SELECT c.idc,p.nombres,p.apellidos,p.celular,p.referencias,d.numerod,d.extension
FROM
cliente as c
INNER JOIN persona p
ON
c.datos=p.idpe
INNER JOIN documento as d
ON
p.doc=d.idd


/*obtener los pagos y las fechas correpondietes*/
SELECT p.total,p.acuenta,p.pagado,p.porpagar,s.fechaIni,s.fechaFin
FROM
solicitud as s
INNER JOIN pagos as p
ON
s.paga=p.idpa


/*Obtener pagas por fecha*/
SELECT p.total,p.acuenta,p.pagado,p.porpagar,s.fechaIni,s.fechaFin
FROM
solicitud as s
INNER JOIN pagos as p
ON
s.paga=p.idpa
WHERE
s.fechaIni='2020-07-19' AND s.fechaFin='2020-07-20'

/*Obtener registros de clientes*/
SELECT p.idpe,p.nombres,p.apellidos,d.numerod,c.origen_cliente,p.celular,p.referencias,p.edad
FROM
cliente as c
INNER JOIN persona as p
ON
c.datos=p.idpe
INNER JOIN documento as d
ON
p.doc=d.idd

/*Obtener todos los pagos realizados por estadias*/
SELECT
 s.ids,s.fechaIni,s.fechaFin,p.acuenta,p.pagado,p.porpagar,p.total 
 FROM 
 solicitud as s 
 INNER JOIN pagos as p 
 WHERE s.paga=p.idpa 
 ORDER BY ids

/*Obtener los montos entre fechas*/
SELECT s.fechaIni,s.fechaFin,p.total
FROM 
solicitud as s
INNER JOIN pagos as p
WHERE
s.paga=p.idpa
AND
fechaIni
BETWEEN
'2020-07-22'
AND
'2020-07-22'
AND
fechaFin
BETWEEN
'2020-07-22'
AND
'2020-07-25'
ORDER BY fechaFin

/*Sumatoria de los datos recogidos*/
SELECT s.fechaIni,s.fechaFin,SUM(p.total) 
FROM solicitud as s INNER JOIN pagos as p 
WHERE s.paga=p.idpa 
AND 
fechaIni BETWEEN '2020-07-22' AND '2020-08-01' ORDER BY fechaFin


/*Editar pagos*/
UPDATE `pagos` SET `acuenta` = '400', `pagado` = '560', `porpagar` = '0' WHERE `pagos`.`idpa` = solicitud.paga
AND
solicitud.ids='1'


/*Obtener el ultimo registro de estadia para confirrmar y editar el pago*/
SELECT 
MAX(s.ids),d.numerod,p.nombres,p.apellidos,p.celular,s.dias,s.fechaIni,h.numeroh,h.tipoh,pa.total,pa.pagado,pa.acuenta,pa.porpagar 
FROM documento as d 
INNER JOIN persona as p 
ON p.doc=d.idd 
INNER JOIN cliente as c 
ON c.datos=p.idpe 
INNER JOIN solicitud as s 
ON s.cliente=c.idc 
INNER JOIN habitacion as h 
ON s.pieza=h.numeroh 
INNER JOIN pagos as pa 
ON s.paga=pa.idpa 
WHERE h.numeroh=1







