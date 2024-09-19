from django.urls import path, include
from rest_framework import routers
from clientes import views


router = routers.DefaultRouter()
router.register(r'clientes', views.ClienteViewSet,'clientes')

urlpatterns = [
    path('api/celsia/', include(router.urls))
]