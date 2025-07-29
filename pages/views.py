from django.shortcuts import render
from django.http import HttpResponse
from django.utils import translation
from django.conf import settings

def home(request):
    return render(request, "home.html")

def about_partial(request):
    return render(request, "partials/about.html")


def switch_language(request):
    lang_code = request.GET.get("lang")
    if lang_code in dict(settings.LANGUAGES):
        response = HttpResponse(status=204)
        response.set_cookie(settings.LANGUAGE_COOKIE_NAME, lang_code)
        translation.activate(lang_code)
        return response
    return HttpResponse("Invalid language code", status=400)
