from django.db import models
from clientes.models import Cliente  # Importa el modelo Cliente

class Servicio(models.Model):
    SERVICIO_CHOICES = [
        ('1', 'Internet 200 MB'),
        ('2', 'Internet 400 MB'),
        ('3', 'Internet 600 MB'),
        ('4', 'Directv Go'),
        ('5', 'Paramount+'),
        ('6', 'Win+'),
    ]

    identificacionCliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='servicios')
    servicio = models.CharField(max_length=80, choices=SERVICIO_CHOICES)
    fechaInicio = models.DateField()
    ultimaFacturacion = models.DateField()
    ultimoPago = models.IntegerField(default=0)

    class Meta:
        unique_together = ('identificacionCliente', 'servicio')

    def __str__(self):
        return self.servicio

    def get_servicio_display(self):
        return dict(self.SERVICIO_CHOICES).get(self.servicio, self.servicio)

