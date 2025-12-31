from django.db import models

# Create your models here.

class extension(models.Model):
    name = models.CharField(max_length=30, unique=True) 
    description = models.TextField()
    active = 'a'
    nonactive = 'b'
    state_choices = [(active,'active'),(nonactive,'not active')]
    state = models.CharField(max_length=1, choices=state_choices)

