from rest_framework import serializers
from .models import Servicio

class ServicioSerializer(serializers.ModelSerializer):

    servicio = serializers.SerializerMethodField()
    nombre_cliente = serializers.CharField(source='identificacionCliente.nombres', read_only=True)
    apellidos_cliente = serializers.CharField(source='identificacionCliente.apellidos', read_only=True)

    class Meta:
        model = Servicio
        fields = '__all__'

    def get_servicio(self, obj):
        return obj.get_servicio_display()
