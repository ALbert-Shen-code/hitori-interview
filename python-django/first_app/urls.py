from django.urls import path, include
from rest_framework import routers
from .views import PublisherViewSet

router = routers.DefaultRouter()
router.register(r'publisher', PublisherViewSet)

urlpatterns = [
    path('', include(router.urls))

]
