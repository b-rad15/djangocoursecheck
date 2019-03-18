from django.shortcuts import render

# Create your views here.

def index(request):
    recipients = ["me", "you", "him"]
    return render(request, "checker/index.html", {"recipients": recipients})

def run_script(request):
    return render(request, "text.html", {"text": "not implemented yet"})