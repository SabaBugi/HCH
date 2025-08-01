from django.shortcuts import render
from django.http import HttpResponse
from django.utils import translation
from django.conf import settings

# Home view (renders full page)
def home(request):
    return render(request, "home.html")

# Language switch view
def switch_language(request):
    lang_code = request.GET.get("lang")
    if lang_code in dict(settings.LANGUAGES):
        response = HttpResponse(status=204)  # 204 = No Content
        response.set_cookie(settings.LANGUAGE_COOKIE_NAME, lang_code)
        translation.activate(lang_code)
        return response
    return HttpResponse("Invalid language code", status=400)
