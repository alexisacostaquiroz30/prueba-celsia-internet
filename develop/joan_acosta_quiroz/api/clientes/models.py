from django.db import models

class Cliente(models.Model):
    TIPO_IDENTIFICACION_CHOICES = [
        ('CC', 'CEDULA'),
        ('TI', 'TARJETA IDENTIDAD'),
        ('CE', 'CEDULA EXTRANJERIA'),
        ('RC', 'REGISTRO CIVIL'),
    ]

    identificacion = models.CharField(max_length=20, primary_key=True)
    nombres = models.CharField(max_length=80)
    apellidos = models.CharField(max_length=80)
    tipoIdentificacion = models.CharField(max_length=2, choices=TIPO_IDENTIFICACION_CHOICES)
    fechaNacimiento = models.DateField()
    numeroCelular = models.CharField(max_length=20)
    correoElectronico = models.EmailField(max_length=80)

    def __str__(self):
        return self.nombres
