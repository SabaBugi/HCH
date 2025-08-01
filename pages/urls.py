from django.urls import path
from .views import home, switch_language

urlpatterns = [
    path('', home, name='home'),
    path('switch-language/', switch_language, name='switch_language'),
]
