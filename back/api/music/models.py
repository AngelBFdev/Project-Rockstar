from django.db import models
  
# Create your models here.
class Author(models.Model):
  name = models.CharField(max_length=128)
  last_name = models.CharField(max_length=128, null=True)
  def __str__(self):
    return f'{self.name} {self.last_name}'
