from django.db import models

class Song(models.Model):
  name = models.CharField(max_length=128)
  song_length = models.CharField(max_length=128, null=True)
  song_file = models.CharField(max_length=128, null=True)
  song_preview = models.CharField(max_length=128, null=True)
  artists = models.CharField(max_length=128)
  album = models.CharField(max_length=128, null=True)

  def __str__(self):
    return f'{self.name}'
