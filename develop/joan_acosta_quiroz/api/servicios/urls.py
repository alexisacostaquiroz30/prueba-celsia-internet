from django.urls import path, include
from rest_framework import routers
from Servicio import views


router = routers.DefaultRouter()
router.register(r'Servicio', views.ClienteViewSet,'Servicio')

urlpatterns = [
    path('api/celsia/', include(router.urls))
]