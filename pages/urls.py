from django.urls import path
from .views import home, about_partial, switch_language

urlpatterns = [
    path('', home, name='home'),
    path('about-partial/', about_partial, name='about_partial'),
    path('switch-language/', switch_language, name='switch_language'),
]
