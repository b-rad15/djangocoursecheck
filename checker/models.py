from django.db import models

# Create your models here.
class Course(models.Model):
    term = models.CharField
    course = models.CharField
    emails = models.EmailField